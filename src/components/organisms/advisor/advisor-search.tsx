"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type MouseEvent } from "react";
import { CircleAlert } from "lucide-react";
import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { advisorContent, type AdvisorContent } from "@/content/advisor/advisor-content";
import "./advisor-search.css";

/** One advisor as returned by investia.ca ObtenirConseillers (via /api/advisors). */
export type Advisor = {
  Id: number;
  Prenom: string;
  Nom: string;
  Telephone: string;
  Poste?: string | null;
  Cellulaire?: string | null;
  SiteWeb?: string | null;
  Adresse: string;
  Ville: string;
  CodePostal: string;
  Province: string;
  Distance: number;
  UrlEnvoyerCourriel: string;
};

export type AdvisorSearchProps = {
  /** Sent to the relay as lang=en|fr (investia.ca sc_lang). */
  lang?: "en" | "fr";
  hero?: AdvisorContent["hero"];
  search?: AdvisorContent["search"];
  portal?: AdvisorContent["portal"];
  /** Same-origin relay endpoint. */
  endpoint?: string;
};

// investia.ca blocRechercheConseiller.js: nombreConseillersParPage = 6.
const PAGE_SIZE = 6;
const INVESTIA_ORIGIN = "https://investia.ca";

type Status = "idle" | "results" | "empty";

const absolute = (url: string) =>
  /^https?:\/\//i.test(url) ? url : `${INVESTIA_ORIGIN}${url.startsWith("/") ? "" : "/"}${url}`;

// Handlebars helper ensureHttp from the source.
const ensureHttp = (url: string) =>
  url.startsWith("http://") || url.startsWith("https://") ? url : `http://${url}`;

// randomiseConseillersPourMemeDistance: keep distance order, shuffle ties.
function shuffleTies(list: Advisor[]): Advisor[] {
  const distances = [...new Set(list.map((a) => a.Distance))].sort((a, b) => a - b);
  return distances.flatMap((d) => {
    const group = list.filter((a) => a.Distance === d);
    for (let i = group.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [group[i], group[j]] = [group[j], group[i]];
    }
    return group;
  });
}

function Spinner() {
  return (
    <span className="adv-spinner" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <span key={i} style={{ transform: `rotate(${i * 30}deg)`, animationDelay: `${-1.1 + i * 0.1}s` }} />
      ))}
    </span>
  );
}

function AdvisorCard({
  advisor,
  labels,
  cardRef,
}: {
  advisor: Advisor;
  labels: AdvisorContent["search"]["card"];
  cardRef?: (el: HTMLDivElement | null) => void;
}) {
  const a = advisor;
  return (
    <div className="adv-card-cell">
      <div className="adv-card" data-cp={a.CodePostal} tabIndex={0} role="listitem" ref={cardRef}>
        <Heading as="h3" level={4} className="adv-card-name">
          {a.Prenom} {a.Nom}
        </Heading>
        <ul className="adv-card-details">
          <li>
            <a className="adv-text-link" href={absolute(a.UrlEnvoyerCourriel)} target="_self">
              {labels.sendMessage}
            </a>
          </li>
          <li>
            <p className="adv-card-label">{labels.phoneLabel}</p>
            <a
              className="adv-text-link"
              aria-label={`${labels.phoneLabel}: ${a.Telephone}`}
              href={`tel:${a.Telephone}`}
            >
              {a.Telephone}
            </a>
            {a.Poste && (
              <span>
                {labels.extensionPrefix}
                {a.Poste}
              </span>
            )}
          </li>
          {a.Cellulaire && (
            <li>
              <p className="adv-card-label">{labels.mobileLabel}</p>
              <a
                className="adv-text-link"
                aria-label={`${labels.mobileLabel}: ${a.Cellulaire}`}
                href={`tel:${a.Cellulaire}`}
              >
                {a.Cellulaire}
              </a>
            </li>
          )}
          <li>
            <p className="adv-card-address">
              {a.Adresse}
              <br />
              {a.Ville} ({a.Province}) {a.CodePostal}
            </p>
          </li>
          <li>
            <a
              className="adv-text-link"
              href={`https://www.google.ca/maps/search/?api=1&query=${encodeURIComponent(a.Adresse)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {labels.directions}
              <span className="adv-icon" aria-hidden="true">
                open_in_new
              </span>
            </a>
          </li>
          {a.SiteWeb && (
            <li className="adv-card-site">
              <a
                href={ensureHttp(a.SiteWeb)}
                target="_blank"
                rel="noopener noreferrer"
                className="adv-outlined-button"
              >
                {labels.visitWebsite}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

/**
 * @ployComponent
 * @ployComponentId advisor-search
 * @ployComponentType section
 * @ployComponentTags advisor-locator, search, form, bilingual, hero
 * @ployComponentDescription Find-an-advisor page hero band rebuilt from investia.ca: light-blue band with the fixed line-splash background, blue H1 and intro, then two white cards. "No advisor" card holds a working city/postal-code search that calls the same-origin relay (default /api/advisors?q=&lang=) and renders every source state: empty-input error with live re-validation, spinner in the disabled button while loading, "{n} results" count, advisor cards (send message, phone with optional extension, optional mobile, address, Google Maps directions link, optional "visit website" button) six at a time with a "see more" button, and a 100 km no-result warning with a contact link. Equal-distance results are shuffled like the source; a ?codePostal= URL parameter runs a search on load. "Already have an advisor" card has the client-services phone and the client-portal button. Below 1140px the portal card comes first; once a search runs on desktop the columns become 2/3 and 1/3 with the portal card sticky and centered. All copy comes from props (EN/FR dictionary in src/content/advisor/advisor-content.ts).
 * @ployComponentStatus stable
 */
export function AdvisorSearch({
  lang = "en",
  hero = advisorContent.en.hero,
  search = advisorContent.en.search,
  portal = advisorContent.en.portal,
  endpoint = "/api/advisors",
}: AdvisorSearchProps) {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [advisors, setAdvisors] = useState<Advisor[]>([]);
  const [shown, setShown] = useState(0);
  const loadingRef = useRef(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const focusIndex = useRef<number | null>(null);

  const showError = submitted && value.trim() === "";

  async function runSearch(query: string) {
    if (loadingRef.current) return;
    loadingRef.current = true;
    setLoading(true);
    let list: Advisor[] = [];
    try {
      const url = `${endpoint}?q=${encodeURIComponent(query)}&lang=${lang}`;
      const response = await fetch(url, { headers: { Accept: "application/json" } });
      if (response.ok) {
        const data: unknown = await response.json();
        if (Array.isArray(data)) list = shuffleTies(data as Advisor[]);
      }
    } catch {
      list = [];
    } finally {
      loadingRef.current = false;
      setLoading(false);
      setActive(true);
      setAdvisors(list);
      setShown(Math.min(PAGE_SIZE, list.length));
      setStatus(list.length ? "results" : "empty");
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    const query = value.trim();
    if (!query) return;
    void runSearch(query.toUpperCase().replace(/\s/g, ""));
  }

  function onMore(event: MouseEvent<HTMLButtonElement>) {
    // Source focuses the first new card for keyboard users only.
    if (event.detail === 0) focusIndex.current = shown;
    setShown((n) => Math.min(n + PAGE_SIZE, advisors.length));
  }

  useEffect(() => {
    if (focusIndex.current !== null) {
      cardRefs.current[focusIndex.current]?.focus();
      focusIndex.current = null;
    }
  }, [shown]);

  // initResultat: a ?codePostal= parameter fills the field and searches.
  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get("codePostal");
    if (preset) {
      setValue(preset);
      void runSearch(preset.toUpperCase().replace(/\s/g, ""));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section
      space="flush"
      data-ploy-component="advisor-search"
      className={`adv-search${active ? " adv-search-active" : ""}`}
    >
      <Container>
        <div className="adv-intro">
          <Heading as="h1" level={1} className="adv-title">
            {hero.title}
          </Heading>
          <Text className="adv-intro-text">{hero.intro}</Text>
        </div>

        <div className="adv-columns">
          <div className="adv-column adv-column-search">
            <div className="adv-box">
              <div className="adv-box-content">
                {!active && (
                  <div>
                    <Heading as="h2" level={4} className="adv-box-heading">
                      {search.heading}
                    </Heading>
                    <Text className="adv-box-text">{search.body}</Text>
                  </div>
                )}
                {active && (
                  <Heading as="h2" level={4} className="adv-box-heading adv-results-heading">
                    {search.resultsHeading}
                  </Heading>
                )}
                <form className="adv-form" onSubmit={onSubmit} noValidate data-utag-fname="form_find-advisor">
                  <label className="adv-label" htmlFor={inputId}>
                    {search.label}
                  </label>
                  <div className="adv-input-group">
                    <input
                      id={inputId}
                      name="CodePostalVille"
                      type="text"
                      autoComplete="off"
                      className={`adv-input${showError ? " adv-input-error" : ""}`}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      aria-invalid={showError || undefined}
                      aria-describedby={showError ? errorId : undefined}
                    />
                    <button type="submit" className="adv-search-button" disabled={loading} aria-busy={loading || undefined}>
                      {loading ? (
                        <>
                          <Spinner />
                          <span className="sr-only">{search.button}</span>
                        </>
                      ) : (
                        search.button
                      )}
                    </button>
                    {showError && (
                      <span id={errorId} className="adv-error" role="alert">
                        <CircleAlert aria-hidden="true" size={16} strokeWidth={2.25} />
                        {search.emptyError}
                      </span>
                    )}
                  </div>
                </form>
              </div>

              {active && (
                <div className="adv-results" aria-live="polite">
                  {status === "empty" && (
                    <div className="adv-warning">
                      <p>
                        {search.noResult.before}
                        <a className="adv-text-link adv-inline-link" href={search.noResult.linkHref}>
                          {search.noResult.linkLabel}
                        </a>
                        {search.noResult.after}
                      </p>
                    </div>
                  )}
                  {status === "results" && (
                    <div>
                      <p className="adv-count">
                        {search.resultsCount.replace("{0}", String(advisors.length))}
                      </p>
                      <div className="adv-list" role="list">
                        {advisors.slice(0, shown).map((advisor, index) => (
                          <AdvisorCard
                            key={`${advisor.Id}-${index}`}
                            advisor={advisor}
                            labels={search.card}
                            cardRef={(el) => {
                              cardRefs.current[index] = el;
                            }}
                          />
                        ))}
                      </div>
                      <hr className="adv-rule" />
                      {shown < advisors.length && (
                        <div>
                          <button type="button" className="adv-text-link adv-more" onClick={onMore}>
                            {search.moreLabel}
                            <span className="adv-icon" aria-hidden="true">
                              add
                            </span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="adv-column adv-column-portal">
            <div className="adv-box adv-portal">
              <Heading as="h2" level={4} className="adv-box-heading">
                {portal.heading}
              </Heading>
              <Text className="adv-box-text">
                {portal.bodyBefore}
                <a className="adv-text-link adv-inline-link adv-nowrap" href={portal.phoneHref}>
                  {portal.phoneLabel}
                </a>
                {portal.bodyAfter}
              </Text>
              <a
                className="adv-outlined-button"
                href={portal.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={portal.cta.ariaLabel}
              >
                {portal.cta.label}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
