import "react";

// logo.tsx is a verbatim SVG export whose <title> carries a bare `xmlns`
// attribute and SVG paint attributes (fill, stopColor, floodColor) that
// React's HTML typings do not declare. Allow them so the copied component
// compiles unchanged. (T must match React's own declaration to merge.)
declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    xmlns?: boolean | string;
    fill?: string;
    stopColor?: string;
    floodColor?: string;
  }
}
