export const version = "v4.2";
export const documentations = [
    {
        "url": "https://tailwindcss.com/docs/aspect-ratio",
        "entry": "aspect-ratio",
        "description": "Utilities for controlling the aspect ratio of an element.",
        "parameters": [
            [
                "aspect-<ratio>",
                "aspect-ratio: <ratio>;"
            ],
            [
                "aspect-square",
                "aspect-ratio: 1 / 1;"
            ],
            [
                "aspect-video",
                "aspect-ratio: var(--aspect-video); /* 16 / 9 */"
            ],
            [
                "aspect-auto",
                "aspect-ratio: auto;"
            ],
            [
                "aspect-(<custom-property>)",
                "aspect-ratio: var(<custom-property>);"
            ],
            [
                "aspect-[<value>]",
                "aspect-ratio: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/columns",
        "entry": "columns",
        "description": "Utilities for controlling the number of columns within an element.",
        "parameters": [
            [
                "columns-<number>",
                "columns: <number>;"
            ],
            [
                "columns-3xs",
                "columns: var(--container-3xs); /* 16rem (256px) */"
            ],
            [
                "columns-2xs",
                "columns: var(--container-2xs); /* 18rem (288px) */"
            ],
            [
                "columns-xs",
                "columns: var(--container-xs); /* 20rem (320px) */"
            ],
            [
                "columns-sm",
                "columns: var(--container-sm); /* 24rem (384px) */"
            ],
            [
                "columns-md",
                "columns: var(--container-md); /* 28rem (448px) */"
            ],
            [
                "columns-lg",
                "columns: var(--container-lg); /* 32rem (512px) */"
            ],
            [
                "columns-xl",
                "columns: var(--container-xl); /* 36rem (576px) */"
            ],
            [
                "columns-2xl",
                "columns: var(--container-2xl); /* 42rem (672px) */"
            ],
            [
                "columns-3xl",
                "columns: var(--container-3xl); /* 48rem (768px) */"
            ],
            [
                "columns-4xl",
                "columns: var(--container-4xl); /* 56rem (896px) */"
            ],
            [
                "columns-5xl",
                "columns: var(--container-5xl); /* 64rem (1024px) */"
            ],
            [
                "columns-6xl",
                "columns: var(--container-6xl); /* 72rem (1152px) */"
            ],
            [
                "columns-7xl",
                "columns: var(--container-7xl); /* 80rem (1280px) */"
            ],
            [
                "columns-auto",
                "columns: auto;"
            ],
            [
                "columns-(<custom-property>)",
                "columns: var(<custom-property>);"
            ],
            [
                "columns-[<value>]",
                "columns: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/break-after",
        "entry": "break-after",
        "description": "Utilities for controlling how a column or page should break after an element.",
        "parameters": [
            [
                "break-after-auto",
                "break-after: auto;"
            ],
            [
                "break-after-avoid",
                "break-after: avoid;"
            ],
            [
                "break-after-all",
                "break-after: all;"
            ],
            [
                "break-after-avoid-page",
                "break-after: avoid-page;"
            ],
            [
                "break-after-page",
                "break-after: page;"
            ],
            [
                "break-after-left",
                "break-after: left;"
            ],
            [
                "break-after-right",
                "break-after: right;"
            ],
            [
                "break-after-column",
                "break-after: column;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/break-before",
        "entry": "break-before",
        "description": "Utilities for controlling how a column or page should break before an element.",
        "parameters": [
            [
                "break-before-auto",
                "break-before: auto;"
            ],
            [
                "break-before-avoid",
                "break-before: avoid;"
            ],
            [
                "break-before-all",
                "break-before: all;"
            ],
            [
                "break-before-avoid-page",
                "break-before: avoid-page;"
            ],
            [
                "break-before-page",
                "break-before: page;"
            ],
            [
                "break-before-left",
                "break-before: left;"
            ],
            [
                "break-before-right",
                "break-before: right;"
            ],
            [
                "break-before-column",
                "break-before: column;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/break-inside",
        "entry": "break-inside",
        "description": "Utilities for controlling how a column or page should break within an element.",
        "parameters": [
            [
                "break-inside-auto",
                "break-inside: auto;"
            ],
            [
                "break-inside-avoid",
                "break-inside: avoid;"
            ],
            [
                "break-inside-avoid-page",
                "break-inside: avoid-page;"
            ],
            [
                "break-inside-avoid-column",
                "break-inside: avoid-column;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/box-decoration-break",
        "entry": "box-decoration-break",
        "description": "Utilities for controlling how element fragments should be rendered across multiple lines, columns, or pages.",
        "parameters": [
            [
                "box-decoration-clone",
                "box-decoration-break: clone;"
            ],
            [
                "box-decoration-slice",
                "box-decoration-break: slice;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/box-sizing",
        "entry": "box-sizing",
        "description": "Utilities for controlling how the browser should calculate an element's total size.",
        "parameters": [
            [
                "box-border",
                "box-sizing: border-box;"
            ],
            [
                "box-content",
                "box-sizing: content-box;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/display",
        "entry": "display",
        "description": "Utilities for controlling the display box type of an element.",
        "parameters": [
            [
                "inline",
                "display: inline;"
            ],
            [
                "block",
                "display: block;"
            ],
            [
                "inline-block",
                "display: inline-block;"
            ],
            [
                "flow-root",
                "display: flow-root;"
            ],
            [
                "flex",
                "display: flex;"
            ],
            [
                "inline-flex",
                "display: inline-flex;"
            ],
            [
                "grid",
                "display: grid;"
            ],
            [
                "inline-grid",
                "display: inline-grid;"
            ],
            [
                "contents",
                "display: contents;"
            ],
            [
                "table",
                "display: table;"
            ],
            [
                "inline-table",
                "display: inline-table;"
            ],
            [
                "table-caption",
                "display: table-caption;"
            ],
            [
                "table-cell",
                "display: table-cell;"
            ],
            [
                "table-column",
                "display: table-column;"
            ],
            [
                "table-column-group",
                "display: table-column-group;"
            ],
            [
                "table-footer-group",
                "display: table-footer-group;"
            ],
            [
                "table-header-group",
                "display: table-header-group;"
            ],
            [
                "table-row-group",
                "display: table-row-group;"
            ],
            [
                "table-row",
                "display: table-row;"
            ],
            [
                "list-item",
                "display: list-item;"
            ],
            [
                "hidden",
                "display: none;"
            ],
            [
                "sr-only",
                "position: absolute;\nwidth: 1px;\nheight: 1px;\npadding: 0;\nmargin: -1px;\noverflow: hidden;\nclip-path: inset(50%);\nwhite-space: nowrap;\nborder-width: 0;"
            ],
            [
                "not-sr-only",
                "position: static;\nwidth: auto;\nheight: auto;\npadding: 0;\nmargin: 0;\noverflow: visible;\nclip-path: none;\nwhite-space: normal;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/float",
        "entry": "float",
        "description": "Utilities for controlling the wrapping of content around an element.",
        "parameters": [
            [
                "float-right",
                "float: right;"
            ],
            [
                "float-left",
                "float: left;"
            ],
            [
                "float-start",
                "float: inline-start;"
            ],
            [
                "float-end",
                "float: inline-end;"
            ],
            [
                "float-none",
                "float: none;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/clear",
        "entry": "clear",
        "description": "Utilities for controlling the wrapping of content around an element.",
        "parameters": [
            [
                "clear-left",
                "clear: left;"
            ],
            [
                "clear-right",
                "clear: right;"
            ],
            [
                "clear-both",
                "clear: both;"
            ],
            [
                "clear-start",
                "clear: inline-start;"
            ],
            [
                "clear-end",
                "clear: inline-end;"
            ],
            [
                "clear-none",
                "clear: none;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/isolation",
        "entry": "isolation",
        "description": "Utilities for controlling whether an element should explicitly create a new stacking context.",
        "parameters": [
            [
                "isolate",
                "isolation: isolate;"
            ],
            [
                "isolation-auto",
                "isolation: auto;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/object-fit",
        "entry": "object-fit",
        "description": "Utilities for controlling how a replaced element's content should be resized.",
        "parameters": [
            [
                "object-contain",
                "object-fit: contain;"
            ],
            [
                "object-cover",
                "object-fit: cover;"
            ],
            [
                "object-fill",
                "object-fit: fill;"
            ],
            [
                "object-none",
                "object-fit: none;"
            ],
            [
                "object-scale-down",
                "object-fit: scale-down;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/object-position",
        "entry": "object-position",
        "description": "Utilities for controlling how a replaced element's content should be positioned within its container.",
        "parameters": [
            [
                "object-top-left",
                "object-position: top left;"
            ],
            [
                "object-top",
                "object-position: top;"
            ],
            [
                "object-top-right",
                "object-position: top right;"
            ],
            [
                "object-left",
                "object-position: left;"
            ],
            [
                "object-center",
                "object-position: center;"
            ],
            [
                "object-right",
                "object-position: right;"
            ],
            [
                "object-bottom-left",
                "object-position: bottom left;"
            ],
            [
                "object-bottom",
                "object-position: bottom;"
            ],
            [
                "object-bottom-right",
                "object-position: bottom right;"
            ],
            [
                "object-(<custom-property>)",
                "object-position: var(<custom-property>);"
            ],
            [
                "object-[<value>]",
                "object-position: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/overflow",
        "entry": "overflow",
        "description": "Utilities for controlling how an element handles content that is too large for the container.",
        "parameters": [
            [
                "overflow-auto",
                "overflow: auto;"
            ],
            [
                "overflow-hidden",
                "overflow: hidden;"
            ],
            [
                "overflow-clip",
                "overflow: clip;"
            ],
            [
                "overflow-visible",
                "overflow: visible;"
            ],
            [
                "overflow-scroll",
                "overflow: scroll;"
            ],
            [
                "overflow-x-auto",
                "overflow-x: auto;"
            ],
            [
                "overflow-y-auto",
                "overflow-y: auto;"
            ],
            [
                "overflow-x-hidden",
                "overflow-x: hidden;"
            ],
            [
                "overflow-y-hidden",
                "overflow-y: hidden;"
            ],
            [
                "overflow-x-clip",
                "overflow-x: clip;"
            ],
            [
                "overflow-y-clip",
                "overflow-y: clip;"
            ],
            [
                "overflow-x-visible",
                "overflow-x: visible;"
            ],
            [
                "overflow-y-visible",
                "overflow-y: visible;"
            ],
            [
                "overflow-x-scroll",
                "overflow-x: scroll;"
            ],
            [
                "overflow-y-scroll",
                "overflow-y: scroll;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/overscroll-behavior",
        "entry": "overscroll-behavior",
        "description": "Utilities for controlling how the browser behaves when reaching the boundary of a scrolling area.",
        "parameters": [
            [
                "overscroll-auto",
                "overscroll-behavior: auto;"
            ],
            [
                "overscroll-contain",
                "overscroll-behavior: contain;"
            ],
            [
                "overscroll-none",
                "overscroll-behavior: none;"
            ],
            [
                "overscroll-x-auto",
                "overscroll-behavior-x: auto;"
            ],
            [
                "overscroll-x-contain",
                "overscroll-behavior-x: contain;"
            ],
            [
                "overscroll-x-none",
                "overscroll-behavior-x: none;"
            ],
            [
                "overscroll-y-auto",
                "overscroll-behavior-y: auto;"
            ],
            [
                "overscroll-y-contain",
                "overscroll-behavior-y: contain;"
            ],
            [
                "overscroll-y-none",
                "overscroll-behavior-y: none;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/position",
        "entry": "position",
        "description": "Utilities for controlling how an element is positioned in the document.",
        "parameters": [
            [
                "static",
                "position: static;"
            ],
            [
                "fixed",
                "position: fixed;"
            ],
            [
                "absolute",
                "position: absolute;"
            ],
            [
                "relative",
                "position: relative;"
            ],
            [
                "sticky",
                "position: sticky;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/top-right-bottom-left",
        "entry": "top / right / bottom / left",
        "description": "Utilities for controlling the placement of positioned elements.",
        "parameters": [
            [
                "inset-<number>",
                "inset: calc(var(--spacing) * <number>);"
            ],
            [
                "-inset-<number>",
                "inset: calc(var(--spacing) * -<number>);"
            ],
            [
                "inset-<fraction>",
                "inset: calc(<fraction> * 100%);"
            ],
            [
                "-inset-<fraction>",
                "inset: calc(<fraction> * -100%);"
            ],
            [
                "inset-px",
                "inset: 1px;"
            ],
            [
                "-inset-px",
                "inset: -1px;"
            ],
            [
                "inset-full",
                "inset: 100%;"
            ],
            [
                "-inset-full",
                "inset: -100%;"
            ],
            [
                "inset-auto",
                "inset: auto;"
            ],
            [
                "inset-(<custom-property>)",
                "inset: var(<custom-property>);"
            ],
            [
                "inset-[<value>]",
                "inset: <value>;"
            ],
            [
                "inset-x-<number>",
                "inset-inline: calc(var(--spacing) * <number>);"
            ],
            [
                "-inset-x-<number>",
                "inset-inline: calc(var(--spacing) * -<number>);"
            ],
            [
                "inset-x-<fraction>",
                "inset-inline: calc(<fraction> * 100%);"
            ],
            [
                "-inset-x-<fraction>",
                "inset-inline: calc(<fraction> * -100%);"
            ],
            [
                "inset-x-px",
                "inset-inline: 1px;"
            ],
            [
                "-inset-x-px",
                "inset-inline: -1px;"
            ],
            [
                "inset-x-full",
                "inset-inline: 100%;"
            ],
            [
                "-inset-x-full",
                "inset-inline: -100%;"
            ],
            [
                "inset-x-auto",
                "inset-inline: auto;"
            ],
            [
                "inset-x-(<custom-property>)",
                "inset-inline: var(<custom-property>);"
            ],
            [
                "inset-x-[<value>]",
                "inset-inline: <value>;"
            ],
            [
                "inset-y-<number>",
                "inset-block: calc(var(--spacing) * <number>);"
            ],
            [
                "-inset-y-<number>",
                "inset-block: calc(var(--spacing) * -<number>);"
            ],
            [
                "inset-y-<fraction>",
                "inset-block: calc(<fraction> * 100%);"
            ],
            [
                "-inset-y-<fraction>",
                "inset-block: calc(<fraction> * -100%);"
            ],
            [
                "inset-y-px",
                "inset-block: 1px;"
            ],
            [
                "-inset-y-px",
                "inset-block: -1px;"
            ],
            [
                "inset-y-full",
                "inset-block: 100%;"
            ],
            [
                "-inset-y-full",
                "inset-block: -100%;"
            ],
            [
                "inset-y-auto",
                "inset-block: auto;"
            ],
            [
                "inset-y-(<custom-property>)",
                "inset-block: var(<custom-property>);"
            ],
            [
                "inset-y-[<value>]",
                "inset-block: <value>;"
            ],
            [
                "inset-s-<number>",
                "inset-inline-start: calc(var(--spacing) * <number>);"
            ],
            [
                "-inset-s-<number>",
                "inset-inline-start: calc(var(--spacing) * -<number>);"
            ],
            [
                "inset-s-<fraction>",
                "inset-inline-start: calc(<fraction> * 100%);"
            ],
            [
                "-inset-s-<fraction>",
                "inset-inline-start: calc(<fraction> * -100%);"
            ],
            [
                "inset-s-px",
                "inset-inline-start: 1px;"
            ],
            [
                "-inset-s-px",
                "inset-inline-start: -1px;"
            ],
            [
                "inset-s-full",
                "inset-inline-start: 100%;"
            ],
            [
                "-inset-s-full",
                "inset-inline-start: -100%;"
            ],
            [
                "inset-s-auto",
                "inset-inline-start: auto;"
            ],
            [
                "inset-s-(<custom-property>)",
                "inset-inline-start: var(<custom-property>);"
            ],
            [
                "inset-s-[<value>]",
                "inset-inline-start: <value>;"
            ],
            [
                "inset-e-<number>",
                "inset-inline-end: calc(var(--spacing) * <number>);"
            ],
            [
                "-inset-e-<number>",
                "inset-inline-end: calc(var(--spacing) * -<number>);"
            ],
            [
                "inset-e-<fraction>",
                "inset-inline-end: calc(<fraction> * 100%);"
            ],
            [
                "-inset-e-<fraction>",
                "inset-inline-end: calc(<fraction> * -100%);"
            ],
            [
                "inset-e-px",
                "inset-inline-end: 1px;"
            ],
            [
                "-inset-e-px",
                "inset-inline-end: -1px;"
            ],
            [
                "inset-e-full",
                "inset-inline-end: 100%;"
            ],
            [
                "-inset-e-full",
                "inset-inline-end: -100%;"
            ],
            [
                "inset-e-auto",
                "inset-inline-end: auto;"
            ],
            [
                "inset-e-(<custom-property>)",
                "inset-inline-end: var(<custom-property>);"
            ],
            [
                "inset-e-[<value>]",
                "inset-inline-end: <value>;"
            ],
            [
                "inset-bs-<number>",
                "inset-block-start: calc(var(--spacing) * <number>);"
            ],
            [
                "-inset-bs-<number>",
                "inset-block-start: calc(var(--spacing) * -<number>);"
            ],
            [
                "inset-bs-<fraction>",
                "inset-block-start: calc(<fraction> * 100%);"
            ],
            [
                "-inset-bs-<fraction>",
                "inset-block-start: calc(<fraction> * -100%);"
            ],
            [
                "inset-bs-px",
                "inset-block-start: 1px;"
            ],
            [
                "-inset-bs-px",
                "inset-block-start: -1px;"
            ],
            [
                "inset-bs-full",
                "inset-block-start: 100%;"
            ],
            [
                "-inset-bs-full",
                "inset-block-start: -100%;"
            ],
            [
                "inset-bs-auto",
                "inset-block-start: auto;"
            ],
            [
                "inset-bs-(<custom-property>)",
                "inset-block-start: var(<custom-property>);"
            ],
            [
                "inset-bs-[<value>]",
                "inset-block-start: <value>;"
            ],
            [
                "inset-be-<number>",
                "inset-block-end: calc(var(--spacing) * <number>);"
            ],
            [
                "-inset-be-<number>",
                "inset-block-end: calc(var(--spacing) * -<number>);"
            ],
            [
                "inset-be-<fraction>",
                "inset-block-end: calc(<fraction> * 100%);"
            ],
            [
                "-inset-be-<fraction>",
                "inset-block-end: calc(<fraction> * -100%);"
            ],
            [
                "inset-be-px",
                "inset-block-end: 1px;"
            ],
            [
                "-inset-be-px",
                "inset-block-end: -1px;"
            ],
            [
                "inset-be-full",
                "inset-block-end: 100%;"
            ],
            [
                "-inset-be-full",
                "inset-block-end: -100%;"
            ],
            [
                "inset-be-auto",
                "inset-block-end: auto;"
            ],
            [
                "inset-be-(<custom-property>)",
                "inset-block-end: var(<custom-property>);"
            ],
            [
                "inset-be-[<value>]",
                "inset-block-end: <value>;"
            ],
            [
                "top-<number>",
                "top: calc(var(--spacing) * <number>);"
            ],
            [
                "-top-<number>",
                "top: calc(var(--spacing) * -<number>);"
            ],
            [
                "top-<fraction>",
                "top: calc(<fraction> * 100%);"
            ],
            [
                "-top-<fraction>",
                "top: calc(<fraction> * -100%);"
            ],
            [
                "top-px",
                "top: 1px;"
            ],
            [
                "-top-px",
                "top: -1px;"
            ],
            [
                "top-full",
                "top: 100%;"
            ],
            [
                "-top-full",
                "top: -100%;"
            ],
            [
                "top-auto",
                "top: auto;"
            ],
            [
                "top-(<custom-property>)",
                "top: var(<custom-property>);"
            ],
            [
                "top-[<value>]",
                "top: <value>;"
            ],
            [
                "right-<number>",
                "right: calc(var(--spacing) * <number>);"
            ],
            [
                "-right-<number>",
                "right: calc(var(--spacing) * -<number>);"
            ],
            [
                "right-<fraction>",
                "right: calc(<fraction> * 100%);"
            ],
            [
                "-right-<fraction>",
                "right: calc(<fraction> * -100%);"
            ],
            [
                "right-px",
                "right: 1px;"
            ],
            [
                "-right-px",
                "right: -1px;"
            ],
            [
                "right-full",
                "right: 100%;"
            ],
            [
                "-right-full",
                "right: -100%;"
            ],
            [
                "right-auto",
                "right: auto;"
            ],
            [
                "right-(<custom-property>)",
                "right: var(<custom-property>);"
            ],
            [
                "right-[<value>]",
                "right: <value>;"
            ],
            [
                "bottom-<number>",
                "bottom: calc(var(--spacing) * <number>);"
            ],
            [
                "-bottom-<number>",
                "bottom: calc(var(--spacing) * -<number>);"
            ],
            [
                "bottom-<fraction>",
                "bottom: calc(<fraction> * 100%);"
            ],
            [
                "-bottom-<fraction>",
                "bottom: calc(<fraction> * -100%);"
            ],
            [
                "bottom-px",
                "bottom: 1px;"
            ],
            [
                "-bottom-px",
                "bottom: -1px;"
            ],
            [
                "bottom-full",
                "bottom: 100%;"
            ],
            [
                "-bottom-full",
                "bottom: -100%;"
            ],
            [
                "bottom-auto",
                "bottom: auto;"
            ],
            [
                "bottom-(<custom-property>)",
                "bottom: var(<custom-property>);"
            ],
            [
                "bottom-[<value>]",
                "bottom: <value>;"
            ],
            [
                "left-<number>",
                "left: calc(var(--spacing) * <number>);"
            ],
            [
                "-left-<number>",
                "left: calc(var(--spacing) * -<number>);"
            ],
            [
                "left-<fraction>",
                "left: calc(<fraction> * 100%);"
            ],
            [
                "-left-<fraction>",
                "left: calc(<fraction> * -100%);"
            ],
            [
                "left-px",
                "left: 1px;"
            ],
            [
                "-left-px",
                "left: -1px;"
            ],
            [
                "left-full",
                "left: 100%;"
            ],
            [
                "-left-full",
                "left: -100%;"
            ],
            [
                "left-auto",
                "left: auto;"
            ],
            [
                "left-(<custom-property>)",
                "left: var(<custom-property>);"
            ],
            [
                "left-[<value>]",
                "left: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/visibility",
        "entry": "visibility",
        "description": "Utilities for controlling the visibility of an element.",
        "parameters": [
            [
                "visible",
                "visibility: visible;"
            ],
            [
                "invisible",
                "visibility: hidden;"
            ],
            [
                "collapse",
                "visibility: collapse;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/z-index",
        "entry": "z-index",
        "description": "Utilities for controlling the stack order of an element.",
        "parameters": [
            [
                "z-<number>",
                "z-index: <number>;"
            ],
            [
                "z-auto",
                "z-index: auto;"
            ],
            [
                "z-[<value>]",
                "z-index: <value>;"
            ],
            [
                "z-(<custom-property>)",
                "z-index: var(<custom-property>);"
            ]
        ]
    }
]