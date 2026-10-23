// The components and content reference public files by root path (/images,
// /fonts, /mock), as the Astro site serves them. On GitHub Pages this
// Storybook lives under /poly-storybook-demp/, so rewrite those paths to the
// deployed base at runtime. CSS url()s are already made relative by Vite; this
// covers paths written in JS (img src/srcset, inline styles, fetch).
// On a root deployment (local dev, `storybook dev`) it does nothing.

const PREFIXES = ["/images/", "/fonts/", "/mock/", "/favicon.ico"];

export function installSubpathAssets() {
  const base = new URL(".", window.location.href).pathname;
  if (base === "/") return;

  const fix = (value: string) =>
    PREFIXES.some((prefix) => value.startsWith(prefix))
      ? base + value.slice(1)
      : value;

  const fixSrcset = (value: string) =>
    value
      .split(",")
      .map((part) => {
        const [url, ...rest] = part.trim().split(/\s+/);
        return [fix(url), ...rest].join(" ");
      })
      .join(", ");

  const fixStyle = (value: string) =>
    value.replace(/url\((["']?)(\/[^)"']+)\1\)/g, (match, quote, url) =>
      fix(url) === url ? match : `url(${quote}${fix(url)}${quote})`,
    );

  const fixElement = (el: Element) => {
    for (const attr of ["src", "poster", "href"] as const) {
      const value = el.getAttribute(attr);
      if (value && fix(value) !== value && !(attr === "href" && el.tagName === "A")) {
        el.setAttribute(attr, fix(value));
      }
    }
    for (const attr of ["srcset", "imagesrcset"]) {
      const value = el.getAttribute(attr);
      if (value && fixSrcset(value) !== value) el.setAttribute(attr, fixSrcset(value));
    }
    const style = el.getAttribute("style");
    if (style && style.includes("url(") && fixStyle(style) !== style) {
      el.setAttribute("style", fixStyle(style));
    }
  };

  const fixTree = (node: Node) => {
    if (!(node instanceof Element)) return;
    fixElement(node);
    node.querySelectorAll("[src],[srcset],[poster],[style],link[href]").forEach(fixElement);
  };

  // Rewrite synchronously where React writes, so a layout read in an effect
  // cannot start a fetch of the unfixed URL before the observer below runs.
  const nativeSetAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (name: string, value: string) {
    const lower = name.toLowerCase();
    let next = value;
    if (lower === "src" || lower === "poster") next = fix(value);
    else if (lower === "srcset" || lower === "imagesrcset") next = fixSrcset(value);
    else if (lower === "style") next = fixStyle(value);
    nativeSetAttribute.call(this, name, next);
  };
  const nativeSetProperty = CSSStyleDeclaration.prototype.setProperty;
  CSSStyleDeclaration.prototype.setProperty = function (
    property: string,
    value: string | null,
    priority?: string,
  ) {
    const next = value && value.includes("url(") ? fixStyle(value) : value;
    nativeSetProperty.call(this, property, next, priority);
  };

  // Fallback for markup that arrives another way (innerHTML, cloned slides).
  new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === "attributes") fixElement(record.target as Element);
      else record.addedNodes.forEach(fixTree);
    }
  }).observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["src", "srcset", "poster", "style", "href"],
  });
  fixTree(document.documentElement);

  const nativeFetch = window.fetch.bind(window);
  window.fetch = (input, init) =>
    nativeFetch(typeof input === "string" ? fix(input) : input, init);
}
