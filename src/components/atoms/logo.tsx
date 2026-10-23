import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

type LogoSize = { width?: number; height?: number };

function logoSize({ width, height }: LogoSize) {
  const ratio = 228 / 42;
  // Both given: fit inside the box. The SVG root would otherwise take the box
  // and letterbox its drawing, while a raster shrinks to fit — same call,
  // two shapes.
  if (width && height) {
    const scale = Math.min(width / 228, height / 42);
    return { width: 228 * scale, height: 42 * scale };
  }
  const w = width ?? (height ? height * ratio : 228);
  return { width: w, height: height ?? w / ratio };
}

type LogoProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & LogoSize;

/**
 * @ployComponent
 * @ployComponentId logo
 * @ployComponentType component
 * @ployComponentTags brand, identity, measured
 * @ployComponentDescription The selected brand identity, rendered at its measured proportions.
 * @ployComponentStatus stable
 */
export function Logo({ className = "", width, height, ...props }: LogoProps) {
  const size = logoSize({ width, height });
  return (
    <svg
      {...props}
      width={size.width}
      height={size.height}
      data-ploy-component="logo"
      className={cn("h-auto max-w-full", className)}
      id="Calque_1"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 473.6 87.9"
      aria-label="Investia"
      role="img"
      fill="rgb(0, 0, 0)"
      stopColor="rgb(0, 0, 0)"
      floodColor="rgb(0, 0, 0)"
      style={{ color: "rgb(0, 0, 238)" }}
    >
      <title
        xmlns
        fill="rgb(0, 0, 0)"
        stopColor="rgb(0, 0, 0)"
        floodColor="rgb(0, 0, 0)"
      >
        Investia_ANG-H-RGB_WEB
      </title>
      {}
      <defs
        fill="rgb(0, 0, 0)"
        stopColor="rgb(0, 0, 0)"
        floodColor="rgb(0, 0, 0)"
      ></defs>
      <g fill="rgb(0, 0, 0)" stopColor="rgb(0, 0, 0)" floodColor="rgb(0, 0, 0)">
        <polygon
          points="9.2 26.8 26.8 26.8 17.6 87.8 0 87.8 9.2 26.8"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M9.6,10.8C9.6,4.8,14.5,0,20.4,0s10.8,4.8,10.8,10.8-4.8,10.8-10.8,10.8c-5.9-.1-10.8-4.9-10.8-10.8Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M91,87.8h18.1L86.4,5.4h-16L23,87.8h18.2l12.5-21.8h31.3l6,21.8ZM62.8,50.4l12.1-21.1,5.8,21.1h-17.9Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M214.4,0c8.9,0,16.2,7.2,16.2,16.2s-.1,2.1-.3,3.1l-7.3,49.1v.5c0,1.5,1.2,2.7,2.7,2.7h2.7v10.8h-7.6c-5.9,0-10.8-4.8-10.8-10.8v-28.7h-13.8c-.6,0-1.2,0-1.8,0-7.5-.8-13.6-6.8-14.5-14.3-.2-1.8-.2-3.5.1-5.1l3.4-23.4h31Z"
          fill="rgb(140, 140, 135)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M177.1,5.4h-22.9c-16.2,0-29.6,12.5-31.5,28.6l-8.1,53.8h13.9l6-21.8h45v21.8h13.3l6-39.4h-2.5c-.8,0-1.6,0-2.5,0-10-1.1-18.1-9-19.4-19-.3-2.1-.2-4.1.1-6.1l2.6-17.8"
          fill="rgb(140, 140, 135)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <polygon
          points="133.9 87.8 147.8 87.8 154.6 71.5 138.5 71.5 133.9 87.8"
          fill="rgb(140, 140, 135)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
      </g>
      <g fill="rgb(0, 0, 0)" stopColor="rgb(0, 0, 0)" floodColor="rgb(0, 0, 0)">
        <path
          d="M244,33.2h6v27.3h-6v-27.3Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M255.4,39.6h5.9v3c1.4-1.8,3.1-3.4,6.1-3.4,4.5,0,7.1,3,7.1,7.8v13.5h-5.9v-11.7c0-2.8-1.3-4.2-3.6-4.2s-3.7,1.4-3.7,4.2v11.7h-5.9v-20.9Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M276.2,39.6h6.3l4.7,14,4.7-14h6.2l-8.2,21h-5.4l-8.3-21Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M298.5,50.2h0c0-6,4.2-11,10.3-11s10.2,5.4,10.2,11.3,0,1-.1,1.6h-14.5c.6,2.7,2.5,4.1,5.1,4.1s3.4-.6,5.1-2.1l3.4,3c-1.9,2.4-4.8,3.9-8.5,3.9-6.4,0-11-4.4-11-10.8ZM313.2,48.4c-.4-2.7-1.9-4.4-4.4-4.4s-4.1,1.8-4.5,4.4h8.9Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M320.9,57.7l2.5-3.9c2.3,1.6,4.6,2.5,6.6,2.5s2.5-.6,2.5-1.6h0c0-1.4-2-1.8-4.3-2.5-2.9-.9-6.2-2.2-6.2-6.3h0c0-4.3,3.4-6.7,7.6-6.7s5.5.9,7.8,2.4l-2.3,4.1c-2.1-1.2-4.1-1.9-5.7-1.9s-2.2.6-2.2,1.4h0c0,1.3,2,1.8,4.2,2.6,2.9,1,6.3,2.4,6.3,6.2h0c0,4.7-3.5,6.8-8,6.8-2.7,0-6-.9-8.8-3.1Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M341.9,54.6v-9.9h-2.5v-5.1h2.5v-5.3h5.9v5.3h4.9v5.1h-4.9v8.9c0,1.4.6,2,1.9,2s2.1-.3,2.9-.7v4.8c-1.2.7-2.7,1.2-4.7,1.2-3.6,0-6-1.5-6-6.3Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M356.5,39.6h5.9v20.9h-5.9v-20.9Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M359.5,30.6c1.9,0,3.4,1.5,3.4,3.4s-1.5,3.3-3.4,3.3-3.4-1.5-3.4-3.3,1.5-3.4,3.4-3.4Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M366,50.1h0c0-7.1,4.6-10.9,9.5-10.9s5.1,1.4,6.5,3.1v-2.7h5.9v20.9h-5.9v-3c-1.4,1.9-3.4,3.4-6.5,3.4-4.8,0-9.5-3.8-9.5-10.8ZM382.1,50.1h0c0-3.5-2.3-5.8-5.1-5.8s-5,2.2-5,5.7h0c0,3.6,2.3,5.9,5.1,5.9s5-2.3,5-5.8Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
      </g>
      <g fill="rgb(0, 0, 0)" stopColor="rgb(0, 0, 0)" floodColor="rgb(0, 0, 0)">
        <path
          d="M244,72.1h11.1v1.6h-9.4v5.5h8.4v1.6h-8.4v6.8h-1.7v-15.5Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M257.8,71.8h1.9v1.9h-1.9v-1.9ZM257.9,76.1h1.7v11.5h-1.7v-11.5Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M263.2,76.1h1.7v2c.8-1.2,2-2.2,3.9-2.2,2.8,0,4.4,1.9,4.4,4.6v7.1h-1.7v-6.7c0-2.1-1.2-3.5-3.2-3.5s-3.4,1.4-3.4,3.6v6.6h-1.7v-11.5h0Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M275.7,81.9h0c0-3.8,2.7-6,5.5-6s3.5,1.2,4.4,2.4v-2.2h1.7v11.5h-1.7v-2.3c-.9,1.4-2.3,2.5-4.4,2.5s-5.5-2.1-5.5-5.9ZM285.6,81.9h0c0-2.7-2-4.5-4.1-4.5s-4,1.6-4,4.4h0c0,2.7,1.9,4.4,4,4.4,2.1,0,4.1-1.7,4.1-4.3Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M290.6,76.1h1.7v2c.8-1.2,1.9-2.2,3.9-2.2s4.4,1.9,4.4,4.6v7.1h-1.7v-6.7c0-2.1-1.2-3.5-3.2-3.5s-3.4,1.4-3.4,3.6v6.6h-1.7v-11.5h0Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M303,81.9h0c0-3.3,2.5-6,5.9-6s3.5.9,4.6,2l-1.1,1.2c-.9-1-1.9-1.7-3.5-1.7-2.3,0-4.1,2-4.1,4.4h0c0,2.5,1.8,4.5,4.2,4.5s2.6-.7,3.5-1.7l1.1,1c-1.2,1.3-2.5,2.2-4.7,2.2-3.3,0-5.9-2.7-5.9-5.9Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M316,71.8h1.9v1.9h-1.9v-1.9ZM316.1,76.1h1.7v11.5h-1.7v-11.5Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M320.6,81.9h0c0-3.8,2.7-6,5.5-6s3.5,1.2,4.4,2.4v-2.2h1.7v11.5h-1.7v-2.3c-.9,1.4-2.3,2.5-4.4,2.5s-5.5-2.1-5.5-5.9ZM330.5,81.9h0c0-2.7-2-4.5-4.1-4.5s-4,1.6-4,4.4h0c0,2.7,1.9,4.4,4,4.4,2.1,0,4.1-1.7,4.1-4.3Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M335.7,71.4h1.7v16.2h-1.7v-16.2Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M346.3,85.3l1.1-1.3c1.6,1.5,3.2,2.2,5.3,2.2s3.5-1.1,3.5-2.6h0c0-1.4-.8-2.3-4-2.9-3.6-.8-5.2-1.9-5.2-4.5h0c0-2.4,2.1-4.2,5.1-4.2s3.9.6,5.4,1.9l-1,1.3c-1.4-1.2-2.9-1.7-4.5-1.7s-3.3,1.1-3.3,2.5h0c0,1.5.8,2.3,4.2,3,3.5.8,5,2,5,4.4h0c0,2.7-2.2,4.4-5.3,4.4-2.4,0-4.4-.8-6.3-2.5Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M360.1,81.9h0c0-3.3,2.3-6,5.5-6s5.3,2.7,5.3,6v.6h-9.1c.2,2.5,2,3.9,4,3.9s2.7-.6,3.6-1.6l1.1,1c-1.2,1.3-2.5,2.1-4.7,2.1-3.2,0-5.7-2.4-5.7-6ZM369.2,81.2c-.2-2.1-1.4-3.9-3.7-3.9s-3.5,1.7-3.7,3.9h7.4Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M373.4,76.1h1.7v3c.8-1.9,2.5-3.3,4.7-3.2v1.8h-.1c-2.5,0-4.5,1.8-4.5,5.3v4.6h-1.7v-11.5h-.1Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M381.5,76.1h1.9l3.9,9.5,3.9-9.5h1.8l-5,11.5h-1.5l-5-11.5Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M394.6,71.8h1.9v1.9h-1.9v-1.9ZM394.7,76.1h1.7v11.5h-1.7v-11.5Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M398.5,81.9h0c0-3.3,2.5-6,5.9-6s3.5.9,4.6,2l-1.1,1.2c-.9-1-1.9-1.7-3.5-1.7-2.3,0-4.1,2-4.1,4.4h0c0,2.5,1.8,4.5,4.2,4.5s2.6-.7,3.5-1.7l1.1,1c-1.2,1.3-2.5,2.2-4.7,2.2-3.4,0-5.9-2.7-5.9-5.9Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M410.4,81.9h0c0-3.3,2.3-6,5.5-6s5.3,2.7,5.3,6v.6h-9.1c.2,2.5,2,3.9,4,3.9s2.7-.6,3.6-1.6l1.1,1c-1.2,1.3-2.5,2.1-4.7,2.1-3.2,0-5.7-2.4-5.7-6ZM419.5,81.2c-.2-2.1-1.4-3.9-3.7-3.9s-3.5,1.7-3.7,3.9h7.4Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M422.8,86.1l.9-1.2c1.2.9,2.6,1.5,4,1.5s2.4-.7,2.4-1.8h0c0-1.2-1.4-1.6-2.9-2-1.8-.5-3.8-1.1-3.8-3.2h0c0-2,1.6-3.3,3.9-3.3s2.9.5,4.1,1.3l-.8,1.3c-1.1-.7-2.3-1.1-3.4-1.1s-2.2.7-2.2,1.7h0c0,1.1,1.4,1.5,2.9,2,1.8.5,3.7,1.2,3.7,3.3h0c0,2.2-1.8,3.4-4.1,3.4-1.6-.2-3.4-.8-4.7-1.9Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M440.9,72.1h1.8v15.5h-1.8v-15.5Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M446.4,76.1h1.7v2c.8-1.2,2-2.2,3.9-2.2,2.8,0,4.4,1.9,4.4,4.6v7.1h-1.7v-6.7c0-2.1-1.2-3.5-3.2-3.5s-3.4,1.4-3.4,3.6v6.6h-1.7v-11.5h0Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M458.9,81.9h0c0-3.3,2.5-6,5.9-6s3.5.9,4.6,2l-1.1,1.2c-.9-1-1.9-1.7-3.5-1.7-2.3,0-4.1,2-4.1,4.4h0c0,2.5,1.8,4.5,4.2,4.5s2.6-.7,3.5-1.7l1.1,1c-1.2,1.3-2.5,2.2-4.7,2.2-3.4,0-5.9-2.7-5.9-5.9Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
        <path
          d="M471.6,85.3h2v2.3h-2v-2.3Z"
          fill="rgb(6, 77, 217)"
          stopColor="rgb(0, 0, 0)"
          floodColor="rgb(0, 0, 0)"
        />
      </g>

    </svg>
  );
}

export const logoPresentation: {
  kind: "svg" | "img" | "text";
  adaptive: boolean;
  background: string;
} = { kind: "svg", adaptive: false, background: "#ffffff" };
