/**
 * @ployComponent
 * @ployComponentId body-1-hero-pin
 * @ployComponentType component
 * @ployComponentDescription White map-pin badge with a navy building glyph, from the Investia hero's first slide. Decorative (aria-hidden); size it with CSS on the className.
 * @ployComponentTags hero, decoration, pin
 * @ployComponentStatus stable
 */
export function Body1HeroPin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 134 163"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#FFF"
        d="M134 66.998C134 29.995 104.002 0 67 0 29.998 0 0 29.995 0 66.998c0 22.166 10.77 41.807 27.356 54.003h-.058c19.386 14 32.62 28 39.702 41.999 7.082-14 20.316-28 39.702-41.999h-.058C123.23 108.805 134 89.164 134 66.998"
      />
      <path
        fill="#01233f"
        fillRule="nonzero"
        d="M66 54.22V44H40v45.999h52V54.22H66ZM50.4 84.888h-5.2v-5.111h5.2v5.11Zm0-10.222h-5.2v-5.111h5.2v5.11Zm0-10.222h-5.2v-5.111h5.2v5.11Zm0-10.222h-5.2V49.11h5.2v5.11Zm10.4 30.666h-5.2v-5.111h5.2v5.11Zm0-10.222h-5.2v-5.111h5.2v5.11Zm0-10.222h-5.2v-5.111h5.2v5.11Zm0-10.222h-5.2V49.11h5.2v5.11Zm26 30.666H66v-5.111h5.2v-5.111H66v-5.111h5.2v-5.111H66v-5.111h20.8v25.555Zm-5.2-20.444h-5.2v5.11h5.2v-5.11Zm0 10.222h-5.2v5.11h5.2v-5.11Z"
      />
    </svg>
  );
}
