import { Button } from "@/components/atoms/button";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Logo, logoPresentation } from "@/components/atoms/logo";

export function HomePage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="grid min-h-dvh place-items-center p-6 text-ploy-text-primary"
    >
      <div className="flex w-full max-w-xl flex-col items-center gap-10">
        <div
          className="flex w-[220px] max-w-full justify-center sm:w-[360px]"
          style={
            logoPresentation.adaptive || logoPresentation.kind === "text"
              ? undefined
              : { backgroundColor: logoPresentation.background }
          }
        >
          {logoPresentation.kind === "text" ? (
            <Heading
              level={1}
              className="w-full min-w-0 text-center leading-none"
            >
              <Logo width={360} height={120} />
            </Heading>
          ) : (
            <Logo width={360} height={120} className="max-w-full" />
          )}
        </div>
        {import.meta.env.DEV ? (
          // On the page surface: a fixed logo background can be any color.
          <div className="flex flex-col items-center gap-2 rounded-2xl bg-ploy-background-primary p-6 text-center text-ploy-text-primary">
            <Heading level={4} as="h4" className="mb-4">
              Home page placeholder
            </Heading>
            <Text className="text-ploy-text-secondary">
              To navigate site, click &quot;Pages&quot; above
            </Text>
            <Text className="text-ploy-text-secondary">
              To rebuild your home page, ask Ploy
            </Text>
            <Button className="mt-8" href="/private/design-system">
              View design system
            </Button>
          </div>
        ) : null}
      </div>
    </main>
  );
}
