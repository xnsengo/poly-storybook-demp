/** Auto-generated from measured source SVGs and bundled social fallbacks. Do not edit. */
/* Social fallback SVGs: MIT License

Copyright (c) 2020 Phosphor Icons

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

function icon(
  svg: string,
  width: number,
  height: number,
  paint: CSSProperties = {},
) {
  return function Icon({ className, style, children }: IconProps) {
    return (
      <span
        className={cn(
          "flex w-[min(var(--icon-width),100%)] h-[var(--icon-height)]",
          className,
        )}
        style={
          {
            "--icon-width": `${width}px`,
            "--icon-height": `${height}px`,
            ...paint,
            ...style,
          } as CSSProperties
        }
        {...(svg ? { dangerouslySetInnerHTML: { __html: svg } } : { children })}
      />
    );
  };
}

export const ICONS = {
  i1: icon(
    '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 697 312;color:rgb(27, 27, 27)" viewBox="0 0 697 312" fill="rgb(0, 0, 0)"><path fill="none" fill-rule="evenodd" stroke="#003DA5" stroke-linecap="round" stroke-width="10" d="m5 307 178.759-145.101c18.419-14.951 45.187-13.443 61.81 3.483l82.655 84.162c16.694 16.999 43.605 18.437 62.016 3.315L692 5h0" style="stroke-dasharray: 874.8004150390625; stroke-dashoffset: 874.8004150390625"></path></svg>',
    344,
    151,
  ),
  i3: icon(
    '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 127 168.5;color:rgb(27, 27, 27)" viewBox="0 0 127 168.5" fill="rgb(0, 0, 0)"><path fill="none" stroke="#003DA5" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5" d="M123.8,165L124,4 M4,165L4,57 M83.5,165l0-143.5 M43.2,165l0-58.8" style="stroke-dasharray: 471.30010986328125; stroke-dashoffset: 471.30010986328125"></path></svg>',
    124,
    194,
  ),
  i4: icon(
    '<svg width="100%" height="100%" xml:space="preserve" style="enable-background:new 0 0 190 190;color:rgb(27, 27, 27)" viewBox="0 0 190 190" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" fill="rgb(0, 0, 0)">\n<path fill="none" fill-rule="evenodd" stroke="#003DA5" stroke-linecap="round" stroke-width="5" d="M 92,123.6 125.9,94.5 92.5,65.9 M 5.8,64 C 18.6,28.4 52.6,3 92.5,3 c 50.8,0 92,41.2 92,92 0,50.8 -41.2,92 -92,92 C 52.2,187 18,161.1 5.5,125 M 29.1,94.5 h 96.8" style="stroke-dasharray: 701.428955078125; stroke-dashoffset: 701.428955078125"></path>\n</svg>',
    185,
    185,
  ),
  i5: icon(
    '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1140 410" style="color:rgb(27, 27, 27)" fill="rgb(0, 0, 0)"><defs fill="rgb(0, 0, 0)"><style fill="rgb(0, 0, 0)">.cls-2{mix-blend-mode:multiply}</style></defs><g style="isolation:isolate" fill="rgb(0, 0, 0)"><g fill="rgb(0, 0, 0)"><path d="m24.15 409.86 20.17-10.48a48.39 48.39 0 0 1 12.58-4.47l332.91-68.63a48.51 48.51 0 0 0 21.61-10.53L597.93 157.4a48.47 48.47 0 0 1 18.15-9.68L1139.72-1l.28 411Z" style="fill-rule:evenodd;fill:#73C4EF" transform="translate(.06 1.02)" fill="rgb(115, 196, 239)"></path></g><g fill="rgb(0, 0, 0)"><path d="m271.78 288.34 84.36-58.27a50 50 0 0 1 28.41-8.85h42.87a50 50 0 0 0 34.76-14.06l32.76-31.68v235h-495l263.79-117.62a49.68 49.68 0 0 0 8.05-4.52Z" style="fill:#064DD9;fill-rule:evenodd" transform="translate(.06 1.02)" fill="rgb(6, 77, 217)"></path></g></g></svg>',
    1140,
    410,
  ),
  i6: icon(
    '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 134 163" style="color:rgb(27, 27, 27)" fill="rgb(0, 0, 0)"><defs fill="rgb(0, 0, 0)"><path id="a" d="M0 0h134v163H0z" fill="rgb(0, 0, 0)"></path></defs><g fill="none" fill-rule="evenodd"><g><mask id="b" fill="#fff"><path d="M0 0h134v163H0z" fill="rgb(255, 255, 255)"></path></mask><path fill="#FFF" d="M134 66.998C134 29.995 104.002 0 67 0 29.998 0 0 29.995 0 66.998c0 22.166 10.77 41.807 27.356 54.003h-.058c19.386 14 32.62 28 39.702 41.999 7.082-14 20.316-28 39.702-41.999h-.058C123.23 108.805 134 89.164 134 66.998" mask="url(#b)"></path></g><path fill="#01233F" fill-rule="nonzero" d="M32 97.998v-5.334c2.1-.118 4.14-.563 6.12-1.333 1.98-.77 3.93-1.867 5.85-3.289 1.86 1.422 3.825 2.534 5.895 3.334 2.07.8 4.125 1.2 6.165 1.2 1.92 0 3.975-.4 6.165-1.2 2.19-.8 4.155-1.912 5.895-3.334 1.98 1.6 3.975 2.756 5.985 3.467 2.01.711 4.035 1.067 6.075 1.067 1.98 0 3.93-.386 5.85-1.156 1.92-.77 3.99-1.926 6.21-3.467 2.1 1.541 4.155 2.682 6.165 3.423 2.01.74 3.885 1.17 5.625 1.288v5.334c-1.8-.119-3.78-.474-5.94-1.067-2.16-.593-4.11-1.393-5.85-2.4-2.04 1.185-4.08 2.06-6.12 2.622-2.04.563-4.02.845-5.94.845-1.92 0-3.9-.282-5.94-.845-2.04-.563-4.08-1.437-6.12-2.622a21.343 21.343 0 0 1-5.895 2.622c-2.07.563-4.125.845-6.165.845-1.98 0-3.99-.282-6.03-.845s-4.05-1.437-6.03-2.622c-1.74 1.007-3.705 1.807-5.895 2.4-2.19.593-4.215.948-6.075 1.067Zm0-16.889v-6.222c0-5.63 1.155-10.918 3.465-15.866 2.31-4.948 5.43-9.274 9.36-12.978 3.93-3.703 8.52-6.637 13.77-8.8C63.845 35.082 69.38 34 75.2 34c1.68 0 3.375.074 5.085.222 1.71.149 3.255.37 4.635.667a22.746 22.746 0 0 0-2.565 5.733c-.57 1.985-.855 3.837-.855 5.556 0 3.496 1.26 6.637 3.78 9.422 2.52 2.785 5.55 4.177 9.09 4.177H104v5.334h-9.63c-5.1 0-9.42-1.897-12.96-5.69-3.54-3.792-5.31-8.206-5.31-13.243 0-.83.105-1.808.315-2.934.21-1.126.465-2.34.765-3.644-5.1 1.185-9.255 3.793-12.465 7.822-3.21 4.03-4.815 8.444-4.815 13.244 0 2.252.405 4.445 1.215 6.578s1.965 4.207 3.465 6.222c.6-.415 1.185-.8 1.755-1.156.57-.355 1.125-.74 1.665-1.155a20.744 20.744 0 0 0 6.075 3.378c2.19.77 4.215 1.155 6.075 1.155 1.8 0 3.795-.4 5.985-1.2a22.86 22.86 0 0 0 6.075-3.333 25.322 25.322 0 0 0 5.67 3.2c2.04.83 4.08 1.303 6.12 1.422v5.333c-1.8-.118-3.78-.474-5.94-1.067-2.16-.592-4.11-1.392-5.85-2.4-2.04 1.186-4.035 2.06-5.985 2.623-1.95.563-3.975.844-6.075.844s-4.23-.326-6.39-.978c-2.16-.651-4.05-1.481-5.67-2.488-1.92 1.185-3.9 2.044-5.94 2.577-2.04.534-4.08.83-6.12.89-1.92 0-3.945-.312-6.075-.934a27.458 27.458 0 0 1-5.985-2.533c-1.74 1.007-3.705 1.807-5.895 2.4-2.19.592-4.215.948-6.075 1.066Zm23.85-5.422c.36 0 .84-.03 1.44-.089.6-.06 1.23-.118 1.89-.178-1.5-2.43-2.655-4.874-3.465-7.333-.81-2.459-1.215-4.933-1.215-7.422 0-4.622 1.23-9.037 3.69-13.244C60.65 43.214 63.92 40.073 68 38v2.044c-4.8 1.008-9.045 2.608-12.735 4.8-3.69 2.193-6.81 4.8-9.36 7.822a34.492 34.492 0 0 0-5.94 10.133c-1.41 3.734-2.265 7.704-2.565 11.911 1.38-.77 2.61-1.407 3.69-1.91a15.058 15.058 0 0 0 2.88-1.734c2.16 1.54 4.155 2.696 5.985 3.467 1.83.77 3.795 1.155 5.895 1.155Z"></path></g></svg>',
    67,
    81,
  ),
  i7: icon(
    '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 134 163" style="color:rgb(27, 27, 27)" fill="rgb(0, 0, 0)"><defs fill="rgb(0, 0, 0)"><path id="a" d="M0 0h134v163H0z" fill="rgb(0, 0, 0)"></path></defs><g fill="none" fill-rule="evenodd"><g><mask id="b" fill="#fff"><path d="M0 0h134v163H0z" fill="rgb(255, 255, 255)"></path></mask><path fill="#FFF" d="M134 66.998C134 29.995 104.002 0 67 0 29.998 0 0 29.995 0 66.998c0 22.166 10.77 41.807 27.356 54.003h-.058c19.386 14 32.62 28 39.702 41.999 7.082-14 20.316-28 39.702-41.999h-.058C123.23 108.805 134 89.164 134 66.998" mask="url(#b)"></path></g><path fill="#01233F" d="M68 28 36 51.998v47.999h5.998v-45L68 35.5 94 55v44.999h6v-48L68 28ZM48 99.997h20v-40H48v40Zm6-23h8v-11h-8v11Zm0 17h8v-11h-8v11Z"></path></g></svg>',
    67,
    81,
  ),
  i8: icon(
    '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 394 316;color:rgb(27, 27, 27)" viewBox="0 0 394 316" fill="rgb(0, 0, 0)"><style fill="rgb(0, 0, 0)">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#064DD9}</style><path d="M33.5 98 0 316h64.4L98 98zM73 77.5c21.5 0 39-17.3 39-38.7C111.9 17.4 94.5 0 73 0 51.4 0 34 17.4 34 38.8s17.4 38.7 39 38.7zM311.7 19.5h-57.9L82.5 316h65.9l45.2-78.3h113.1l21.8 78.3H394L311.7 19.5zm-85.5 161.8 43.8-75.8 21 75.8h-64.8z" fill="rgb(6, 77, 217)"></path></svg>',
    197,
    148,
  ),
  socialLinkedin: icon(
    '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" focusable="false"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path></svg>',
    24,
    24,
  ),
  socialFacebook: icon(
    '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true" focusable="false"><path d="M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"></path></svg>',
    24,
    24,
  ),
};
