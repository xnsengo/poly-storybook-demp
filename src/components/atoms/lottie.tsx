"use client";
import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const lottieVariants = cva("relative w-full overflow-hidden");
type Player = { play(): void; pause(): void; destroy(): void };
/**
 * @ployComponent
 * @ployComponentId lottie
 * @ployComponentType component
 * @ployComponentTags media, animation, captured
 * @ployComponentDescription Plays the captured JSON or dotLottie URL in its measured aspect ratio.
 * @ployComponentStatus stable
 */
export function Lottie({
  src,
  alt,
  aspectRatio = 1,
  className,
  style,
  ...props
}: Omit<ComponentPropsWithoutRef<"figure">, "children"> & {
  src: string;
  alt: string;
  aspectRatio?: number;
  className?: string;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const player = useRef<Player | null>(null);
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    const moduleUrl =
      "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web@0.77.1/+esm";
    import(/* @vite-ignore */ moduleUrl)
      .then(({ DotLottie }) => {
        if (cancelled || !canvas.current) return;
        const instance = new DotLottie({
          canvas: canvas.current,
          src,
          loop: true,
          autoplay: true,
        });
        player.current = instance;
        instance.addEventListener("load", () => {
          if (!cancelled) setStatus("ready");
        });
        instance.addEventListener("loadError", () => {
          if (!cancelled) setStatus("error");
        });
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    // Plays for every visitor, matching investia.ca; the source shows no
    // player controls, so the component draws none either.
    return () => {
      cancelled = true;
      player.current?.destroy();
      player.current = null;
    };
  }, [src]);
  return (
    <figure
      data-ploy-component="lottie"
      data-state={status}
      className={cn(lottieVariants(), className)}
      style={{ aspectRatio, ...style }}
      {...props}
      hidden={status === "error"}
    >
      <canvas
        ref={canvas}
        role="img"
        aria-label={alt}
        className="h-full w-full"
      />
    </figure>
  );
}
