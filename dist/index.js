import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { Children, Fragment as Fragment$1, createContext, isValidElement, useContext, useEffect, useId, useRef, useState } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { MotionConfig, motion, stagger } from "motion/react";
import { ArrowLeft, ArrowRight, CircleAlert, ExternalLink, LockKeyhole, Menu, Search, X } from "lucide-react";
import { A11y, Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide as CarouselSlide, useSwiper } from "swiper/react";
import * as Accordion from "@radix-ui/react-accordion";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog$1 from "@radix-ui/react-dialog";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as TabsPrimitive from "@radix-ui/react-tabs";
// src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
// src/components/atoms/avatar.tsx
var avatarVariants = cva("shrink-0 object-cover", {
	variants: {
		shape: {
			circle: "rounded-full",
			rounded: "rounded-[20px]",
			square: "rounded-none"
		},
		size: {
			sm: "h-[32px] w-[32px]",
			md: "h-[48px] w-[48px]",
			lg: "h-[80px] w-[80px]"
		}
	},
	defaultVariants: {
		shape: "circle",
		size: "md"
	}
});
/**
* @ployComponent
* @ployComponentId avatar
* @ployComponentType component
* @ployComponentTags portrait, person, measured
* @ployComponentDescription Use <Avatar src={url} alt={name} size="md" /> for a person, cropped square at the measured size. Avatar renders img directly: never nest img or initials inside it.
* @ployComponentStatus stable
*/
function Avatar({ shape = "circle", size = "md", className = "", alt = "", children: _children, dangerouslySetInnerHTML: _dangerouslySetInnerHTML, ...props }) {
	return /* @__PURE__ */ jsx("img", {
		alt,
		decoding: "async",
		"data-ploy-component": "avatar",
		className: cn(avatarVariants({
			shape,
			size
		}), className),
		...props
	});
}
// src/components/atoms/body-1-hero-pin.tsx
/**
* @ployComponent
* @ployComponentId body-1-hero-pin
* @ployComponentType component
* @ployComponentDescription White map-pin badge with a navy building glyph, from the Investia hero's first slide. Decorative (aria-hidden); size it with CSS on the className.
* @ployComponentTags hero, decoration, pin
* @ployComponentStatus stable
*/
function Body1HeroPin({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		className,
		viewBox: "0 0 134 163",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true",
		focusable: "false",
		children: [/* @__PURE__ */ jsx("path", {
			fill: "#FFF",
			d: "M134 66.998C134 29.995 104.002 0 67 0 29.998 0 0 29.995 0 66.998c0 22.166 10.77 41.807 27.356 54.003h-.058c19.386 14 32.62 28 39.702 41.999 7.082-14 20.316-28 39.702-41.999h-.058C123.23 108.805 134 89.164 134 66.998"
		}), /* @__PURE__ */ jsx("path", {
			fill: "#01233f",
			fillRule: "nonzero",
			d: "M66 54.22V44H40v45.999h52V54.22H66ZM50.4 84.888h-5.2v-5.111h5.2v5.11Zm0-10.222h-5.2v-5.111h5.2v5.11Zm0-10.222h-5.2v-5.111h5.2v5.11Zm0-10.222h-5.2V49.11h5.2v5.11Zm10.4 30.666h-5.2v-5.111h5.2v5.11Zm0-10.222h-5.2v-5.111h5.2v5.11Zm0-10.222h-5.2v-5.111h5.2v5.11Zm0-10.222h-5.2V49.11h5.2v5.11Zm26 30.666H66v-5.111h5.2v-5.111H66v-5.111h5.2v-5.111H66v-5.111h20.8v25.555Zm-5.2-20.444h-5.2v5.11h5.2v-5.11Zm0 10.222h-5.2v5.11h5.2v-5.11Z"
		})]
	});
}
// src/components/atoms/button.tsx
var buttonSpacing = "min-h-[calc(1lh+18px)] py-2";
var ghostSurface = "bg-transparent border-transparent";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap no-underline box-border border h-[50px] rounded-[9999px] px-8 text-[1.0625rem] font-bold transition-[background-color,border-color,color] duration-[150ms] disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			primary: "bg-ploy-button-primary-background text-ploy-button-primary-text border-ploy-button-primary-border [overflow:visible] font-[700] rounded-[50px] border-[0px] hover:bg-[#2962ff] hover:border-[#2962ff] active:bg-[#003da5] active:border-[#003da5]",
			secondary: "bg-ploy-button-secondary-background text-ploy-button-secondary-text border-ploy-button-secondary-border [overflow:visible] font-[700] rounded-[0px] border-[0px]",
			outline: "bg-transparent text-current border-current hover:text-[#2962ff]",
			ghost: "bg-transparent border-transparent"
		},
		tone: {
			brand: "",
			light: "",
			dark: ""
		},
		size: {
			md: "",
			sm: "h-10 px-[22.4px] text-sm"
		},
		block: {
			true: "w-full",
			false: ""
		}
	},
	compoundVariants: [
		{
			variant: "ghost",
			tone: "brand",
			className: "text-ploy-accent-primary"
		},
		{
			variant: ["outline", "ghost"],
			tone: "light",
			className: "text-ploy-neutral-light"
		},
		{
			variant: "outline",
			tone: "light",
			className: "hover:text-[#dbf0ff]"
		},
		{
			variant: ["outline", "ghost"],
			tone: "dark",
			className: "text-ploy-neutral-dark"
		}
	],
	defaultVariants: {
		variant: "primary",
		tone: "brand",
		size: "md",
		block: false
	}
});
/**
* @ployComponent
* @ployComponentId button
* @ployComponentType component
* @ployComponentTags action, cta, measured
* @ployComponentDescription Measured action with safe spacing and an 8px icon gap. Override spacing through className. Outline inherits text/border; outline and ghost accept tone=brand|light|dark. Uses <a> with href, otherwise <button>; as overrides the tag. Pass type=submit for form actions.
* @ployComponentStatus stable
*/
function Button({ as, variant = "primary", tone = "brand", size = "md", block = false, className = "", asChild = false, ...props }) {
	const Tag = asChild ? Slot : as ?? ("href" in props ? "a" : "button");
	const iconOnly = !asChild && !!props["aria-label"] && !Children.toArray(props.children).some((child) => typeof child === "string" || typeof child === "number");
	return /* @__PURE__ */ jsx(Tag, {
		"data-ploy-component": "button",
		className: cn(buttonVariants({
			variant,
			tone,
			size,
			block
		}), !iconOnly && buttonSpacing, variant === "ghost" && ghostSurface, className),
		...props,
		children: props.children
	});
}
// src/components/atoms/checkbox.tsx
/**
* @ployComponent
* @ployComponentId checkbox
* @ployComponentType component
* @ployComponentTags form, control, checkbox, measured
* @ployComponentDescription The measured checkbox. Radix handles the space key, the indeterminate state and the hidden input a form submits.
* @ployComponentStatus stable
*/
function Checkbox({ className = "", ...props }) {
	return /* @__PURE__ */ jsx(CheckboxPrimitive.Root, {
		"data-ploy-component": "checkbox",
		className: cn("peer shrink-0 inline-flex items-center justify-center cursor-pointer", "size-[17px] border-[1px] border-ploy-input-border bg-ploy-input-background", "transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 outline-ploy-accent-primary", "disabled:cursor-not-allowed disabled:opacity-50", "data-[state=checked]:bg-[color:var(--ploy-choice-checked-background,var(--ploy-text-primary))] data-[state=checked]:border-[color:var(--ploy-choice-checked-border,var(--ploy-text-primary))]", "data-[state=checked]:text-[color:var(--ploy-choice-checked-mark,var(--ploy-background-primary))]", "rounded-[5px]", className),
		...props,
		children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, {
			className: "flex items-center justify-center text-current",
			children: /* @__PURE__ */ jsx("svg", {
				"aria-hidden": "true",
				viewBox: "0 0 16 16",
				className: "size-[12px]",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				children: /* @__PURE__ */ jsx("path", { d: "M3.5 8.5l3 3 6-7" })
			})
		})
	});
}
// src/components/atoms/container.tsx
var containerVariants = cva("mx-auto w-full px-[20px] md:px-[32px]", {
	variants: { width: {
		narrow: "max-w-[690px] md:max-w-[714px]",
		standard: "max-w-[1180px] md:max-w-[1204px]",
		wide: "max-w-[1408px] md:max-w-[1432px]",
		full: "max-w-none"
	} },
	defaultVariants: { width: "standard" }
});
/**
* @ployComponent
* @ployComponentId container
* @ployComponentType component
* @ployComponentTags layout, gutters, responsive
* @ployComponentDescription content narrow 650px · standard 1140px · wide 1368px (derived) · full bleed. Measured gutters, never zero.
* @ployComponentStatus stable
*/
function Container({ width = "standard", className = "", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "div", {
		"data-ploy-component": "container",
		className: cn(containerVariants({ width }), className),
		...props
	});
}
// src/components/atoms/display-heading.tsx
var displayHeadingVariants = cva("text-balance", {
	variants: { size: {
		1: "font-heading font-bold text-[4.25rem] leading-[1] tracking-[-0.02em] md:text-[5.5625rem] md:leading-[1] md:tracking-[-0.02em]",
		2: "font-heading font-bold text-6xl leading-[1] tracking-[-0.02em] md:text-[4.25rem] md:leading-[1] md:tracking-[-0.02em]"
	} },
	defaultVariants: { size: 1 }
});
/**
* @ployComponent
* @ployComponentId displayHeading
* @ployComponentType component
* @ployComponentTags typography, scale, responsive
* @ployComponentDescription The measured display scale, sizes 1-2, responsive at md.
* @ployComponentStatus stable
*/
function DisplayHeading({ size = 1, as, className = "", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : as ?? "h1", {
		"data-ploy-component": "displayHeading",
		className: cn(displayHeadingVariants({ size }), className),
		...props
	});
}
// src/components/atoms/experience-material-icon.tsx
/**
* @ployComponent
* @ployComponentId experience-material-icon
* @ployComponentType component
* @ployComponentTags icon, decoration
* @ployComponentDescription Decorative Material Icons glyph (aria-hidden), rendered from the site's self-hosted Material Icons / Material Icons Outlined fonts in /fonts, exactly as investia.ca renders its list, link and download icons. Pass the ligature name, the outlined or filled variant and a pixel size; color follows currentColor.
* @ployComponentStatus stable
*/
function ExperienceMaterialIcon({ name, variant = "outlined", size = 18, className = "" }) {
	return /* @__PURE__ */ jsx("span", {
		"aria-hidden": "true",
		className: cn("experience-material-icon", variant === "filled" ? "experience-material-icon-filled" : "experience-material-icon-outlined", className),
		style: {
			fontSize: size,
			width: size,
			height: size
		},
		children: name
	});
}
// src/components/atoms/field-variants.ts
/**
* The one measured control table.
*
* Input, Textarea and Select all read it, so three fields side by side cannot
* disagree about height, radius, padding or border.
*
* Four values here are DERIVED rather than measured, because most marketing
* pages have one field on them — usually a bare search box — and copying it
* literally produces a design system nobody can build a form with:
*
* - Colour comes from the theme's input tokens, not from the field that was
*   measured. A translucent dark border on a search box, read literally, paints
*   a heavy outline on every field of a white page.
* - Type size follows the BUTTON. A control and the button beside it are one
*   surface, and a 12px search box otherwise yields fields two steps smaller
*   than every action next to them.
* - Inline padding has a floor of 14px, raised further
*   for a round corner: text needs clearance from the arc, not from the
*   bounding box. Padding larger than half the single-line height is not
*   shared field spacing; action clearance belongs to the section.
* - Radius is capped at half the height, so a measured pill stays a pill on a
*   short control instead of turning the textarea into a lozenge.
*
* Changing any of them here is fine — they are ordinary classes. Just know they
* were not what the source literally measured.
*/
var fieldVariants = cva("w-full min-w-0 box-border rounded-[21px] px-[16px] py-[8px] text-[1.0625rem] leading-6 border-[1px] focus:border-ploy-accent-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-50", {
	variants: {
		surface: {
			default: "bg-ploy-input-background border-ploy-input-border text-ploy-text-primary placeholder:text-ploy-text-secondary",
			light: "bg-ploy-neutral-light text-ploy-neutral-dark border-ploy-neutral-dark/20 placeholder:text-ploy-neutral-dark/50",
			dark: "bg-ploy-neutral-dark text-ploy-neutral-light border-ploy-neutral-light/30 placeholder:text-ploy-neutral-light/60"
		},
		kind: {
			fixed: "h-[42px]",
			grown: "py-[8px] min-h-[105px] resize-y rounded-[16px]"
		}
	},
	defaultVariants: {
		kind: "fixed",
		surface: "default"
	}
});
// src/components/atoms/heading.tsx
var headingVariants = cva("text-balance", {
	variants: { level: {
		1: "font-heading font-bold text-4xl leading-[1] tracking-normal md:text-5xl md:leading-[1] md:tracking-normal",
		2: "font-heading font-bold text-[2rem] leading-[1.19] tracking-normal md:text-[2rem] md:leading-[1.19] md:tracking-normal",
		3: "font-heading font-bold text-[1.5625rem] leading-[1.12] tracking-normal md:text-[1.5625rem] md:leading-[1.12] md:tracking-normal",
		4: "font-heading font-bold text-[1.3125rem] leading-[1.12] tracking-normal md:text-[1.4375rem] md:leading-[1] md:tracking-normal",
		5: "font-heading font-bold text-[1.1875rem] leading-[1.12] tracking-normal md:text-[1.1875rem] md:leading-[1] md:tracking-normal",
		6: "font-heading font-bold text-[1.0625rem] leading-[1.12] tracking-normal md:text-[1.0625rem] md:leading-[1] md:tracking-normal"
	} },
	defaultVariants: { level: 2 }
});
/**
* @ployComponent
* @ployComponentId heading
* @ployComponentType component
* @ployComponentTags typography, scale, responsive
* @ployComponentDescription The measured heading scale, levels 1-6, responsive at md.
* @ployComponentStatus stable
*/
function Heading({ level = 2, as, className = "", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : as ?? "h2", {
		"data-ploy-component": "heading",
		className: cn(headingVariants({ level }), className),
		...props
	});
}
// src/components/atoms/icons.tsx
function icon(svg, width, height, paint = {}) {
	return function Icon({ className, style, children }) {
		return /* @__PURE__ */ jsx("span", {
			className: cn("flex w-[min(var(--icon-width),100%)] h-[var(--icon-height)]", className),
			style: {
				"--icon-width": `${width}px`,
				"--icon-height": `${height}px`,
				...paint,
				...style
			},
			...svg ? { dangerouslySetInnerHTML: { __html: svg } } : { children }
		});
	};
}
var ICONS = {
	i1: icon("<svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" style=\"enable-background:new 0 0 697 312;color:rgb(27, 27, 27)\" viewBox=\"0 0 697 312\" fill=\"rgb(0, 0, 0)\"><path fill=\"none\" fill-rule=\"evenodd\" stroke=\"#003DA5\" stroke-linecap=\"round\" stroke-width=\"10\" d=\"m5 307 178.759-145.101c18.419-14.951 45.187-13.443 61.81 3.483l82.655 84.162c16.694 16.999 43.605 18.437 62.016 3.315L692 5h0\" style=\"stroke-dasharray: 874.8004150390625; stroke-dashoffset: 874.8004150390625\"></path></svg>", 344, 151),
	i3: icon("<svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" style=\"enable-background:new 0 0 127 168.5;color:rgb(27, 27, 27)\" viewBox=\"0 0 127 168.5\" fill=\"rgb(0, 0, 0)\"><path fill=\"none\" stroke=\"#003DA5\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"5\" d=\"M123.8,165L124,4 M4,165L4,57 M83.5,165l0-143.5 M43.2,165l0-58.8\" style=\"stroke-dasharray: 471.30010986328125; stroke-dashoffset: 471.30010986328125\"></path></svg>", 124, 194),
	i4: icon("<svg width=\"100%\" height=\"100%\" xml:space=\"preserve\" style=\"enable-background:new 0 0 190 190;color:rgb(27, 27, 27)\" viewBox=\"0 0 190 190\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" fill=\"rgb(0, 0, 0)\">\n<path fill=\"none\" fill-rule=\"evenodd\" stroke=\"#003DA5\" stroke-linecap=\"round\" stroke-width=\"5\" d=\"M 92,123.6 125.9,94.5 92.5,65.9 M 5.8,64 C 18.6,28.4 52.6,3 92.5,3 c 50.8,0 92,41.2 92,92 0,50.8 -41.2,92 -92,92 C 52.2,187 18,161.1 5.5,125 M 29.1,94.5 h 96.8\" style=\"stroke-dasharray: 701.428955078125; stroke-dashoffset: 701.428955078125\"></path>\n</svg>", 185, 185),
	i5: icon("<svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1140 410\" style=\"color:rgb(27, 27, 27)\" fill=\"rgb(0, 0, 0)\"><defs fill=\"rgb(0, 0, 0)\"><style fill=\"rgb(0, 0, 0)\">.cls-2{mix-blend-mode:multiply}</style></defs><g style=\"isolation:isolate\" fill=\"rgb(0, 0, 0)\"><g fill=\"rgb(0, 0, 0)\"><path d=\"m24.15 409.86 20.17-10.48a48.39 48.39 0 0 1 12.58-4.47l332.91-68.63a48.51 48.51 0 0 0 21.61-10.53L597.93 157.4a48.47 48.47 0 0 1 18.15-9.68L1139.72-1l.28 411Z\" style=\"fill-rule:evenodd;fill:#73C4EF\" transform=\"translate(.06 1.02)\" fill=\"rgb(115, 196, 239)\"></path></g><g fill=\"rgb(0, 0, 0)\"><path d=\"m271.78 288.34 84.36-58.27a50 50 0 0 1 28.41-8.85h42.87a50 50 0 0 0 34.76-14.06l32.76-31.68v235h-495l263.79-117.62a49.68 49.68 0 0 0 8.05-4.52Z\" style=\"fill:#064DD9;fill-rule:evenodd\" transform=\"translate(.06 1.02)\" fill=\"rgb(6, 77, 217)\"></path></g></g></svg>", 1140, 410),
	i6: icon("<svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 134 163\" style=\"color:rgb(27, 27, 27)\" fill=\"rgb(0, 0, 0)\"><defs fill=\"rgb(0, 0, 0)\"><path id=\"a\" d=\"M0 0h134v163H0z\" fill=\"rgb(0, 0, 0)\"></path></defs><g fill=\"none\" fill-rule=\"evenodd\"><g><mask id=\"b\" fill=\"#fff\"><path d=\"M0 0h134v163H0z\" fill=\"rgb(255, 255, 255)\"></path></mask><path fill=\"#FFF\" d=\"M134 66.998C134 29.995 104.002 0 67 0 29.998 0 0 29.995 0 66.998c0 22.166 10.77 41.807 27.356 54.003h-.058c19.386 14 32.62 28 39.702 41.999 7.082-14 20.316-28 39.702-41.999h-.058C123.23 108.805 134 89.164 134 66.998\" mask=\"url(#b)\"></path></g><path fill=\"#01233F\" fill-rule=\"nonzero\" d=\"M32 97.998v-5.334c2.1-.118 4.14-.563 6.12-1.333 1.98-.77 3.93-1.867 5.85-3.289 1.86 1.422 3.825 2.534 5.895 3.334 2.07.8 4.125 1.2 6.165 1.2 1.92 0 3.975-.4 6.165-1.2 2.19-.8 4.155-1.912 5.895-3.334 1.98 1.6 3.975 2.756 5.985 3.467 2.01.711 4.035 1.067 6.075 1.067 1.98 0 3.93-.386 5.85-1.156 1.92-.77 3.99-1.926 6.21-3.467 2.1 1.541 4.155 2.682 6.165 3.423 2.01.74 3.885 1.17 5.625 1.288v5.334c-1.8-.119-3.78-.474-5.94-1.067-2.16-.593-4.11-1.393-5.85-2.4-2.04 1.185-4.08 2.06-6.12 2.622-2.04.563-4.02.845-5.94.845-1.92 0-3.9-.282-5.94-.845-2.04-.563-4.08-1.437-6.12-2.622a21.343 21.343 0 0 1-5.895 2.622c-2.07.563-4.125.845-6.165.845-1.98 0-3.99-.282-6.03-.845s-4.05-1.437-6.03-2.622c-1.74 1.007-3.705 1.807-5.895 2.4-2.19.593-4.215.948-6.075 1.067Zm0-16.889v-6.222c0-5.63 1.155-10.918 3.465-15.866 2.31-4.948 5.43-9.274 9.36-12.978 3.93-3.703 8.52-6.637 13.77-8.8C63.845 35.082 69.38 34 75.2 34c1.68 0 3.375.074 5.085.222 1.71.149 3.255.37 4.635.667a22.746 22.746 0 0 0-2.565 5.733c-.57 1.985-.855 3.837-.855 5.556 0 3.496 1.26 6.637 3.78 9.422 2.52 2.785 5.55 4.177 9.09 4.177H104v5.334h-9.63c-5.1 0-9.42-1.897-12.96-5.69-3.54-3.792-5.31-8.206-5.31-13.243 0-.83.105-1.808.315-2.934.21-1.126.465-2.34.765-3.644-5.1 1.185-9.255 3.793-12.465 7.822-3.21 4.03-4.815 8.444-4.815 13.244 0 2.252.405 4.445 1.215 6.578s1.965 4.207 3.465 6.222c.6-.415 1.185-.8 1.755-1.156.57-.355 1.125-.74 1.665-1.155a20.744 20.744 0 0 0 6.075 3.378c2.19.77 4.215 1.155 6.075 1.155 1.8 0 3.795-.4 5.985-1.2a22.86 22.86 0 0 0 6.075-3.333 25.322 25.322 0 0 0 5.67 3.2c2.04.83 4.08 1.303 6.12 1.422v5.333c-1.8-.118-3.78-.474-5.94-1.067-2.16-.592-4.11-1.392-5.85-2.4-2.04 1.186-4.035 2.06-5.985 2.623-1.95.563-3.975.844-6.075.844s-4.23-.326-6.39-.978c-2.16-.651-4.05-1.481-5.67-2.488-1.92 1.185-3.9 2.044-5.94 2.577-2.04.534-4.08.83-6.12.89-1.92 0-3.945-.312-6.075-.934a27.458 27.458 0 0 1-5.985-2.533c-1.74 1.007-3.705 1.807-5.895 2.4-2.19.592-4.215.948-6.075 1.066Zm23.85-5.422c.36 0 .84-.03 1.44-.089.6-.06 1.23-.118 1.89-.178-1.5-2.43-2.655-4.874-3.465-7.333-.81-2.459-1.215-4.933-1.215-7.422 0-4.622 1.23-9.037 3.69-13.244C60.65 43.214 63.92 40.073 68 38v2.044c-4.8 1.008-9.045 2.608-12.735 4.8-3.69 2.193-6.81 4.8-9.36 7.822a34.492 34.492 0 0 0-5.94 10.133c-1.41 3.734-2.265 7.704-2.565 11.911 1.38-.77 2.61-1.407 3.69-1.91a15.058 15.058 0 0 0 2.88-1.734c2.16 1.54 4.155 2.696 5.985 3.467 1.83.77 3.795 1.155 5.895 1.155Z\"></path></g></svg>", 67, 81),
	i7: icon("<svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 134 163\" style=\"color:rgb(27, 27, 27)\" fill=\"rgb(0, 0, 0)\"><defs fill=\"rgb(0, 0, 0)\"><path id=\"a\" d=\"M0 0h134v163H0z\" fill=\"rgb(0, 0, 0)\"></path></defs><g fill=\"none\" fill-rule=\"evenodd\"><g><mask id=\"b\" fill=\"#fff\"><path d=\"M0 0h134v163H0z\" fill=\"rgb(255, 255, 255)\"></path></mask><path fill=\"#FFF\" d=\"M134 66.998C134 29.995 104.002 0 67 0 29.998 0 0 29.995 0 66.998c0 22.166 10.77 41.807 27.356 54.003h-.058c19.386 14 32.62 28 39.702 41.999 7.082-14 20.316-28 39.702-41.999h-.058C123.23 108.805 134 89.164 134 66.998\" mask=\"url(#b)\"></path></g><path fill=\"#01233F\" d=\"M68 28 36 51.998v47.999h5.998v-45L68 35.5 94 55v44.999h6v-48L68 28ZM48 99.997h20v-40H48v40Zm6-23h8v-11h-8v11Zm0 17h8v-11h-8v11Z\"></path></g></svg>", 67, 81),
	i8: icon("<svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" style=\"enable-background:new 0 0 394 316;color:rgb(27, 27, 27)\" viewBox=\"0 0 394 316\" fill=\"rgb(0, 0, 0)\"><style fill=\"rgb(0, 0, 0)\">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#064DD9}</style><path d=\"M33.5 98 0 316h64.4L98 98zM73 77.5c21.5 0 39-17.3 39-38.7C111.9 17.4 94.5 0 73 0 51.4 0 34 17.4 34 38.8s17.4 38.7 39 38.7zM311.7 19.5h-57.9L82.5 316h65.9l45.2-78.3h113.1l21.8 78.3H394L311.7 19.5zm-85.5 161.8 43.8-75.8 21 75.8h-64.8z\" fill=\"rgb(6, 77, 217)\"></path></svg>", 197, 148),
	socialLinkedin: icon("<svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 256 256\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z\"></path></svg>", 24, 24),
	socialFacebook: icon("<svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 256 256\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z\"></path></svg>", 24, 24)
};
// src/components/atoms/image.tsx
var imageVariants = cva("block object-cover", {
	variants: {
		filled: {
			true: "h-full w-full object-cover",
			false: "h-auto max-w-full"
		},
		rounded: {
			default: "rounded-[var(--radius-image,var(--radius-card))]",
			card: "rounded-[var(--radius-image,var(--radius-card))]",
			none: "rounded-none",
			full: "rounded-full"
		}
	},
	defaultVariants: {
		filled: false,
		rounded: "default"
	}
});
var RATIOS = {
	square: "aspect-square",
	"4/3": "aspect-[4/3]",
	"3/2": "aspect-[3/2]",
	"16/9": "aspect-video",
	"5/3": "aspect-[5/3]"
};
/**
* @ployComponent
* @ployComponentId image
* @ployComponentType component
* @ployComponentTags media, artwork, measured
* @ployComponentDescription Use <Image src={url} alt={description} /> in the column; it takes the site's image radius. fullBleed: edge to edge, always square. rounded="none": a deliberate square. People: Avatar, not rounded="full". ratio={width / height} sets an exact frame; presets like ratio="16/9" work. Never nest children; put captions beside Image.
* @ployComponentStatus stable
*/
function Image({ ratio, fit = "cover", rounded: requested = "default", fullBleed = false, className = "", alt = "", children: _children, dangerouslySetInnerHTML: _dangerouslySetInnerHTML, ...props }) {
	const rounded = fullBleed ? "none" : requested;
	const image = /* @__PURE__ */ jsx("img", {
		alt,
		decoding: "async",
		"data-ploy-component": "image",
		className: cn(imageVariants({
			filled: Boolean(ratio),
			rounded: ratio ? "none" : rounded
		}), fit === "contain" && "object-contain", !ratio && className),
		...props
	});
	if (!ratio) return image;
	return /* @__PURE__ */ jsx("div", {
		style: typeof ratio === "number" ? { aspectRatio: ratio } : void 0,
		className: cn("overflow-hidden", typeof ratio === "string" && RATIOS[ratio], imageVariants({
			rounded,
			filled: false
		}).replace("h-auto max-w-full", ""), className),
		children: image
	});
}
// src/components/atoms/input.tsx
/**
* @ployComponent
* @ployComponentId input
* @ployComponentType component
* @ployComponentTags form, field, measured
* @ployComponentDescription The measured text field. Use placeholder for text inside an empty field and aria-label or an external label for its accessible name. Do not overlay a static label on entered text. If a captured floating label is required, reserve its own space and derive its position from whether the value is empty, never from validity.
* @ployComponentStatus stable
*/
function Input({ className = "", surface = "default", ...props }) {
	return /* @__PURE__ */ jsx("input", {
		"data-ploy-component": "input",
		"data-1p-ignore": true,
		className: cn(fieldVariants({
			kind: "fixed",
			surface
		}), className),
		...props
	});
}
// src/components/atoms/link.tsx
var linkVariants = cva("cursor-pointer", {
	variants: {
		variant: {
			inline: "underline-offset-2",
			standalone: "text-[1.0625rem] inline-flex items-center gap-1"
		},
		tone: {
			accent: "text-ploy-accent-primary no-underline",
			inherit: "text-inherit no-underline"
		}
	},
	defaultVariants: {
		variant: "inline",
		tone: "accent"
	}
});
/**
* @ployComponent
* @ployComponentId link
* @ployComponentType component
* @ployComponentTags navigation, inline, measured-states
* @ployComponentDescription Measured link treatment; the source declares no hover change, so none is applied. tone='inherit' hands color back to the surface.
* @ployComponentStatus stable
*/
function Link({ variant = "inline", tone = "accent", className = "", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "a", {
		"data-ploy-component": "link",
		className: cn(linkVariants({
			variant,
			tone
		}), className),
		...props
	});
}
// src/components/atoms/logo.tsx
function logoSize({ width, height }) {
	const ratio = 228 / 42;
	if (width && height) {
		const scale = Math.min(width / 228, height / 42);
		return {
			width: 228 * scale,
			height: 42 * scale
		};
	}
	const w = width ?? (height ? height * ratio : 228);
	return {
		width: w,
		height: height ?? w / ratio
	};
}
/**
* @ployComponent
* @ployComponentId logo
* @ployComponentType component
* @ployComponentTags brand, identity, measured
* @ployComponentDescription The selected brand identity, rendered at its measured proportions.
* @ployComponentStatus stable
*/
function Logo({ className = "", width, height, ...props }) {
	const size = logoSize({
		width,
		height
	});
	return /* @__PURE__ */ jsxs("svg", {
		...props,
		width: size.width,
		height: size.height,
		"data-ploy-component": "logo",
		className: cn("h-auto max-w-full", className),
		id: "Calque_1",
		xmlns: "http://www.w3.org/2000/svg",
		version: "1.1",
		viewBox: "0 0 473.6 87.9",
		"aria-label": "Investia",
		role: "img",
		fill: "rgb(0, 0, 0)",
		stopColor: "rgb(0, 0, 0)",
		floodColor: "rgb(0, 0, 0)",
		style: { color: "rgb(0, 0, 238)" },
		children: [
			/* @__PURE__ */ jsx("title", {
				xmlns: true,
				fill: "rgb(0, 0, 0)",
				stopColor: "rgb(0, 0, 0)",
				floodColor: "rgb(0, 0, 0)",
				children: "Investia_ANG-H-RGB_WEB"
			}),
			/* @__PURE__ */ jsx("defs", {
				fill: "rgb(0, 0, 0)",
				stopColor: "rgb(0, 0, 0)",
				floodColor: "rgb(0, 0, 0)"
			}),
			/* @__PURE__ */ jsxs("g", {
				fill: "rgb(0, 0, 0)",
				stopColor: "rgb(0, 0, 0)",
				floodColor: "rgb(0, 0, 0)",
				children: [
					/* @__PURE__ */ jsx("polygon", {
						points: "9.2 26.8 26.8 26.8 17.6 87.8 0 87.8 9.2 26.8",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M9.6,10.8C9.6,4.8,14.5,0,20.4,0s10.8,4.8,10.8,10.8-4.8,10.8-10.8,10.8c-5.9-.1-10.8-4.9-10.8-10.8Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M91,87.8h18.1L86.4,5.4h-16L23,87.8h18.2l12.5-21.8h31.3l6,21.8ZM62.8,50.4l12.1-21.1,5.8,21.1h-17.9Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M214.4,0c8.9,0,16.2,7.2,16.2,16.2s-.1,2.1-.3,3.1l-7.3,49.1v.5c0,1.5,1.2,2.7,2.7,2.7h2.7v10.8h-7.6c-5.9,0-10.8-4.8-10.8-10.8v-28.7h-13.8c-.6,0-1.2,0-1.8,0-7.5-.8-13.6-6.8-14.5-14.3-.2-1.8-.2-3.5.1-5.1l3.4-23.4h31Z",
						fill: "rgb(140, 140, 135)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M177.1,5.4h-22.9c-16.2,0-29.6,12.5-31.5,28.6l-8.1,53.8h13.9l6-21.8h45v21.8h13.3l6-39.4h-2.5c-.8,0-1.6,0-2.5,0-10-1.1-18.1-9-19.4-19-.3-2.1-.2-4.1.1-6.1l2.6-17.8",
						fill: "rgb(140, 140, 135)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("polygon", {
						points: "133.9 87.8 147.8 87.8 154.6 71.5 138.5 71.5 133.9 87.8",
						fill: "rgb(140, 140, 135)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					})
				]
			}),
			/* @__PURE__ */ jsxs("g", {
				fill: "rgb(0, 0, 0)",
				stopColor: "rgb(0, 0, 0)",
				floodColor: "rgb(0, 0, 0)",
				children: [
					/* @__PURE__ */ jsx("path", {
						d: "M244,33.2h6v27.3h-6v-27.3Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M255.4,39.6h5.9v3c1.4-1.8,3.1-3.4,6.1-3.4,4.5,0,7.1,3,7.1,7.8v13.5h-5.9v-11.7c0-2.8-1.3-4.2-3.6-4.2s-3.7,1.4-3.7,4.2v11.7h-5.9v-20.9Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M276.2,39.6h6.3l4.7,14,4.7-14h6.2l-8.2,21h-5.4l-8.3-21Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M298.5,50.2h0c0-6,4.2-11,10.3-11s10.2,5.4,10.2,11.3,0,1-.1,1.6h-14.5c.6,2.7,2.5,4.1,5.1,4.1s3.4-.6,5.1-2.1l3.4,3c-1.9,2.4-4.8,3.9-8.5,3.9-6.4,0-11-4.4-11-10.8ZM313.2,48.4c-.4-2.7-1.9-4.4-4.4-4.4s-4.1,1.8-4.5,4.4h8.9Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M320.9,57.7l2.5-3.9c2.3,1.6,4.6,2.5,6.6,2.5s2.5-.6,2.5-1.6h0c0-1.4-2-1.8-4.3-2.5-2.9-.9-6.2-2.2-6.2-6.3h0c0-4.3,3.4-6.7,7.6-6.7s5.5.9,7.8,2.4l-2.3,4.1c-2.1-1.2-4.1-1.9-5.7-1.9s-2.2.6-2.2,1.4h0c0,1.3,2,1.8,4.2,2.6,2.9,1,6.3,2.4,6.3,6.2h0c0,4.7-3.5,6.8-8,6.8-2.7,0-6-.9-8.8-3.1Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M341.9,54.6v-9.9h-2.5v-5.1h2.5v-5.3h5.9v5.3h4.9v5.1h-4.9v8.9c0,1.4.6,2,1.9,2s2.1-.3,2.9-.7v4.8c-1.2.7-2.7,1.2-4.7,1.2-3.6,0-6-1.5-6-6.3Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M356.5,39.6h5.9v20.9h-5.9v-20.9Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M359.5,30.6c1.9,0,3.4,1.5,3.4,3.4s-1.5,3.3-3.4,3.3-3.4-1.5-3.4-3.3,1.5-3.4,3.4-3.4Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M366,50.1h0c0-7.1,4.6-10.9,9.5-10.9s5.1,1.4,6.5,3.1v-2.7h5.9v20.9h-5.9v-3c-1.4,1.9-3.4,3.4-6.5,3.4-4.8,0-9.5-3.8-9.5-10.8ZM382.1,50.1h0c0-3.5-2.3-5.8-5.1-5.8s-5,2.2-5,5.7h0c0,3.6,2.3,5.9,5.1,5.9s5-2.3,5-5.8Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					})
				]
			}),
			/* @__PURE__ */ jsxs("g", {
				fill: "rgb(0, 0, 0)",
				stopColor: "rgb(0, 0, 0)",
				floodColor: "rgb(0, 0, 0)",
				children: [
					/* @__PURE__ */ jsx("path", {
						d: "M244,72.1h11.1v1.6h-9.4v5.5h8.4v1.6h-8.4v6.8h-1.7v-15.5Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M257.8,71.8h1.9v1.9h-1.9v-1.9ZM257.9,76.1h1.7v11.5h-1.7v-11.5Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M263.2,76.1h1.7v2c.8-1.2,2-2.2,3.9-2.2,2.8,0,4.4,1.9,4.4,4.6v7.1h-1.7v-6.7c0-2.1-1.2-3.5-3.2-3.5s-3.4,1.4-3.4,3.6v6.6h-1.7v-11.5h0Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M275.7,81.9h0c0-3.8,2.7-6,5.5-6s3.5,1.2,4.4,2.4v-2.2h1.7v11.5h-1.7v-2.3c-.9,1.4-2.3,2.5-4.4,2.5s-5.5-2.1-5.5-5.9ZM285.6,81.9h0c0-2.7-2-4.5-4.1-4.5s-4,1.6-4,4.4h0c0,2.7,1.9,4.4,4,4.4,2.1,0,4.1-1.7,4.1-4.3Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M290.6,76.1h1.7v2c.8-1.2,1.9-2.2,3.9-2.2s4.4,1.9,4.4,4.6v7.1h-1.7v-6.7c0-2.1-1.2-3.5-3.2-3.5s-3.4,1.4-3.4,3.6v6.6h-1.7v-11.5h0Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M303,81.9h0c0-3.3,2.5-6,5.9-6s3.5.9,4.6,2l-1.1,1.2c-.9-1-1.9-1.7-3.5-1.7-2.3,0-4.1,2-4.1,4.4h0c0,2.5,1.8,4.5,4.2,4.5s2.6-.7,3.5-1.7l1.1,1c-1.2,1.3-2.5,2.2-4.7,2.2-3.3,0-5.9-2.7-5.9-5.9Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M316,71.8h1.9v1.9h-1.9v-1.9ZM316.1,76.1h1.7v11.5h-1.7v-11.5Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M320.6,81.9h0c0-3.8,2.7-6,5.5-6s3.5,1.2,4.4,2.4v-2.2h1.7v11.5h-1.7v-2.3c-.9,1.4-2.3,2.5-4.4,2.5s-5.5-2.1-5.5-5.9ZM330.5,81.9h0c0-2.7-2-4.5-4.1-4.5s-4,1.6-4,4.4h0c0,2.7,1.9,4.4,4,4.4,2.1,0,4.1-1.7,4.1-4.3Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M335.7,71.4h1.7v16.2h-1.7v-16.2Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M346.3,85.3l1.1-1.3c1.6,1.5,3.2,2.2,5.3,2.2s3.5-1.1,3.5-2.6h0c0-1.4-.8-2.3-4-2.9-3.6-.8-5.2-1.9-5.2-4.5h0c0-2.4,2.1-4.2,5.1-4.2s3.9.6,5.4,1.9l-1,1.3c-1.4-1.2-2.9-1.7-4.5-1.7s-3.3,1.1-3.3,2.5h0c0,1.5.8,2.3,4.2,3,3.5.8,5,2,5,4.4h0c0,2.7-2.2,4.4-5.3,4.4-2.4,0-4.4-.8-6.3-2.5Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M360.1,81.9h0c0-3.3,2.3-6,5.5-6s5.3,2.7,5.3,6v.6h-9.1c.2,2.5,2,3.9,4,3.9s2.7-.6,3.6-1.6l1.1,1c-1.2,1.3-2.5,2.1-4.7,2.1-3.2,0-5.7-2.4-5.7-6ZM369.2,81.2c-.2-2.1-1.4-3.9-3.7-3.9s-3.5,1.7-3.7,3.9h7.4Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M373.4,76.1h1.7v3c.8-1.9,2.5-3.3,4.7-3.2v1.8h-.1c-2.5,0-4.5,1.8-4.5,5.3v4.6h-1.7v-11.5h-.1Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M381.5,76.1h1.9l3.9,9.5,3.9-9.5h1.8l-5,11.5h-1.5l-5-11.5Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M394.6,71.8h1.9v1.9h-1.9v-1.9ZM394.7,76.1h1.7v11.5h-1.7v-11.5Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M398.5,81.9h0c0-3.3,2.5-6,5.9-6s3.5.9,4.6,2l-1.1,1.2c-.9-1-1.9-1.7-3.5-1.7-2.3,0-4.1,2-4.1,4.4h0c0,2.5,1.8,4.5,4.2,4.5s2.6-.7,3.5-1.7l1.1,1c-1.2,1.3-2.5,2.2-4.7,2.2-3.4,0-5.9-2.7-5.9-5.9Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M410.4,81.9h0c0-3.3,2.3-6,5.5-6s5.3,2.7,5.3,6v.6h-9.1c.2,2.5,2,3.9,4,3.9s2.7-.6,3.6-1.6l1.1,1c-1.2,1.3-2.5,2.1-4.7,2.1-3.2,0-5.7-2.4-5.7-6ZM419.5,81.2c-.2-2.1-1.4-3.9-3.7-3.9s-3.5,1.7-3.7,3.9h7.4Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M422.8,86.1l.9-1.2c1.2.9,2.6,1.5,4,1.5s2.4-.7,2.4-1.8h0c0-1.2-1.4-1.6-2.9-2-1.8-.5-3.8-1.1-3.8-3.2h0c0-2,1.6-3.3,3.9-3.3s2.9.5,4.1,1.3l-.8,1.3c-1.1-.7-2.3-1.1-3.4-1.1s-2.2.7-2.2,1.7h0c0,1.1,1.4,1.5,2.9,2,1.8.5,3.7,1.2,3.7,3.3h0c0,2.2-1.8,3.4-4.1,3.4-1.6-.2-3.4-.8-4.7-1.9Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M440.9,72.1h1.8v15.5h-1.8v-15.5Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M446.4,76.1h1.7v2c.8-1.2,2-2.2,3.9-2.2,2.8,0,4.4,1.9,4.4,4.6v7.1h-1.7v-6.7c0-2.1-1.2-3.5-3.2-3.5s-3.4,1.4-3.4,3.6v6.6h-1.7v-11.5h0Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M458.9,81.9h0c0-3.3,2.5-6,5.9-6s3.5.9,4.6,2l-1.1,1.2c-.9-1-1.9-1.7-3.5-1.7-2.3,0-4.1,2-4.1,4.4h0c0,2.5,1.8,4.5,4.2,4.5s2.6-.7,3.5-1.7l1.1,1c-1.2,1.3-2.5,2.2-4.7,2.2-3.4,0-5.9-2.7-5.9-5.9Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M471.6,85.3h2v2.3h-2v-2.3Z",
						fill: "rgb(6, 77, 217)",
						stopColor: "rgb(0, 0, 0)",
						floodColor: "rgb(0, 0, 0)"
					})
				]
			})
		]
	});
}
var logoPresentation = {
	kind: "svg",
	adaptive: false,
	background: "#ffffff"
};
// src/components/atoms/lottie.tsx
var lottieVariants = cva("relative w-full overflow-hidden");
/**
* @ployComponent
* @ployComponentId lottie
* @ployComponentType component
* @ployComponentTags media, animation, captured
* @ployComponentDescription Plays the captured JSON or dotLottie URL in its measured aspect ratio.
* @ployComponentStatus stable
*/
function Lottie({ src, alt, aspectRatio = 1, className, style, ...props }) {
	const canvas = useRef(null);
	const player = useRef(null);
	const [status, setStatus] = useState("loading");
	useEffect(() => {
		let cancelled = false;
		setStatus("loading");
		import(
			/* @vite-ignore */
			"https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web@0.77.1/+esm"
).then(({ DotLottie }) => {
			if (cancelled || !canvas.current) return;
			const instance = new DotLottie({
				canvas: canvas.current,
				src,
				loop: true,
				autoplay: true
			});
			player.current = instance;
			instance.addEventListener("load", () => {
				if (!cancelled) setStatus("ready");
			});
			instance.addEventListener("loadError", () => {
				if (!cancelled) setStatus("error");
			});
		}).catch(() => {
			if (!cancelled) setStatus("error");
		});
		return () => {
			cancelled = true;
			player.current?.destroy();
			player.current = null;
		};
	}, [src]);
	return /* @__PURE__ */ jsx("figure", {
		"data-ploy-component": "lottie",
		"data-state": status,
		className: cn(lottieVariants(), className),
		style: {
			aspectRatio,
			...style
		},
		...props,
		hidden: status === "error",
		children: /* @__PURE__ */ jsx("canvas", {
			ref: canvas,
			role: "img",
			"aria-label": alt,
			className: "h-full w-full"
		})
	});
}
// src/components/atoms/radio-group.tsx
/**
* @ployComponent
* @ployComponentId radio-group
* @ployComponentType component
* @ployComponentTags form, control, radio, measured
* @ployComponentDescription The measured radio group. Radix gives it arrow-key roving focus, which a set of styled divs does not have.
* @ployComponentStatus stable
*/
function RadioGroup({ className = "", ...props }) {
	return /* @__PURE__ */ jsx(RadioGroupPrimitive.Root, {
		"data-ploy-component": "radio-group",
		className: cn("grid gap-3", className),
		...props
	});
}
/**
* @ployComponent
* @ployComponentId radio-group-item
* @ployComponentType component
* @ployComponentTags form, control, radio, measured
* @ployComponentDescription One option. The checkbox's box drawn round — same border, same fill, same size.
* @ployComponentStatus stable
*/
function RadioGroupItem({ className = "", ...props }) {
	return /* @__PURE__ */ jsx(RadioGroupPrimitive.Item, {
		"data-ploy-component": "radio-group-item",
		className: cn("peer shrink-0 inline-flex items-center justify-center cursor-pointer", "size-[17px] border-[1px] border-ploy-input-border bg-ploy-input-background", "transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 outline-ploy-accent-primary", "disabled:cursor-not-allowed disabled:opacity-50", "data-[state=checked]:bg-[color:var(--ploy-choice-checked-background,var(--ploy-text-primary))] data-[state=checked]:border-[color:var(--ploy-choice-checked-border,var(--ploy-text-primary))]", "data-[state=checked]:text-[color:var(--ploy-choice-checked-mark,var(--ploy-background-primary))]", "rounded-full", className),
		...props,
		children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ jsx("span", { className: "block size-[7px] rounded-full bg-current" })
		})
	});
}
// src/components/atoms/reveal.tsx
var HIDDEN = {
	"fade-up": {
		opacity: 0,
		y: 24
	},
	"blur-up": {
		filter: "blur(10px)",
		y: 24
	},
	"fade-blur-up": {
		opacity: 0,
		filter: "blur(10px)",
		y: 24
	}
};
var EASE = [
	.22,
	1,
	.36,
	1
];
var DEFAULT_STAGGER = .08;
var RevealContext = createContext({
	effect: "fade-up",
	duration: .7
});
function variantsFor(effect, duration) {
	return {
		hidden: HIDDEN[effect],
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
			transition: {
				duration,
				ease: EASE
			},
			transitionEnd: { filter: "none" }
		}
	};
}
/**
* @ployComponent
* @ployComponentId reveal
* @ployComponentType component
* @ployComponentTags animation, motion, scroll, entrance, stagger
* @ployComponentDescription Scroll entrance: plays once in view, on load above the fold. effect: fade-up (default), blur-up, fade-blur-up. <Reveal> animates itself; <Reveal stagger> staggers its direct <RevealItem> children. Server HTML starts hidden, so mount the page with client:load. Honors reduced motion.
* @ployComponentStatus stable
*/
function Reveal({ effect = "fade-up", stagger: stagger$1 = false, delay = 0, duration = .7, className = "", viewport, ...props }) {
	const interval = stagger$1 === true ? DEFAULT_STAGGER : stagger$1 || 0;
	const own = variantsFor(effect, duration);
	const variants = interval ? {
		hidden: {},
		visible: { transition: { delayChildren: stagger(interval, { startDelay: delay }) } }
	} : {
		hidden: own.hidden,
		visible: {
			...own.visible,
			transition: {
				duration,
				ease: EASE,
				delay
			}
		}
	};
	return /* @__PURE__ */ jsx(MotionConfig, {
		reducedMotion: "never",
		children: /* @__PURE__ */ jsx(RevealContext.Provider, {
			value: {
				effect,
				duration
			},
			children: /* @__PURE__ */ jsx(motion.div, {
				"data-ploy-component": "reveal",
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					amount: .2,
					...viewport
				},
				variants,
				className: cn(className),
				...props
			})
		})
	});
}
/**
* @ployComponent
* @ployComponentId reveal-item
* @ployComponentType component
* @ployComponentTags animation, motion, stagger
* @ployComponentDescription One staggered child of <Reveal stagger>. Inherits effect and duration from the parent Reveal; pass effect to override one item. Put grid or flex item sizing on the RevealItem, since it is the element the layout sees.
* @ployComponentStatus stable
*/
function RevealItem({ effect, duration, className = "", ...props }) {
	const parent = useContext(RevealContext);
	return /* @__PURE__ */ jsx(motion.div, {
		variants: variantsFor(effect ?? parent.effect, duration ?? parent.duration),
		className: cn(className),
		...props
	});
}
// src/components/atoms/section.tsx
var sectionVariants = cva("w-full", {
	variants: { space: {
		default: "py-[40px] md:py-[48px]",
		condensed: "py-[20px] md:py-[24px]",
		flushTop: "pb-[40px] md:pb-[48px]",
		flushBottom: "pt-[40px] md:pt-[48px]",
		flush: "py-0"
	} },
	defaultVariants: { space: "default" }
});
/**
* @ployComponent
* @ployComponentId section
* @ployComponentType component
* @ployComponentTags layout, rhythm, responsive
* @ployComponentDescription Measured vertical rhythm: 40px mobile, 48px desktop, with condensed and flush variants. Surface, width and layout stay the section's own. Recommended for a band, not required. className overrides the rhythm — a band that differs takes py-3 lg:py-10, a footer measuring no bottom padding takes pb-0.
* @ployComponentStatus stable
*/
function Section({ space = "default", className = "", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "section", {
		"data-ploy-component": "section",
		className: cn(sectionVariants({ space }), className),
		...props
	});
}
// src/components/atoms/select.tsx
/** The select's own chevron. One glyph does not justify a dependency. */
function SelectChevron() {
	return /* @__PURE__ */ jsx("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 16 16",
		className: "pointer-events-none absolute right-[16px] top-1/2 h-4 w-4 -translate-y-1/2",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: /* @__PURE__ */ jsx("path", { d: "M4 6l4 4 4-4" })
	});
}
/**
* @ployComponent
* @ployComponentId select
* @ployComponentType component
* @ployComponentTags form, field, measured
* @ployComponentDescription The measured select. A native <select> with the chevron drawn over it, so keyboard and mobile behavior stay native.
* @ployComponentStatus stable
*/
function Select({ className = "", surface = "default", children, ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative w-full", surface === "light" && "text-ploy-neutral-dark", surface === "dark" && "text-ploy-neutral-light"),
		children: [/* @__PURE__ */ jsx("select", {
			"data-ploy-component": "select",
			className: cn(fieldVariants({
				kind: "fixed",
				surface
			}), "appearance-none pr-[48px]", className),
			...props,
			children
		}), /* @__PURE__ */ jsx(SelectChevron, {})]
	});
}
// src/components/atoms/separator.tsx
var separatorVariants = cva("shrink-0 border-0", {
	variants: {
		orientation: {
			horizontal: "h-[1px] w-full",
			vertical: "w-[1px] h-full self-stretch"
		},
		tone: {
			default: "bg-ploy-border-primary",
			inverse: "bg-ploy-border-primary"
		}
	},
	defaultVariants: {
		orientation: "horizontal",
		tone: "default"
	}
});
/**
* @ployComponent
* @ployComponentId separator
* @ployComponentType component
* @ployComponentTags divider, rule, measured
* @ployComponentDescription The measured rule between blocks. Carries no margin — space it at the call site.
* @ployComponentStatus stable
*/
function Separator({ orientation = "horizontal", tone = "default", className = "", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "div", {
		role: "separator",
		"aria-orientation": orientation ?? "horizontal",
		"data-ploy-component": "separator",
		className: cn(separatorVariants({
			orientation,
			tone
		}), className),
		...props
	});
}
// src/components/atoms/tag.tsx
var tagVariants = cva("inline-flex items-center justify-center whitespace-nowrap min-h-[24px] rounded-[9999px] px-[8px] py-[4px] text-sm font-medium", {
	variants: { tone: {
		neutral: "bg-ploy-neutral-primary-100 text-ploy-neutral-primary-900",
		accent: "bg-ploy-accent-primary-100 text-ploy-accent-primary-700",
		secondary: "bg-ploy-accent-secondary-100 text-ploy-accent-secondary-700",
		solid: "bg-ploy-accent-primary text-ploy-text-on-accent-primary",
		outline: "bg-transparent text-ploy-text-primary border border-ploy-border-primary"
	} },
	defaultVariants: { tone: "neutral" }
});
/**
* @ployComponent
* @ployComponentId tag
* @ployComponentType component
* @ployComponentTags badge, chip, label, measured
* @ployComponentDescription The measured pill. Tones are tints of existing tokens, never new hues.
* @ployComponentStatus stable
*/
function Tag({ tone = "neutral", className = "", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "span", {
		"data-ploy-component": "tag",
		className: cn(tagVariants({ tone }), className),
		...props
	});
}
// src/components/atoms/text.tsx
var textVariants = cva("", {
	variants: { variant: {
		body: "font-body text-[1.0625rem] leading-[1.3281rem] tracking-normal",
		small: "font-body text-sm leading-5 tracking-normal"
	} },
	defaultVariants: { variant: "body" }
});
/**
* @ployComponent
* @ployComponentId text
* @ployComponentType component
* @ployComponentTags typography, body-copy
* @ployComponentDescription The measured body-copy styles. Color is inherited from the section; alignment and weight are call-site utilities.
* @ployComponentStatus stable
*/
function Text({ variant = "body", as = "p", className = "", asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : as, {
		"data-ploy-component": "text",
		className: cn(textVariants({ variant }), className),
		...props
	});
}
// src/components/atoms/textarea.tsx
/**
* @ployComponent
* @ployComponentId textarea
* @ployComponentType component
* @ployComponentTags form, field, measured
* @ployComponentDescription The measured multi-line field. Grows instead of taking the fixed control height.
* @ployComponentStatus stable
*/
function Textarea({ className = "", surface = "default", ...props }) {
	return /* @__PURE__ */ jsx("textarea", {
		"data-ploy-component": "textarea",
		className: cn(fieldVariants({
			kind: "grown",
			surface
		}), className),
		...props
	});
}
// src/components/molecules/card.tsx
var cardVariants = cva([
	"block",
	"bg-ploy-background-primary",
	"text-ploy-text-primary",
	"rounded-[20px]"
], {
	variants: {
		variant: { default: [""] },
		tone: {
			default: "",
			inverse: "bg-ploy-background-inverse text-ploy-text-inverse [--ploy-text-primary:var(--ploy-text-inverse)] [--ploy-text-secondary:var(--ploy-text-inverse-secondary)] [--ploy-border-primary:var(--ploy-border-inverse)]"
		},
		elevation: {
			flat: "shadow-none",
			raised: "shadow-sm",
			overlay: "shadow-lg"
		},
		bordered: {
			true: "border border-ploy-border-primary",
			false: "border-0"
		},
		padding: {
			compact: "p-[18px]",
			default: "p-[24px]",
			comfortable: "p-[36px]",
			none: "p-0",
			source: ""
		},
		linked: {
			true: [
				"motion-safe:[transition-property:box-shadow,_opacity,_transform,_translate,_scale,_filter]",
				"motion-safe:[transition-duration:200ms]",
				"focus-visible:[outline:2px_solid_var(--ploy-accent-primary)]",
				"focus-visible:outline-offset-4",
				"motion-reduce:[transform:none]",
				"motion-reduce:[translate:none]",
				"motion-reduce:[scale:none]"
			],
			false: ""
		}
	},
	compoundVariants: [{
		linked: true,
		variant: "default",
		class: ["hover:opacity-[0.92]"]
	}],
	defaultVariants: {
		variant: "default",
		tone: "default",
		elevation: "flat",
		bordered: false,
		padding: "default"
	}
});
/**
* @ployComponent
* @ployComponentId card
* @ployComponentType component
* @ployComponentTags surface, container, measured
* @ployComponentDescription The measured surface. raised/overlay use measured shadows or subtle defaults when none are available, so a dropdown, a popover and a modal agree with the cards around them.
* @ployComponentStatus stable
*/
function Card({ as, href, variant, tone = "default", elevation = "flat", bordered = false, padding = "default", className = "", asChild = false, ...props }) {
	const linked = href !== void 0 || as === "a" || asChild && isValidElement(props.children) && props.children.props.href !== void 0;
	const selected = variant ?? "default";
	return /* @__PURE__ */ jsx(asChild ? Slot : as ?? (href !== void 0 ? "a" : "div"), {
		"data-ploy-component": "card",
		"data-ploy-card-variant": selected,
		"data-ploy-card-link": linked || void 0,
		"data-ploy-card-padding": padding,
		href,
		className: cn(cardVariants({
			variant: selected,
			tone,
			elevation,
			bordered,
			padding,
			linked
		}), className),
		...props
	});
}
// src/components/molecules/carousel.tsx
var carouselVariants = cva([
	"w-full min-w-0 [--swiper-theme-color:currentColor] [--swiper-navigation-size:40px]",
	"[&>:is(.swiper-button-prev,.swiper-button-next)]:p-[11px]",
	"[&>:is(.swiper-button-prev,.swiper-button-next)]:rounded-full",
	"[&>:is(.swiper-button-prev,.swiper-button-next)]:bg-ploy-neutral-light",
	"[&>:is(.swiper-button-prev,.swiper-button-next)]:text-ploy-neutral-dark",
	"[&>:is(.swiper-button-prev,.swiper-button-next)]:shadow-sm",
	"[&>:is(.swiper-button-prev,.swiper-button-next)]:focus-visible:outline-2",
	"[&>:is(.swiper-button-prev,.swiper-button-next)]:focus-visible:outline-offset-2"
]);
function CarouselControl({ direction, api, className, disabled, "aria-label": label, ...props }) {
	const previous = direction === "previous";
	const Arrow = previous ? ArrowLeft : ArrowRight;
	const [atEdge, setAtEdge] = useState(false);
	useEffect(() => {
		if (!api) return;
		const sync = () => setAtEdge(!api.params.loop && !api.params.rewind && (previous ? api.isBeginning : api.isEnd));
		const events = [
			"slideChange",
			"reachBeginning",
			"reachEnd",
			"fromEdge",
			"resize",
			"update"
		];
		sync();
		events.forEach((event) => api.on(event, sync));
		return () => {
			events.forEach((event) => api.off(event, sync));
		};
	}, [api, previous]);
	return /* @__PURE__ */ jsx("button", {
		...props,
		type: "button",
		"data-carousel-direction": direction,
		"aria-label": label ?? (previous ? "Previous slide" : "Next slide"),
		disabled: !api || disabled || atEdge,
		className: cn("inline-flex size-10 cursor-pointer items-center justify-center disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2", className),
		onClick: () => previous ? api?.slidePrev() : api?.slideNext(),
		children: /* @__PURE__ */ jsx(Arrow, {
			size: 18,
			className: "mx-auto shrink-0",
			"aria-hidden": "true"
		})
	});
}
/**
* @ployComponent
* @ployComponentId carousel-page-progress
* @ployComponentType component
* @ployComponentTags carousel, progress, finite
* @ployComponentDescription A growing page rail for a finite carousel. Supply its CarouselApi; style height, background and text color. Snap changes and resizing update the fill.
* @ployComponentStatus stable
*/
function CarouselPageProgress({ api, className, "aria-label": label = "Carousel position", ...props }) {
	const [value, setValue] = useState(0);
	useEffect(() => {
		if (!api) return;
		const sync = () => setValue(Math.min(100, 100 * (api.snapIndex + 1) / Math.max(1, api.snapGrid.length)));
		sync();
		api.on("snapIndexChange", sync);
		api.on("snapGridLengthChange", sync);
		api.on("resize", sync);
		return () => {
			api.off("snapIndexChange", sync);
			api.off("snapGridLengthChange", sync);
			api.off("resize", sync);
		};
	}, [api]);
	return /* @__PURE__ */ jsx("div", {
		...props,
		role: "progressbar",
		"aria-label": label,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-valuenow": value,
		className: cn("h-px w-full bg-ploy-border-primary", className),
		children: /* @__PURE__ */ jsx("div", {
			className: "h-full bg-current",
			style: { width: value + "%" }
		})
	});
}
/**
* @ployComponent
* @ployComponentId carousel
* @ployComponentType component
* @ployComponentTags slides, navigation, responsive
* @ployComponentDescription A styled slide track with accessible navigation and pagination. Supply CarouselSlide children and measured Swiper layout options.
* @ployComponentStatus stable
*/
function Carousel({ className, modules = [], loop = true, ...props }) {
	return /* @__PURE__ */ jsx(Swiper, {
		loop,
		modules: [
			A11y,
			Navigation,
			Pagination,
			...modules
		],
		"data-ploy-component": "carousel",
		className: cn(carouselVariants(), className),
		...props
	});
}
// src/components/molecules/faq.tsx
/** A row's id: its `value`, else its question. Faq and FaqItem must agree. */
function rowId(value, question) {
	return value ?? question.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
/** The row's own chevron. It has to rotate, which a font icon fights. */
function Chevron$1() {
	return /* @__PURE__ */ jsx("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 16 16",
		className: "h-4 w-4 shrink-0 transition-transform duration-[150ms] group-data-[state=open]/row:rotate-180",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: /* @__PURE__ */ jsx("path", { d: "M4 6l4 4 4-4" })
	});
}
/**
* @ployComponent
* @ployComponentId faq
* @ployComponentType component
* @ployComponentTags disclosure, accordion, faq
* @ployComponentDescription The measured accordion. Radix handles keyboard navigation and ARIA; type='single' opens one row at a time, 'multiple' allows several. The first row opens unless defaultValue says otherwise; defaultValue={[]} opens none.
* @ployComponentStatus stable
*/
function Faq({ children, type = "multiple", animate = false, defaultValue, value, onValueChange, className = "", ...props }) {
	const first = Children.toArray(children).find(isValidElement);
	const firstId = rowId(first?.props.value, first?.props.question ?? "");
	const defaults = defaultValue === void 0 ? firstId ? [firstId] : [] : Array.isArray(defaultValue) ? defaultValue : [defaultValue];
	return /* @__PURE__ */ jsx(Accordion.Root, {
		...type === "single" ? {
			type: "single",
			collapsible: true,
			defaultValue: defaults[0],
			value: Array.isArray(value) ? value[0] : value,
			onValueChange
		} : {
			type: "multiple",
			defaultValue: defaults,
			value: value === void 0 ? void 0 : Array.isArray(value) ? value : [value],
			onValueChange
		},
		"data-ploy-component": "faq",
		"data-animate": animate ? "" : void 0,
		className: cn("group/faq w-full", className),
		...props,
		children
	});
}
/**
* @ployComponent
* @ployComponentId faq-item
* @ployComponentType component
* @ployComponentTags disclosure, accordion, faq
* @ployComponentDescription One question and its answer. `value` is its id and defaults to the question, so a row opens whether or not you pass one.
* @ployComponentStatus stable
*/
function FaqItem({ value, question, icon, showIndicator = true, children, className = "", ...props }) {
	return /* @__PURE__ */ jsxs(Accordion.Item, {
		value: rowId(value, question),
		"data-ploy-component": "faq-item",
		className: cn("border-b border-ploy-border-primary last:border-b-0", className),
		...props,
		children: [/* @__PURE__ */ jsx(Accordion.Header, { children: /* @__PURE__ */ jsxs(Accordion.Trigger, {
			className: "group/row flex w-full cursor-pointer items-center justify-between gap-4 py-[16px] text-left text-[1.0625rem] font-bold",
			children: [/* @__PURE__ */ jsxs("span", {
				className: "flex min-w-0 items-center gap-3",
				children: [icon, question]
			}), showIndicator && /* @__PURE__ */ jsx(Chevron$1, {})]
		}) }), /* @__PURE__ */ jsx(Accordion.Content, {
			className: "overflow-hidden group-data-[animate]/faq:data-[state=closed]:animate-faq-up group-data-[animate]/faq:data-[state=open]:animate-faq-down",
			children: /* @__PURE__ */ jsx("div", {
				className: "pb-[16px] pr-8",
				children: typeof children === "string" ? /* @__PURE__ */ jsx(Text, { children }) : children
			})
		})]
	});
}
// src/components/molecules/marquee.tsx
var marqueeVariants = cva("flex min-w-0 min-h-0 gap-[var(--gap)] overflow-hidden [--duration:40s] [--gap:1rem] [--fade:3rem]", { variants: { vertical: {
	true: "flex-col",
	false: "flex-row"
} } });
/**
* @ployComponent
* @ployComponentId marquee
* @ployComponentType component
* @ployComponentTags motion, logos, ticker
* @ployComponentDescription Automatically repeats display content. Set --duration, --gap and --fade with className. Vertical mode requires a fixed height. Copies are decorative; use a carousel for interactive slides.
* @ployComponentStatus stable
*/
function Marquee({ className, reverse = false, pauseOnHover = false, paused = false, children, vertical = false, repeat = 4, fade = true, ...props }) {
	if (!Number.isSafeInteger(repeat) || repeat < 2) throw new RangeError("Marquee repeat must be an integer of at least 2.");
	return /* @__PURE__ */ jsx("div", {
		"data-ploy-component": "marquee",
		"data-vertical": vertical,
		"data-reverse": reverse,
		"data-pause-on-hover": pauseOnHover,
		"data-paused": paused,
		"data-fade": fade,
		className: cn(marqueeVariants({ vertical }), className),
		...props,
		children: Array.from({ length: repeat }, (_, index) => /* @__PURE__ */ jsx("div", {
			"data-marquee-group": "",
			"aria-hidden": index > 0 || void 0,
			inert: index > 0 || void 0,
			children
		}, index))
	});
}
// src/components/molecules/navbar.tsx
/** Unstyled interaction parts for sections that own their navigation shell. */
var NavbarParts = NavigationMenu;
var NavbarAccordion = Accordion;
var NavbarDialog = Dialog$1;
/**
* @ployComponent
* @ployComponentId navbar-skip-link
* @ployComponentType component
* @ployComponentTags navigation, accessibility
* @ployComponentDescription First focusable item in a site header. Pages provide <main id="main-content" tabIndex={-1}>; targetId can select another main landmark.
* @ployComponentStatus stable
*/
function NavbarSkipLink({ targetId = "main-content", label = "Skip to main content", className, ...props } = {}) {
	return /* @__PURE__ */ jsx("a", {
		...props,
		href: "#" + targetId,
		"data-ploy-component": "navbar-skip-link",
		className: cn("sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ploy-background-primary focus:px-4 focus:py-3 focus:text-ploy-text-primary focus:outline focus:outline-2 focus:outline-offset-2", className),
		children: label
	});
}
/** The row's chevron. It rotates, which a font icon fights. */
function Chevron() {
	return /* @__PURE__ */ jsx("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 16 16",
		className: "h-3.5 w-3.5 shrink-0 transition-transform duration-[150ms] group-data-[state=open]/trigger:rotate-180",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: /* @__PURE__ */ jsx("path", { d: "M4 6l4 4 4-4" })
	});
}
/**
* One treatment for a nav link and a dropdown trigger both, so a menu label
* cannot end up a different size from the plain link beside it.
*/
var navItemVariants = cva("inline-flex items-center gap-1 whitespace-nowrap no-underline bg-transparent border-0 cursor-pointer transition-colors duration-[150ms] text-sm font-bold font-body text-ploy-text-secondary hover:text-ploy-text-secondary focus-visible:outline-none focus-visible:underline");
/**
* How the bar sits on the page. A variant, like every other primitive's axis —
* the measurement picks the default, and a call site names the other one.
*/
var navbarVariants = cva("w-full bg-ploy-background-primary", {
	variants: { position: {
		sticky: "sticky top-0 z-50",
		fixed: "fixed inset-x-0 top-0 z-50",
		absolute: "absolute inset-x-0 top-0 z-50",
		static: "relative"
	} },
	defaultVariants: { position: "static" }
});
/**
* @ployComponent
* @ployComponentId navbar
* @ployComponentType component
* @ployComponentTags navigation, header, dropdown, measured
* @ployComponentDescription The measured bar. Radix NavigationMenu owns the open state, so one dropdown is open at a time and clicking the page closes it.
* @ployComponentStatus stable
*/
function Navbar({ brand, brandFlush = false, children, actions, mobile, position, className = "", ...props }) {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		if (!open) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const closeOnEscape = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", closeOnEscape);
		return () => {
			document.removeEventListener("keydown", closeOnEscape);
			document.body.style.overflow = previous;
		};
	}, [open]);
	return /* @__PURE__ */ jsxs("header", {
		className: cn(navbarVariants({ position }), className),
		...props,
		"data-ploy-component": "navbar",
		children: [/* @__PURE__ */ jsx(NavbarSkipLink, {}), /* @__PURE__ */ jsxs(NavigationMenu.Root, {
			delayDuration: 150,
			className: "w-full",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto flex h-[71px] lg:h-[84px] w-full max-w-[1139px] items-center justify-between gap-6 px-[20px] md:px-[24px]",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: cn("flex-none", brandFlush && "lg:-ml-[24px]"),
						children: brand
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hidden min-w-0 flex-1 lg:block [&>div]:!static",
						children: /* @__PURE__ */ jsx(NavigationMenu.List, {
							className: "flex w-full list-none items-center gap-[16px] p-0 m-0 justify-center",
							children
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						"data-nav-actions": true,
						className: "flex flex-none items-center gap-3",
						children: [actions, mobile ? /* @__PURE__ */ jsx("button", {
							type: "button",
							"data-mobile-menu-trigger": true,
							"aria-expanded": open,
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen(!open),
							className: "lg:hidden inline-flex h-10 w-10 items-center justify-center cursor-pointer text-ploy-text-secondary",
							children: /* @__PURE__ */ jsx("svg", {
								viewBox: "0 0 24 24",
								className: "h-5 w-5",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.5",
								strokeLinecap: "round",
								children: open ? /* @__PURE__ */ jsx("path", { d: "M6 6l12 12M18 6L6 18" }) : /* @__PURE__ */ jsx("path", { d: "M4 7h16M4 12h16M4 17h16" })
							})
						}) : null]
					})
				]
			}), mobile && open ? /* @__PURE__ */ jsx("div", {
				"data-mobile-menu": true,
				onClick: (event) => {
					if (event.target instanceof Element && event.target.closest("a[href]")) setOpen(false);
				},
				className: "fixed inset-0 top-[71px] z-40 overflow-y-auto overscroll-contain lg:hidden bg-ploy-background-primary px-[24px] py-6",
				children: mobile
			}) : null]
		})]
	});
}
/**
* @ployComponent
* @ployComponentId navbar-link
* @ployComponentType component
* @ployComponentTags navigation, header
* @ployComponentDescription A plain nav link — no dropdown. Same treatment as a menu trigger.
* @ployComponentStatus stable
*/
function NavbarLink({ href, children, className = "", ...props }) {
	return /* @__PURE__ */ jsx(NavigationMenu.Item, {
		className: "list-none",
		children: /* @__PURE__ */ jsx(NavigationMenu.Link, {
			href,
			"data-ploy-component": "navbar-link",
			className: cn(navItemVariants(), className),
			...props,
			children
		})
	});
}
var menuVariants = cva("group/menu list-none", {
	variants: { layout: {
		list: "relative",
		mega: "static"
	} },
	defaultVariants: { layout: "list" }
});
/**
* @ployComponent
* @ployComponentId navbar-menu
* @ployComponentType component
* @ployComponentTags navigation, header, dropdown
* @ployComponentDescription A nav item that opens a panel. Pass the sub-navigation as children; NavbarMenuLink renders one row of it.
* @ployComponentStatus stable
*/
function NavbarMenu({ label, layout = "list", panelClassName, children, className = "", ...props }) {
	return /* @__PURE__ */ jsxs(NavigationMenu.Item, {
		"data-layout": layout,
		className: menuVariants({ layout }),
		children: [/* @__PURE__ */ jsxs(NavigationMenu.Trigger, {
			"data-ploy-component": "navbar-menu",
			className: cn("group/trigger", navItemVariants(), className),
			...props,
			children: [label, /* @__PURE__ */ jsx(Chevron, {})]
		}), /* @__PURE__ */ jsx(NavigationMenu.Content, {
			className: "absolute top-full z-50 pt-2 left-0 group-data-[layout=mega]/menu:right-0 [[data-nav-actions]_&]:left-auto [[data-nav-actions]_&]:right-0 data-[state=closed]:animate-faq-up data-[state=open]:animate-faq-down",
			children: /* @__PURE__ */ jsx(Card, {
				elevation: "overlay",
				padding: "compact",
				className: cn("min-w-[220px]", panelClassName),
				children: /* @__PURE__ */ jsx("ul", {
					className: "m-0 flex list-none flex-col gap-1 p-0 group-data-[layout=mega]/menu:grid group-data-[layout=mega]/menu:grid-cols-3",
					children
				})
			})
		})]
	});
}
/**
* @ployComponent
* @ployComponentId navbar-menu-link
* @ployComponentType component
* @ployComponentTags navigation, header, dropdown
* @ployComponentDescription One row inside a dropdown panel.
* @ployComponentStatus stable
*/
function NavbarMenuLink({ href, children, description, className = "", ...props }) {
	return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(NavigationMenu.Link, {
		href,
		"data-ploy-component": "navbar-menu-link",
		className: cn("block whitespace-nowrap rounded-[8px] px-3 py-2 no-underline text-sm font-body text-ploy-text-secondary transition-colors duration-[150ms] hover:bg-ploy-background-secondary hover:text-ploy-text-secondary", className),
		...props,
		children: [children, description ? /* @__PURE__ */ jsx(Text, {
			as: "span",
			variant: "small",
			className: "block",
			children: description
		}) : null]
	}) });
}
/**
* @ployComponent
* @ployComponentId navbar-mobile-nav
* @ployComponentType component
* @ployComponentTags navigation, header, mobile, measured
* @ployComponentDescription The mobile panel's list. Wrap the sheet's contents in this so a group can open.
* @ployComponentStatus stable
*/
function NavbarMobileNav({ children, className = "", defaultValue, size = "nav", bordered = true, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Root, {
		type: "single",
		collapsible: true,
		defaultValue,
		"data-ploy-component": "navbar-mobile-nav",
		"data-size": size,
		"data-bordered": bordered ? "" : void 0,
		className: cn("group/mobilenav flex flex-col", className),
		...props,
		children
	});
}
/**
* @ployComponent
* @ployComponentId navbar-mobile-group
* @ployComponentType component
* @ployComponentTags navigation, header, mobile, disclosure, measured
* @ployComponentDescription A subnav on a phone: the label opens to reveal its links. Every desktop NavbarMenu needs one of these, or its links are unreachable on mobile.
* @ployComponentStatus stable
*/
function NavbarMobileGroup({ label, children, value, className = "", ...props }) {
	return /* @__PURE__ */ jsxs(Accordion.Item, {
		value: value ?? label.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
		"data-ploy-component": "navbar-mobile-group",
		className: cn("group-data-[bordered]/mobilenav:border-b group-data-[bordered]/mobilenav:border-ploy-border-primary", className),
		...props,
		children: [/* @__PURE__ */ jsx(Accordion.Header, { children: /* @__PURE__ */ jsxs(Accordion.Trigger, {
			className: "group/trigger flex w-full cursor-pointer items-center justify-between gap-4 py-3 text-left text-sm font-bold font-body text-ploy-text-secondary hover:text-ploy-text-secondary transition-colors duration-[150ms] group-data-[size=heading]/mobilenav:text-[1.5625rem]",
			children: [label, /* @__PURE__ */ jsx(Chevron, {})]
		}) }), /* @__PURE__ */ jsx(Accordion.Content, {
			className: "overflow-hidden data-[state=closed]:animate-faq-up data-[state=open]:animate-faq-down",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex flex-col pb-3",
				children
			})
		})]
	});
}
/**
* @ployComponent
* @ployComponentId navbar-mobile-link
* @ployComponentType component
* @ployComponentTags navigation, header, mobile, measured
* @ployComponentDescription One row in the mobile panel — a top-level destination, or a link inside a group.
* @ployComponentStatus stable
*/
function NavbarMobileLink({ href, children, className = "", ...props }) {
	return /* @__PURE__ */ jsx("a", {
		href,
		"data-ploy-component": "navbar-mobile-link",
		className: cn("block py-3 no-underline text-sm font-bold font-body text-ploy-text-secondary hover:text-ploy-text-secondary transition-colors duration-[150ms]", "group-data-[size=heading]/mobilenav:text-[1.5625rem]", className),
		...props,
		children
	});
}
// src/components/molecules/overlay.tsx
/**
* The enter/exit keyframes, by overlay. Utilities from tw-animate-css, which
* globals.css already imports.
*
* Applied through a prop rather than baked in: a source that changes state
* instantly should not have its modals fade, and the measurement for that is
* `overlayMotion`. Off, an overlay simply appears — Radix's open/closed state
* is unaffected either way, so no behaviour changes with it.
*/
var MOTION = {
	dialog: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
	scrim: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
	popover: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
	tooltip: "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
};
/** Lucide's `x`, inlined. One glyph does not justify a dependency. */
function CloseIcon({ className = "", ...props }) {
	return /* @__PURE__ */ jsxs("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 24 24",
		className: cn("size-4", className),
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...props,
		children: [/* @__PURE__ */ jsx("path", { d: "M18 6 6 18" }), /* @__PURE__ */ jsx("path", { d: "m6 6 12 12" })]
	});
}
/**
* @ployComponent
* @ployComponentId dialog
* @ployComponentType component
* @ployComponentTags overlay, modal, dialog
* @ployComponentDescription A modal. Radix owns the focus trap, Escape, scroll lock and the aria-modal wiring — none of which is visible in a screenshot when it is missing.
* @ployComponentStatus stable
*/
function Dialog(props) {
	return /* @__PURE__ */ jsx(Dialog$1.Root, { ...props });
}
function DialogTrigger(props) {
	return /* @__PURE__ */ jsx(Dialog$1.Trigger, {
		"data-ploy-component": "dialog-trigger",
		...props
	});
}
/**
* @ployComponent
* @ployComponentId dialog-content
* @ployComponentType component
* @ployComponentTags overlay, modal, dialog, measured
* @ployComponentDescription The modal panel: a Card at the page's overlay elevation, portalled so an ancestor with overflow:hidden cannot clip it.
* @ployComponentStatus stable
*/
function DialogContent({ children, className = "", animate = true, showCloseButton = true, closeLabel = "Close", overlayClassName = "", ...props }) {
	return /* @__PURE__ */ jsxs(Dialog$1.Portal, { children: [/* @__PURE__ */ jsx(Dialog$1.Overlay, {
		"data-ploy-component": "dialog-overlay",
		className: cn("fixed inset-0 z-[400] bg-black/50", animate && MOTION.scrim, overlayClassName)
	}), /* @__PURE__ */ jsx(Dialog$1.Content, {
		"data-ploy-component": "dialog-content",
		className: cn("fixed left-1/2 top-1/2 z-[401] w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2", "max-h-[85vh] overflow-y-auto outline-hidden", animate && MOTION.dialog, className),
		...props,
		children: /* @__PURE__ */ jsxs(Card, {
			elevation: "overlay",
			padding: "default",
			className: "relative w-full",
			children: [showCloseButton ? /* @__PURE__ */ jsxs(DialogClose, {
				className: "absolute right-4 top-4 cursor-pointer opacity-70 transition-opacity hover:opacity-100",
				children: [/* @__PURE__ */ jsx(CloseIcon, {}), /* @__PURE__ */ jsx("span", {
					className: "sr-only",
					children: closeLabel
				})]
			}) : null, children]
		})
	})] });
}
/**
* @ployComponent
* @ployComponentId dialog-header
* @ployComponentType component
* @ployComponentTags overlay, modal, dialog
* @ployComponentDescription Title and description. Layout only: no surface of its own and no rule under it — the Card is the surface.
* @ployComponentStatus stable
*/
function DialogHeader({ className = "", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-ploy-component": "dialog-header",
		className: cn("flex flex-col gap-2", className),
		...props
	});
}
/**
* @ployComponent
* @ployComponentId dialog-footer
* @ployComponentType component
* @ployComponentTags overlay, modal, dialog
* @ployComponentDescription The action row. Layout only: no surface and no divider above it.
* @ployComponentStatus stable
*/
function DialogFooter({ className = "", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-ploy-component": "dialog-footer",
		className: cn("mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end", className),
		...props
	});
}
/**
* @ployComponent
* @ployComponentId dialog-title
* @ployComponentType component
* @ployComponentTags overlay, modal, dialog
* @ployComponentDescription Required by Radix: without a Title the dialog has no accessible name and Radix warns on every open. Renders through Heading, so it sits on the measured scale.
* @ployComponentStatus stable
*/
function DialogTitle({ children, level = 3, className = "", ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Title, {
		asChild: true,
		...props,
		children: /* @__PURE__ */ jsx(Heading, {
			level,
			"data-ploy-component": "dialog-title",
			className,
			children
		})
	});
}
/**
* @ployComponent
* @ployComponentId dialog-description
* @ployComponentType component
* @ployComponentTags overlay, modal, dialog
* @ployComponentDescription The supporting line under the title. Renders through Text, at the page's secondary colour.
* @ployComponentStatus stable
*/
function DialogDescription({ children, className = "", ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Description, {
		asChild: true,
		...props,
		children: /* @__PURE__ */ jsx(Text, {
			"data-ploy-component": "dialog-description",
			className: cn("text-ploy-text-secondary", className),
			children
		})
	});
}
/**
* @ployComponent
* @ployComponentId dialog-close
* @ployComponentType component
* @ployComponentTags overlay, modal, dialog
* @ployComponentDescription Dismisses the dialog. Pass children to use your own control; with none it draws the X.
* @ployComponentStatus stable
*/
function DialogClose({ children, className = "", ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Close, {
		"data-ploy-component": "dialog-close",
		className: cn(children ? "" : "cursor-pointer opacity-70 transition-opacity hover:opacity-100", className),
		...props,
		children: children ?? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(CloseIcon, {}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})] })
	});
}
/**
* @ployComponent
* @ployComponentId popover
* @ployComponentType component
* @ployComponentTags overlay, popover
* @ployComponentDescription A non-modal panel anchored to its trigger. Closes on outside pointerdown and Escape, and restores focus.
* @ployComponentStatus stable
*/
function Popover(props) {
	return /* @__PURE__ */ jsx(PopoverPrimitive.Root, { ...props });
}
function PopoverTrigger(props) {
	return /* @__PURE__ */ jsx(PopoverPrimitive.Trigger, {
		"data-ploy-component": "popover-trigger",
		...props
	});
}
function PopoverAnchor(props) {
	return /* @__PURE__ */ jsx(PopoverPrimitive.Anchor, {
		"data-ploy-component": "popover-anchor",
		...props
	});
}
/**
* @ployComponent
* @ployComponentId popover-content
* @ployComponentType component
* @ployComponentTags overlay, popover, measured
* @ployComponentDescription The popover panel. shadcn's positioning and motion; the surface is this page's own Card at overlay elevation.
* @ployComponentStatus stable
*/
function PopoverContent({ children, className = "", align = "center", sideOffset = 4, animate = true, ...props }) {
	return /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(PopoverPrimitive.Content, {
		"data-ploy-component": "popover-content",
		align,
		sideOffset,
		className: cn("z-50 w-72 origin-(--radix-popover-content-transform-origin) outline-hidden", animate && MOTION.popover, className),
		...props,
		children: /* @__PURE__ */ jsx(Card, {
			elevation: "overlay",
			className: "w-full",
			children
		})
	}) });
}
/**
* @ployComponent
* @ployComponentId tooltip-provider
* @ployComponentType component
* @ployComponentTags overlay, tooltip
* @ployComponentDescription Radix requires one above any tooltip. Tooltip mounts its own, so this is only needed to share a delay across a page.
* @ployComponentStatus stable
*/
function TooltipProvider({ delayDuration = 0, ...props }) {
	return /* @__PURE__ */ jsx(TooltipPrimitive.Provider, {
		delayDuration,
		...props
	});
}
/**
* @ployComponent
* @ployComponentId tooltip
* @ployComponentType component
* @ployComponentTags overlay, tooltip
* @ployComponentDescription A label on hover and on keyboard focus. Wraps its own Provider so a single tooltip works without one.
* @ployComponentStatus stable
*/
function Tooltip(props) {
	return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(TooltipPrimitive.Root, { ...props }) });
}
function TooltipTrigger(props) {
	return /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, {
		"data-ploy-component": "tooltip-trigger",
		...props
	});
}
/**
* @ployComponent
* @ployComponentId tooltip-content
* @ployComponentType component
* @ployComponentTags overlay, tooltip, measured
* @ployComponentDescription The label itself. NOT a card: a tooltip is a label, so it takes the page's inverse surface rather than the overlay elevation.
* @ployComponentStatus stable
*/
function TooltipContent({ className = "", sideOffset = 0, children, animate = true, ...props }) {
	return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(TooltipPrimitive.Content, {
		"data-ploy-component": "tooltip-content",
		sideOffset,
		className: cn("bg-ploy-background-inverse text-ploy-text-inverse", "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-[8px] px-3 py-1.5 text-sm text-balance", animate && MOTION.tooltip, className),
		...props,
		children: [children, /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "bg-ploy-background-inverse fill-ploy-background-inverse z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })]
	}) });
}
// src/components/molecules/site-footer-links.tsx
var footerPrimaryLinks = [
	{
		label: "About us",
		href: "https://investia.ca/about-investia"
	},
	{
		label: "Contact us",
		href: "https://investia.ca/contact-us"
	},
	{
		label: "Careers",
		href: "https://investia.ca/career"
	}
];
var footerSecondaryLinks = [
	{
		label: "Connect to the Client Portal",
		href: "https://client.investia.ca/",
		external: true
	},
	{
		label: "Find an advisor",
		href: "/find-an-advisor"
	},
	{
		label: "Advice Zone",
		href: "https://ia.ca/advice-zone",
		external: true
	},
	{
		label: "Economic news",
		href: "https://ia.ca/economic-publications",
		external: true
	}
];
var footerLegalLinks = [
	{
		label: "Unclaimed property",
		href: "https://investia.ca/unclaimed-property"
	},
	{
		label: "Legal and compliance",
		href: "https://investia.ca/legal-and-compliance"
	},
	{
		label: "Terms of use",
		href: "https://investia.ca/terms-conditions"
	},
	{
		label: "Privacy",
		href: "https://ia.ca/protection-personal-information",
		external: true
	},
	{
		label: "Accessibility",
		href: "https://ia.ca/accessibility",
		external: true
	},
	{
		label: "Sitemap",
		href: "https://investia.ca/site-map"
	},
	{
		label: "Investia Administrative Fee Schedule",
		href: "https://investia.ca/grille-frais"
	},
	{
		label: "iA Financial Group",
		href: "https://ia.ca/individuals",
		external: true
	},
	{
		label: "Cookies preference",
		href: "#cookie-preferences",
		cookiePreferences: true
	}
];
var footerBadges = [{
	label: "App Store",
	alt: "App Store",
	src: "/images/2fd22d0a-app-store-en.webp",
	href: "https://apps.apple.com/app/apple-store/id1549342167?pt=1948947&ct=gcx-adopt-en-investia-footer&mt=8"
}, {
	label: "Google Play",
	alt: "Google Play",
	src: "/images/a08910f6-google-play-en.webp",
	href: "https://play.google.com/store/apps/details?id=ca.investia.mobile&hl=en&referrer=utm_source%3Dinvestia.ca%26utm_medium%3Dreferral%26utm_term%3Dgcx-adopt-en-investia-footer%26utm_content%3Dfooter%26utm_campaign%3Dgcx-adopt-en-investia-footer"
}];
var ringClass = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";
var focusClass = `${ringClass} hover:underline`;
var lightHover = "hover:text-[#dbf0ff]";
/** Typed, always-visible footer destinations, including the cookie-manager trigger. */
function SiteFooterLinks({ items, variant = "secondary", onCookiePreferences }) {
	const primary = variant === "primary";
	const legal = variant === "legal";
	return /* @__PURE__ */ jsx("ul", {
		className: legal ? "m-0 flex list-none flex-col flex-wrap gap-x-8 gap-y-4 p-0 md:flex-row md:items-center" : `m-0 flex list-none flex-col p-0 ${primary ? "gap-6" : "gap-5"}`,
		children: items.map((item) => /* @__PURE__ */ jsx("li", {
			className: `min-w-0 ${primary ? "border-b border-white/25 pb-6" : ""}`,
			children: /* @__PURE__ */ jsx(Text, {
				as: "div",
				className: `m-0 ${primary ? "font-heading text-[21px] leading-[23px] font-bold" : legal ? "text-[14px] leading-[23px] font-semibold" : "text-[17px] leading-[23px] font-bold"}`,
				children: item.cookiePreferences ? /* @__PURE__ */ jsx(Button, {
					as: "button",
					type: "button",
					variant: "ghost",
					tone: "light",
					onClick: onCookiePreferences,
					className: `h-auto min-h-[23px] justify-start rounded-none border-0 p-0 text-[14px] leading-[23px] font-semibold whitespace-normal ${focusClass}`,
					children: item.label
				}) : /* @__PURE__ */ jsxs(Link, {
					tone: "inherit",
					href: item.href,
					target: item.external ? "_blank" : void 0,
					rel: item.external ? "noopener noreferrer" : void 0,
					"aria-label": item.ariaLabel ?? (item.external ? `${item.label} opens in a new tab` : void 0),
					lang: item.lang,
					className: `inline items-baseline ${focusClass} ${legal ? "" : lightHover}`,
					children: [item.label, item.external && /* @__PURE__ */ jsx(ExternalLink, {
						"aria-hidden": "true",
						size: 12,
						className: "ml-1 inline-block align-baseline"
					})]
				})
			})
		}, `${item.href}-${item.label}`))
	});
}
/** Store badges retain their captured dimensions and wrap instead of shrinking. */
function SiteFooterApp({ title, badges, benefits }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-w-0 max-w-[300px]",
		children: [
			/* @__PURE__ */ jsx(Text, {
				className: "m-0 mb-4 text-[17px] leading-[22px] font-bold",
				children: title
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mb-4 flex min-h-[45px] flex-wrap items-start gap-2",
				children: badges.map((badge) => /* @__PURE__ */ jsx(Link, {
					href: badge.href,
					"aria-label": badge.label,
					tone: "inherit",
					className: `inline-flex flex-none ${ringClass}`,
					children: /* @__PURE__ */ jsx("img", {
						src: badge.src,
						alt: badge.alt,
						width: 135,
						height: 40,
						className: "h-10 w-[135px]"
					})
				}, badge.href))
			}),
			/* @__PURE__ */ jsx(Text, {
				className: "m-0 text-[14px] leading-[23px] font-semibold",
				children: /* @__PURE__ */ jsxs(Link, {
					tone: "inherit",
					href: benefits.href,
					className: `group inline-flex items-center gap-1 ${ringClass} ${lightHover}`,
					children: [/* @__PURE__ */ jsx("span", {
						className: "underline underline-offset-2 group-hover:no-underline",
						children: benefits.label
					}), /* @__PURE__ */ jsx(ArrowRight, {
						size: 15,
						"aria-hidden": "true"
					})]
				})
			})
		]
	});
}
function SiteFooterSocials({ items }) {
	return /* @__PURE__ */ jsx("ul", {
		className: "m-0 flex list-none flex-wrap items-center gap-x-8 gap-y-4 p-0",
		children: items.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
			tone: "inherit",
			href: item.href,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": item.ariaLabel ?? `${item.label} opens in a new tab`,
			className: `flex size-9 items-center justify-center transition-colors duration-[650ms] ${ringClass} ${lightHover}`,
			children: item.icon
		}) }, item.href))
	});
}
// src/components/molecules/table.tsx
/**
* @ployComponent
* @ployComponentId table
* @ployComponentType component
* @ployComponentTags data, table, measured
* @ployComponentDescription Table with horizontal overflow, shared body type, and measured rules and surfaces.
* @ployComponentStatus stable
* The brand's table: shadcn's structure carrying this page's own measured
* type, rules and surfaces rather than that library's neutral palette.
*
* It sets NO type: a table renders the page's body copy, and sizing it here
* took the smallest measured variant, so tabular data read as fine print.
*
* The source has no table, so these are DERIVED: rules from its measured border token, cell padding from half its card inset. Adjust freely — nothing here was measured.
*
* The wrapper scrolls horizontally rather than letting a wide table push the
* page sideways, which is the defect every hand-written table ships with.
*/
function Table({ hoverRows = false, className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-ploy-component": "table-container",
		className: "relative w-full overflow-x-auto",
		children: /* @__PURE__ */ jsx("table", {
			"data-ploy-component": "table",
			"data-hover-rows": hoverRows ? "" : void 0,
			className: cn("group/table w-full caption-bottom border-collapse text-ploy-text-primary", className),
			...props
		})
	});
}
/**
* @ployComponent
* @ployComponentId table-header
* @ployComponentType component
* @ployComponentTags data, table
* @ployComponentDescription The head row group. Its rule is the brand's border token.
* @ployComponentStatus stable
*/
function TableHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("thead", {
		"data-ploy-component": "table-header",
		className: cn("[&_tr]:border-b [&_tr]:border-ploy-border-primary", className),
		...props
	});
}
/**
* @ployComponent
* @ployComponentId table-body
* @ployComponentType component
* @ployComponentTags data, table
* @ployComponentDescription The body row group. The last row drops its rule so the table does not end on a line.
* @ployComponentStatus stable
*/
function TableBody({ className, ...props }) {
	return /* @__PURE__ */ jsx("tbody", {
		"data-ploy-component": "table-body",
		className: cn("[&_tr:last-child]:border-0", className),
		...props
	});
}
/**
* @ployComponent
* @ployComponentId table-footer
* @ployComponentType component
* @ployComponentTags data, table
* @ployComponentDescription A totals row group, on the brand's alternate surface.
* @ployComponentStatus stable
*/
function TableFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("tfoot", {
		"data-ploy-component": "table-footer",
		className: cn("border-t border-ploy-border-primary bg-ploy-background-secondary font-medium [&>tr]:last:border-b-0", className),
		...props
	});
}
/**
* @ployComponent
* @ployComponentId table-row
* @ployComponentType component
* @ployComponentTags data, table
* @ployComponentDescription One row. Rules are a 1px hairline — a measured section divider is far too heavy here.
* @ployComponentStatus stable
*/
function TableRow({ className, ...props }) {
	return /* @__PURE__ */ jsx("tr", {
		"data-ploy-component": "table-row",
		className: cn("border-b border-ploy-border-primary transition-colors group-data-[hover-rows]/table:hover:bg-ploy-background-secondary data-[state=selected]:bg-ploy-background-secondary", className),
		...props
	});
}
/**
* @ployComponent
* @ployComponentId table-head
* @ployComponentType component
* @ployComponentTags data, table
* @ployComponentDescription A column heading. Left-aligned and emphasised, never a smaller grey.
* @ployComponentStatus stable
*/
function TableHead({ className, ...props }) {
	return /* @__PURE__ */ jsx("th", {
		"data-ploy-component": "table-head",
		className: cn("px-[12px] py-[8px] text-left align-middle whitespace-nowrap font-medium text-ploy-text-primary", className),
		...props
	});
}
/**
* @ployComponent
* @ployComponentId table-cell
* @ployComponentType component
* @ployComponentTags data, table
* @ployComponentDescription One cell, at the measured inset.
* @ployComponentStatus stable
*/
function TableCell({ className, ...props }) {
	return /* @__PURE__ */ jsx("td", {
		"data-ploy-component": "table-cell",
		className: cn("px-[12px] py-[8px] align-middle", className),
		...props
	});
}
/**
* @ployComponent
* @ployComponentId table-caption
* @ployComponentType component
* @ployComponentTags data, table
* @ployComponentDescription The table's caption, in the brand's secondary text colour.
* @ployComponentStatus stable
*/
function TableCaption({ className, ...props }) {
	return /* @__PURE__ */ jsx("caption", {
		"data-ploy-component": "table-caption",
		className: cn("mt-4 text-ploy-text-secondary", className),
		...props
	});
}
// src/components/molecules/tabs.tsx
var tabsVariants = cva("flex min-w-0 flex-col gap-6", {
	variants: { variant: { default: "" } },
	defaultVariants: { variant: "default" }
});
var TabVariant = createContext("default");
var tabOrientations = { default: {
	desktop: "horizontal",
	mobile: "horizontal"
} };
cva("", {
	variants: { variant: { default: "" } },
	defaultVariants: { variant: "default" }
});
cva("", {
	variants: { variant: { default: "" } },
	defaultVariants: { variant: "default" }
});
var tabsPreviewClasses = {};
/**
* @ployComponent
* @ployComponentId tabs
* @ployComponentType component
* @ployComponentTags tabs, switcher, measured
* @ployComponentDescription The measured tab row. Radix owns the roving arrow keys, the ARIA wiring and the one-panel-at-a-time rule.
* @ployComponentStatus stable
*/
function Tabs({ variant = "default", className = "", ...props }) {
	return /* @__PURE__ */ jsx(TabVariant.Provider, {
		value: variant ?? "default",
		children: /* @__PURE__ */ jsx(TabsPrimitive.Root, {
			orientation: tabOrientations[variant ?? "default"].desktop,
			"data-ploy-component": "tabs",
			"data-ploy-tabs-variant": variant ?? "default",
			className: cn(tabsVariants({ variant }), className),
			...props
		})
	});
}
/**
* @ployComponent
* @ployComponentId tabs-list
* @ployComponentType component
* @ployComponentTags tabs, switcher, measured
* @ployComponentDescription The row of triggers, at the source's own measured treatment.
* @ployComponentStatus stable
*/
function TabsList({ className = "", ...props }) {
	useContext(TabVariant);
	return /* @__PURE__ */ jsx(TabsPrimitive.List, {
		"data-ploy-component": "tabs-list",
		className: cn("inline-flex min-w-0 max-w-full overflow-x-auto items-center gap-[4px]", className),
		...props
	});
}
/**
* @ployComponent
* @ployComponentId tabs-trigger
* @ployComponentType component
* @ployComponentTags tabs, switcher, measured
* @ployComponentDescription One tab. Marks itself active the way the source marks its own.
* @ployComponentStatus stable
*/
function TabsTrigger({ className = "", children, description, ...props }) {
	useContext(TabVariant);
	return /* @__PURE__ */ jsx(TabsPrimitive.Trigger, {
		"data-ploy-component": "tabs-trigger",
		className: cn("inline-flex shrink-0 items-center justify-center whitespace-nowrap cursor-pointer", "px-[24px] py-[10px] text-[1.0625rem] leading-6 font-bold", "text-ploy-text-secondary transition-colors disabled:pointer-events-none disabled:opacity-50", "data-[state=active]:text-ploy-button-secondary-text", "focus-visible:outline-2 focus-visible:outline-offset-2 outline-ploy-accent-primary", "rounded-[9999px] data-[state=active]:bg-ploy-button-secondary-background", className),
		...props,
		children: description ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
			"data-ploy-tab-label": "",
			children
		}), /* @__PURE__ */ jsx("span", {
			"data-ploy-tab-description": "",
			children: description
		})] }) : children
	});
}
/**
* @ployComponent
* @ployComponentId tabs-content
* @ployComponentType component
* @ployComponentTags tabs, switcher
* @ployComponentDescription One panel. Radix mounts only the active one.
* @ployComponentStatus stable
*/
function TabsContent({ className = "", ...props }) {
	return /* @__PURE__ */ jsx(TabsPrimitive.Content, {
		"data-ploy-component": "tabs-content",
		className: cn("outline-none", className),
		...props
	});
}
// src/components/organisms/global/body-3-regulatory-logo.tsx
/**
* @ployComponent
* @ployComponentId body-3-regulatory-logo
* @ployComponentType section
* @ployComponentTags regulatory, logo, link
* @ployComponentDescription Dark-blue regulatory strip linking the CIRO logo to its official website at the bottom of the captured source.
* @ployComponentStatus stable
*/
function Body3RegulatoryLogo({ imageSrc = "/images/10d55ebb-ciro-regulated.webp", imageAlt = "Canadian Investment Regulatory Organization (CIRO)", href = "https://www.ciro.ca/" } = {}) {
	return /* @__PURE__ */ jsx(Section, {
		space: "flush",
		className: "bg-ploy-background-inverse py-[36px] md:py-[48px]",
		"data-ploy-component": "body-3-regulatory-logo",
		children: /* @__PURE__ */ jsx(Container, {
			className: "px-[16px] md:px-[32px]",
			children: /* @__PURE__ */ jsx(Link, {
				href,
				tone: "inherit",
				className: "inline-block h-[112px] w-[344px] max-w-full rounded-[8px] bg-ploy-background-primary p-[12px] align-top focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ploy-accent-primary",
				children: /* @__PURE__ */ jsx(Image, {
					src: imageSrc,
					alt: imageAlt,
					rounded: "none",
					fit: "contain",
					className: "h-auto w-[320px] max-w-full"
				})
			})
		})
	});
}
// src/components/organisms/global/site-footer.tsx
var defaultSocialLinks = [{
	label: "LinkedIn",
	href: "https://www.linkedin.com/company/investiafinancialservices",
	icon: /* @__PURE__ */ jsx(ICONS.socialLinkedin, {})
}, {
	label: "Facebook",
	href: "https://www.facebook.com/InvestiaFinancialServices/",
	icon: /* @__PURE__ */ jsx(ICONS.socialFacebook, {})
}];
var defaultBenefits = {
	label: "Discover the benefits",
	href: "https://investia.ca/mobile-app"
};
function openCookiePreferences() {
	const manager = window.OneTrust;
	if (manager?.ToggleInfoDisplay) manager.ToggleInfoDisplay();
	else window.dispatchEvent(new CustomEvent("investia:cookie-preferences"));
}
/**
* @ployComponent
* @ployComponentId site-footer
* @ployComponentType section
* @ployComponentTags footer, links, app, legal
* @ployComponentDescription Investia's dark page footer with destination groups, app badges, social links, legal links and subsidiary information.
* @ployComponentStatus stable
*
* Defaults reproduce the captured English footer. Link arrays, social artwork,
* badge src/alt, app labels, slogan, subsidiary copy and copyright label are
* editable; explicit empty arrays or strings remain empty. The year starts at
* the captured 2026 value and updates after mount.
*
* Desktop uses three flexible columns inside a 1140px inner container; mobile
* keeps all groups visible in source order with 16px gutters. Legal links and
* badges wrap in narrower hosts. This footer supplies its own opaque inverse
* surface and normal-flow spacing; the source has no sticky artwork/reveal
* band, newsletter form or adjacent CTA inside this region.
*
* Connect onCookiePreferences to the host consent manager. By default the
* trigger invokes OneTrust when available, otherwise dispatches the window
* event `investia:cookie-preferences` for the host to handle. No form handler
* is needed. External destinations retain new-tab labeling and focus states.
*/
function SiteFooter({ primaryLinks = footerPrimaryLinks, secondaryLinks = footerSecondaryLinks, legalLinks = footerLegalLinks, socialLinks = defaultSocialLinks, appTitle = "Download the Investia app", appBadges = footerBadges, appBenefits = defaultBenefits, slogan = "Get ahead", subsidiaryNote = "Investia Financial Services Inc. is a wholly-owned subsidiary of Industrial Alliance Insurance and Financial Services Inc., a life and health insurance company which operates under the trade name iA Financial Group.", copyrightLabel = "Investia Financial Services - All rights reserved", onCookiePreferences = openCookiePreferences, className = "" } = {}) {
	const [year, setYear] = useState(2026);
	useEffect(() => {
		setYear((/* @__PURE__ */ new Date()).getFullYear());
	}, []);
	return /* @__PURE__ */ jsx("footer", {
		"data-ploy-component": "site-footer",
		className: `relative z-[300] bg-ploy-neutral-inverse py-12 text-ploy-neutral-light md:py-[60px] ${className}`,
		children: /* @__PURE__ */ jsxs(Container, {
			className: "px-4 md:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid min-w-0 grid-cols-1 md:grid-cols-3 md:gap-x-9 md:pb-9",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mb-9 min-w-0 md:mb-0",
							children: /* @__PURE__ */ jsx(SiteFooterLinks, {
								items: primaryLinks,
								variant: "primary"
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mb-[72px] min-w-0 md:mb-0",
							children: /* @__PURE__ */ jsx(SiteFooterLinks, { items: secondaryLinks })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mb-[74px] min-w-0 md:mb-0",
							children: /* @__PURE__ */ jsx(SiteFooterApp, {
								title: appTitle,
								badges: appBadges,
								benefits: appBenefits
							})
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mb-9 border-b border-white/25 pb-9",
					children: /* @__PURE__ */ jsx(SiteFooterSocials, { items: socialLinks })
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mb-9",
					children: /* @__PURE__ */ jsx(SiteFooterLinks, {
						items: legalLinks,
						variant: "legal",
						onCookiePreferences
					})
				}),
				/* @__PURE__ */ jsx(Text, {
					className: "m-0 mb-9 font-heading text-[32px] leading-[41.28px] font-normal",
					children: slogan
				}),
				/* @__PURE__ */ jsx(Text, {
					className: "m-0 mb-3 text-[12px] leading-[15.48px] font-normal",
					children: subsidiaryNote
				}),
				/* @__PURE__ */ jsxs(Text, {
					className: "m-0 text-[12px] leading-[17px] font-normal",
					children: [
						"© ",
						year,
						" ",
						copyrightLabel
					]
				})
			]
		})
	});
}
// src/components/organisms/global/site-nav-content.tsx
var primaryLinks = [
	{
		label: "The Investia experience",
		href: "/investia-experience"
	},
	{
		label: "Products and services",
		href: "/products-and-services"
	},
	{
		label: "Find an advisor",
		href: "/find-an-advisor"
	}
];
var accountLinks = [{
	label: "Advisor Centre",
	href: "https://logins.investia.ca/SAMLAuth/Login?SAMLRequest=fVA9b8JADN35FdHt5D5CCLGSSEgwRKJLW3XogpxwKpGCj54viJ%2FfHK3UTvXgwe89%2Bz1X2ymc6dl%2BTpZDspvbQBgGR7U4h3BlkHJ0HwNxOtAtopj2KF%2B2T4colIeIiaTd1eJ46gx2urR9sdHKrAp1ynHVoVrbdaazIitVXsxU5sm2xAEp1MIovVmqcmnyV51BrsGYd5G8Wc8PCyZVIrlfRuJaTJ7AIQ8MhBfLEHqINmDmwNW74Ho3imaRzFURa3gc8t9qmAf%2Fb0Bm62Nu0URa%2BxN2fw8eyYZK%2Fq5sFpX8%2B7XmCw%3D%3D&RelayState=48c11ede24de214ae9f46831623a563bfc4ff280"
}, {
	label: "Client Portal",
	href: "https://client.investia.ca/"
}];
var preventHover = (event) => event.preventDefault();
function SiteNavSearch({ placeholder = "Search", inputLabel = "Search input", submitLabel = "Search", action = "https://investia.ca/search" } = {}) {
	return /* @__PURE__ */ jsxs("form", {
		role: "search",
		action,
		method: "get",
		className: "relative h-10 w-[192px] shrink-0 overflow-hidden rounded-[4px] border border-[#7f7f7f] bg-ploy-background-primary",
		children: [/* @__PURE__ */ jsx(Input, {
			type: "search",
			name: "q",
			"aria-label": inputLabel,
			placeholder,
			className: "h-[38px] w-full border-0 pr-[38px]"
		}), /* @__PURE__ */ jsx(Button, {
			as: "button",
			type: "submit",
			variant: "ghost",
			"aria-label": submitLabel,
			className: "absolute inset-y-0 right-0 h-[38px] w-[38px] rounded-none border-0 p-0",
			children: /* @__PURE__ */ jsx(Search, { size: 16 })
		})]
	});
}
function SiteNavPortal({ title = "Client Portal", description = "Already a client? Register now and access your portfolio online.", href = "https://client.investia.ca/", actionLabel = "Create account", informationLabel = "About multi-factor authentication (MFA)", informationHref = "https://investia.ca/multi-factor-authentication-clients" } = {}) {
	return /* @__PURE__ */ jsxs("div", {
		className: "max-w-[470px]",
		children: [/* @__PURE__ */ jsxs("a", {
			href,
			className: "block no-underline",
			children: [
				/* @__PURE__ */ jsx(Heading, {
					level: 1,
					className: "text-ploy-accent-primary",
					children: title
				}),
				/* @__PURE__ */ jsx(Text, {
					className: "mt-6 text-ploy-text-primary",
					children: description
				}),
				/* @__PURE__ */ jsxs(Text, {
					as: "span",
					className: "mt-6 inline-flex items-center gap-1 font-bold text-ploy-accent-primary",
					children: [actionLabel, /* @__PURE__ */ jsx(ExternalLink, { size: 17 })]
				})
			]
		}), /* @__PURE__ */ jsx("a", {
			href: informationHref,
			className: "mt-5 block max-w-[300px] text-ploy-accent-primary",
			children: /* @__PURE__ */ jsx(Text, {
				className: "font-bold leading-[22px]",
				children: informationLabel
			})
		})]
	});
}
function SiteNavConnect({ links = accountLinks, label = "Connect", navLabel = "Account navigation" } = {}) {
	return /* @__PURE__ */ jsx(NavbarParts.Root, {
		className: "relative",
		"aria-label": navLabel,
		children: /* @__PURE__ */ jsx(NavbarParts.List, {
			className: "m-0 list-none p-0",
			children: /* @__PURE__ */ jsxs(NavbarParts.Item, {
				className: "relative",
				children: [/* @__PURE__ */ jsx(NavbarParts.Trigger, {
					asChild: true,
					onPointerMove: preventHover,
					onPointerLeave: preventHover,
					children: /* @__PURE__ */ jsxs(Button, {
						as: "button",
						variant: "primary",
						className: "h-10 rounded-none px-4 text-sm leading-[16px]",
						children: [/* @__PURE__ */ jsx(Text, {
							as: "span",
							variant: "small",
							className: "font-bold leading-[16px]",
							children: label
						}), /* @__PURE__ */ jsx(LockKeyhole, {
							size: 14,
							className: "shrink-0"
						})]
					})
				}), /* @__PURE__ */ jsx(NavbarParts.Content, {
					onPointerMove: preventHover,
					onPointerLeave: preventHover,
					className: "absolute left-0 top-[60px] z-50 w-[137px] overflow-hidden rounded-[4px] border border-[#7f7f7f] bg-ploy-background-primary",
					children: links.map((link) => /* @__PURE__ */ jsx(NavbarParts.Link, {
						href: link.href,
						className: "flex h-10 items-center px-4 hover:bg-ploy-background-secondary",
						children: /* @__PURE__ */ jsx(Text, {
							as: "span",
							variant: "small",
							className: "whitespace-nowrap font-bold text-ploy-text-primary",
							children: link.label
						})
					}, link.label))
				})]
			})
		})
	});
}
function SiteNavMobileAccounts({ links = accountLinks, advisor = {
	label: "Advisor opportunities",
	href: "https://investia.ca/advisor-opportunities"
}, language = {
	label: "FR",
	href: "/accueil",
	lang: "fr"
}, connectLabel = "Connect" } = {}) {
	const row = "flex h-10 w-full items-center justify-center border-b border-white/25 px-4 text-white hover:bg-ploy-accent-primary hover:underline";
	return /* @__PURE__ */ jsxs("div", {
		className: "shrink-0 bg-[#01233f]",
		children: [
			/* @__PURE__ */ jsx("a", {
				href: advisor.href,
				className: row,
				children: /* @__PURE__ */ jsx(Text, {
					as: "span",
					variant: "small",
					className: "font-bold leading-4",
					children: advisor.label
				})
			}),
			/* @__PURE__ */ jsx(NavbarAccordion.Root, {
				type: "single",
				collapsible: true,
				children: /* @__PURE__ */ jsxs(NavbarAccordion.Item, {
					value: "connect",
					children: [/* @__PURE__ */ jsx(NavbarAccordion.Header, { children: /* @__PURE__ */ jsxs(NavbarAccordion.Trigger, {
						className: `${row} data-[state=open]:bg-ploy-accent-primary`,
						children: [/* @__PURE__ */ jsx(Text, {
							as: "span",
							variant: "small",
							className: "font-bold leading-4",
							children: connectLabel
						}), /* @__PURE__ */ jsx(LockKeyhole, {
							size: 14,
							className: "ml-2"
						})]
					}) }), /* @__PURE__ */ jsx(NavbarAccordion.Content, { children: links.map((link) => /* @__PURE__ */ jsx("a", {
						href: link.href,
						className: row,
						children: /* @__PURE__ */ jsx(Text, {
							as: "span",
							variant: "small",
							className: "font-bold leading-4",
							children: link.label
						})
					}, link.label)) })]
				})
			}),
			/* @__PURE__ */ jsx("a", {
				href: language.href,
				lang: language.lang,
				"aria-label": language.ariaLabel,
				className: row,
				children: /* @__PURE__ */ jsx(Text, {
					as: "span",
					variant: "small",
					className: "font-bold leading-4",
					children: language.label
				})
			})
		]
	});
}
// src/components/organisms/global/site-nav.tsx
/**
* @ployComponent
* @ployComponentId site-nav
* @ployComponentType section
* @ployComponentTags navigation, desktop, mobile
* @ployComponentDescription Investia's white brand bar, navy utility strip, account dropdown and viewport mobile menu.
* @ployComponentStatus stable
*
* The default position="static" keeps the source header in normal document flow:
* 124px on desktop and 60px on mobile, with no page offset required. The account
* menu opens on click. Primary items are plain links with no dropdown panel, as on
* investia.ca. Below 1200px a modal menu replaces both desktop rows; the account
* disclosure keeps the captured destinations accessible.
* Links, account destinations, utility links and search copy can be
* overridden independently. Provide <main id="main-content" tabIndex={-1}>.
* Bilingual-ready: every visible and accessible label (connect, search, menu,
* nav landmarks, language toggle with its lang attribute) and the logo image
* are props, so a French page passes its own copy and the FR wordmark.
* currentHref marks the matching primary link as the current page (blue label and underline).
* The guide may supply a sample-only backing surface; this header owns only its
* white bar, navy utility strip and pale-blue expanded panel.
*/
function SiteNav({ position = "static", links = primaryLinks, accounts = accountLinks, advisor = {
	label: "Advisor opportunities",
	href: "https://investia.ca/advisor-opportunities"
}, language = {
	label: "FR",
	href: "/accueil",
	lang: "fr"
}, searchPlaceholder = "Search", search = {}, homeHref = "/", homeLabel = "Investia home", logoSrc, logoAlt = "", connectLabel = "Connect", currentHref, labels = {} } = {}) {
	const isCurrent = (href) => Boolean(currentHref) && href === currentHref;
	const currentDesktop = "relative !text-[#064dd9] hover:!text-[#2962ff] before:absolute before:inset-x-4 before:bottom-2 before:h-[2px] before:rounded-[2px] before:bg-[#064dd9] before:content-[''] hover:before:bg-[#2962ff]";
	const [mobileOpen, setMobileOpen] = useState(false);
	const [desktopMenu, setDesktopMenu] = useState("");
	const { mainNav = "Main navigation", accountNav = "Account navigation", mobileNav = "Mobile main navigation", menuTitle = "Investia navigation", openMenu = "Open menu", closeMenu = "Close menu", skipToContent = "Skip to main content" } = labels;
	const brand = /* @__PURE__ */ jsx("a", {
		href: homeHref,
		"aria-label": homeLabel,
		className: "block shrink-0",
		children: logoSrc ? /* @__PURE__ */ jsx("img", {
			src: logoSrc,
			alt: logoAlt,
			width: 228,
			height: 42,
			className: "block h-[42px] w-[228px] max-w-full object-contain object-left"
		}) : /* @__PURE__ */ jsx(Logo, {
			width: 228,
			height: 42,
			className: "block h-[42px] w-[228px] max-w-full"
		})
	});
	const utilityClass = "flex h-10 items-center justify-center border-r border-white/25 px-4 text-white hover:bg-ploy-accent-primary hover:underline";
	return /* @__PURE__ */ jsxs("header", {
		"data-ploy-component": "site-nav",
		"data-position": position,
		className: "relative z-40 w-full bg-ploy-background-primary text-ploy-text-primary",
		children: [
			/* @__PURE__ */ jsx(NavbarSkipLink, { label: skipToContent }),
			/* @__PURE__ */ jsx("div", {
				className: "hidden h-10 bg-[#01233f] min-[1200px]:block",
				children: /* @__PURE__ */ jsxs(Container, {
					width: "full",
					className: "flex h-10 max-w-[1204px] justify-end",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: advisor.href,
							className: utilityClass,
							children: /* @__PURE__ */ jsx(Text, {
								as: "span",
								variant: "small",
								className: "font-bold leading-4",
								children: advisor.label
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "border-r border-white/25",
							children: /* @__PURE__ */ jsx(SiteNavConnect, {
								links: accounts,
								label: connectLabel,
								navLabel: accountNav
							})
						}),
						/* @__PURE__ */ jsx("a", {
							href: language.href,
							lang: language.lang,
							"aria-label": language.ariaLabel,
							title: language.ariaLabel,
							className: utilityClass,
							children: /* @__PURE__ */ jsx(Text, {
								as: "span",
								variant: "small",
								className: "font-bold leading-4",
								children: language.label
							})
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(NavbarParts.Root, {
				value: desktopMenu,
				onValueChange: setDesktopMenu,
				delayDuration: 150,
				className: "relative hidden w-full min-[1200px]:block",
				"aria-label": mainNav,
				children: /* @__PURE__ */ jsxs(Container, {
					width: "full",
					className: "flex h-[84px] max-w-[1204px] items-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mr-8 shrink-0",
							children: brand
						}),
						/* @__PURE__ */ jsx("div", {
							className: "min-w-0 flex-1 [&>div]:!static",
							children: /* @__PURE__ */ jsx(NavbarParts.List, {
								className: "m-0 flex list-none items-center p-0",
								children: links.map((link) => /* @__PURE__ */ jsx(NavbarParts.Item, {
									className: "min-w-0 shrink",
									children: /* @__PURE__ */ jsx(NavbarParts.Link, {
										href: link.href,
										"aria-current": isCurrent(link.href) ? "page" : void 0,
										className: `inline-flex min-h-[60px] items-center justify-center px-4 py-[18px] text-center no-underline hover:text-[#2962ff] ${isCurrent(link.href) ? currentDesktop : ""}`,
										children: /* @__PURE__ */ jsx(Text, {
											as: "span",
											className: "leading-[24px]",
											children: link.label
										})
									})
								}, link.label))
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "ml-4 shrink-0",
							children: /* @__PURE__ */ jsx(SiteNavSearch, {
								placeholder: searchPlaceholder,
								...search
							})
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs(NavbarDialog.Root, {
				open: mobileOpen,
				onOpenChange: setMobileOpen,
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex h-[60px] items-center justify-between pl-4 min-[1200px]:hidden",
					children: [/* @__PURE__ */ jsx("div", {
						className: "min-w-0 shrink",
						children: brand
					}), /* @__PURE__ */ jsx(NavbarDialog.Trigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Button, {
							as: "button",
							variant: "ghost",
							"data-mobile-menu-trigger": true,
							"aria-label": openMenu,
							className: "h-[60px] w-[60px] shrink-0 rounded-none border-l border-[#ddd] p-0",
							children: /* @__PURE__ */ jsx(Menu, { size: 28 })
						})
					})]
				}), /* @__PURE__ */ jsxs(NavbarDialog.Portal, { children: [/* @__PURE__ */ jsx(NavbarDialog.Overlay, { className: "fixed inset-0 z-[200] bg-ploy-background-primary min-[1200px]:hidden" }), /* @__PURE__ */ jsxs(NavbarDialog.Content, {
					"data-mobile-menu": true,
					"aria-describedby": void 0,
					className: "fixed inset-0 z-[201] flex h-dvh flex-col overflow-hidden bg-ploy-background-primary text-ploy-text-primary outline-none min-[1200px]:hidden",
					children: [
						/* @__PURE__ */ jsx(NavbarDialog.Title, {
							className: "sr-only",
							children: menuTitle
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex h-[60px] shrink-0 items-center justify-between pl-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "min-w-0 shrink",
								children: brand
							}), /* @__PURE__ */ jsx(NavbarDialog.Close, {
								asChild: true,
								children: /* @__PURE__ */ jsx(Button, {
									as: "button",
									variant: "ghost",
									"aria-label": closeMenu,
									className: "h-[60px] w-[60px] shrink-0 rounded-none border-l border-[#ddd] p-0",
									children: /* @__PURE__ */ jsx(X, { size: 28 })
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "min-h-0 flex-1 overflow-y-auto px-5 pt-[max(32px,calc(37.2dvh-84px))] pb-8",
							children: [/* @__PURE__ */ jsx("nav", {
								"aria-label": mobileNav,
								children: links.map((link) => /* @__PURE__ */ jsx("a", {
									href: link.href,
									"aria-current": isCurrent(link.href) ? "page" : void 0,
									className: `flex min-h-12 items-center justify-center py-3 ${isCurrent(link.href) ? "text-[#064dd9]" : ""}`,
									children: /* @__PURE__ */ jsx(Text, {
										as: "span",
										className: "text-center leading-6",
										children: link.label
									})
								}, link.label))
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-20 flex justify-center",
								children: /* @__PURE__ */ jsx(SiteNavSearch, {
									placeholder: searchPlaceholder,
									...search
								})
							})]
						}),
						/* @__PURE__ */ jsx(SiteNavMobileAccounts, {
							links: accounts,
							advisor,
							language,
							connectLabel
						})
					]
				})] })]
			})
		]
	});
}
// src/components/organisms/home/body-1-actions.tsx
var actions = [{
	label: "Find an advisor",
	href: "/find-an-advisor"
}, {
	label: "Connect to the Client Portal",
	href: "https://client.investia.ca/"
}];
/**
* @ployComponent
* @ployComponentId body-1-actions
* @ployComponentType section
* @ployComponentTags cta, advisor, portal
* @ployComponentDescription Pale-blue full-width action strip linking to advisor search and the client portal.
* @ployComponentStatus stable
*/
function Body1Actions({ items = actions } = {}) {
	return /* @__PURE__ */ jsx(Section, {
		space: "flush",
		"data-ploy-component": "body-1-actions",
		className: "bg-[#c7e7ff]",
		children: /* @__PURE__ */ jsx(Container, {
			className: "body-1-actions-container",
			children: /* @__PURE__ */ jsx("div", {
				className: "body-1-actions-row",
				children: items.map((item) => /* @__PURE__ */ jsx(Button, {
					href: item.href,
					block: true,
					className: "min-w-0 whitespace-normal text-center",
					children: /* @__PURE__ */ jsx(Text, {
						as: "span",
						className: "font-bold leading-[22px]",
						children: item.label
					})
				}, item.href))
			})
		})
	});
}
// src/components/organisms/home/body-1-benefits.tsx
var benefits = [
	{
		title: "The Investia experience",
		body: "Anything can change in life. Our advisors are there to make sure that your action plan evolves with you.",
		imageSrc: "/images/24d627c8-experience-investia.webp",
		imageAlt: "Woman using a laptop",
		actionLabel: "See our offer",
		actionHref: "/investia-experience"
	},
	{
		title: "The value of advice",
		body: "Benefit from the expertise of our advisors and a variety of customized solutions which will help you reach your financial goals.",
		imageSrc: "/images/c9297b4c-accueil-valeurconseiller-grille.webp",
		imageAlt: "Light blue grid",
		overlaySrc: "/images/95b9d810-accueil-representants-pin.webp",
		overlayAlt: "Investia advisors",
		actionLabel: "Discover our expertise",
		actionHref: "https://investia.ca/value-of-advice"
	},
	{
		title: "About us",
		body: "A wholly-owned subsidiary of iA Financial Group, Investia offers you a full range of mutual fund and segregated fund products and services to meet your savings and retirement needs.",
		imageSrc: "/images/1e0676de-a-propos.webp",
		imageAlt: "Father carrying his child on his shoulders",
		actionLabel: "About Investia",
		actionHref: "https://investia.ca/about-investia"
	}
];
function BenefitCard({ title, body, imageSrc, imageAlt, overlaySrc, overlayAlt, actionLabel, actionHref }) {
	return /* @__PURE__ */ jsxs(Card, {
		padding: "none",
		className: "body-1-benefit-card flex flex-col bg-transparent text-center",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "body-1-benefit-media",
			children: [/* @__PURE__ */ jsx("img", {
				src: imageSrc,
				alt: imageAlt,
				className: "body-1-benefit-photo"
			}), overlaySrc && /* @__PURE__ */ jsx("img", {
				src: overlaySrc,
				alt: overlayAlt ?? "",
				className: "body-1-benefit-overlay"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "body-1-benefit-copy flex flex-1 flex-col",
			children: [
				/* @__PURE__ */ jsx(Heading, {
					level: 3,
					as: "h2",
					className: "body-1-benefit-title text-ploy-text-primary",
					children: title
				}),
				/* @__PURE__ */ jsx(Text, {
					className: "body-1-benefit-description text-ploy-text-primary",
					children: body
				}),
				/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					href: actionHref,
					block: true,
					className: "mt-auto border-2 px-4 text-ploy-accent-primary",
					children: /* @__PURE__ */ jsx(Text, {
						as: "span",
						className: "font-bold leading-[22px]",
						children: actionLabel
					})
				})
			]
		})]
	});
}
/**
* @ployComponent
* @ployComponentId body-1-benefits
* @ployComponentType section
* @ployComponentTags cards, carousel, advice
* @ployComponentDescription Three image-led Investia benefit cards, shown as a desktop row and a swipeable mobile track.
* @ployComponentStatus stable
*/
function Body1Benefits({ items = benefits, heading } = {}) {
	return /* @__PURE__ */ jsx(Section, {
		space: "flush",
		"data-ploy-component": "body-1-benefits",
		className: "overflow-hidden",
		children: /* @__PURE__ */ jsxs(Container, {
			className: "body-1-benefits-container",
			children: [heading && /* @__PURE__ */ jsx(Heading, {
				level: 2,
				className: "mb-8",
				children: heading
			}), /* @__PURE__ */ jsx(Carousel, {
				slidesPerView: "auto",
				spaceBetween: 16,
				loop: false,
				initialSlide: 0,
				slidesOffsetBefore: 16,
				slidesOffsetAfter: 16,
				className: "body-1-benefits-carousel",
				breakpoints: {
					768: {
						slidesOffsetBefore: 32,
						slidesOffsetAfter: 32
					},
					1140: {
						slidesPerView: 3,
						slidesOffsetBefore: 0,
						slidesOffsetAfter: 0
					}
				},
				children: items.map((item) => /* @__PURE__ */ jsx(CarouselSlide, {
					className: "body-1-benefit-slide h-auto",
					children: /* @__PURE__ */ jsx(BenefitCard, { ...item })
				}, item.title))
			})]
		})
	});
}
// src/components/organisms/home/body-1-hero.tsx
var slides = [
	{
		id: "projects",
		title: "Invest in your projects",
		body: "Take advantage of our advice for key moments in your life and let us help you through the process.",
		imageSrc: "/images/bf1aca80-accueil-hero-dsktp.webp",
		tabletImageSrc: "/images/66369806-accueil-hero-tblt.webp",
		mobileImageSrc: "/images/986eb8c2-accueil-hero-phne.webp",
		actionLabel: "Life events",
		actionHref: "#life-events",
		actionIcon: "none",
		decoration: "projects"
	},
	{
		id: "app",
		title: "The Investia app",
		body: "Our app lets you keep track of your investments anywhere, anytime.",
		imageSrc: "/images/465556ff-accueil-hero4-app-gbi-dsktp.webp",
		tabletImageSrc: "/images/5de970df-accueil-hero4-app-gbi-tblt.webp",
		mobileImageSrc: "/images/279411d1-accueil-hero4-app-gbi-phne.webp",
		actionLabel: "Learn more",
		actionHref: "https://investia.ca/mobile-app"
	},
	{
		id: "tfsa",
		title: "TFSA",
		imageSrc: "/images/55bbbd85-accueil-hero5-celi-dsktp.webp",
		tabletImageSrc: "/images/60bc5c9e-accueil-hero5-celi-tblt.webp",
		mobileImageSrc: "/images/f0b0a55f-accueil-hero5-celi-phne.webp",
		actionLabel: "See the annual limit for 2026",
		actionHref: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributions.html",
		external: true,
		actionAriaLabel: "See the annual limit for 2026 opens in a new tab",
		decoration: "tfsa",
		secondaryLabel: "Learn more about TFSAs",
		secondaryHref: "https://investia.ca/products-and-services/tfsa"
	},
	{
		id: "portal",
		title: "Client Portal",
		body: "Already a client? Register now and access your portfolio online.",
		imageSrc: "/images/afabac5c-accueil-hero6-portail-dsktp.webp",
		tabletImageSrc: "/images/457a8d86-accueil-hero6-portail-tblt.webp",
		mobileImageSrc: "/images/750cd5f6-accueil-hero6-portail-phne.webp",
		actionLabel: "Create account",
		actionHref: "https://client.investia.ca/",
		external: true,
		actionAriaLabel: "Create account opens in a new tab",
		decoration: "portal",
		secondaryLabel: "About multi-factor authentication (MFA)",
		secondaryHref: "https://investia.ca/multi-factor-authentication-clients"
	},
	{
		id: "resp",
		title: "Registered education savings plans (RESP)",
		body: "The RESP is specifically designed to accumulate funds for a child's post-secondary education.",
		imageSrc: "/images/590bc5d2-accueil-reee-hero-dsktp.webp",
		tabletImageSrc: "/images/1ab21e06-accueil-reee-hero-tblt.webp",
		mobileImageSrc: "/images/eb5e5be7-accueil-reee-hero-phne.webp",
		actionLabel: "Learn more",
		actionHref: "https://investia.ca/products-and-services/resp"
	}
];
function HeroPanel({ title, body, imageSrc, tabletImageSrc, mobileImageSrc, actionLabel, actionHref, external, actionAriaLabel, actionIcon, secondaryLabel, secondaryHref, decoration }) {
	const icon = actionIcon ?? (external ? "external" : "arrow");
	return /* @__PURE__ */ jsx("div", {
		className: "body-1-hero-panel bg-ploy-background-secondary",
		style: {
			"--hero-bg-desktop": `url("${imageSrc}")`,
			"--hero-bg-tablet": `url("${tabletImageSrc ?? imageSrc}")`,
			"--hero-bg-mobile": `url("${mobileImageSrc ?? tabletImageSrc ?? imageSrc}")`
		},
		children: /* @__PURE__ */ jsxs(Container, {
			className: "body-1-hero-container",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "body-1-hero-copy",
					children: [
						/* @__PURE__ */ jsx(Heading, {
							level: 1,
							as: "h2",
							className: "body-1-hero-title text-ploy-accent-primary font-black",
							children: title
						}),
						body && /* @__PURE__ */ jsx(Text, {
							className: "body-1-hero-description text-ploy-text-primary font-semibold",
							children: body
						}),
						/* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							href: actionHref,
							target: external ? "_blank" : void 0,
							rel: external ? "noopener noreferrer" : void 0,
							"aria-label": actionAriaLabel,
							className: "body-1-hero-action justify-start whitespace-normal rounded-none px-0 font-semibold hover:text-[#2962ff] hover:underline",
							children: [
								/* @__PURE__ */ jsx(Text, {
									as: "span",
									className: "font-semibold",
									children: actionLabel
								}),
								icon === "external" && /* @__PURE__ */ jsx(ExternalLink, {
									size: 18,
									"aria-hidden": "true"
								}),
								icon === "arrow" && /* @__PURE__ */ jsx(ArrowRight, {
									size: 18,
									"aria-hidden": "true"
								})
							]
						}),
						secondaryLabel && secondaryHref && /* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							href: secondaryHref,
							className: "body-1-hero-secondary justify-start whitespace-normal px-0 text-left font-semibold hover:underline",
							children: /* @__PURE__ */ jsx(Text, {
								as: "span",
								className: "font-semibold",
								children: secondaryLabel
							})
						})
					]
				}),
				decoration === "projects" && /* @__PURE__ */ jsxs("div", {
					className: "body-1-hero-curve body-1-hero-projects",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ jsx(ICONS.i1, {}), /* @__PURE__ */ jsx(Body1HeroPin, { className: "body-1-hero-pin" })]
				}),
				decoration === "tfsa" && /* @__PURE__ */ jsx("div", {
					className: "body-1-hero-curve body-1-hero-tfsa",
					"aria-hidden": "true",
					children: /* @__PURE__ */ jsx(ICONS.i3, {})
				}),
				decoration === "portal" && /* @__PURE__ */ jsx("div", {
					className: "body-1-hero-curve body-1-hero-portal",
					"aria-hidden": "true",
					children: /* @__PURE__ */ jsx(ICONS.i4, {})
				})
			]
		})
	});
}
/**
* @ployComponent
* @ployComponentId body-1-hero
* @ployComponentType section
* @ployComponentTags hero, carousel, media, bilingual
* @ployComponentDescription Five-slide Investia campaign carousel with photographic backgrounds, a primary text action per slide (arrow, external or no icon), an optional secondary link and clickable pagination. Matches investia.ca motion: 600ms fade, 8s autoplay without looping (stops on pagination click, swipe or keyboard focus; runs for every visitor), and on each active slide the blue curve draws in and the pin pops in. All copy, links, accessible labels and Swiper a11y messages are props, so EN and FR pages share it.
* @ployComponentStatus stable
*/
function Body1Hero({ items = slides, initialSlide = 0, ariaLabel = "Featured topics", a11y = {}, autoplayDelay = 8e3 } = {}) {
	const sectionRef = useRef(null);
	const apiRef = useRef(null);
	const [motionReady, setMotionReady] = useState(false);
	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;
		section.querySelectorAll(".body-1-hero-curve > :not(.body-1-hero-pin) path").forEach((path) => {
			const length = path.getTotalLength();
			path.style.strokeDasharray = `${length}`;
			path.style.strokeDashoffset = `${length}`;
		});
		setMotionReady(true);
	}, []);
	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;
		const stop = () => apiRef.current?.autoplay?.stop();
		const onClick = (event) => {
			if (event.target.closest(".swiper-pagination")) stop();
		};
		section.addEventListener("focusin", stop);
		section.addEventListener("click", onClick);
		return () => {
			section.removeEventListener("focusin", stop);
			section.removeEventListener("click", onClick);
		};
	}, []);
	return /* @__PURE__ */ jsx(Section, {
		ref: sectionRef,
		space: "flush",
		"data-ploy-component": "body-1-hero",
		"data-motion": motionReady ? "ready" : void 0,
		"aria-label": ariaLabel,
		"aria-roledescription": "carousel",
		className: "overflow-hidden bg-ploy-background-secondary",
		children: /* @__PURE__ */ jsx(Carousel, {
			modules: [EffectFade, Autoplay],
			effect: "fade",
			loop: false,
			autoplay: autoplayDelay > 0 ? {
				delay: autoplayDelay,
				disableOnInteraction: true
			} : false,
			onSwiper: (api) => {
				apiRef.current = api;
			},
			initialSlide,
			pagination: { clickable: true },
			a11y: {
				paginationBulletMessage: a11y.paginationBulletMessage ?? "Go to slide {{index}}",
				prevSlideMessage: a11y.prevSlideMessage ?? "Previous slide",
				nextSlideMessage: a11y.nextSlideMessage ?? "Next slide"
			},
			className: "body-1-hero-carousel text-ploy-accent-primary",
			speed: 600,
			children: items.map((item) => /* @__PURE__ */ jsx(CarouselSlide, { children: /* @__PURE__ */ jsx(HeroPanel, { ...item }) }, item.id))
		})
	});
}
// src/components/organisms/home/body-2-news-teams.tsx
var features = [{
	id: "news",
	heading: "Economic news",
	body: "Sébastien Mc Mahon, Chief Strategist and Senior Economist at iA Financial Group, presents articles and videos to help keep you up to speed on the economy and the financial markets.",
	imageSrc: "/images/79a3d937-accueil-actualites-economiques.webp",
	imageAlt: "Economic themes and a rising graph",
	mediaWidth: 514,
	mediaHeight: 286,
	actions: [{
		label: "View economic news",
		href: "https://ia.ca/economic-publications",
		external: true
	}]
}, {
	id: "teams",
	heading: "Join the Investia teams",
	body: "The support and backing that we provide our advisors is at the heart of our corporate culture. We offer our advisors a wide range of products and services, including the latest technology and simplified business processes which will allow them to place their focus where it counts: on their clients.",
	imageSrc: "/images/95d04241-accueil-equipe.webp",
	imageAlt: "A member of the Investia team",
	mediaWidth: 514,
	mediaHeight: 396,
	flip: true,
	brandArtwork: true,
	actions: [{
		label: "Consult our job offers",
		href: "https://ia.ca/jobs/jobs-available",
		primary: true,
		external: true
	}, {
		label: "Become an Investia advisor",
		href: "https://investia.ca/advisor-opportunities"
	}]
}];
function ExternalMark() {
	return /* @__PURE__ */ jsx("svg", {
		"aria-hidden": "true",
		width: "21",
		height: "21",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		children: /* @__PURE__ */ jsx("path", { d: "M14 3h7v7M21 3l-12 12M10 4H4v16h16v-6" })
	});
}
function FeatureRow({ heading, body, imageSrc, imageAlt, mediaWidth, mediaHeight, flip = false, brandArtwork = false, actions }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `body-2-feature-row${flip ? " body-2-feature-flip" : ""}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "body-2-feature-copy",
			children: [
				/* @__PURE__ */ jsx(Heading, {
					level: 2,
					className: "body-2-feature-heading text-ploy-text-primary",
					children: heading
				}),
				body && /* @__PURE__ */ jsx(Text, {
					className: "body-2-feature-body text-ploy-text-primary",
					children: body
				}),
				/* @__PURE__ */ jsx("div", {
					className: "body-2-feature-actions",
					children: actions.map((action) => /* @__PURE__ */ jsxs(Button, {
						href: action.href,
						target: action.external ? "_blank" : void 0,
						rel: action.external ? "noopener noreferrer" : void 0,
						"aria-label": action.ariaLabel,
						variant: action.primary ? "primary" : "outline",
						className: action.primary ? "body-2-feature-action" : "body-2-feature-action border-2 text-ploy-accent-primary",
						children: [action.label, action.external && /* @__PURE__ */ jsx(ExternalMark, {})]
					}, action.href))
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "body-2-feature-media",
			style: { aspectRatio: `${mediaWidth}/${mediaHeight}` },
			children: [/* @__PURE__ */ jsx("div", {
				className: "body-2-feature-image-frame",
				children: /* @__PURE__ */ jsx("img", {
					className: brandArtwork ? "body-2-feature-team-image" : "body-2-feature-news-image",
					src: imageSrc,
					alt: imageAlt
				})
			}), brandArtwork && /* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "body-2-feature-brand",
				children: /* @__PURE__ */ jsx(ICONS.i8, {})
			})]
		})]
	});
}
/**
* @ployComponent
* @ployComponentId body-2-news-teams
* @ployComponentType section
* @ployComponentTags news, careers, media
* @ployComponentDescription Alternating economic news and recruitment rows with pill-shaped imagery and external calls to action. Rows, copy, images, actions and their accessible labels are props for EN and FR pages.
* @ployComponentStatus stable
*/
function Body2NewsTeams({ items = features } = {}) {
	return /* @__PURE__ */ jsx(Section, {
		space: "flush",
		"data-ploy-component": "body-2-news-teams",
		className: "body-2-news-teams",
		children: /* @__PURE__ */ jsx(Container, {
			className: "body-2-news-teams-container",
			children: items.map((item) => /* @__PURE__ */ jsx(FeatureRow, { ...item }, item.id))
		})
	});
}
// src/components/organisms/home/body-2-objectives.tsx
var objectives = [
	{
		label: "Moving in together",
		lead: "Are you about to move in with your significant other?",
		body: "See what you should plan for in terms of insurance and savings to begin your life together on the right foot.",
		videoSrc: "https://player.vimeo.com/video/512694821?h=14f9fe9aca"
	},
	{
		label: "Buying a home",
		lead: "Do you want to leave apartment life behind and buy a home?",
		body: "Buying a home is one of the most important transactions you will ever make. Being prepared will make the process easier and help you make educated choices.",
		videoSrc: "https://player.vimeo.com/video/512695696?h=9ff772182b"
	},
	{
		label: "Having a child",
		lead: "Will your family soon have a new addition?",
		body: "Here are a few things to think about to protect your loved ones against the unexpected and prepare for your new arrival.",
		videoSrc: "https://player.vimeo.com/video/512694732?h=86cf52309e"
	},
	{
		label: "Saving for a project",
		lead: "Do you want to travel? Are you planning your wedding or your retirement?",
		body: "Whether your projects are big or small, you must take the time to organize and figure out how to pay for them.",
		videoSrc: "https://player.vimeo.com/video/512695304?h=81691126f4"
	},
	{
		label: "Starting a business",
		lead: "Do you believe in your project and know that your products or services meet the needs of the market?",
		body: "Here are a few elements to help you launch your business.",
		videoSrc: "https://player.vimeo.com/video/512695366?h=57db274669"
	},
	{
		label: "Planning your retirement",
		lead: "It is never too early to start planning for retirement.",
		body: "Whatever your dreams for your retirement, having a strategy in advance will give you the tools you need to make them a reality. By having a good understanding of basic financial concepts related to retirement, you can get the most out of the tools available to you.",
		videoSrc: "https://player.vimeo.com/video/512695110?h=71c750c323"
	}
];
function ObjectiveAction({ label, lead, body, videoSrc, videoTitle, closeLabel }) {
	return /* @__PURE__ */ jsxs(Dialog, { children: [/* @__PURE__ */ jsx(DialogTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsx(Button, {
			as: "button",
			variant: "outline",
			className: "body-2-objective-button border-2 text-ploy-accent-primary",
			children: label
		})
	}), /* @__PURE__ */ jsxs(DialogContent, {
		closeLabel,
		className: "body-2-objective-dialog max-w-[min(720px,calc(100vw-32px))]",
		children: [
			/* @__PURE__ */ jsx(DialogTitle, {
				level: 2,
				className: "pr-8 text-ploy-accent-primary",
				children: label
			}),
			lead && /* @__PURE__ */ jsx(DialogDescription, {
				className: "mt-4 font-bold text-ploy-text-primary",
				children: lead
			}),
			body && /* @__PURE__ */ jsx(Text, {
				className: "mt-4 mb-9 text-ploy-text-primary",
				children: body
			}),
			videoSrc && /* @__PURE__ */ jsx("div", {
				className: "body-2-objective-video",
				children: /* @__PURE__ */ jsx("iframe", {
					src: videoSrc,
					title: videoTitle ?? label,
					loading: "lazy",
					allow: "autoplay; fullscreen; picture-in-picture",
					allowFullScreen: true
				})
			})
		]
	})] });
}
/**
* @ployComponent
* @ployComponentId body-2-objectives
* @ployComponentType section
* @ployComponentTags objectives, dialog, video, illustration, bilingual
* @ployComponentDescription Life-event buttons on a pale blue surface with graph artwork and a cutout couple. The graph's two areas rise with a small bounce each time they scroll into view (static under reduced motion). Each button opens an accessible modal dialog with a title, lead question, paragraph and an embedded video. Heading lines, items, image, anchor id and the close label are props for EN and FR pages.
* @ployComponentStatus stable
*/
function Body2Objectives({ heading = ["New life event,", "new objective"], items = objectives, imageSrc = "/images/2382ce58-accueil-nouvel-objectif.webp", imageAlt = "", id = "life-events", closeLabel = "Close" } = {}) {
	const lines = Array.isArray(heading) ? heading : [heading];
	const graphRef = useRef(null);
	useEffect(() => {
		const graph = graphRef.current;
		if (!graph || typeof IntersectionObserver === "undefined") return;
		graph.dataset.motion = "ready";
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) graph.dataset.loaded = "true";
			else delete graph.dataset.loaded;
		});
		observer.observe(graph);
		return () => {
			observer.disconnect();
			delete graph.dataset.motion;
			delete graph.dataset.loaded;
		};
	}, []);
	return /* @__PURE__ */ jsx(Section, {
		id,
		space: "flush",
		"data-ploy-component": "body-2-objectives",
		className: "body-2-objectives scroll-mt-4 bg-ploy-background-secondary",
		children: /* @__PURE__ */ jsxs(Container, {
			className: "body-2-objectives-container",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "body-2-objectives-copy",
					children: [/* @__PURE__ */ jsx(Heading, {
						level: 1,
						as: "h2",
						className: "body-2-objectives-heading text-ploy-accent-primary",
						children: lines.map((line, index) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
							index > 0 && " ",
							index > 0 && /* @__PURE__ */ jsx("br", {}),
							line
						] }, line))
					}), /* @__PURE__ */ jsx("div", {
						className: "body-2-objectives-actions",
						children: items.map((item) => /* @__PURE__ */ jsx(ObjectiveAction, {
							...item,
							closeLabel
						}, item.label))
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					"aria-hidden": "true",
					className: "body-2-objectives-art",
					children: /* @__PURE__ */ jsxs("div", {
						ref: graphRef,
						className: "body-2-objectives-graph",
						children: [
							/* @__PURE__ */ jsx(ICONS.i5, { className: "body-2-objectives-line" }),
							/* @__PURE__ */ jsx(ICONS.i6, { className: "body-2-objectives-pin-one" }),
							/* @__PURE__ */ jsx(ICONS.i7, { className: "body-2-objectives-pin-two" })
						]
					})
				}),
				/* @__PURE__ */ jsx("img", {
					className: "body-2-objectives-image",
					src: imageSrc,
					alt: imageAlt
				})
			]
		})
	});
}
// src/components/organisms/home/body-2-products.tsx
var products = [
	"RRSP, LIRA and other plans",
	"RRIF, LIF and annuities",
	"RRSP loans",
	"Tax-free savings accounts (TFSA)",
	"Non-registered savings plans",
	"Registered education savings plans (RESP)"
];
/**
* @ployComponent
* @ployComponentId body-2-products
* @ployComponentType section
* @ployComponentTags products, media, cta
* @ployComponentDescription Fishing photograph beside a blue products and services panel on the Investia homepage.
* @ployComponentStatus stable
*/
function Body2Products({ heading = "We offer a wide range of products and services", body = "You have financial needs? We have products and services to help you reach your goals.", items = products, imageSrc = "/images/6d77cd18-accueil-gamme-produits.webp", imageAlt = "An adult and child fishing together", actionLabel = "Discover our products and services", actionHref = "/products-and-services" } = {}) {
	return /* @__PURE__ */ jsx(Section, {
		space: "flush",
		"data-ploy-component": "body-2-products",
		className: "body-2-products",
		children: /* @__PURE__ */ jsx(Container, {
			className: "body-2-products-container",
			children: /* @__PURE__ */ jsxs(Card, {
				padding: "none",
				className: "body-2-products-card bg-ploy-accent-primary text-ploy-text-on-accent-primary",
				children: [/* @__PURE__ */ jsx("img", {
					className: "body-2-products-image",
					src: imageSrc,
					alt: imageAlt
				}), /* @__PURE__ */ jsxs("div", {
					className: "body-2-products-copy",
					children: [
						/* @__PURE__ */ jsx(Heading, {
							level: 2,
							className: "body-2-products-heading text-ploy-text-on-accent-primary",
							children: heading
						}),
						body && /* @__PURE__ */ jsx(Text, {
							className: "body-2-products-body",
							children: body
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "body-2-products-list",
							children: items.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Text, {
								className: "font-bold",
								children: item
							}) }, item))
						}),
						actionLabel && /* @__PURE__ */ jsx(Button, {
							href: actionHref,
							variant: "outline",
							tone: "light",
							className: "body-2-products-action border-2",
							children: actionLabel
						})
					]
				})]
			})
		})
	});
}
// src/components/organisms/products/products-card-grid.tsx
/**
* @ployComponent
* @ployComponentId products-card-grid
* @ployComponentType section
* @ployComponentTags cards, products, bilingual
* @ployComponentDescription H3 heading over a grid of grey (#eff1f4) 20px-rounded product cards from investia.ca's Products and services page. Each card has an H4 title, optional bold subtitle, one or more paragraphs and an outlined pill link pinned to the card bottom so buttons align across a row (hover turns it #2962ff; external links open in a new tab with the external icon). layout="thirds" gives three columns from 768px; "two-thirds" makes each card two columns wide (the insurance card). Cards stack full width on phones with full-width buttons.
* @ployComponentStatus stable
*/
function ProductsCardGrid({ title, items, layout = "thirds", last = false }) {
	return /* @__PURE__ */ jsx(Section, {
		space: "flush",
		"data-ploy-component": "products-card-grid",
		className: cn("products-card-grid", last && "products-card-grid-last"),
		children: /* @__PURE__ */ jsxs(Container, {
			className: "products-card-grid-container",
			children: [/* @__PURE__ */ jsx(Heading, {
				level: 3,
				as: "h3",
				className: "products-card-grid-title",
				children: title
			}), /* @__PURE__ */ jsx("ul", {
				className: cn("products-card-grid-list", layout === "two-thirds" && "products-card-grid-list-wide"),
				children: items.map((item) => /* @__PURE__ */ jsxs("li", {
					className: "products-card",
					children: [
						/* @__PURE__ */ jsx(Heading, {
							level: 4,
							as: "h4",
							className: "products-card-title",
							children: item.title
						}),
						item.subtitle && /* @__PURE__ */ jsx(Text, {
							className: "products-card-subtitle font-bold",
							children: item.subtitle
						}),
						item.body.map((paragraph) => /* @__PURE__ */ jsx(Text, {
							className: "products-card-body",
							children: paragraph
						}, paragraph)),
						/* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							href: item.href,
							target: item.external ? "_blank" : void 0,
							rel: item.external ? "noopener noreferrer" : void 0,
							"aria-label": item.ariaLabel,
							className: "products-card-action border-2 text-ploy-accent-primary",
							children: [/* @__PURE__ */ jsx("span", { children: item.linkLabel }), item.external && /* @__PURE__ */ jsx(ExternalLink, {
								size: 20,
								"aria-hidden": "true",
								className: "shrink-0"
							})]
						})
					]
				}, item.id))
			})]
		})
	});
}
// src/components/organisms/products/products-cta.tsx
/**
* @ployComponent
* @ployComponentId products-cta
* @ployComponentType section
* @ployComponentTags cta, advisor, bilingual
* @ployComponentDescription Pale-blue (#cae5fb) full-width band with one primary pill button, matching investia.ca's single-item grille-section-cta under inner-page heroes. The button spans half the content width from 768px and the full width on phones; hover turns it #2962ff. Label and href are props (use ROUTES for migrated pages).
* @ployComponentStatus stable
*/
function ProductsCta({ label, href }) {
	return /* @__PURE__ */ jsx(Section, {
		space: "flush",
		"data-ploy-component": "products-cta",
		className: "bg-[#cae5fb]",
		children: /* @__PURE__ */ jsx(Container, {
			className: "products-cta-container",
			children: /* @__PURE__ */ jsx("div", {
				className: "products-cta-row",
				children: /* @__PURE__ */ jsx(Button, {
					href,
					block: true,
					className: "products-cta-button min-w-0 whitespace-normal text-center",
					children: /* @__PURE__ */ jsx(Text, {
						as: "span",
						className: "font-bold leading-[22px]",
						children: label
					})
				})
			})
		})
	});
}
// src/components/organisms/products/products-hero.tsx
var HEART_PATH = "M20 704.8c357.5 2.9 534.9 2.9 532 0L240.3 393.1c-41-41-63.8-95.3-63.8-153.2-.2-57.9 22.4-112.4 63.4-153.4 40.8-40.8 95.3-63.4 153.1-63.4 57.9 0 112.6 22.8 153.6 63.8l21.8 21.7 21.4-21.4c41.1-41 95.5-63.6 153.5-63.6S855.6 46 896.6 87h0c41 41 63.6 95.5 63.4 153.4 0 57.9-22.8 112.2-63.8 153.2";
/**
* @ployComponent
* @ployComponentId products-hero
* @ployComponentType section
* @ployComponentTags hero, media, motion, bilingual
* @ployComponentDescription Inner-page hero matching investia.ca's heroV2 hero-n1: light-blue band with a photo anchored bottom-centre (separate desktop, tablet and phone crops), a blue Muoto H1 and a semibold intro line. A blue heart-shaped curve draws in (0.8s stroke dash) when the hero enters the viewport, for every visitor; positions follow the Products and services page at each breakpoint. Title, intro and images are props, so EN and FR pages share it.
* @ployComponentStatus stable
*/
function ProductsHero({ title, body, imageSrc, tabletImageSrc, mobileImageSrc, showCurve = true }) {
	const sectionRef = useRef(null);
	const pathRef = useRef(null);
	const [drawn, setDrawn] = useState(false);
	useEffect(() => {
		const path = pathRef.current;
		const section = sectionRef.current;
		if (!path || !section) return;
		const length = path.getTotalLength();
		path.style.strokeDasharray = `${length}`;
		path.style.strokeDashoffset = `${length}`;
		const observer = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				setDrawn(true);
				observer.disconnect();
			}
		}, { threshold: .1 });
		observer.observe(section);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsxs(Section, {
		ref: sectionRef,
		space: "flush",
		"data-ploy-component": "products-hero",
		"data-motion": drawn ? "drawn" : void 0,
		className: "products-hero bg-ploy-background-secondary",
		style: {
			"--hero-bg-desktop": `url("${imageSrc}")`,
			"--hero-bg-tablet": `url("${tabletImageSrc ?? imageSrc}")`,
			"--hero-bg-mobile": `url("${mobileImageSrc ?? tabletImageSrc ?? imageSrc}")`
		},
		children: [/* @__PURE__ */ jsx(Container, {
			className: "products-hero-container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "products-hero-copy",
				children: [/* @__PURE__ */ jsx(Heading, {
					level: 1,
					as: "h1",
					className: "products-hero-title text-ploy-accent-primary",
					children: title
				}), body && /* @__PURE__ */ jsx(Text, {
					className: "products-hero-body font-semibold text-ploy-text-primary",
					children: body
				})]
			})
		}), showCurve && /* @__PURE__ */ jsx("div", {
			className: "products-hero-overlay",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsx(Container, {
				className: "products-hero-container",
				children: /* @__PURE__ */ jsx("div", {
					className: "products-hero-overlay-row",
					children: /* @__PURE__ */ jsx("svg", {
						className: "products-hero-curve",
						viewBox: "0 0 980 730",
						xmlns: "http://www.w3.org/2000/svg",
						children: /* @__PURE__ */ jsx("path", {
							ref: pathRef,
							fill: "none",
							strokeLinecap: "round",
							strokeWidth: "10",
							d: HEART_PATH
						})
					})
				})
			})
		})]
	});
}
// src/components/organisms/products/products-specialty.tsx
/**
* @ployComponent
* @ployComponentId products-specialty
* @ployComponentType section
* @ployComponentTags media, text, bilingual
* @ployComponentDescription Text and photo row from investia.ca's row-image-fit grid: an H2 and paragraph beside a pill-shaped (fully rounded) cover photo. Two columns from 768px (72px gap, 112px from 1140px) with the photo stretched to the text height; on phones the text stacks above a 288px-wide pill. Opens the Products and services page body (60px top on phones, 96px from 768px). Copy and image are props.
* @ployComponentStatus stable
*/
function ProductsSpecialty({ title, body, imageSrc, imageAlt = "" }) {
	return /* @__PURE__ */ jsx(Section, {
		space: "flush",
		"data-ploy-component": "products-specialty",
		className: "products-specialty",
		children: /* @__PURE__ */ jsx(Container, {
			className: "products-specialty-container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "products-specialty-row",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "products-specialty-col products-specialty-text",
					children: [/* @__PURE__ */ jsx(Heading, {
						level: 2,
						className: "products-specialty-title",
						children: title
					}), /* @__PURE__ */ jsx(Text, {
						className: "products-specialty-body",
						children: body
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "products-specialty-col",
					children: /* @__PURE__ */ jsx("div", {
						className: "products-specialty-media",
						children: /* @__PURE__ */ jsx("img", {
							src: imageSrc,
							alt: imageAlt,
							width: 1128,
							height: 752,
							loading: "lazy",
							decoding: "async"
						})
					})
				})]
			})
		})
	});
}
// src/components/organisms/experience/experience-calculators.tsx
var CURVE_PATH$1 = "m34.9 952.3 322.3-224.2c26.2-18.2 58.4-25.6 89.9-20.7l80.6 12.5c28.6 4.5 57.9-1.3 82.8-16.1l217.3-130c27.2-16.3 59.5-21.5 90.4-14.7l235.1 51.9c35.4 7.8 72.5-.3 101.4-22.1l268-202.1h0l473.8-344.4c40.2-24.6 74.8-22.6 103.7 6 43.3 45.3 150.6 139.2 187 168.5 36.3 27 82.6 42.6 149.7-6.7 48.1-33.4 101.7-75.1 160.7-125.1";
/**
* @ployComponent
* @ployComponentId experience-calculators
* @ployComponentType section
* @ployComponentTags calculators, cards, illustration, animation, bilingual
* @ployComponentDescription Light-blue Investia calculators band (investia.ca grille-section-calculateurs): large blue H2, white rounded cards (stacked under 1140px, three across above) with H3, paragraph and a text link with an east arrow, over a faint lines background and a wide cut-out landscape (cyclist) pinned to the bottom. A blue curve behind the landscape draws in each time it enters the viewport and resets when it leaves, for every visitor. Copy, links and artwork are props.
* @ployComponentStatus stable
*/
function ExperienceCalculators({ heading, items, linesSrc, imageSrc, imageAlt = "" }) {
	const curveRef = useRef(null);
	const [motionReady, setMotionReady] = useState(false);
	const [active, setActive] = useState(false);
	useEffect(() => {
		const svg = curveRef.current;
		if (!svg) return;
		const path = svg.querySelector("path");
		if (path) {
			const length = path.getTotalLength();
			path.style.strokeDasharray = `${length}`;
			path.style.strokeDashoffset = `${length}`;
		}
		setMotionReady(true);
		if (typeof IntersectionObserver === "undefined") {
			setActive(true);
			return;
		}
		const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting));
		observer.observe(svg);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsxs(Section, {
		space: "flush",
		"data-ploy-component": "experience-calculators",
		"data-motion": motionReady ? "ready" : void 0,
		"data-active": active ? "true" : void 0,
		className: "experience-calculators",
		style: { "--exp-calc-lines": `url("${linesSrc}")` },
		children: [
			/* @__PURE__ */ jsxs(Container, {
				className: "experience-calculators-container",
				children: [/* @__PURE__ */ jsx(Heading, {
					level: 1,
					as: "h2",
					className: "experience-calculators-heading text-ploy-accent-primary",
					children: heading
				}), /* @__PURE__ */ jsx("div", {
					className: "experience-calculators-row",
					children: items.map((item) => /* @__PURE__ */ jsxs("div", {
						className: "experience-calculators-card",
						children: [
							/* @__PURE__ */ jsx(Heading, {
								level: 3,
								as: "h3",
								className: "experience-calculators-card-title",
								children: item.title
							}),
							/* @__PURE__ */ jsx(Text, {
								className: "experience-calculators-card-body",
								children: item.body
							}),
							/* @__PURE__ */ jsxs("a", {
								href: item.href,
								className: "experience-calculators-link",
								children: [item.linkLabel, /* @__PURE__ */ jsx(ExperienceMaterialIcon, {
									name: "east",
									size: 18
								})]
							})
						]
					}, item.title))
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "experience-calculators-curve",
				"aria-hidden": "true",
				children: /* @__PURE__ */ jsx("svg", {
					ref: curveRef,
					viewBox: "0 0 2628 935",
					xmlns: "http://www.w3.org/2000/svg",
					focusable: "false",
					children: /* @__PURE__ */ jsx("path", {
						d: CURVE_PATH$1,
						fill: "none",
						fillRule: "evenodd",
						strokeLinecap: "round",
						strokeWidth: "10"
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "experience-calculators-image",
				children: /* @__PURE__ */ jsx("img", {
					src: imageSrc,
					alt: imageAlt
				})
			})
		]
	});
}
// src/components/organisms/experience/experience-commitment.tsx
/**
* @ployComponent
* @ployComponentId experience-commitment
* @ployComponentType section
* @ployComponentTags timeline, steps, list, image, bilingual
* @ployComponentDescription Investia "Our Commitment" band (investia.ca grille-section-engagement): an H2, then a three-step timeline (blue ring markers joined by a blue rule; vertical with a left rail under 1140px, horizontal row above), each step with H3, bold lead and paragraph. Below, a "Simplicity" row pairs an oval-cropped photo with an H2, an icon list (Material Icons Outlined) and an outlined pill button; image sits above the text on phones and to the left from 768px. All copy, icons, link and image are props.
* @ployComponentStatus stable
*/
function ExperienceCommitment({ heading, steps, simplicity }) {
	return /* @__PURE__ */ jsx(Section, {
		space: "flush",
		"data-ploy-component": "experience-commitment",
		className: "experience-commitment",
		children: /* @__PURE__ */ jsxs(Container, {
			className: "experience-commitment-container",
			children: [
				/* @__PURE__ */ jsx(Heading, {
					level: 2,
					className: "experience-commitment-heading",
					children: heading
				}),
				/* @__PURE__ */ jsx("ol", {
					className: "experience-commitment-timeline",
					children: steps.map((step) => /* @__PURE__ */ jsx("li", {
						className: "experience-commitment-step",
						children: /* @__PURE__ */ jsxs("div", {
							className: "experience-commitment-step-content",
							children: [
								/* @__PURE__ */ jsx(Heading, {
									level: 3,
									as: "h3",
									className: "experience-commitment-step-title",
									children: step.title
								}),
								/* @__PURE__ */ jsx(Text, {
									className: "experience-commitment-step-lead font-bold",
									children: step.lead.map((line, index) => /* @__PURE__ */ jsxs(Fragment$1, { children: [index > 0 && /* @__PURE__ */ jsx("br", {}), line] }, line))
								}),
								/* @__PURE__ */ jsx(Text, {
									className: "experience-commitment-step-body",
									children: step.body
								})
							]
						})
					}, step.title))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "experience-commitment-simplicity",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "experience-commitment-simplicity-text",
						children: [
							/* @__PURE__ */ jsx(Heading, {
								level: 2,
								className: "experience-commitment-heading",
								children: simplicity.heading
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "experience-commitment-list",
								children: simplicity.items.map((item) => /* @__PURE__ */ jsxs("li", {
									className: "experience-commitment-list-item",
									children: [/* @__PURE__ */ jsx(ExperienceMaterialIcon, {
										name: item.icon,
										size: 32,
										className: "experience-commitment-list-icon"
									}), item.text]
								}, item.text))
							}),
							/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								href: simplicity.actionHref,
								className: "experience-commitment-action border-2 px-6 text-ploy-accent-primary",
								children: /* @__PURE__ */ jsx(Text, {
									as: "span",
									className: "font-bold leading-[22px]",
									children: simplicity.actionLabel
								})
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "experience-commitment-media",
						children: /* @__PURE__ */ jsx("img", {
							src: simplicity.imageSrc,
							alt: simplicity.imageAlt ?? ""
						})
					})]
				})
			]
		})
	});
}
// src/components/organisms/experience/experience-cta.tsx
/**
* @ployComponent
* @ployComponentId experience-cta
* @ployComponentType section
* @ployComponentTags cta, advisor, bilingual
* @ployComponentDescription Pale-blue (#cae5fb) action band with one primary pill button, as under investia.ca inner-page heroes (grille-section-cta, one item): full width on phones, half the content width from 768px. Label and href are props; pass the locale's advisor route.
* @ployComponentStatus stable
*/
function ExperienceCta({ label, href }) {
	return /* @__PURE__ */ jsx(Section, {
		space: "flush",
		"data-ploy-component": "experience-cta",
		className: "bg-[#cae5fb]",
		children: /* @__PURE__ */ jsx(Container, {
			className: "experience-cta-container",
			children: /* @__PURE__ */ jsx("div", {
				className: "experience-cta-row",
				children: /* @__PURE__ */ jsx(Button, {
					href,
					block: true,
					className: "experience-cta-button whitespace-normal text-center",
					children: /* @__PURE__ */ jsx(Text, {
						as: "span",
						className: "font-bold leading-[22px]",
						children: label
					})
				})
			})
		})
	});
}
// src/components/organisms/experience/experience-hero.tsx
var CURVE_PATH = "m5,457l191.06-179.2c17.83-16.72,45.62-16.58,63.27.32l112.48,107.64c18.35,17.56,47.47,16.92,65.04-1.43.03-.03.06-.06.08-.09L699.91,107.98c15.13-15.89,40.23-16.63,56.27-1.66l77.76,72.61c15.77,14.73,40.39,14.29,55.63-.99L1062,5";
/**
* @ployComponent
* @ployComponentId experience-hero
* @ployComponentType section
* @ployComponentTags hero, media, animation, bilingual
* @ployComponentDescription Investia inner-page hero (investia.ca heroV2 hero-n1) for The Investia experience: light-blue band with a photographic background cropped per breakpoint (phone, tablet 768-999, desktop 1000+), page H1 and semibold intro. A blue growth curve draws in and two advisor photo pins pop in each time the hero enters the viewport, and reset when it leaves, for every visitor. Title, intro and all images are props for EN and FR pages.
* @ployComponentStatus stable
*/
function ExperienceHero({ title, subtitle, imageSrc, tabletImageSrc, mobileImageSrc, pinOneSrc, pinTwoSrc }) {
	const sectionRef = useRef(null);
	const [motionReady, setMotionReady] = useState(false);
	const [active, setActive] = useState(false);
	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;
		const path = section.querySelector(".experience-hero-curve path");
		if (path) {
			const length = path.getTotalLength();
			path.style.strokeDasharray = `${length}`;
			path.style.strokeDashoffset = `${length}`;
		}
		setMotionReady(true);
		if (typeof IntersectionObserver === "undefined") {
			setActive(true);
			return;
		}
		const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting));
		observer.observe(section);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsxs(Section, {
		ref: sectionRef,
		space: "flush",
		"data-ploy-component": "experience-hero",
		"data-motion": motionReady ? "ready" : void 0,
		"data-active": active ? "true" : void 0,
		className: "experience-hero",
		style: {
			"--exp-hero-bg-desktop": `url("${imageSrc}")`,
			"--exp-hero-bg-tablet": `url("${tabletImageSrc}")`,
			"--exp-hero-bg-mobile": `url("${mobileImageSrc}")`
		},
		children: [/* @__PURE__ */ jsx(Container, {
			className: "experience-hero-container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "experience-hero-copy",
				children: [/* @__PURE__ */ jsx(Heading, {
					level: 1,
					as: "h1",
					className: "experience-hero-title text-ploy-accent-primary",
					children: title
				}), /* @__PURE__ */ jsx(Text, {
					className: "experience-hero-subtitle text-ploy-text-primary",
					children: subtitle
				})]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "experience-hero-overlay",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsx(Container, {
				className: "experience-hero-overlay-container",
				children: /* @__PURE__ */ jsxs("div", {
					className: "experience-hero-overlay-row",
					children: [
						/* @__PURE__ */ jsx("svg", {
							className: "experience-hero-curve",
							viewBox: "0 0 1067 462",
							xmlns: "http://www.w3.org/2000/svg",
							focusable: "false",
							children: /* @__PURE__ */ jsx("path", {
								d: CURVE_PATH,
								fill: "none",
								fillRule: "evenodd",
								strokeLinecap: "round",
								strokeLinejoin: "bevel",
								strokeWidth: "10"
							})
						}),
						/* @__PURE__ */ jsx("img", {
							className: "experience-hero-pin experience-hero-pin-1",
							src: pinOneSrc,
							alt: ""
						}),
						/* @__PURE__ */ jsx("img", {
							className: "experience-hero-pin experience-hero-pin-2",
							src: pinTwoSrc,
							alt: ""
						})
					]
				})
			})
		})]
	});
}
// src/components/organisms/experience/experience-tracking.tsx
/**
* @ployComponent
* @ployComponentId experience-tracking
* @ployComponentType section
* @ployComponentTags portal, mobile-app, documents, dialog, bilingual
* @ployComponentDescription Investia "Tracking your progress" band (investia.ca grille-section-suivi): H2, then a grey Client Portal card (bold lead, check-circle list, MFA note, external create-account link and an arrow link) beside a light-blue Mobile app card (lead, App Store and Google Play badges, inline Client Portal link, learn-more link and a phone screenshot); cards stack under 1140px and sit 1/3 + 2/3 above. Below, an "Information and documents" H2 and a grey card of PDF download links plus an info link that opens an accessible modal with the interest-rate notice. All copy, links, badges and images are props for EN and FR.
* @ployComponentStatus stable
*/
function ExperienceTracking({ heading, portal, app, documents }) {
	return /* @__PURE__ */ jsx(Section, {
		space: "flush",
		"data-ploy-component": "experience-tracking",
		className: "experience-tracking",
		children: /* @__PURE__ */ jsxs(Container, {
			className: "experience-tracking-container",
			children: [
				/* @__PURE__ */ jsx(Heading, {
					level: 2,
					className: "experience-tracking-heading",
					children: heading
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "experience-tracking-row",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "experience-tracking-card experience-tracking-portal",
						children: [
							/* @__PURE__ */ jsx(Heading, {
								level: 3,
								as: "h3",
								className: "experience-tracking-card-title",
								children: portal.title
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "experience-tracking-portal-body",
								children: [
									/* @__PURE__ */ jsx(Text, {
										className: "experience-tracking-bold",
										children: portal.lead
									}),
									/* @__PURE__ */ jsx("ul", {
										className: "experience-tracking-list",
										children: portal.items.map((item) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(ExperienceMaterialIcon, {
											name: "check_circle",
											size: 24,
											className: "experience-tracking-list-icon"
										}), item] }, item))
									}),
									/* @__PURE__ */ jsx(Text, {
										className: "experience-tracking-bold",
										children: portal.newHeading
									}),
									/* @__PURE__ */ jsx(Text, {
										className: "experience-tracking-portal-note",
										children: portal.newBody
									})
								]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: portal.createHref,
								className: "experience-tracking-link",
								children: [portal.createLabel, /* @__PURE__ */ jsx(ExperienceMaterialIcon, {
									name: "open_in_new",
									size: 18
								})]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: portal.mfaHref,
								className: "experience-tracking-custom-link",
								children: [portal.mfaLabel, /* @__PURE__ */ jsx(ExperienceMaterialIcon, {
									name: "east",
									size: 18
								})]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "experience-tracking-card experience-tracking-app",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "experience-tracking-app-text",
							children: [
								/* @__PURE__ */ jsx(Heading, {
									level: 3,
									as: "h3",
									className: "experience-tracking-card-title",
									children: app.title
								}),
								/* @__PURE__ */ jsx(Text, {
									className: "experience-tracking-bold",
									children: app.lead
								}),
								/* @__PURE__ */ jsx(Text, {
									className: "experience-tracking-paragraph",
									children: app.download
								}),
								app.badges.map((badge, index) => /* @__PURE__ */ jsx("a", {
									href: badge.href,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": badge.ariaLabel,
									className: index === app.badges.length - 1 ? "experience-tracking-badge experience-tracking-badge-last" : "experience-tracking-badge",
									children: /* @__PURE__ */ jsx("img", {
										src: badge.src,
										alt: "",
										width: 172,
										height: 50
									})
								}, badge.href)),
								/* @__PURE__ */ jsxs(Text, {
									className: "experience-tracking-app-note",
									children: [
										app.noteBefore,
										/* @__PURE__ */ jsxs("a", {
											href: app.noteLinkHref,
											target: "_blank",
											rel: "noopener noreferrer",
											"aria-label": app.noteLinkAriaLabel,
											className: "experience-tracking-inline-link",
											children: [app.noteLinkLabel, /* @__PURE__ */ jsx(ExperienceMaterialIcon, {
												name: "open_in_new",
												size: 18,
												className: "experience-tracking-inline-icon"
											})]
										}),
										app.noteAfter
									]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: app.learnHref,
									className: "experience-tracking-link experience-tracking-link-block",
									children: [app.learnLabel, /* @__PURE__ */ jsx(ExperienceMaterialIcon, {
										name: "east",
										size: 18
									})]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "experience-tracking-app-image",
							children: /* @__PURE__ */ jsx("img", {
								src: app.imageSrc,
								alt: app.imageAlt ?? "",
								width: 744,
								height: 1252
							})
						})]
					})]
				}),
				/* @__PURE__ */ jsx(Heading, {
					level: 2,
					className: "experience-tracking-heading",
					children: documents.heading
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "experience-tracking-card experience-tracking-documents",
					children: [documents.items.map((item) => /* @__PURE__ */ jsxs("a", {
						href: item.href,
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": item.ariaLabel,
						className: "experience-tracking-link experience-tracking-doc",
						children: [/* @__PURE__ */ jsx("span", { children: item.label }), /* @__PURE__ */ jsx(ExperienceMaterialIcon, {
							name: "download",
							variant: "filled",
							size: 18
						})]
					}, item.href)), /* @__PURE__ */ jsxs(Dialog, { children: [/* @__PURE__ */ jsx(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsxs("button", {
							type: "button",
							className: "experience-tracking-link experience-tracking-doc",
							children: [/* @__PURE__ */ jsx("span", { children: documents.notice.label }), /* @__PURE__ */ jsx(ExperienceMaterialIcon, {
								name: "info",
								variant: "filled",
								size: 18
							})]
						})
					}), /* @__PURE__ */ jsxs(DialogContent, {
						closeLabel: documents.notice.closeLabel,
						className: "experience-tracking-dialog max-w-[min(720px,calc(100vw-32px))]",
						children: [/* @__PURE__ */ jsx(DialogTitle, {
							level: 2,
							className: "mb-6 pr-8 text-[25px] leading-[28px] text-[#1b1b1b] md:text-[2rem] md:leading-[1.19]",
							children: documents.notice.title
						}), /* @__PURE__ */ jsx(Text, {
							className: "m-0 text-ploy-text-primary",
							children: documents.notice.body
						})]
					})] })]
				})
			]
		})
	});
}
// src/content/advisor/advisor-content.ts
var advisorContent = {
	"fr": {
		"meta": {
			"title": "Trouver un conseiller | Investia",
			"description": "Investia, c'est 1800 conseillers partout au Canada. Contactez-nous dès aujourd'hui pour discuter de vos besoins."
		},
		"hero": {
			"title": "Trouver un conseiller",
			"intro": "Nos représentants en épargne collective vous aideront à choisir des produits d'épargne et d'assurance qui correspondent à votre réalité et à vos besoins."
		},
		"search": {
			"heading": "Je n'ai pas de conseiller",
			"body": "Faites une recherche par code postal ou par ville pour trouver un représentant en épargne collective près de chez vous.",
			"resultsHeading": "Rechercher à proximité",
			"label": "Ville ou code postal",
			"button": "Rechercher",
			"emptyError": "Veuillez inscrire votre ville ou code postal.",
			"resultsCount": "{0} résultats trouvés",
			"moreLabel": "Voir plus de conseillers",
			"noResult": {
				"before": "Nous n’avons trouvé aucun conseiller dans un rayon de 100 kilomètres autour de votre code postal ou de votre ville. ",
				"linkLabel": "Contactez-nous",
				"linkHref": "https://investia.ca/nous-joindre",
				"after": " afin que nous puissions bien vous servir."
			},
			"card": {
				"sendMessage": "Envoyer un message",
				"phoneLabel": "Téléphone",
				"extensionPrefix": ", poste ",
				"mobileLabel": "cellulaire",
				"directions": "Obtenir l'itinéraire",
				"visitWebsite": "Visiter sa page"
			}
		},
		"portal": {
			"heading": "J’ai déjà un conseiller",
			"bodyBefore": "Pour trouver les coordonnées de votre représentant en épargne collective, visitez le portail client, consultez l'un de vos relevés ou contactez le service à la clientèle au ",
			"phoneLabel": "1 888 684-5548",
			"phoneHref": "tel:+18886845548",
			"bodyAfter": ".",
			"cta": {
				"label": "Me connecter au portail client",
				"href": "https://clients.investia.ca/account/login",
				"ariaLabel": "Me connecter au portail client s'ouvre dans un nouvel onglet"
			}
		},
		"value": {
			"heading": "La valeur du conseil",
			"paragraphs": ["Les études le démontrent : en ayant recours aux services d’un conseiller, vous disposerez d’environ 3,9 fois plus d’actifs qu’en n’étant pas conseillé.", "Rencontrer régulièrement votre conseiller permet de revoir vos placements, de détecter les changements importants qui surviennent dans votre vie et d’évaluer vos besoins en assurance."],
			"link": {
				"label": "Les avantages de faire affaire avec un conseiller",
				"href": "https://investia.ca/valeur-du-conseiller"
			},
			"image": {
				"src": "/images/adv1-trouver-conseiller-lavaleur.jpg",
				"alt": "",
				"width": 992,
				"height": 661
			}
		}
	},
	"en": {
		"meta": {
			"title": "Find a Mutual Funds Representative | Investia",
			"description": "1 800 advisors throughout Canada, ready to guide you. This tool will help you find an Investia advisor."
		},
		"hero": {
			"title": "Find an advisor",
			"intro": "Our mutual fund representatives can help you choose savings and insurance products in line with your needs."
		},
		"search": {
			"heading": "I do not have an advisor",
			"body": "Search by postal code or city to find a mutual fund representative near you.",
			"resultsHeading": "Search nearby",
			"label": "City or postal code",
			"button": "Search",
			"emptyError": "Please enter the name of your city or postal code.",
			"resultsCount": "{0} Results found",
			"moreLabel": "See more advisors",
			"noResult": {
				"before": "We cannot locate an advisor within 100 km of your city or postal code. To help us serve you, please ",
				"linkLabel": "contact-us",
				"linkHref": "https://investia.ca/contact-us",
				"after": "."
			},
			"card": {
				"sendMessage": "Send a message",
				"phoneLabel": "Phone",
				"extensionPrefix": ", poste ",
				"mobileLabel": "cellulaire",
				"directions": "Get directions",
				"visitWebsite": "Visit website"
			}
		},
		"portal": {
			"heading": "I already have an advisor",
			"bodyBefore": "To find your advisor's contact information, go to your Client Portal, check one of your statements, or contact Client Services at ",
			"phoneLabel": "1888-684-5548",
			"phoneHref": "tel:+18886845548",
			"bodyAfter": ".",
			"cta": {
				"label": "Sign in to your Client Portal",
				"href": "https://clients.investia.ca/account/login",
				"ariaLabel": "Sign in to your Client Portal opens in a new tab"
			}
		},
		"value": {
			"heading": "The value of an advisor",
			"paragraphs": ["Working with an advisor has been proven to make a big difference for your savings.", "People who work with advisors for 15 years or more build 3.9 times more in savings than those who don’t receive any financial advice."],
			"link": {
				"label": "The benefits of doing business with an advisor",
				"href": "https://investia.ca/value-of-advice"
			},
			"image": {
				"src": "/images/adv1-trouver-conseiller-lavaleur.jpg",
				"alt": "",
				"width": 992,
				"height": 661
			}
		}
	}
};
// src/components/organisms/advisor/advisor-search.tsx
var PAGE_SIZE = 6;
var INVESTIA_ORIGIN = "https://investia.ca";
var absolute = (url) => /^https?:\/\//i.test(url) ? url : `${INVESTIA_ORIGIN}${url.startsWith("/") ? "" : "/"}${url}`;
var ensureHttp = (url) => url.startsWith("http://") || url.startsWith("https://") ? url : `http://${url}`;
function shuffleTies(list) {
	return [...new Set(list.map((a) => a.Distance))].sort((a, b) => a - b).flatMap((d) => {
		const group = list.filter((a) => a.Distance === d);
		for (let i = group.length - 1; i > 0; i -= 1) {
			const j = Math.floor(Math.random() * (i + 1));
			[group[i], group[j]] = [group[j], group[i]];
		}
		return group;
	});
}
function Spinner() {
	return /* @__PURE__ */ jsx("span", {
		className: "adv-spinner",
		"aria-hidden": "true",
		children: Array.from({ length: 12 }, (_, i) => /* @__PURE__ */ jsx("span", { style: {
			transform: `rotate(${i * 30}deg)`,
			animationDelay: `${-1.1 + i * .1}s`
		} }, i))
	});
}
function AdvisorCard({ advisor, labels, cardRef }) {
	const a = advisor;
	return /* @__PURE__ */ jsx("div", {
		className: "adv-card-cell",
		children: /* @__PURE__ */ jsxs("div", {
			className: "adv-card",
			"data-cp": a.CodePostal,
			tabIndex: 0,
			role: "listitem",
			ref: cardRef,
			children: [/* @__PURE__ */ jsxs(Heading, {
				as: "h3",
				level: 4,
				className: "adv-card-name",
				children: [
					a.Prenom,
					" ",
					a.Nom
				]
			}), /* @__PURE__ */ jsxs("ul", {
				className: "adv-card-details",
				children: [
					/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						className: "adv-text-link",
						href: absolute(a.UrlEnvoyerCourriel),
						target: "_self",
						children: labels.sendMessage
					}) }),
					/* @__PURE__ */ jsxs("li", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "adv-card-label",
							children: labels.phoneLabel
						}),
						/* @__PURE__ */ jsx("a", {
							className: "adv-text-link",
							"aria-label": `${labels.phoneLabel}: ${a.Telephone}`,
							href: `tel:${a.Telephone}`,
							children: a.Telephone
						}),
						a.Poste && /* @__PURE__ */ jsxs("span", { children: [labels.extensionPrefix, a.Poste] })
					] }),
					a.Cellulaire && /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("p", {
						className: "adv-card-label",
						children: labels.mobileLabel
					}), /* @__PURE__ */ jsx("a", {
						className: "adv-text-link",
						"aria-label": `${labels.mobileLabel}: ${a.Cellulaire}`,
						href: `tel:${a.Cellulaire}`,
						children: a.Cellulaire
					})] }),
					/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("p", {
						className: "adv-card-address",
						children: [
							a.Adresse,
							/* @__PURE__ */ jsx("br", {}),
							a.Ville,
							" (",
							a.Province,
							") ",
							a.CodePostal
						]
					}) }),
					/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
						className: "adv-text-link",
						href: `https://www.google.ca/maps/search/?api=1&query=${encodeURIComponent(a.Adresse)}`,
						target: "_blank",
						rel: "noopener noreferrer",
						children: [labels.directions, /* @__PURE__ */ jsx("span", {
							className: "adv-icon",
							"aria-hidden": "true",
							children: "open_in_new"
						})]
					}) }),
					a.SiteWeb && /* @__PURE__ */ jsx("li", {
						className: "adv-card-site",
						children: /* @__PURE__ */ jsx("a", {
							href: ensureHttp(a.SiteWeb),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "adv-outlined-button",
							children: labels.visitWebsite
						})
					})
				]
			})]
		})
	});
}
/**
* @ployComponent
* @ployComponentId advisor-search
* @ployComponentType section
* @ployComponentTags advisor-locator, search, form, bilingual, hero
* @ployComponentDescription Find-an-advisor page hero band rebuilt from investia.ca: light-blue band with the fixed line-splash background, blue H1 and intro, then two white cards. "No advisor" card holds a working city/postal-code search that calls the same-origin relay (default /api/advisors?q=&lang=) and renders every source state: empty-input error with live re-validation, spinner in the disabled button while loading, "{n} results" count, advisor cards (send message, phone with optional extension, optional mobile, address, Google Maps directions link, optional "visit website" button) six at a time with a "see more" button, and a 100 km no-result warning with a contact link. Equal-distance results are shuffled like the source; a ?codePostal= URL parameter runs a search on load. "Already have an advisor" card has the client-services phone and the client-portal button. Below 1140px the portal card comes first; once a search runs on desktop the columns become 2/3 and 1/3 with the portal card sticky and centered. All copy comes from props (EN/FR dictionary in src/content/advisor/advisor-content.ts).
* @ployComponentStatus stable
*/
function AdvisorSearch({ lang = "en", hero = advisorContent.en.hero, search = advisorContent.en.search, portal = advisorContent.en.portal, endpoint = "/api/advisors" }) {
	const inputId = useId();
	const errorId = `${inputId}-error`;
	const [value, setValue] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [active, setActive] = useState(false);
	const [status, setStatus] = useState("idle");
	const [advisors, setAdvisors] = useState([]);
	const [shown, setShown] = useState(0);
	const loadingRef = useRef(false);
	const cardRefs = useRef([]);
	const focusIndex = useRef(null);
	const showError = submitted && value.trim() === "";
	async function runSearch(query) {
		if (loadingRef.current) return;
		loadingRef.current = true;
		setLoading(true);
		let list = [];
		try {
			const url = `${endpoint}?q=${encodeURIComponent(query)}&lang=${lang}`;
			const response = await fetch(url, { headers: { Accept: "application/json" } });
			if (response.ok) {
				const data = await response.json();
				if (Array.isArray(data)) list = shuffleTies(data);
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
	function onSubmit(event) {
		event.preventDefault();
		setSubmitted(true);
		const query = value.trim();
		if (!query) return;
		runSearch(query.toUpperCase().replace(/\s/g, ""));
	}
	function onMore(event) {
		if (event.detail === 0) focusIndex.current = shown;
		setShown((n) => Math.min(n + PAGE_SIZE, advisors.length));
	}
	useEffect(() => {
		if (focusIndex.current !== null) {
			cardRefs.current[focusIndex.current]?.focus();
			focusIndex.current = null;
		}
	}, [shown]);
	useEffect(() => {
		const preset = new URLSearchParams(window.location.search).get("codePostal");
		if (preset) {
			setValue(preset);
			runSearch(preset.toUpperCase().replace(/\s/g, ""));
		}
	}, []);
	return /* @__PURE__ */ jsx(Section, {
		space: "flush",
		"data-ploy-component": "advisor-search",
		className: `adv-search${active ? " adv-search-active" : ""}`,
		children: /* @__PURE__ */ jsxs(Container, { children: [/* @__PURE__ */ jsxs("div", {
			className: "adv-intro",
			children: [/* @__PURE__ */ jsx(Heading, {
				as: "h1",
				level: 1,
				className: "adv-title",
				children: hero.title
			}), /* @__PURE__ */ jsx(Text, {
				className: "adv-intro-text",
				children: hero.intro
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "adv-columns",
			children: [/* @__PURE__ */ jsx("div", {
				className: "adv-column adv-column-search",
				children: /* @__PURE__ */ jsxs("div", {
					className: "adv-box",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "adv-box-content",
						children: [
							!active && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Heading, {
								as: "h2",
								level: 4,
								className: "adv-box-heading",
								children: search.heading
							}), /* @__PURE__ */ jsx(Text, {
								className: "adv-box-text",
								children: search.body
							})] }),
							active && /* @__PURE__ */ jsx(Heading, {
								as: "h2",
								level: 4,
								className: "adv-box-heading adv-results-heading",
								children: search.resultsHeading
							}),
							/* @__PURE__ */ jsxs("form", {
								className: "adv-form",
								onSubmit,
								noValidate: true,
								"data-utag-fname": "form_find-advisor",
								children: [/* @__PURE__ */ jsx("label", {
									className: "adv-label",
									htmlFor: inputId,
									children: search.label
								}), /* @__PURE__ */ jsxs("div", {
									className: "adv-input-group",
									children: [
										/* @__PURE__ */ jsx("input", {
											id: inputId,
											name: "CodePostalVille",
											type: "text",
											autoComplete: "off",
											className: `adv-input${showError ? " adv-input-error" : ""}`,
											value,
											onChange: (e) => setValue(e.target.value),
											"aria-invalid": showError || void 0,
											"aria-describedby": showError ? errorId : void 0
										}),
										/* @__PURE__ */ jsx("button", {
											type: "submit",
											className: "adv-search-button",
											disabled: loading,
											"aria-busy": loading || void 0,
											children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Spinner, {}), /* @__PURE__ */ jsx("span", {
												className: "sr-only",
												children: search.button
											})] }) : search.button
										}),
										showError && /* @__PURE__ */ jsxs("span", {
											id: errorId,
											className: "adv-error",
											role: "alert",
											children: [/* @__PURE__ */ jsx(CircleAlert, {
												"aria-hidden": "true",
												size: 16,
												strokeWidth: 2.25
											}), search.emptyError]
										})
									]
								})]
							})
						]
					}), active && /* @__PURE__ */ jsxs("div", {
						className: "adv-results",
						"aria-live": "polite",
						children: [status === "empty" && /* @__PURE__ */ jsx("div", {
							className: "adv-warning",
							children: /* @__PURE__ */ jsxs("p", { children: [
								search.noResult.before,
								/* @__PURE__ */ jsx("a", {
									className: "adv-text-link adv-inline-link",
									href: search.noResult.linkHref,
									children: search.noResult.linkLabel
								}),
								search.noResult.after
							] })
						}), status === "results" && /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("p", {
								className: "adv-count",
								children: search.resultsCount.replace("{0}", String(advisors.length))
							}),
							/* @__PURE__ */ jsx("div", {
								className: "adv-list",
								role: "list",
								children: advisors.slice(0, shown).map((advisor, index) => /* @__PURE__ */ jsx(AdvisorCard, {
									advisor,
									labels: search.card,
									cardRef: (el) => {
										cardRefs.current[index] = el;
									}
								}, `${advisor.Id}-${index}`))
							}),
							/* @__PURE__ */ jsx("hr", { className: "adv-rule" }),
							shown < advisors.length && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("button", {
								type: "button",
								className: "adv-text-link adv-more",
								onClick: onMore,
								children: [search.moreLabel, /* @__PURE__ */ jsx("span", {
									className: "adv-icon",
									"aria-hidden": "true",
									children: "add"
								})]
							}) })
						] })]
					})]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "adv-column adv-column-portal",
				children: /* @__PURE__ */ jsxs("div", {
					className: "adv-box adv-portal",
					children: [
						/* @__PURE__ */ jsx(Heading, {
							as: "h2",
							level: 4,
							className: "adv-box-heading",
							children: portal.heading
						}),
						/* @__PURE__ */ jsxs(Text, {
							className: "adv-box-text",
							children: [
								portal.bodyBefore,
								/* @__PURE__ */ jsx("a", {
									className: "adv-text-link adv-inline-link adv-nowrap",
									href: portal.phoneHref,
									children: portal.phoneLabel
								}),
								portal.bodyAfter
							]
						}),
						/* @__PURE__ */ jsx("a", {
							className: "adv-outlined-button",
							href: portal.cta.href,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": portal.cta.ariaLabel,
							children: portal.cta.label
						})
					]
				})
			})]
		})] })
	});
}
// src/components/organisms/advisor/advisor-value.tsx
/**
* @ployComponent
* @ployComponentId advisor-value
* @ployComponentType section
* @ployComponentTags advisor, media, text-image, bilingual
* @ployComponentDescription "Value of an advisor" band from investia.ca find-an-advisor: heading, one or more paragraphs and a text link with an east arrow glyph on the left; a pill-shaped (288px radius) cover photo on the right that stretches to the copy height. Phone stacks copy above a 288x180 pill; tablet uses a 72px gap with a 238px minimum pill; desktop a 112px gap. Heading, paragraphs, link and image (local /images/ path) are props.
* @ployComponentStatus stable
*/
function AdvisorValue({ heading = advisorContent.en.value.heading, paragraphs = advisorContent.en.value.paragraphs, link = advisorContent.en.value.link, image = advisorContent.en.value.image }) {
	return /* @__PURE__ */ jsx(Section, {
		space: "flush",
		"data-ploy-component": "advisor-value",
		className: "adv-value",
		children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs("div", {
			className: "adv-value-row",
			children: [/* @__PURE__ */ jsx("div", {
				className: "adv-value-copy",
				children: /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(Heading, {
						as: "h2",
						level: 3,
						className: "adv-value-heading",
						children: heading
					}),
					paragraphs.map((paragraph, index) => /* @__PURE__ */ jsx(Text, {
						className: index === paragraphs.length - 1 ? "adv-value-text adv-value-text-last" : "adv-value-text",
						children: paragraph
					}, index)),
					/* @__PURE__ */ jsxs("a", {
						className: "adv-value-link",
						href: link.href,
						target: "_self",
						children: [link.label, /* @__PURE__ */ jsx("span", {
							className: "adv-value-icon",
							"aria-hidden": "true",
							children: "east"
						})]
					})
				] })
			}), /* @__PURE__ */ jsx("div", {
				className: "adv-value-media-col",
				children: /* @__PURE__ */ jsx("div", {
					className: "adv-value-media",
					children: /* @__PURE__ */ jsx("img", {
						src: image.src,
						alt: image.alt,
						width: image.width,
						height: image.height,
						loading: "lazy"
					})
				})
			})]
		}) })
	});
}
// src/content/home/home-content.ts
var homeContent = {
	"en": {
		"lang": "en-CA",
		"meta": {
			"title": "Investia Financial Services | iA Financial Group",
			"description": "Investia is a financial services firm that offers a complete range of products to help you reach your goals."
		},
		"pageTitle": "Investia",
		"nav": {
			"homeLabel": "Investia home",
			"links": [
				{
					"label": "The Investia experience",
					"href": "/investia-experience"
				},
				{
					"label": "Products and services",
					"href": "/products-and-services"
				},
				{
					"label": "Find an advisor",
					"href": "/find-an-advisor"
				}
			],
			"accounts": [{
				"label": "Advisor Centre",
				"href": "https://logins.investia.ca/SAMLAuth/Login?SAMLRequest=fVA9b8JADN35FdHt5D5CCLGSSEgwRKJLW3XogpxwKpGCj54viJ%2FfHK3UTvXgwe89%2Bz1X2ymc6dl%2BTpZDspvbQBgGR7U4h3BlkHJ0HwNxOtAtopj2KF%2B2T4colIeIiaTd1eJ46gx2urR9sdHKrAp1ynHVoVrbdaazIitVXsxU5sm2xAEp1MIovVmqcmnyV51BrsGYd5G8Wc8PCyZVIrlfRuJaTJ7AIQ8MhBfLEHqINmDmwNW74Ho3imaRzFURa3gc8t9qmAf%2Fb0Bm62Nu0URa%2BxN2fw8eyYZK%2Fq5sFpX8%2B7XmCw%3D%3D&RelayState=48c11ede24de214ae9f46831623a563bfc4ff280"
			}, {
				"label": "Client Portal",
				"href": "https://client.investia.ca"
			}],
			"advisor": {
				"label": "Advisor opportunities",
				"href": "https://investia.ca/advisor-opportunities"
			},
			"language": {
				"label": "FR",
				"href": "/accueil",
				"lang": "fr",
				"ariaLabel": "Français"
			},
			"connectLabel": "Connect",
			"searchPlaceholder": "Search",
			"search": {
				"inputLabel": "Search input",
				"submitLabel": "Search",
				"action": "https://investia.ca/search"
			},
			"labels": {
				"mainNav": "Main navigation",
				"accountNav": "Account navigation",
				"mobileNav": "Mobile main navigation",
				"menuTitle": "Investia navigation",
				"openMenu": "Open menu",
				"closeMenu": "Close menu",
				"skipToContent": "Skip to main content"
			}
		},
		"hero": {
			"items": [
				{
					"id": "projects",
					"title": "Invest in your projects",
					"body": "Take advantage of our advice for key moments in your life and let us help you through the process.",
					"imageSrc": "/images/bf1aca80-accueil-hero-dsktp.webp",
					"tabletImageSrc": "/images/66369806-accueil-hero-tblt.webp",
					"mobileImageSrc": "/images/986eb8c2-accueil-hero-phne.webp",
					"actionLabel": "Life events",
					"actionHref": "#life-events",
					"actionIcon": "none",
					"decoration": "projects"
				},
				{
					"id": "app",
					"title": "The Investia app",
					"body": "Our app lets you keep track of your investments anywhere, anytime.",
					"imageSrc": "/images/465556ff-accueil-hero4-app-gbi-dsktp.webp",
					"tabletImageSrc": "/images/5de970df-accueil-hero4-app-gbi-tblt.webp",
					"mobileImageSrc": "/images/279411d1-accueil-hero4-app-gbi-phne.webp",
					"actionLabel": "Learn more",
					"actionHref": "https://investia.ca/mobile-app"
				},
				{
					"id": "tfsa",
					"title": "TFSA",
					"imageSrc": "/images/55bbbd85-accueil-hero5-celi-dsktp.webp",
					"tabletImageSrc": "/images/60bc5c9e-accueil-hero5-celi-tblt.webp",
					"mobileImageSrc": "/images/f0b0a55f-accueil-hero5-celi-phne.webp",
					"actionLabel": "See the annual limit for 2026",
					"actionHref": "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributions.html",
					"external": true,
					"actionAriaLabel": "See the annual limit for 2026 opens in a new tab",
					"decoration": "tfsa",
					"secondaryLabel": "Learn more about TFSAs",
					"secondaryHref": "https://investia.ca/products-and-services/tfsa"
				},
				{
					"id": "portal",
					"title": "Client Portal",
					"body": "Already a client? Register now and access your portfolio online.",
					"imageSrc": "/images/afabac5c-accueil-hero6-portail-dsktp.webp",
					"tabletImageSrc": "/images/457a8d86-accueil-hero6-portail-tblt.webp",
					"mobileImageSrc": "/images/750cd5f6-accueil-hero6-portail-phne.webp",
					"actionLabel": "Create account",
					"actionHref": "https://client.investia.ca/",
					"external": true,
					"actionAriaLabel": "Create account opens in a new tab",
					"decoration": "portal",
					"secondaryLabel": "About multi-factor authentication (MFA)",
					"secondaryHref": "https://investia.ca/multi-factor-authentication-clients"
				},
				{
					"id": "resp",
					"title": "Registered education savings plans (RESP)",
					"body": "The RESP is specifically designed to accumulate funds for a child's post-secondary education.",
					"imageSrc": "/images/590bc5d2-accueil-reee-hero-dsktp.webp",
					"tabletImageSrc": "/images/1ab21e06-accueil-reee-hero-tblt.webp",
					"mobileImageSrc": "/images/eb5e5be7-accueil-reee-hero-phne.webp",
					"actionLabel": "Learn more",
					"actionHref": "https://investia.ca/products-and-services/resp"
				}
			],
			"ariaLabel": "Featured topics",
			"a11y": {
				"paginationBulletMessage": "Go to slide {{index}}",
				"prevSlideMessage": "Previous slide",
				"nextSlideMessage": "Next slide"
			}
		},
		"actions": { "items": [{
			"label": "Find an advisor",
			"href": "/find-an-advisor"
		}, {
			"label": "Connect to the Client Portal",
			"href": "https://client.investia.ca/"
		}] },
		"benefits": { "items": [
			{
				"title": "The Investia experience",
				"body": "Anything can change in life. Our advisors are there to make sure that your action plan evolves with you.",
				"imageSrc": "/images/24d627c8-experience-investia.webp",
				"imageAlt": "Woman working on a laptop",
				"actionLabel": "See our offer",
				"actionHref": "/investia-experience"
			},
			{
				"title": "The value of advice",
				"body": "Benefit from the expertise of our advisors and a variety of customized solutions which will help you reach your financial goals.",
				"imageSrc": "/images/c9297b4c-accueil-valeurconseiller-grille.webp",
				"imageAlt": "",
				"overlaySrc": "/images/95b9d810-accueil-representants-pin.webp",
				"overlayAlt": "Investia advisors",
				"actionLabel": "Discover our expertise",
				"actionHref": "https://investia.ca/value-of-advice"
			},
			{
				"title": "About us",
				"body": "A wholly-owned subsidiary of iA Financial Group, Investia offers you a full range of mutual fund and segregated fund products and services to meet your savings and retirement needs.",
				"imageSrc": "/images/1e0676de-a-propos.webp",
				"imageAlt": "Father carrying his child on his shoulders",
				"actionLabel": "About Investia",
				"actionHref": "https://investia.ca/about-investia"
			}
		] },
		"products": {
			"heading": "We offer a wide range of products and services",
			"body": "You have financial needs? We have products and services to help you reach your goals.",
			"items": [
				"RRSP, LIRA and other plans",
				"RRIF, LIF and annuities",
				"RRSP loans",
				"Tax-free savings accounts (TFSA)",
				"Non-registered savings plans",
				"Registered education savings plans (RESP)"
			],
			"imageSrc": "/images/6d77cd18-accueil-gamme-produits.webp",
			"imageAlt": "An adult and child fishing together",
			"actionLabel": "Discover our products and services",
			"actionHref": "/products-and-services"
		},
		"objectives": {
			"heading": ["New life event,", "new objective"],
			"items": [
				{
					"label": "Moving in together",
					"lead": "Are you about to move in with your significant other?",
					"body": "See what you should plan for in terms of insurance and savings to begin your life together on the right foot.",
					"videoSrc": "https://player.vimeo.com/video/512694821?h=14f9fe9aca"
				},
				{
					"label": "Buying a home",
					"lead": "Do you want to leave apartment life behind and buy a home?",
					"body": "Buying a home is one of the most important transactions you will ever make. Being prepared will make the process easier and help you make educated choices.",
					"videoSrc": "https://player.vimeo.com/video/512695696?h=9ff772182b"
				},
				{
					"label": "Having a child",
					"lead": "Will your family soon have a new addition?",
					"body": "Here are a few things to think about to protect your loved ones against the unexpected and prepare for your new arrival.",
					"videoSrc": "https://player.vimeo.com/video/512694732?h=86cf52309e"
				},
				{
					"label": "Saving for a project",
					"lead": "Do you want to travel? Are you planning your wedding or your retirement?",
					"body": "Whether your projects are big or small, you must take the time to organize and figure out how to pay for them.",
					"videoSrc": "https://player.vimeo.com/video/512695304?h=81691126f4"
				},
				{
					"label": "Starting a business",
					"lead": "Do you believe in your project and know that your products or services meet the needs of the market?",
					"body": "Here are a few elements to help you launch your business.",
					"videoSrc": "https://player.vimeo.com/video/512695366?h=57db274669"
				},
				{
					"label": "Planning your retirement",
					"lead": "It is never too early to start planning for retirement.",
					"body": "Whatever your dreams for your retirement, having a strategy in advance will give you the tools you need to make them a reality. By having a good understanding of basic financial concepts related to retirement, you can get the most out of the tools available to you.",
					"videoSrc": "https://player.vimeo.com/video/512695110?h=71c750c323"
				}
			],
			"imageSrc": "/images/2382ce58-accueil-nouvel-objectif.webp",
			"imageAlt": "",
			"id": "life-events",
			"closeLabel": "Close"
		},
		"newsTeams": { "items": [{
			"id": "news",
			"heading": "Economic news",
			"body": "Sébastien Mc Mahon, Chief Strategist and Senior Economist at iA Financial Group, presents articles and videos to help keep you up to speed on the economy and the financial markets.",
			"imageSrc": "/images/79a3d937-accueil-actualites-economiques.webp",
			"imageAlt": "Economic themes and a rising graph",
			"mediaWidth": 514,
			"mediaHeight": 286,
			"actions": [{
				"label": "View economic news",
				"href": "https://ia.ca/economic-publications",
				"external": true,
				"ariaLabel": "View economic news opens in a new window"
			}]
		}, {
			"id": "teams",
			"heading": "Join the Investia teams",
			"body": "The support and backing that we provide our advisors is at the heart of our corporate culture. We offer our advisors a wide range of products and services, including the latest technology and simplified business processes which will allow them to place their focus where it counts: on their clients.",
			"imageSrc": "/images/95d04241-accueil-equipe.webp",
			"imageAlt": "A member of the Investia team",
			"mediaWidth": 514,
			"mediaHeight": 396,
			"flip": true,
			"brandArtwork": true,
			"actions": [{
				"label": "Consult our job offers",
				"href": "https://ia.ca/jobs/jobs-available",
				"primary": true,
				"external": true,
				"ariaLabel": "Consult our job offers opens in a new tab"
			}, {
				"label": "Become an Investia advisor",
				"href": "https://investia.ca/advisor-opportunities"
			}]
		}] },
		"footer": {
			"primaryLinks": [
				{
					"label": "About us",
					"href": "https://investia.ca/about-investia"
				},
				{
					"label": "Contact us",
					"href": "https://investia.ca/contact-us"
				},
				{
					"label": "Careers",
					"href": "https://investia.ca/career"
				}
			],
			"secondaryLinks": [
				{
					"label": "Connect to the Client Portal",
					"href": "https://client.investia.ca/",
					"external": true,
					"ariaLabel": "Connect to the Client Portal opens in a new tab"
				},
				{
					"label": "Find an advisor",
					"href": "/find-an-advisor"
				},
				{
					"label": "Advice Zone",
					"href": "https://ia.ca/advice-zone",
					"external": true,
					"ariaLabel": "Advice Zone opens in a new tab"
				},
				{
					"label": "Economic news",
					"href": "https://ia.ca/economic-publications",
					"external": true,
					"ariaLabel": "Economic news opens in a new tab"
				}
			],
			"legalLinks": [
				{
					"label": "Unclaimed property",
					"href": "https://investia.ca/unclaimed-property"
				},
				{
					"label": "Legal and compliance",
					"href": "https://investia.ca/legal-and-compliance"
				},
				{
					"label": "Terms of use",
					"href": "https://investia.ca/terms-conditions"
				},
				{
					"label": "Privacy",
					"href": "https://ia.ca/protection-personal-information",
					"external": true,
					"ariaLabel": "Privacy opens in a new tab"
				},
				{
					"label": "Accessibility",
					"href": "https://ia.ca/accessibility",
					"external": true,
					"ariaLabel": "Accessibility opens in a new tab"
				},
				{
					"label": "Sitemap",
					"href": "https://investia.ca/site-map"
				},
				{
					"label": "Investia Administrative Fee Schedule",
					"href": "https://investia.ca/grille-frais"
				},
				{
					"label": "iA Financial Group",
					"href": "https://ia.ca/individuals",
					"external": true,
					"ariaLabel": "iA Financial Group opens in a new tab"
				},
				{
					"label": "Cookies preference",
					"href": "#cookie-preferences",
					"cookiePreferences": true
				}
			],
			"socialLinks": [{
				"network": "linkedin",
				"label": "LinkedIn",
				"href": "https://www.linkedin.com/company/investiafinancialservices",
				"ariaLabel": "LinkedIn opens in a new tab"
			}, {
				"network": "facebook",
				"label": "Facebook",
				"href": "https://www.facebook.com/InvestiaFinancialServices/",
				"ariaLabel": "Facebook opens in a new tab"
			}],
			"appTitle": "Download the Investia app",
			"appBadges": [{
				"label": "App Store",
				"alt": "App Store",
				"src": "/images/2fd22d0a-app-store-en.webp",
				"href": "https://apps.apple.com/app/apple-store/id1549342167?pt=1948947&ct=gcx-adopt-en-investia-footer&mt=8"
			}, {
				"label": "Google Play",
				"alt": "Google Play",
				"src": "/images/a08910f6-google-play-en.webp",
				"href": "https://play.google.com/store/apps/details?id=ca.investia.mobile&hl=en&referrer=utm_source%3Dinvestia.ca%26utm_medium%3Dreferral%26utm_term%3Dgcx-adopt-en-investia-footer%26utm_content%3Dfooter%26utm_campaign%3Dgcx-adopt-en-investia-footer"
			}],
			"appBenefits": {
				"label": "Discover the benefits",
				"href": "https://investia.ca/mobile-app"
			},
			"slogan": "Get ahead",
			"subsidiaryNote": "Investia Financial Services Inc. is a wholly-owned subsidiary of Industrial Alliance Insurance and Financial Services Inc., a life and health insurance company which operates under the trade name iA Financial Group.",
			"copyrightLabel": "Investia Financial Services - All rights reserved"
		},
		"regulatory": {
			"imageSrc": "/images/10d55ebb-ciro-regulated.webp",
			"imageAlt": "Canadian Investment Regulatory Organization (CIRO)",
			"href": "https://www.ciro.ca/"
		}
	},
	"fr": {
		"lang": "fr-CA",
		"meta": {
			"title": "Investia Services Financiers | iA Groupe financier",
			"description": "Investia est un cabinet de services financiers qui se spécialisent dans les fonds communs de placement et les fonds distincts."
		},
		"pageTitle": "Investia",
		"nav": {
			"homeLabel": "Accueil Investia",
			"logoSrc": "/images/2b823bce-investia-fr-h-rgb-web.svg",
			"logoAlt": "Investia",
			"links": [
				{
					"label": "L'expérience Investia",
					"href": "/experience-investia"
				},
				{
					"label": "Produits et services",
					"href": "/produits-et-services"
				},
				{
					"label": "Trouver un conseiller",
					"href": "/trouver-un-conseiller"
				}
			],
			"accounts": [{
				"label": "Espace conseiller",
				"href": "https://logins.investia.ca/SAMLAuth/Login?SAMLRequest=fVA9b8JADN35FdHt5D5CCLGSSEgwRKJLW3XogpxwKpGCj54viJ%2FfHK3UTvXgwe89%2Bz1X2ymc6dl%2BTpZDspvbQBgGR7U4h3BlkHJ0HwNxOtAtopj2KF%2B2T4colIeIiaTd1eJ46gx2urR9sdHKrAp1ynHVoVrbdaazIitVXsxU5sm2xAEp1MIovVmqcmnyV51BrsGYd5G8Wc8PCyZVIrlfRuJaTJ7AIQ8MhBfLEHqINmDmwNW74Ho3imaRzFURa3gc8t9qmAf%2Fb0Bm62Nu0URa%2BxN2fw8eyYZK%2Fq5sFpX8%2B7XmCw%3D%3D&RelayState=48c11ede24de214ae9f46831623a563bfc4ff280"
			}, {
				"label": "Portail client",
				"href": "https://client.investia.ca"
			}],
			"advisor": {
				"label": "Opportunités pour les conseillers",
				"href": "https://investia.ca/opportunites-pour-les-conseillers"
			},
			"language": {
				"label": "EN",
				"href": "/",
				"lang": "en",
				"ariaLabel": "English"
			},
			"connectLabel": "Connexion",
			"searchPlaceholder": "Rechercher",
			"search": {
				"inputLabel": "Champ de recherche",
				"submitLabel": "Rechercher",
				"action": "https://investia.ca/recherche"
			},
			"labels": {
				"mainNav": "Navigation principale",
				"accountNav": "Navigation des comptes",
				"mobileNav": "Navigation principale mobile",
				"menuTitle": "Navigation Investia",
				"openMenu": "Ouvrir le menu",
				"closeMenu": "Fermer le menu",
				"skipToContent": "Passer au contenu principal"
			}
		},
		"hero": {
			"items": [
				{
					"id": "projects",
					"title": "Investir dans vos projets",
					"body": "Profitez de nos conseils lors des moments clés de votre vie et laissez-nous vous aider dans vos démarches.",
					"imageSrc": "/images/bf1aca80-accueil-hero-dsktp.webp",
					"tabletImageSrc": "/images/66369806-accueil-hero-tblt.webp",
					"mobileImageSrc": "/images/986eb8c2-accueil-hero-phne.webp",
					"actionLabel": "Événements de vie",
					"actionHref": "#life-events",
					"actionIcon": "none",
					"decoration": "projects"
				},
				{
					"id": "app",
					"title": "L’application Investia",
					"body": "Notre application vous permet de suivre vos placements partout et en tout temps.",
					"imageSrc": "/images/465556ff-accueil-hero4-app-gbi-dsktp.webp",
					"tabletImageSrc": "/images/5de970df-accueil-hero4-app-gbi-tblt.webp",
					"mobileImageSrc": "/images/279411d1-accueil-hero4-app-gbi-phne.webp",
					"actionLabel": "En savoir plus",
					"actionHref": "https://investia.ca/appli-mobile"
				},
				{
					"id": "tfsa",
					"title": "CELI",
					"imageSrc": "/images/55bbbd85-accueil-hero5-celi-dsktp.webp",
					"tabletImageSrc": "/images/60bc5c9e-accueil-hero5-celi-tblt.webp",
					"mobileImageSrc": "/images/f0b0a55f-accueil-hero5-celi-phne.webp",
					"actionLabel": "Informez-vous sur le nouveau montant annuel maximum pour 2026",
					"actionHref": "https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/compte-epargne-libre-impot/cotisations.html",
					"external": true,
					"actionAriaLabel": "Informez-vous sur le nouveau montant annuel maximum pour 2026 s'ouvre dans un nouvel onglet",
					"decoration": "tfsa",
					"secondaryLabel": "En savoir plus sur les CELI",
					"secondaryHref": "https://investia.ca/produits-et-services/celi"
				},
				{
					"id": "portal",
					"title": "Portail client",
					"body": "Déjà client? Inscrivez-vous dès maintenant et accédez à votre portefeuille en ligne.",
					"imageSrc": "/images/afabac5c-accueil-hero6-portail-dsktp.webp",
					"tabletImageSrc": "/images/457a8d86-accueil-hero6-portail-tblt.webp",
					"mobileImageSrc": "/images/750cd5f6-accueil-hero6-portail-phne.webp",
					"actionLabel": "Créer un compte",
					"actionHref": "https://client.investia.ca/",
					"external": true,
					"actionAriaLabel": "Créer un compte s'ouvre dans un nouvel onglet",
					"decoration": "portal",
					"secondaryLabel": "À propos de l'authentification multifactorielle (AMF)",
					"secondaryHref": "https://investia.ca/authentification-multifactorielle"
				},
				{
					"id": "resp",
					"title": "Régime enregistré d'épargne-d'études (REEE)",
					"body": "Le REEE est spécialement conçu pour accumuler des sommes en vue des études postsecondaires d'un enfant.",
					"imageSrc": "/images/590bc5d2-accueil-reee-hero-dsktp.webp",
					"tabletImageSrc": "/images/1ab21e06-accueil-reee-hero-tblt.webp",
					"mobileImageSrc": "/images/eb5e5be7-accueil-reee-hero-phne.webp",
					"actionLabel": "En savoir plus",
					"actionHref": "https://investia.ca/produits-et-services/reee"
				}
			],
			"ariaLabel": "Sujets en vedette",
			"a11y": {
				"paginationBulletMessage": "Aller à la diapositive {{index}}",
				"prevSlideMessage": "Diapositive précédente",
				"nextSlideMessage": "Diapositive suivante"
			}
		},
		"actions": { "items": [{
			"label": "Trouver un conseiller",
			"href": "/trouver-un-conseiller"
		}, {
			"label": "Me connecter au portail client",
			"href": "https://client.investia.ca/"
		}] },
		"benefits": { "items": [
			{
				"title": "L'expérience Investia",
				"body": "Tout peut changer dans la vie. C’est pourquoi nos conseillers vous accompagnent à toutes les étapes de votre vie afin de s’assurer que votre plan d’action évolue avec vous.",
				"imageSrc": "/images/24d627c8-experience-investia.webp",
				"imageAlt": "Femme travaillant sur un ordinateur portable",
				"actionLabel": "Vivre l’expérience Investia",
				"actionHref": "/experience-investia"
			},
			{
				"title": "La valeur du conseil",
				"body": "Profitez de l’expertise de nos conseillers et réalisez vos projets. Laissez-nous vous proposer des solutions sur mesure qui vous permettront d’atteindre vos objectifs financiers.",
				"imageSrc": "/images/c9297b4c-accueil-valeurconseiller-grille.webp",
				"imageAlt": "",
				"overlaySrc": "/images/95b9d810-accueil-representants-pin.webp",
				"overlayAlt": "Conseillers Investia",
				"actionLabel": "Découvrir notre expertise",
				"actionHref": "https://investia.ca/valeur-du-conseiller"
			},
			{
				"title": "À propos de nous",
				"body": "Filiale à part entière de iA Groupe financier, Investia vous offre une gamme complète de produits et de services de fonds communs de placement et de fonds distincts afin de combler vos besoins d’épargne et de retraite.",
				"imageSrc": "/images/1e0676de-a-propos.webp",
				"imageAlt": "Père portant son enfant sur ses épaules",
				"actionLabel": "En savoir plus sur Investia",
				"actionHref": "https://investia.ca/a-propos"
			}
		] },
		"products": {
			"heading": "Une vaste gamme de produits et services",
			"body": "Vous avez des besoins financiers? Nous avons des produits et des services pour vous aider à réaliser vos objectifs.",
			"items": [
				"REER, CRI et autres régimes",
				"FERR, FRV et rentes",
				"Prêt REER",
				"Compte d’épargne libre d’impôt (CELI)",
				"Épargne non enregistrée",
				"Régime enregistré d’épargne-études (REEE)"
			],
			"imageSrc": "/images/6d77cd18-accueil-gamme-produits.webp",
			"imageAlt": "Un adulte et un enfant qui pêchent ensemble",
			"actionLabel": "Découvrir nos produits et services",
			"actionHref": "/produits-et-services"
		},
		"objectives": {
			"heading": ["Nouvel événement de\xA0vie,", "nouvel objectif"],
			"items": [
				{
					"label": "Vivre en couple",
					"lead": "Vous êtes sur le point d’emménager avec votre conjoint(e)?",
					"body": "Voici ce que vous devez planifier en matière d’assurance et d’épargne afin de bien entamer votre vie à deux.",
					"videoSrc": "https://player.vimeo.com/video/512695441?h=ddd25169ae"
				},
				{
					"label": "Acheter une maison",
					"lead": "Vous désirez quitter votre logement et devenir propriétaire?",
					"body": "L’achat d’une maison est l’une des plus importantes transactions de notre vie. Être bien préparé facilitera le processus et vous permettra de faire des choix éclairés.",
					"videoSrc": "https://player.vimeo.com/video/512695544?h=ba616fc3ab"
				},
				{
					"label": "Avoir un enfant",
					"lead": "Votre famille s’agrandira sous peu?",
					"body": "Voici quelques éléments à considérer pour protéger vos proches des imprévus et être bien préparé à la venue de votre nouveau-né.",
					"videoSrc": "https://player.vimeo.com/video/512695622?h=caa786b74d"
				},
				{
					"label": "Épargner pour un projet",
					"lead": "Vous voulez voyager, vous planifiez votre mariage ou votre retraite?",
					"body": "Que vos projets soient gros ou petits, vous devrez prendre le temps de les organiser et de les financer.",
					"videoSrc": "https://player.vimeo.com/video/512694630?h=1c43da0740"
				},
				{
					"label": "Démarrer une entreprise",
					"lead": "Vous croyez en votre projet et savez que vos produits ou vos services correspondent au besoin du marché?",
					"body": "Voici les éléments qui vous aideront à mettre en branle votre projet.",
					"videoSrc": "https://player.vimeo.com/video/512695776?h=5e0d6b5b48"
				},
				{
					"label": "Planifier sa retraite",
					"lead": "Il n'est jamais trop tôt pour planifier sa retraite.",
					"body": "Quels que soient vos rêves pour la retraite, une stratégie établie à l’avance vous permettra de mettre toutes les chances de votre côté. En ayant une bonne compréhension des concepts financiers liés à la retraite, par exemple, vous pourrez maximiser les bénéfices des outils mis à votre disposition.",
					"videoSrc": "https://player.vimeo.com/video/512694919?h=82141f081a"
				}
			],
			"imageSrc": "/images/2382ce58-accueil-nouvel-objectif.webp",
			"imageAlt": "",
			"id": "life-events",
			"closeLabel": "Fermer"
		},
		"newsTeams": { "items": [{
			"id": "news",
			"heading": "Actualités économiques",
			"body": "Sébastien Mc Mahon, stratège en chef et économiste sénior chez iA Groupe financier, vous propose des articles et des capsules vidéo qui vous garderont à l’affût de l’économie et des marchés financiers.",
			"imageSrc": "/images/79a3d937-accueil-actualites-economiques.webp",
			"imageAlt": "Thèmes économiques et graphique ascendant",
			"mediaWidth": 514,
			"mediaHeight": 286,
			"actions": [{
				"label": "Consulter les actualités économiques",
				"href": "https://ia.ca/actualites-economiques",
				"external": true,
				"ariaLabel": "Consulter les actualités économiques s'ouvre dans un nouvel onglet"
			}]
		}, {
			"id": "teams",
			"heading": "Prenez place dans l’équipe Investia",
			"body": "Le soutien et l’appui que nous apportons à nos conseillers sont au cœur de notre culture d’entreprise. Nous offrons à nos conseillers une vaste gamme de produits et de services, une technologie de pointe et des processus d’affaires simplifiés pour qu’ils puissent se concentrer sur ce qui importe le plus : leurs clients.",
			"imageSrc": "/images/95d04241-accueil-equipe.webp",
			"imageAlt": "Une membre de l'équipe Investia",
			"mediaWidth": 514,
			"mediaHeight": 396,
			"flip": true,
			"brandArtwork": true,
			"actions": [{
				"label": "Consulter nos offres d’emploi",
				"href": "https://ia.ca/emploi/emplois-disponibles",
				"primary": true,
				"external": true,
				"ariaLabel": "Consulter nos offres d'emploi s'ouvre dans un nouvel onglet"
			}, {
				"label": "Devenir un conseiller Investia",
				"href": "https://investia.ca/opportunites-pour-les-conseillers"
			}]
		}] },
		"footer": {
			"primaryLinks": [
				{
					"label": "À propos",
					"href": "https://investia.ca/a-propos"
				},
				{
					"label": "Nous joindre",
					"href": "https://investia.ca/nous-joindre"
				},
				{
					"label": "Carrières",
					"href": "https://investia.ca/carriere"
				}
			],
			"secondaryLinks": [
				{
					"label": "Me connecter au portail client",
					"href": "https://client.investia.ca/",
					"external": true,
					"ariaLabel": "Me connecter au portail client s'ouvre dans un nouvel onglet"
				},
				{
					"label": "Trouver un conseiller",
					"href": "/trouver-un-conseiller"
				},
				{
					"label": "Zone conseils",
					"href": "https://ia.ca/zone-conseils",
					"external": true,
					"ariaLabel": "Zone conseils s'ouvre dans un nouvel onglet"
				},
				{
					"label": "Actualités économiques",
					"href": "https://ia.ca/actualites-economiques",
					"external": true,
					"ariaLabel": "Actualités économiques s'ouvre dans un nouvel onglet"
				}
			],
			"legalLinks": [
				{
					"label": "Biens non réclamés",
					"href": "https://investia.ca/biens-non-reclames"
				},
				{
					"label": "Légal et conformité",
					"href": "https://investia.ca/legal-and-compliance"
				},
				{
					"label": "Conditions d'utilisation",
					"href": "https://investia.ca/conditions-utilisation"
				},
				{
					"label": "Sécurité et confidentialité",
					"href": "https://ia.ca/protection-renseignements-personnels",
					"external": true,
					"ariaLabel": "Sécurité et confidentialité s'ouvre dans un nouvel onglet"
				},
				{
					"label": "Accessibilité",
					"href": "https://ia.ca/accessibilite",
					"external": true,
					"ariaLabel": "Accessibilité s'ouvre dans un nouvel onglet"
				},
				{
					"label": "Plan du site",
					"href": "https://investia.ca/plan-du-site"
				},
				{
					"label": "Grille de frais administratifs Investia",
					"href": "https://investia.ca/grille-frais"
				},
				{
					"label": "iA Groupe financier",
					"href": "https://ia.ca/",
					"external": true,
					"ariaLabel": "iA Groupe financier s'ouvre dans un nouvel onglet"
				},
				{
					"label": "Préférence de témoins",
					"href": "#cookie-preferences",
					"cookiePreferences": true
				}
			],
			"socialLinks": [{
				"network": "linkedin",
				"label": "LinkedIn",
				"href": "https://www.linkedin.com/company/investiafinancialservices",
				"ariaLabel": "LinkedIn s'ouvre dans un nouvel onglet"
			}, {
				"network": "facebook",
				"label": "Facebook",
				"href": "https://www.facebook.com/InvestiaServicesfinanciers/",
				"ariaLabel": "Facebook s'ouvre dans un nouvel onglet"
			}],
			"appTitle": "Téléchargez l’application Investia",
			"appBadges": [{
				"label": "App Store",
				"alt": "App Store",
				"src": "/images/e8639947-app-store-fr.webp",
				"href": "https://apps.apple.com/app/apple-store/id1549342167?pt=1948947&ct=gcx-adopt-fr-investia-footer&mt=8"
			}, {
				"label": "Google Play",
				"alt": "Google Play",
				"src": "/images/905df472-google-play-fr.webp",
				"href": "https://play.google.com/store/apps/details?id=ca.investia.mobile&referrer=utm_source%3Dinvestia.ca%26utm_medium%3Dreferral%26utm_term%3Dgcx-adopt-fr-investia-footer%26utm_content%3Dfooter%26utm_campaign%3Dgcx-adopt-fr-investia-footer"
			}],
			"appBenefits": {
				"label": "Découvrir les avantages",
				"href": "https://investia.ca/appli-mobile"
			},
			"slogan": "Prendre les devants",
			"subsidiaryNote": "Investia Services financiers inc. est une filiale à part entière de l’Industrielle Alliance, Assurance et services financiers inc., une société d’assurance de personnes qui exerce ses activités sous le nom commercial de iA Groupe financier.",
			"copyrightLabel": "Investia Services financiers - Tous droits réservés"
		},
		"regulatory": {
			"imageSrc": "/images/8aa15770-ocri-regulated.webp",
			"imageAlt": "L’Organisme canadien de réglementation des investissements (OCRI)",
			"href": "https://www.ocri.ca/"
		}
	}
};
// src/content/site/routes.ts
var ROUTES = {
	home: {
		en: "/",
		fr: "/accueil"
	},
	experience: {
		en: "/investia-experience",
		fr: "/experience-investia"
	},
	products: {
		en: "/products-and-services",
		fr: "/produits-et-services"
	},
	advisor: {
		en: "/find-an-advisor",
		fr: "/trouver-un-conseiller"
	}
};
var LOCALE_TAG = {
	en: "en-CA",
	fr: "fr-CA"
};
var otherLocale = (locale) => locale === "en" ? "fr" : "en";
/** hreflang alternates for a page, for the Layout `alternates` prop. */
function pageAlternates(page) {
	return [
		{
			hreflang: LOCALE_TAG.en,
			href: ROUTES[page].en
		},
		{
			hreflang: LOCALE_TAG.fr,
			href: ROUTES[page].fr
		},
		{
			hreflang: "x-default",
			href: ROUTES[page].en
		}
	];
}
// src/components/templates/site-shell.tsx
var socialIcons = {
	linkedin: /* @__PURE__ */ jsx(ICONS.socialLinkedin, {}),
	facebook: /* @__PURE__ */ jsx(ICONS.socialFacebook, {})
};
/**
* @ployComponent
* @ployComponentId site-shell
* @ployComponentType component
* @ployComponentTags layout, navigation, footer, bilingual
* @ployComponentDescription Shared Investia page chrome for every route: site nav, <main id="main-content">, footer and CIRO/OCRI regulatory strip, in EN or FR. Nav, footer and regulatory copy come from the homepage EN/FR dictionary. The `page` key (src/content/site/routes.ts) points the language toggle at the same page in the other language and the logo at that locale's homepage, so the toggle never leaves the site, and marks the matching menu link as the current page. Pass page sections as children.
* @ployComponentStatus stable
*/
function SiteShell({ locale = "en", page, children }) {
	const content = homeContent[locale];
	const { socialLinks, ...footer } = content.footer;
	const target = otherLocale(locale);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SiteNav, {
			...content.nav,
			homeHref: ROUTES.home[locale],
			currentHref: ROUTES[page][locale],
			language: content.nav.language && {
				...content.nav.language,
				href: ROUTES[page][target]
			}
		}),
		/* @__PURE__ */ jsx("main", {
			id: "main-content",
			tabIndex: -1,
			className: "bg-ploy-background-primary text-ploy-text-primary outline-none",
			children
		}),
		/* @__PURE__ */ jsx(SiteFooter, {
			...footer,
			socialLinks: socialLinks.map(({ network, ...link }) => ({
				...link,
				icon: socialIcons[network]
			}))
		}),
		/* @__PURE__ */ jsx(Body3RegulatoryLogo, { ...content.regulatory })
	] });
}
// src/components/pages/home/page.tsx
/**
* @ployComponent
* @ployComponentId home-page
* @ployComponentType page
* @ployComponentTags homepage, bilingual
* @ployComponentDescription Investia homepage composed from the design-system sections in source order inside the shared SiteShell (nav, footer, CIRO/OCRI strip): hero carousel, action strip, benefit cards, products panel, life-event dialogs, news and careers rows. All copy comes from the typed EN/FR dictionary in src/content/home/home-content.ts, selected by the locale prop; "en" renders at / and "fr" at /accueil, and the language toggle links the two.
* @ployComponentStatus stable
*/
function HomePage({ locale = "en" }) {
	const content = homeContent[locale];
	return /* @__PURE__ */ jsxs(SiteShell, {
		locale,
		page: "home",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "sr-only",
				children: content.pageTitle
			}),
			/* @__PURE__ */ jsx(Body1Hero, { ...content.hero }),
			/* @__PURE__ */ jsx(Body1Actions, { ...content.actions }),
			/* @__PURE__ */ jsx(Body1Benefits, { ...content.benefits }),
			/* @__PURE__ */ jsx(Body2Products, { ...content.products }),
			/* @__PURE__ */ jsx(Body2Objectives, { ...content.objectives }),
			/* @__PURE__ */ jsx(Body2NewsTeams, { ...content.newsTeams })
		]
	});
}
// src/content/experience/experience-content.ts
var experienceContent = {
	en: {
		"meta": {
			"title": "The Investia Experience | Investia",
			"description": "Our team of advisors takes the time to listen to you in order to provide you with the best possible solutions.",
			"ogImage": "/images/exp-og-en.jpg"
		},
		"hero": {
			"title": "The Investia experience",
			"subtitle": "Our team of advisors takes the time to listen to you in order to provide you with the best possible solutions.",
			"imageSrc": "/images/exp-hero-dsktp.webp",
			"tabletImageSrc": "/images/exp-hero-tblt.webp",
			"mobileImageSrc": "/images/exp-hero-phne.webp",
			"pinOneSrc": "/images/exp-pin-conseillere.webp",
			"pinTwoSrc": "/images/exp-pin-conseiller.webp"
		},
		"cta": { "label": "Find an advisor" },
		"commitment": {
			"heading": "Our Commitment",
			"steps": [
				{
					"title": "Know you",
					"lead": ["To get to know you, first we have to talk about you"],
					"body": "We want to know and understand you. What are your values? What are your dreams, your ambitions? By talking with you, we will be able to propose an action plan based on what you want, what defines you."
				},
				{
					"title": "Advise you",
					"lead": ["Our advisors talk to you about more than just money"],
					"body": "Our experienced and knowledgeable advisors will help make your plans a reality. By listening to you and using their expertise, they will propose a clear and effective plan which will help you reach your goals."
				},
				{
					"title": "Guide you",
					"lead": ["Our advisors are not just there for your retirement"],
					"body": "Anything can happen along the way! Your advisor is there to help keep you focused on your goals. Our advisors have a wide range of tools adapted to each situation to help you make sound financial decisions."
				}
			],
			"simplicity": {
				"heading": "Simplicity, right from the start",
				"items": [
					{
						"icon": "assessment",
						"text": "We help you take stock of your finances and define your priorities to facilitate the first meeting with your advisor."
					},
					{
						"icon": "flag",
						"text": "Your advisor proposes an action plan customized to your plans and your situation."
					},
					{
						"icon": "people_alt",
						"text": "Your action plan will continually evolve and adapt to the major changes in your life through periodic meetings with your advisor."
					}
				],
				"actionLabel": "The value of advisor",
				"actionHref": "https://investia.ca/value-of-advice",
				"imageSrc": "/images/exp-la-simplicite.webp"
			}
		},
		"calculators": {
			"heading": "Calculators at your disposal",
			"items": [
				{
					"title": "RESP calculator",
					"body": "Get an estimate of the return on your retirement savings and of the amount you will have upon retirement.",
					"linkLabel": "Calculate your income",
					"href": "https://investia.ca/calculateurs/resp-calculator"
				},
				{
					"title": "RRSP calculator",
					"body": "Estimate how much you can save with your RRSP in order to achieve your goals.",
					"linkLabel": "RRSP calculator",
					"href": "https://investia.ca/calculateurs/rrsp-calculator"
				},
				{
					"title": "TFSA calculator",
					"body": "Estimate how much you can save with your TFSA in order to achieve your goals.",
					"linkLabel": "TFSA calculator",
					"href": "https://investia.ca/calculateurs/tfsa-calculateur"
				}
			],
			"linesSrc": "/images/exp-calculateur-lignes.svg",
			"imageSrc": "/images/exp-calculateur-bike.webp"
		},
		"tracking": {
			"heading": "Tracking your progress",
			"portal": {
				"title": "The Client Portal",
				"lead": "Direct access to your investments and our advice",
				"items": [
					"Stay up-to-date on the progress of your investments.",
					"Access to detailed information on your investments.",
					"Contact your advisor easily and quickly."
				],
				"newHeading": "New to the Client Portal",
				"newBody": "Protecting your accounts with multi-factor authentication (MFA).",
				"createLabel": "Create account",
				"createHref": "https://client.investia.ca/",
				"mfaLabel": "Discover multi-factor authentication (MFA)",
				"mfaHref": "https://investia.ca/multi-factor-authentication-clients"
			},
			"app": {
				"title": "Mobile app",
				"lead": "A free app designed to help you keep track of your investments.",
				"download": "Download it today!",
				"badges": [{
					"src": "/images/exp-appstore-en.svg",
					"href": "https://apps.apple.com/us/app/investia/id1549342167",
					"ariaLabel": "apple appstore opens in a new tab"
				}, {
					"src": "/images/exp-googleplay-en.svg",
					"href": "https://play.google.com/store/apps/details?id=ca.investia.mobile",
					"ariaLabel": "google appstore opens in a new tab"
				}],
				"noteBefore": "To use the app, you will need to create an account in the app or on the ",
				"noteLinkLabel": "Client Portal",
				"noteLinkHref": "https://client.investia.ca/",
				"noteLinkAriaLabel": "Client Portal opens in a new tab",
				"noteAfter": "",
				"learnLabel": "Learn more about the mobile app",
				"learnHref": "https://investia.ca/mobile-app",
				"imageSrc": "/images/exp-screenphone-en.webp"
			},
			"documents": {
				"heading": "Information and documents for clients",
				"items": [
					{
						"label": "Administrative Fee Schedule (pdf)",
						"href": "https://files.ia.ca/-/media/files/investia/documents/investia-administrative-fee-schedule.pdf",
						"ariaLabel": "Administrative Fee Schedule (pdf) opens in a new tab"
					},
					{
						"label": "Relationship Disclosure Information Document (pdf)",
						"href": "https://investia.ca/-/media/files/investia/documents/Relationship_Disclosure_Information_Document.pdf",
						"ariaLabel": "Relationship Disclosure Information Document (pdf) opens in a new tab"
					},
					{
						"label": "Declaring and managing conflicts of interest (pdf)",
						"href": "https://investia.ca/-/media/files/investia/documents/Declaring-and-Managing-Conflicts-of-Interest.pdf",
						"ariaLabel": "Declaring and managing conflicts of interest (pdf) opens in a new tab"
					}
				],
				"notice": {
					"label": "Interest rate – Nominee cash account",
					"title": "Interest rate – Nominee cash account",
					"body": "Effective October 1, 2023, Investia is no longer be paying interest on any balance held in clients’ nominee cash control accounts. If you are a client who holds cash in a nominee cash control account, please contact your Representative to discuss available investment options that would be suitable for your needs.",
					"closeLabel": "Go back to previous page"
				}
			}
		}
	},
	fr: {
		"meta": {
			"title": "L’expérience Investia | Investia",
			"description": "Notre équipe de conseillers prend le temps de vous écouter afin de déterminer des solutions efficaces pour atteindre vos objectifs financiers.",
			"ogImage": "/images/exp-og-fr.jpg"
		},
		"hero": {
			"title": "L’expérience Investia",
			"subtitle": "Notre équipe de conseillers prend le temps de vous écouter afin de déterminer des solutions efficaces pour atteindre vos objectifs financiers.",
			"imageSrc": "/images/exp-hero-dsktp.webp",
			"tabletImageSrc": "/images/exp-hero-tblt.webp",
			"mobileImageSrc": "/images/exp-hero-phne.webp",
			"pinOneSrc": "/images/exp-pin-conseillere.webp",
			"pinTwoSrc": "/images/exp-pin-conseiller.webp"
		},
		"cta": { "label": "Trouver un conseiller" },
		"commitment": {
			"heading": "Notre engagement",
			"steps": [
				{
					"title": "Vous connaître",
					"lead": ["Pour bien vous connaître,", "nous devons d'abord parler de vous"],
					"body": "Nous voulons vous connaître et vous comprendre. Quelles sont les valeurs qui vous guident? Quels sont vos rêves, vos ambitions? En discutant avec vous, nous pourrons vous proposer un plan d’action en\xA0lien avec ce que vous voulez, ce qui vous\xA0définit."
				},
				{
					"title": "Vous conseiller",
					"lead": ["Nos conseillers ne vous", "parlent pas que d’argent"],
					"body": "Nos conseillers qualifiés mettent tout leur\xA0savoir-faire à votre service afin de concrétiser vos projets. Par leur écoute et leur\xA0expertise, ils sauront vous proposer un\xA0plan d’action clair et efficace qui répondra à\xA0vos besoins."
				},
				{
					"title": "Vous accompagner",
					"lead": ["Nos conseillers ne sont pas", "seulement là pour votre retraite"],
					"body": "En cours de route, tout peut arriver! Votre conseiller est là pour vous permettre de maintenir le cap sur vos objectifs. Il dispose d’une gamme d’outils adaptés à chaque situation pour vous aider à prendre des décisions financières judicieuses."
				}
			],
			"simplicity": {
				"heading": "La simplicité, dès le début",
				"items": [
					{
						"icon": "assessment",
						"text": "Nous vous aidons à faire le point sur l’état de vos finances et à définir les grandes lignes de vos objectifs pour faciliter la première rencontre avec votre conseiller."
					},
					{
						"icon": "flag",
						"text": "Votre conseiller vous propose un plan d’action sur mesure, selon vos projets et votre situation."
					},
					{
						"icon": "people_alt",
						"text": "Grâce à des rencontres périodiques avec votre conseiller, votre plan d’action évolue continuellement et s’adapte aux changements importants qui surviennent dans votre vie."
					}
				],
				"actionLabel": "Découvrir la valeur du conseiller",
				"actionHref": "https://investia.ca/valeur-du-conseiller",
				"imageSrc": "/images/exp-la-simplicite.webp"
			}
		},
		"calculators": {
			"heading": "Calculateurs mis à votre disposition",
			"items": [
				{
					"title": "Calculateur REEE",
					"body": "Calculer le montant total que vous aurez épargné lorsque votre enfant commencera ses études postsecondaires.",
					"linkLabel": "Calculateur REEE",
					"href": "https://investia.ca/calculateurs/calculateur-reee"
				},
				{
					"title": "Calculateur REER",
					"body": "Estimez combien pourrait vous rapporter votre REER afin de réaliser vos projets.",
					"linkLabel": "Calculateur REER",
					"href": "https://investia.ca/calculateurs/calculateur-reer"
				},
				{
					"title": "Calculateur CELI",
					"body": "Estimez combien pourrait vous rapporter votre CELI aux fins de vous aider à réaliser vos projets.",
					"linkLabel": "Calculateur CELI",
					"href": "https://investia.ca/calculateurs/calculateur-celi"
				}
			],
			"linesSrc": "/images/exp-calculateur-lignes.svg",
			"imageSrc": "/images/exp-calculateur-bike.webp"
		},
		"tracking": {
			"heading": "Suivi de votre progression",
			"portal": {
				"title": "Portail client",
				"lead": "Un accès direct à vos investissements et à nos conseils",
				"items": [
					"Suivez l’évolution de vos investissements.",
					"Consultez toute l’information pertinente concernant vos investissements et voyez si vous êtes en voie de réaliser vos objectifs.",
					"Communiquez facilement et rapidement avec votre conseiller."
				],
				"newHeading": "Nouveauté du portail client",
				"newBody": "Protéger vos comptes grâce à l’authentification multifactorielle (AMF).",
				"createLabel": "Créer un compte",
				"createHref": "https://client.investia.ca/",
				"mfaLabel": "Découvrir l'authentification multifactorielle (AMF)",
				"mfaHref": "https://investia.ca/authentification-multifactorielle"
			},
			"app": {
				"title": "Application mobile",
				"lead": "Une application gratuite conçue pour vous permettre de suivre l'évolution de vos investissements.",
				"download": "Téléchargez-là dès maintenant!",
				"badges": [{
					"src": "/images/exp-appstore-fr.svg",
					"href": "https://apps.apple.com/us/app/investia/id1549342167",
					"ariaLabel": "apple appstore s'ouvre dans un nouvel onglet"
				}, {
					"src": "/images/exp-googleplay-fr.svg",
					"href": "https://play.google.com/store/apps/details?id=ca.investia.mobile",
					"ariaLabel": "google appstore s'ouvre dans un nouvel onglet"
				}],
				"noteBefore": "Pour y avoir accès, vous devrez vous créer un profil dans le ",
				"noteLinkLabel": "portail client",
				"noteLinkHref": "https://client.investia.ca/",
				"noteLinkAriaLabel": "Portail client s'ouvre dans un nouvel onglet",
				"noteAfter": " via l'application ou sur le portail directement.",
				"learnLabel": "Découvrir l’application mobile",
				"learnHref": "https://investia.ca/appli-mobile",
				"imageSrc": "/images/exp-screenphone-fr.webp"
			},
			"documents": {
				"heading": "Information et documents aux clients",
				"items": [
					{
						"label": "Grille de frais administratifs (pdf)",
						"href": "https://files.ia.ca/-/media/files/investia/documents/grille-de-frais-administratifs-investia.pdf",
						"ariaLabel": "Grille de frais administratifs (pdf) s'ouvre dans un nouvel onglet"
					},
					{
						"label": "Document d'information sur la relation (pdf)",
						"href": "https://investia.ca/-/media/files/investia/documents/Document_d_information_sur_la_relation.pdf",
						"ariaLabel": "Document d'information sur la relation (pdf) s'ouvre dans un nouvel onglet"
					},
					{
						"label": "Déclaration et gestion des conflits d’intérêts (pdf)",
						"href": "https://investia.ca/-/media/files/investia/documents/Declaration-et-gestion-des-conflits-d-interets.pdf",
						"ariaLabel": "Déclaration et gestion des conflits d’intérêts (pdf) s'ouvre dans un nouvel onglet"
					}
				],
				"notice": {
					"label": "Taux d’intérêt – Encaisse de comptes autogérés",
					"title": "Taux d’intérêt – Encaisse de comptes autogérés",
					"body": "Depuis le 1er octobre 2023, Investia ne verse plus d’intérêts sur aucun solde détenu à l’encaisse de comptes autogérés de clients. Si vous êtes un client détenant des sommes d’argent dans un compte d’encaisse autogéré, veuillez communiquer avec votre représentant afin de discuter des différentes options d’investissement disponibles qui pourraient convenir à vos besoins.",
					"closeLabel": "Go back to previous page"
				}
			}
		}
	}
};
/** The CTA follows the site's own advisor route for each locale. */
var experienceCtaHref = (locale) => ROUTES.advisor[locale];
// src/components/pages/experience/page.tsx
/**
* @ployComponent
* @ployComponentId experience-page
* @ployComponentType page
* @ployComponentTags inner-page, bilingual, advisors
* @ployComponentDescription Investia "The Investia Experience" / "L'expérience Investia" page inside the shared SiteShell (nav with this page active, footer, CIRO strip), with sections in source order: light-blue hero with animated curve and advisor pins, full-width advisor CTA band, commitment timeline plus simplicity row, calculators band with animated curve and cyclist artwork, and tracking (Client Portal, mobile app, client documents with an interest-rate modal). Copy comes from the typed EN/FR dictionary in src/content/experience/experience-content.ts; the language toggle links the two routes.
* @ployComponentStatus stable
*/
function ExperiencePage({ locale = "en" }) {
	const content = experienceContent[locale];
	return /* @__PURE__ */ jsxs(SiteShell, {
		locale,
		page: "experience",
		children: [
			/* @__PURE__ */ jsx(ExperienceHero, { ...content.hero }),
			/* @__PURE__ */ jsx(ExperienceCta, {
				label: content.cta.label,
				href: experienceCtaHref(locale)
			}),
			/* @__PURE__ */ jsx(ExperienceCommitment, { ...content.commitment }),
			/* @__PURE__ */ jsx(ExperienceCalculators, { ...content.calculators }),
			/* @__PURE__ */ jsx(ExperienceTracking, { ...content.tracking })
		]
	});
}
// src/content/products/products-content.ts
var productsContent = {
	en: {
		meta: {
			title: "Mutual funds & Group retirement Representative | Investia",
			description: "Investia is a financial services firm that offers products and services associated with the distribution of investment funds and segregated funds."
		},
		hero: {
			title: "Products and services",
			body: "We offer a wide range of products and services to meet your needs."
		},
		cta: {
			label: "Find an advisor",
			href: ROUTES.advisor.en
		},
		specialty: {
			title: "Our specialty: mutual funds",
			body: "Mutual funds are based on a simple principle: pooling your money with that of many other investors in order to offer you access to global markets and a large selection of investments, as well as the flexibility to invest whatever you want, whenever you want.",
			imageSrc: "/images/7f3c2a91-produits-specialite.webp",
			imageAlt: ""
		},
		savings: {
			title: "Our savings and investment products",
			items: [
				{
					id: "celi",
					title: "TFSA",
					subtitle: "Tax-free savings account",
					body: ["A TFSA is a savings plan that allows you to grow your savings, tax free. It is the perfect solution for your short-, medium- and long-term savings projects, like paying for a trip, buying a home or creating an emergency fund."],
					linkLabel: "Learn more",
					href: "https://investia.ca/products-and-services/tfsa"
				},
				{
					id: "cri",
					title: "LIRA",
					subtitle: "Locked-in retirement account",
					body: ["Are you on the verge of changing jobs and want to know what will happen to the pension plan you have with your current employer? A LIRA allows you to transfer the money saved in a pension plan with a former employer to an individual plan."],
					linkLabel: "Learn more",
					href: "https://investia.ca/products-and-services/lira"
				},
				{
					id: "epargne-non-enregistree",
					title: "Non-registered savings",
					body: ["With this flexible savings plan, you can invest even more for your personal projects and retirement when you have reached your RRSP or TFSA contribution limit."],
					linkLabel: "Learn more",
					href: "https://investia.ca/products-and-services/regime-epargne-non-enregistre-en"
				},
				{
					id: "ferr",
					title: "RRIF",
					subtitle: "Registered retirement income fund",
					body: ["A RRIF acts as an extension of a registered retirement savings plan (RRSP). It allows you to utilize the savings you have accumulated during your working life. You have until December 31 of the year you turn 71 to convert the amounts invested in your RRSP into a RRIF."],
					linkLabel: "Learn more",
					href: "https://investia.ca/products-and-services/rrif"
				},
				{
					id: "frv",
					title: "LIF",
					subtitle: "Life income fund",
					body: ["If your savings have been placed in a locked-in retirement account (LIRA), a life income fund (LIF) will allow you to periodically withdraw the funds you require to live comfortably."],
					linkLabel: "Learn more",
					href: "https://investia.ca/products-and-services/lif"
				},
				{
					id: "pret-reer",
					title: "RRSP loan",
					body: ["In the event of a temporary cash shortage, an RRSP loan allows you to continue to contribute to your RRSP.", "Using your tax refund, you can increase your RRSP contributions while keeping the same monthly payments to pay off your loan."],
					linkLabel: "Learn more",
					href: "https://investia.ca/products-and-services/rrsp-loan"
				},
				{
					id: "reee",
					title: "RESP",
					subtitle: "Registered education savings plan",
					body: ["Borrowing to contribute to your registered education savings plan (RESP) allows you to take full advantage of government grant programs and thereby save more for your child’s postsecondary education."],
					linkLabel: "Learn more",
					href: "https://investia.ca/products-and-services/resp"
				},
				{
					id: "reer",
					title: "RRSP",
					subtitle: "Registered retirement savings plan",
					body: ["An RRSP can help you save money for your retirement, tax-free. Additionally, contributions to an RRSP lower your taxable annual income, which leads to more tax savings."],
					linkLabel: "Learn more",
					href: "https://investia.ca/products-and-services/rrsp"
				}
			]
		},
		insurance: {
			title: "For your retirement",
			items: [{
				id: "ppi",
				title: "PPI Management Inc.",
				body: ["Through its subsidiary, PPI Management Inc., a subsidiary of iA Financial Group and an affiliate of Investia, you will have access to a wide range of insurance products, including life insurance, critical illness insurance and disability insurance."],
				linkLabel: "Learn more about PPI Management Inc.",
				href: "https://www.ppi.ca/",
				external: true,
				ariaLabel: "Learn more about PPI Management Inc. opens in a new tab"
			}]
		}
	},
	fr: {
		meta: {
			title: "Représentant en Fonds communs & Épargne collective | Investia",
			description: "Notre spécialité : les fonds communs de placement. Nous offrons une vaste gamme de produits qui sauront répondre à vos besoins et votre situation."
		},
		hero: {
			title: "Produits et services",
			body: "Nous offrons une vaste gamme de produits et services qui sauront répondre à vos besoins, peu importe votre situation."
		},
		cta: {
			label: "Trouver un conseiller",
			href: ROUTES.advisor.fr
		},
		specialty: {
			title: "Notre spécialité: les fonds communs de placement",
			body: "Les fonds communs de placement reposent sur un principe simple : la mise en commun de votre argent avec celui de nombreux autres investisseurs afin de vous offrir, entre autres, l’accès aux marchés mondiaux et à une large sélection de placements, de même que la flexibilité d’investir ce que vous voulez, quand vous voulez.",
			imageSrc: "/images/7f3c2a91-produits-specialite.webp",
			imageAlt: ""
		},
		savings: {
			title: "Nos produits d'épargne et d'investissement",
			items: [
				{
					id: "celi",
					title: "CELI",
					subtitle: "Compte d'épargne libre d'impôt",
					body: ["Le CELI est un régime d’épargne qui permet de faire croître les sommes investies à l’abri de l’impôt. Il est parfait pour épargner en vue d’un projet à court, à moyen ou à long terme, comme pour un voyage, pour l’achat d’une résidence ou encore pour se bâtir un fonds d’urgence."],
					linkLabel: "En savoir plus",
					href: "https://investia.ca/produits-et-services/celi"
				},
				{
					id: "cri",
					title: "CRI",
					subtitle: "Compte de retraite immobilisé",
					body: ["Vous êtes sur le point de changer d’emploi et vous vous demandez ce qui adviendra de votre fonds de pension chez votre employeur actuel? Le CRI permet de transférer les sommes d’un fonds de pension d’un ancien employeur vers un régime individuel."],
					linkLabel: "En savoir plus",
					href: "https://investia.ca/produits-et-services/cri"
				},
				{
					id: "epargne-non-enregistree",
					title: "Épargne non enregistrée",
					body: ["Avec ce régime d’épargne flexible, vous pouvez investir des économies supplémentaires pour vos projets personnels et votre retraite quand le montant maximum de cotisations au REER ou au CELI est atteint."],
					linkLabel: "En savoir plus",
					href: "https://investia.ca/produits-et-services/regime-epargne-non-enregistre"
				},
				{
					id: "ferr",
					title: "FERR",
					subtitle: "Fonds enregistré de revenu de retraite",
					body: ["Le fonds enregistré de revenu de retraite (FERR) est le prolongement du régime enregistré d’épargne-retraite (REER). Il vous permet de disposer de l'épargne accumulée durant votre vie active. Le REER doit être transformé en FERR au plus tard le 31 décembre de l’année où vous fêtez votre 71e anniversaire."],
					linkLabel: "En savoir plus",
					href: "https://investia.ca/produits-et-services/ferr"
				},
				{
					id: "frv",
					title: "FRV",
					subtitle: "Fonds de revenu viager",
					body: ["Si votre épargne est placée dans un compte de retraite immobilisé (CRI), le fonds de revenu viager (FRV) vous permet de retirer périodiquement l’argent dont vous avez besoin pour vivre confortablement."],
					linkLabel: "En savoir plus",
					href: "https://investia.ca/produits-et-services/frv"
				},
				{
					id: "pret-reer",
					title: "Prêt REER",
					body: ["Le prêt REER vous permet de cotiser à votre REER malgré un manque de liquidités temporaires.", "En utilisant votre retour d’impôt, vous pouvez augmenter vos cotisations REER tout en conservant la même mensualité pour le remboursement de votre prêt."],
					linkLabel: "En savoir plus",
					href: "https://investia.ca/produits-et-services/pret-reer"
				},
				{
					id: "reee",
					title: "REEE",
					subtitle: "Régime enregistré d'épargne-études",
					body: ["Emprunter pour cotiser à votre régime enregistré d’épargne-études (REEE) vous permet d’accumuler les fonds nécessaires aux études de votre enfant et de profiter au maximum des subventions gouvernementales."],
					linkLabel: "En savoir plus",
					href: "https://investia.ca/produits-et-services/reee"
				},
				{
					id: "reer",
					title: "REER",
					subtitle: "Régime enregistré d’épargne-retraite",
					body: ["Le REER vous permet d’accumuler des sommes à l’abri de l’impôt pour votre retraite. De plus, cotiser à un REER a pour effet de diminuer votre revenu annuel, ce qui vous permet de bénéficier d’économies d’impôts."],
					linkLabel: "En savoir plus",
					href: "https://investia.ca/produits-et-services/reer"
				}
			]
		},
		insurance: {
			title: "Nos produits d'assurance",
			items: [{
				id: "ppi",
				title: "PPI Managements inc.",
				body: ["Par l’entremise de PPI Management inc., une filiale de iA Groupe financier et une société affiliée à Investia, vous disposerez de toute une gamme de produits d’assurance, entre autres de l’assurance vie, de l’assurance maladie grave et de l’assurance invalidité."],
				linkLabel: "Découvrir PPI Managements inc.",
				href: "https://www.ppi.ca/fr",
				external: true,
				ariaLabel: "Découvrir PPI Managements inc. s'ouvre dans un nouvel onglet"
			}]
		}
	}
};
// src/components/pages/products/page.tsx
/**
* @ployComponent
* @ployComponentId products-page
* @ployComponentType page
* @ployComponentTags products, bilingual
* @ployComponentDescription Investia Products and services page inside the shared SiteShell, in investia.ca source order: hero with animated heart curve, find-an-advisor CTA band, mutual-funds specialty row, savings and investment product cards (three columns) and the PPI insurance card (two-thirds width). All copy comes from the typed EN/FR dictionary in src/content/products/products-content.ts, selected by the locale prop; product links stay absolute to investia.ca in the matching language.
* @ployComponentStatus stable
*/
function ProductsPage({ locale = "en" }) {
	const content = productsContent[locale];
	return /* @__PURE__ */ jsxs(SiteShell, {
		locale,
		page: "products",
		children: [
			/* @__PURE__ */ jsx(ProductsHero, {
				...content.hero,
				imageSrc: "/images/7f3c2a91-produits-hero-dsktp.webp",
				tabletImageSrc: "/images/7f3c2a91-produits-hero-tblt.webp",
				mobileImageSrc: "/images/7f3c2a91-produits-hero-phne.webp"
			}),
			/* @__PURE__ */ jsx(ProductsCta, { ...content.cta }),
			/* @__PURE__ */ jsx(ProductsSpecialty, { ...content.specialty }),
			/* @__PURE__ */ jsx(ProductsCardGrid, {
				...content.savings,
				layout: "thirds"
			}),
			/* @__PURE__ */ jsx(ProductsCardGrid, {
				...content.insurance,
				layout: "two-thirds",
				last: true
			})
		]
	});
}
// src/components/pages/advisor/page.tsx
/**
* @ployComponent
* @ployComponentId advisor-page
* @ployComponentType page
* @ployComponentTags advisor-locator, bilingual
* @ployComponentDescription Investia find-an-advisor page inside the shared SiteShell (nav, footer, CIRO/OCRI strip), in source order: the advisor-search band (H1, intro, working city/postal-code search through the same-origin /api/advisors relay, client-portal card) and the advisor-value band (value of advice copy and pill photo). Copy comes from the typed EN/FR dictionary in src/content/advisor/advisor-content.ts; "en" renders at /find-an-advisor and "fr" at /trouver-un-conseiller, and the language toggle links the two.
* @ployComponentStatus stable
*/
function AdvisorPage({ locale = "en" }) {
	const content = advisorContent[locale];
	return /* @__PURE__ */ jsxs(SiteShell, {
		locale,
		page: "advisor",
		children: [/* @__PURE__ */ jsx(AdvisorSearch, {
			lang: locale,
			hero: content.hero,
			search: content.search,
			portal: content.portal
		}), /* @__PURE__ */ jsx(AdvisorValue, { ...content.value })]
	});
}
// src/components/pages/not-found/page.tsx
/**
* TODO: Customize this 404 page to match workspace brand styling.
* Update the layout, background pattern, messaging, and button styles.
*/
function NotFoundPage() {
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-ploy-background-primary text-ploy-text-primary flex items-center justify-center",
		children: /* @__PURE__ */ jsxs("div", {
			className: "text-center space-y-6 px-6",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-heading typography-heading text-4xl md:text-6xl lg:text-7xl",
					children: "404"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-lg md:text-xl lg:text-2xl text-ploy-text-secondary max-w-md mx-auto",
					children: "This page doesn't exist."
				}),
				/* @__PURE__ */ jsx("a", {
					href: "/",
					className: "mt-4 inline-flex items-center justify-center rounded-md border border-ploy-border-primary px-4 py-2 text-sm md:text-base lg:text-lg transition-colors hover:bg-ploy-neutral-primary-s2",
					children: "Go home"
				})
			]
		})
	});
}
// src/hooks/use-mobile.ts
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = React.useState(void 0);
	React.useEffect(() => {
		const mql = window.matchMedia(`(max-width: 767px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		onChange();
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
export { AdvisorPage, AdvisorSearch, AdvisorValue, Avatar, Body1Actions, Body1Benefits, Body1Hero, Body1HeroPin, Body2NewsTeams, Body2Objectives, Body2Products, Body3RegulatoryLogo, Button, Card, Carousel, CarouselControl, CarouselPageProgress, CarouselSlide, Checkbox, CloseIcon, Container, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DisplayHeading, ExperienceCalculators, ExperienceCommitment, ExperienceCta, ExperienceHero, ExperienceMaterialIcon, ExperiencePage, ExperienceTracking, Faq, FaqItem, Heading, HomePage, ICONS, Image, Input, LOCALE_TAG, Link, Logo, Lottie, Marquee, Navbar, NavbarAccordion, NavbarDialog, NavbarLink, NavbarMenu, NavbarMenuLink, NavbarMobileGroup, NavbarMobileLink, NavbarMobileNav, NavbarParts, NavbarSkipLink, NotFoundPage, Popover, PopoverAnchor, PopoverContent, PopoverTrigger, ProductsCardGrid, ProductsCta, ProductsHero, ProductsPage, ProductsSpecialty, ROUTES, RadioGroup, RadioGroupItem, Reveal, RevealItem, Section, Select, Separator, SiteFooter, SiteFooterApp, SiteFooterLinks, SiteFooterSocials, SiteNav, SiteNavConnect, SiteNavMobileAccounts, SiteNavPortal, SiteNavSearch, SiteShell, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Tag, Text, Textarea, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, accountLinks, advisorContent, cn, experienceContent, experienceCtaHref, fieldVariants, footerBadges, footerLegalLinks, footerPrimaryLinks, footerSecondaryLinks, homeContent, logoPresentation, navItemVariants, otherLocale, pageAlternates, preventHover, primaryLinks, productsContent, tabsPreviewClasses, useIsMobile, useSwiper };

//# sourceMappingURL=index.js.map