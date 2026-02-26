export const LayoutEnum = {
    aspectRatio: "aspect-ratio",
    columns: "columns",
    breakAfter: "break-after",
    breakBefore: "break-before",
    breakInside: "break-inside",
    boxDecorationBreak: "box-decoration-break",
    boxSizing: "box-sizing",
    display: "display",
    float: "float",
    clear: "clear",
    isolation: "isolation",
    objectFit: "object-fit",
    objectPosition: "object-position",
    overflow: "overflow",
    overscrollBehavior: "overscroll-behavior",
    position: "position",
    topRightBottomLeft: "top / right / bottom / left",
    visibility: "visibility",
    zIndex: "z-index",
} as const;

export type Layout = (typeof LayoutEnum)[keyof typeof LayoutEnum];

export const FlexboxAndGridEnum = {
    flexBasis: "flex-basis",
    flexDirection: "flex-direction",
    flexWrap: "flex-wrap",
    flex: "flex",
    flexGrow: "flex-grow",
    flexShrink: "flex-shrink",
    order: "order",
    gridTemplateColumns: "grid-template-columns",
    gridColumn: "grid-column",
    gridTemplateRows: "grid-template-rows",
    gridRow: "grid-row",
    gridAutoFlow: "grid-auto-flow",
    gridAutoColumns: "grid-auto-columns",
    gridAutoRows: "grid-auto-rows",
    gap: "gap",
    justifyContent: "justify-content",
    justifyItems: "justify-items",
    justifySelf: "justify-self",
    alignContent: "align-content",
    alignItems: "align-items",
    alignSelf: "align-self",
    placeContent: "place-content",
    placeItems: "place-items",
    placeSelf: "place-self",
} as const;

export type FlexboxAndGrid =
    (typeof FlexboxAndGridEnum)[keyof typeof FlexboxAndGridEnum];

export const SpacingEnum = {
    padding: "padding",
    margin: "margin",
} as const;

export type Spacing = (typeof SpacingEnum)[keyof typeof SpacingEnum];

export const SizingEnum = {
    width: "width",
    minWidth: "min-width",
    maxWidth: "max-width",
    height: "height",
    minHeight: "min-height",
    maxHeight: "max-height",
    inlineSize: "inline-size",
    minInlineSize: "min-inline-size",
    maxInlineSize: "max-inline-size",
    blockSize: "block-size",
    minBlockSize: "min-block-size",
    maxBlockSize: "max-block-size",
} as const;

export type Sizing = (typeof SizingEnum)[keyof typeof SizingEnum];

export const TypographyEnum = {
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSmoothing: "font-smoothing",
    fontStyle: "font-style",
    fontWeight: "font-weight",
    fontStretch: "font-stretch",
    fontVariantNumeric: "font-variant-numeric",
    fontFeatureSettings: "font-feature-settings",
    letterSpacing: "letter-spacing",
    lineClamp: "line-clamp",
    lineHeight: "line-height",
    listStyleImage: "list-style-image",
    listStylePosition: "list-style-position",
    listStyleType: "list-style-type",
    textAlign: "text-align",
    color: "color",
    textDecorationLine: "text-decoration-line",
    textDecorationColor: "text-decoration-color",
    textDecorationStyle: "text-decoration-style",
    textDecorationThickness: "text-decoration-thickness",
    textUnderlineOffset: "text-underline-offset",
    textTransform: "text-transform",
    textOverflow: "text-overflow",
    textWrap: "text-wrap",
    textIndent: "text-indent",
    verticalAlign: "vertical-align",
    whiteSpace: "white-space",
    wordBreak: "word-break",
    overflowWrap: "overflow-wrap",
    hyphens: "hyphens",
    content: "content",
} as const;

export type Typography = (typeof TypographyEnum)[keyof typeof TypographyEnum];

export const BackgroundsEnum = {
    backgroundAttachment: "background-attachment",
    backgroundClip: "background-clip",
    backgroundColor: "background-color",
    backgroundImage: "background-image",
    backgroundOrigin: "background-origin",
    backgroundPosition: "background-position",
    backgroundRepeat: "background-repeat",
    backgroundSize: "background-size",
} as const;

export type Backgrounds =
    (typeof BackgroundsEnum)[keyof typeof BackgroundsEnum];

export const BordersEnum = {
    borderRadius: "border-radius",
    borderWidth: "border-width",
    borderColor: "border-color",
    borderStyle: "border-style",
    outlineWidth: "outline-width",
    outlineColor: "outline-color",
    outlineStyle: "outline-style",
    outlineOffset: "outline-offset",
} as const;

export type Borders = (typeof BordersEnum)[keyof typeof BordersEnum];

export const EffectsEnum = {
    boxShadow: "box-shadow",
    textShadow: "text-shadow",
    opacity: "opacity",
    mixBlendMode: "mix-blend-mode",
    backgroundBlendMode: "background-blend-mode",
    maskClip: "mask-clip",
    maskComposite: "mask-composite",
    maskImage: "mask-image",
    maskMode: "mask-mode",
    maskOrigin: "mask-origin",
    maskPosition: "mask-position",
    maskRepeat: "mask-repeat",
    maskSize: "mask-size",
    maskType: "mask-type",
} as const;

export type Effects = (typeof EffectsEnum)[keyof typeof EffectsEnum];

export const FiltersEnum = {
    filter: "filter",
    filterBlur: "filter: blur()",
    filterBrightness: "filter: brightness()",
    filterContrast: "filter: contrast()",
    filterDropShadow: "filter: drop-shadow()",
    filterGrayscale: "filter: grayscale()",
    filterHueRotate: "filter: hue-rotate()",
    filterInvert: "filter: invert()",
    filterSaturate: "filter: saturate()",
    filterSepia: "filter: sepia()",
    backdropFilter: "backdrop-filter",
    backdropFilterBlur: "backdrop-filter: blur()",
    backdropFilterBrightness: "backdrop-filter: brightness()",
    backdropFilterContrast: "backdrop-filter: contrast()",
    backdropFilterGrayscale: "backdrop-filter: grayscale()",
    backdropFilterHueRotate: "backdrop-filter: hue-rotate()",
    backdropFilterInvert: "backdrop-filter: invert()",
    backdropFilterOpacity: "backdrop-filter: opacity()",
    backdropFilterSaturate: "backdrop-filter: saturate()",
    backdropFilterSepia: "backdrop-filter: sepia()",
} as const;

export type Filters = (typeof FiltersEnum)[keyof typeof FiltersEnum];

export const TablesEnum = {
    borderCollapse: "border-collapse",
    borderSpacing: "border-spacing",
    tableLayout: "table-layout",
    captionSide: "caption-side",
} as const;

export type Tables = (typeof TablesEnum)[keyof typeof TablesEnum];

export const TransitionsAndAnimationEnum = {
    transitionProperty: "transition-property",
    transitionBehavior: "transition-behavior",
    transitionDuration: "transition-duration",
    transitionTimingFunction: "transition-timing-function",
    transitionDelay: "transition-delay",
    animation: "animation",
} as const;

export type TransitionsAndAnimation =
    (typeof TransitionsAndAnimationEnum)[keyof typeof TransitionsAndAnimationEnum];

export const TransformsEnum = {
    backfaceVisibility: "backface-visibility",
    perspective: "perspective",
    perspectiveOrigin: "perspective-origin",
    rotate: "rotate",
    scale: "scale",
    skew: "skew",
    transform: "transform",
    transformOrigin: "transform-origin",
    transformStyle: "transform-style",
    translate: "translate",
} as const;

export type Transforms = (typeof TransformsEnum)[keyof typeof TransformsEnum];

export const InteractivityEnum = {
    accentColor: "accent-color",
    appearance: "appearance",
    caretColor: "caret-color",
    colorScheme: "color-scheme",
    cursor: "cursor",
    fieldSizing: "field-sizing",
    pointerEvents: "pointer-events",
    resize: "resize",
    scrollBehavior: "scroll-behavior",
    scrollMargin: "scroll-margin",
    scrollPadding: "scroll-padding",
    scrollSnapAlign: "scroll-snap-align",
    scrollSnapStop: "scroll-snap-stop",
    scrollSnapType: "scroll-snap-type",
    touchAction: "touch-action",
    userSelect: "user-select",
    willChange: "will-change",
} as const;

export type Interactivity =
    (typeof InteractivityEnum)[keyof typeof InteractivityEnum];

export const SVGEnum = {
    fill: "fill",
    stroke: "stroke",
    strokeWidth: "stroke-width",
} as const;

export type SVG = (typeof SVGEnum)[keyof typeof SVGEnum];

export const AccessibilityEnum = {
    forcedColorAdjust: "forced-color-adjust",
} as const;

export type Accessibility =
    (typeof AccessibilityEnum)[keyof typeof AccessibilityEnum];
