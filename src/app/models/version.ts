import {
    type Accessibility,
    type Backgrounds,
    type Borders,
    type Effects,
    type Filters,
    type FlexboxAndGrid,
    type Interactivity,
    type Layout,
    type Sizing,
    type Spacing,
    type SVG,
    type Tables,
    type Transforms,
    type TransitionsAndAnimation,
    type Typography,
} from "./entry";

export const VersionEnum = {
    v3: "<= v3",
    v4_0: "v4.0",
    v4_1: "v4.1",
    v4_2: "v4.2",
    _: undefined,
} as const;

export type Version = (typeof VersionEnum)[keyof typeof VersionEnum];

export const LayoutVersionEnum: Record<Layout, Version> = {
    "aspect-ratio": "<= v3",
    columns: "<= v3",
    "break-after": "<= v3",
    "break-before": "<= v3",
    "break-inside": "<= v3",
    "box-decoration-break": "<= v3",
    "box-sizing": "<= v3",
    display: "<= v3",
    float: "<= v3",
    clear: "<= v3",
    isolation: "<= v3",
    "object-fit": "<= v3",
    "object-position": "<= v3",
    overflow: "<= v3",
    "overscroll-behavior": "<= v3",
    position: "<= v3",
    "top / right / bottom / left": "<= v3",
    visibility: "<= v3",
    "z-index": "<= v3",
} as const;

export const FlexboxAndGridVersionEnum: Record<FlexboxAndGrid, Version> = {
    "flex-basis": "<= v3",
    "flex-direction": "<= v3",
    "flex-wrap": "<= v3",
    flex: "<= v3",
    "flex-grow": "<= v3",
    "flex-shrink": "<= v3",
    order: "<= v3",
    "grid-template-columns": "<= v3",
    "grid-column": "<= v3",
    "grid-template-rows": "<= v3",
    "grid-row": "<= v3",
    "grid-auto-flow": "<= v3",
    "grid-auto-columns": "<= v3",
    "grid-auto-rows": "<= v3",
    gap: "<= v3",
    "justify-content": "<= v3",
    "justify-items": "<= v3",
    "justify-self": "<= v3",
    "align-content": "<= v3",
    "align-items": "<= v3",
    "align-self": "<= v3",
    "place-content": "<= v3",
    "place-items": "<= v3",
    "place-self": "<= v3",
} as const;

export const SpacingVersionEnum: Record<Spacing, Version> = {
    padding: "<= v3",
    margin: "<= v3",
} as const;

export const SizingVersionEnum: Record<Sizing, Version> = {
    width: "<= v3",
    "min-width": "<= v3",
    "max-width": "<= v3",
    height: "<= v3",
    "min-height": "<= v3",
    "max-height": "<= v3",
    "inline-size": "v4.2",
    "min-inline-size": "v4.2",
    "max-inline-size": "v4.2",
    "block-size": "v4.2",
    "min-block-size": "v4.2",
    "max-block-size": "v4.2",
} as const;

export const TypographyVersionEnum: Record<Typography, Version> = {
    "font-family": "<= v3",
    "font-size": "<= v3",
    "font-smoothing": "<= v3",
    "font-style": "<= v3",
    "font-weight": "<= v3",
    "font-stretch": "v4.0",
    "font-variant-numeric": "<= v3",
    "font-feature-settings": "v4.2",
    "letter-spacing": "<= v3",
    "line-clamp": "<= v3",
    "line-height": "<= v3",
    "list-style-image": "<= v3",
    "list-style-position": "<= v3",
    "list-style-type": "<= v3",
    "text-align": "<= v3",
    color: "<= v3",
    "text-decoration-line": "<= v3",
    "text-decoration-color": "<= v3",
    "text-decoration-style": "<= v3",
    "text-decoration-thickness": "<= v3",
    "text-underline-offset": "<= v3",
    "text-transform": "<= v3",
    "text-overflow": "<= v3",
    "text-wrap": "<= v3",
    "text-indent": "<= v3",
    "vertical-align": "<= v3",
    "white-space": "<= v3",
    "word-break": "<= v3",
    "overflow-wrap": "v4.1",
    hyphens: "<= v3",
    content: "<= v3",
} as const;

export const BackgroundsVersionEnum: Record<Backgrounds, Version> = {
    "background-attachment": "<= v3",
    "background-clip": "<= v3",
    "background-color": "<= v3",
    "background-image": "<= v3",
    "background-origin": "<= v3",
    "background-position": "<= v3",
    "background-repeat": "<= v3",
    "background-size": "<= v3",
} as const;

export const BordersVersionEnum: Record<Borders, Version> = {
    "border-radius": "<= v3",
    "border-width": "<= v3",
    "border-color": "<= v3",
    "border-style": "<= v3",
    "outline-width": "<= v3",
    "outline-color": "<= v3",
    "outline-style": "<= v3",
    "outline-offset": "<= v3",
} as const;

export const EffectsVersionEnum: Record<Effects, Version> = {
    "box-shadow": "<= v3",
    "text-shadow": "v4.1",
    opacity: "<= v3",
    "mix-blend-mode": "<= v3",
    "background-blend-mode": "<= v3",
    "mask-clip": "v4.1",
    "mask-composite": "v4.1",
    "mask-image": "v4.1",
    "mask-mode": "v4.1",
    "mask-origin": "v4.1",
    "mask-position": "v4.1",
    "mask-repeat": "v4.1",
    "mask-size": "v4.1",
    "mask-type": "v4.1",
} as const;

export const FiltersVersionEnum: Record<Filters, Version> = {
    filter: "v4.0",
    "filter: blur()": "<= v3",
    "filter: brightness()": "<= v3",
    "filter: contrast()": "<= v3",
    "filter: drop-shadow()": "<= v3",
    "filter: grayscale()": "<= v3",
    "filter: hue-rotate()": "<= v3",
    "filter: invert()": "<= v3",
    "filter: saturate()": "<= v3",
    "filter: sepia()": "<= v3",
    "backdrop-filter": "v4.0",
    "backdrop-filter: blur()": "<= v3",
    "backdrop-filter: brightness()": "<= v3",
    "backdrop-filter: contrast()": "<= v3",
    "backdrop-filter: grayscale()": "<= v3",
    "backdrop-filter: hue-rotate()": "<= v3",
    "backdrop-filter: invert()": "<= v3",
    "backdrop-filter: opacity()": "<= v3",
    "backdrop-filter: saturate()": "<= v3",
    "backdrop-filter: sepia()": "<= v3",
} as const;

export const TablesVersionEnum: Record<Tables, Version> = {
    "border-collapse": "<= v3",
    "border-spacing": "<= v3",
    "table-layout": "<= v3",
    "caption-side": "<= v3",
} as const;

export const TransitionsAndAnimationVersionEnum: Record<
    TransitionsAndAnimation,
    Version
> = {
    "transition-property": "<= v3",
    "transition-behavior": "v4.0",
    "transition-delay": "<= v3",
    "transition-timing-function": "<= v3",
    "transition-duration": "<= v3",
    animation: "<= v3",
} as const;

export const TransformsVersionEnum: Record<Transforms, Version> = {
    "backface-visibility": "v4.0",
    perspective: "v4.0",
    "perspective-origin": "v4.0",
    rotate: "<= v3",
    scale: "<= v3",
    skew: "<= v3",
    transform: "v4.0",
    "transform-origin": "<= v3",
    "transform-style": "v4.0",
    translate: "<= v3",
} as const;

export const InteractivityVersionEnum: Record<Interactivity, Version> = {
    "accent-color": "<= v3",
    appearance: "<= v3",
    "caret-color": "<= v3",
    "color-scheme": "v4.0",
    cursor: "<= v3",
    "field-sizing": "v4.0",
    "pointer-events": "<= v3",
    resize: "<= v3",
    "scroll-behavior": "<= v3",
    "scroll-margin": "<= v3",
    "scroll-padding": "<= v3",
    "scroll-snap-align": "<= v3",
    "scroll-snap-stop": "<= v3",
    "scroll-snap-type": "<= v3",
    "touch-action": "<= v3",
    "user-select": "<= v3",
    "will-change": "<= v3",
} as const;

export const SVGVersionEnum: Record<SVG, Version> = {
    fill: "<= v3",
    stroke: "<= v3",
    "stroke-width": "<= v3",
} as const;

export const AccessibilityVersionEnum: Record<Accessibility, Version> = {
    "forced-color-adjust": "<= v3",
} as const;
