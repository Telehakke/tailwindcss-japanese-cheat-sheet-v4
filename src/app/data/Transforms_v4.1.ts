export const version = "v4.1";
export const documentations = [
    {
        "url": "https://tailwindcss.com/docs/backface-visibility",
        "entry": "backface-visibility",
        "description": "Utilities for controlling if an element's backface is visible.",
        "parameters": [
            [
                "backface-hidden",
                "backface-visibility: hidden;"
            ],
            [
                "backface-visible",
                "backface-visibility: visible;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/perspective",
        "entry": "perspective",
        "description": "Utilities for controlling an element's perspective when placed in 3D space.",
        "parameters": [
            [
                "perspective-dramatic",
                "perspective: var(--perspective-dramatic); /* 100px */"
            ],
            [
                "perspective-near",
                "perspective: var(--perspective-near); /* 300px */"
            ],
            [
                "perspective-normal",
                "perspective: var(--perspective-normal); /* 500px */"
            ],
            [
                "perspective-midrange",
                "perspective: var(--perspective-midrange); /* 800px */"
            ],
            [
                "perspective-distant",
                "perspective: var(--perspective-distant); /* 1200px */"
            ],
            [
                "perspective-none",
                "perspective: none;"
            ],
            [
                "perspective-(<custom-property>)",
                "perspective: var(<custom-property>);"
            ],
            [
                "perspective-[<value>]",
                "perspective: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/perspective-origin",
        "entry": "perspective-origin",
        "description": "Utilities for controlling an element's perspective origin when placed in 3D space.",
        "parameters": [
            [
                "perspective-origin-center",
                "perspective-origin: center;"
            ],
            [
                "perspective-origin-top",
                "perspective-origin: top;"
            ],
            [
                "perspective-origin-top-right",
                "perspective-origin: top right;"
            ],
            [
                "perspective-origin-right",
                "perspective-origin: right;"
            ],
            [
                "perspective-origin-bottom-right",
                "perspective-origin: bottom right;"
            ],
            [
                "perspective-origin-bottom",
                "perspective-origin: bottom;"
            ],
            [
                "perspective-origin-bottom-left",
                "perspective-origin: bottom left;"
            ],
            [
                "perspective-origin-left",
                "perspective-origin: left;"
            ],
            [
                "perspective-origin-top-left",
                "perspective-origin: top left;"
            ],
            [
                "perspective-origin-(<custom-property>)",
                "perspective-origin: var(<custom-property>);"
            ],
            [
                "perspective-origin-[<value>]",
                "perspective-origin: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/rotate",
        "entry": "rotate",
        "description": "Utilities for rotating elements.",
        "parameters": [
            [
                "rotate-none",
                "rotate: none;"
            ],
            [
                "rotate-<number>",
                "rotate: <number>deg;"
            ],
            [
                "-rotate-<number>",
                "rotate: calc(<number>deg * -1);"
            ],
            [
                "rotate-(<custom-property>)",
                "rotate: var(<custom-property>);"
            ],
            [
                "rotate-[<value>]",
                "rotate: <value>;"
            ],
            [
                "rotate-x-<number>",
                "transform: rotateX(<number>deg) var(--tw-rotate-y);"
            ],
            [
                "-rotate-x-<number>",
                "transform: rotateX(-<number>deg) var(--tw-rotate-y);"
            ],
            [
                "rotate-x-(<custom-property>)",
                "transform: rotateX(var(<custom-property>)) var(--tw-rotate-y);"
            ],
            [
                "rotate-x-[<value>]",
                "transform: rotateX(<value>) var(--tw-rotate-y);"
            ],
            [
                "rotate-y-<number>",
                "transform: var(--tw-rotate-x) rotateY(<number>deg);"
            ],
            [
                "-rotate-y-<number>",
                "transform: var(--tw-rotate-x) rotateY(-<number>deg);"
            ],
            [
                "rotate-y-(<custom-property>)",
                "transform: var(--tw-rotate-x) rotateY(var(<custom-property>));"
            ],
            [
                "rotate-y-[<value>]",
                "transform: var(--tw-rotate-x) rotateY(<value>);"
            ],
            [
                "rotate-z-<number>",
                "transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(<number>deg);"
            ],
            [
                "-rotate-z-<number>",
                "transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(-<number>deg);"
            ],
            [
                "rotate-z-(<custom-property>)",
                "transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(var(<custom-property>));"
            ],
            [
                "rotate-z-[<value>]",
                "transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(<value>);"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/scale",
        "entry": "scale",
        "description": "Utilities for scaling elements.",
        "parameters": [
            [
                "scale-none",
                "scale: none;"
            ],
            [
                "scale-<number>",
                "scale: <number>% <number>%;"
            ],
            [
                "-scale-<number>",
                "scale: calc(<number>% * -1) calc(<number>% * -1);"
            ],
            [
                "scale-(<custom-property>)",
                "scale: var(<custom-property>) var(<custom-property>);"
            ],
            [
                "scale-[<value>]",
                "scale: <value>;"
            ],
            [
                "scale-x-<number>",
                "scale: <number>% var(--tw-scale-y);"
            ],
            [
                "-scale-x-<number>",
                "scale: calc(<number>% * -1) var(--tw-scale-y);"
            ],
            [
                "scale-x-(<custom-property>)",
                "scale: var(<custom-property>) var(--tw-scale-y);"
            ],
            [
                "scale-x-[<value>]",
                "scale: <value> var(--tw-scale-y);"
            ],
            [
                "scale-y-<number>",
                "scale: var(--tw-scale-x) <number>%;"
            ],
            [
                "-scale-y-<number>",
                "scale: var(--tw-scale-x) calc(<number>% * -1);"
            ],
            [
                "scale-y-(<custom-property>)",
                "scale: var(--tw-scale-x) var(<custom-property>);"
            ],
            [
                "scale-y-[<value>]",
                "scale: var(--tw-scale-x) <value>;"
            ],
            [
                "scale-z-<number>",
                "scale: var(--tw-scale-x) var(--tw-scale-y) <number>%;"
            ],
            [
                "-scale-z-<number>",
                "scale: var(--tw-scale-x) var(--tw-scale-y) calc(<number>% * -1);"
            ],
            [
                "scale-z-(<custom-property>)",
                "scale: var(--tw-scale-x) var(--tw-scale-y) var(<custom-property>);"
            ],
            [
                "scale-z-[<value>]",
                "scale: var(--tw-scale-x) var(--tw-scale-y) <value>;"
            ],
            [
                "scale-3d",
                "scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z);"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/skew",
        "entry": "skew",
        "description": "Utilities for skewing elements with transform.",
        "parameters": [
            [
                "skew-<number>",
                "transform: skewX(<number>deg) skewY(<number>deg);"
            ],
            [
                "-skew-<number>",
                "transform: skewX(-<number>deg) skewY(-<number>deg);"
            ],
            [
                "skew-(<custom-property>)",
                "transform: skewX(var(<custom-property>)) skewY(var(<custom-property>));"
            ],
            [
                "skew-[<value>]",
                "transform: skewX(<value>) skewY(<value>);"
            ],
            [
                "skew-x-<number>",
                "transform: skewX(<number>deg));"
            ],
            [
                "-skew-x-<number>",
                "transform: skewX(-<number>deg));"
            ],
            [
                "skew-x-(<custom-property>)",
                "transform: skewX(var(<custom-property>));"
            ],
            [
                "skew-x-[<value>]",
                "transform: skewX(<value>));"
            ],
            [
                "skew-y-<number>",
                "transform: skewY(<number>deg);"
            ],
            [
                "-skew-y-<number>",
                "transform: skewY(-<number>deg);"
            ],
            [
                "skew-y-(<custom-property>)",
                "transform: skewY(var(<custom-property>));"
            ],
            [
                "skew-y-[<value>]",
                "transform: skewY(<value>);"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/transform",
        "entry": "transform",
        "description": "Utilities for transforming elements.",
        "parameters": [
            [
                "transform-(<custom-property>)",
                "transform: var(<custom-property>);"
            ],
            [
                "transform-[<value>]",
                "transform: <value>;"
            ],
            [
                "transform-none",
                "transform: none;"
            ],
            [
                "transform-gpu",
                "transform: translateZ(0) var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);"
            ],
            [
                "transform-cpu",
                "transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/transform-origin",
        "entry": "transform-origin",
        "description": "Utilities for specifying the origin for an element's transformations.",
        "parameters": [
            [
                "origin-center",
                "transform-origin: center;"
            ],
            [
                "origin-top",
                "transform-origin: top;"
            ],
            [
                "origin-top-right",
                "transform-origin: top right;"
            ],
            [
                "origin-right",
                "transform-origin: right;"
            ],
            [
                "origin-bottom-right",
                "transform-origin: bottom right;"
            ],
            [
                "origin-bottom",
                "transform-origin: bottom;"
            ],
            [
                "origin-bottom-left",
                "transform-origin: bottom left;"
            ],
            [
                "origin-left",
                "transform-origin: left;"
            ],
            [
                "origin-top-left",
                "transform-origin: top left;"
            ],
            [
                "origin-(<custom-property>)",
                "transform-origin: var(<custom-property>);"
            ],
            [
                "origin-[<value>]",
                "transform-origin: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/transform-style",
        "entry": "transform-style",
        "description": "Utilities for controlling if an elements children are placed in 3D space.",
        "parameters": [
            [
                "transform-3d",
                "transform-style: preserve-3d;"
            ],
            [
                "transform-flat",
                "transform-style: flat;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/translate",
        "entry": "translate",
        "description": "Utilities for translating elements.",
        "parameters": [
            [
                "translate-<number>",
                "translate: calc(var(--spacing) * <number>) calc(var(--spacing) * <number>);"
            ],
            [
                "-translate-<number>",
                "translate: calc(var(--spacing) * -<number>) calc(var(--spacing) * -<number>);"
            ],
            [
                "translate-<fraction>",
                "translate: calc(<fraction> * 100%) calc(<fraction> * 100%);"
            ],
            [
                "-translate-<fraction>",
                "translate: calc(<fraction> * -100%) calc(<fraction> * -100%);"
            ],
            [
                "translate-full",
                "translate: 100% 100%;"
            ],
            [
                "-translate-full",
                "translate: -100% -100%;"
            ],
            [
                "translate-px",
                "translate: 1px 1px;"
            ],
            [
                "-translate-px",
                "translate: -1px -1px;"
            ],
            [
                "translate-(<custom-property>)",
                "translate: var(<custom-property>) var(<custom-property>);"
            ],
            [
                "translate-[<value>]",
                "translate: <value> <value>;"
            ],
            [
                "translate-x-<number>",
                "translate: calc(var(--spacing) * <number>) var(--tw-translate-y);"
            ],
            [
                "-translate-x-<number>",
                "translate: calc(var(--spacing) * -<number>) var(--tw-translate-y);"
            ],
            [
                "translate-x-<fraction>",
                "translate: calc(<fraction> * 100%) var(--tw-translate-y);"
            ],
            [
                "-translate-x-<fraction>",
                "translate: calc(<fraction> * -100%) var(--tw-translate-y);"
            ],
            [
                "translate-x-full",
                "translate: 100% var(--tw-translate-y);"
            ],
            [
                "-translate-x-full",
                "translate: -100% var(--tw-translate-y);"
            ],
            [
                "translate-x-px",
                "translate: 1px var(--tw-translate-y);"
            ],
            [
                "-translate-x-px",
                "translate: -1px var(--tw-translate-y);"
            ],
            [
                "translate-x-(<custom-property>)",
                "translate: var(<custom-property>) var(--tw-translate-y);"
            ],
            [
                "translate-x-[<value>]",
                "translate: <value> var(--tw-translate-y);"
            ],
            [
                "translate-y-<number>",
                "translate: var(--tw-translate-x) calc(var(--spacing) * <number>);"
            ],
            [
                "-translate-y-<number>",
                "translate: var(--tw-translate-x) calc(var(--spacing) * -<number>);"
            ],
            [
                "translate-y-<fraction>",
                "translate: var(--tw-translate-x) calc(<fraction> * 100%);"
            ],
            [
                "-translate-y-<fraction>",
                "translate: var(--tw-translate-x) calc(<fraction> * -100%);"
            ],
            [
                "translate-y-full",
                "translate: var(--tw-translate-x) 100%;"
            ],
            [
                "-translate-y-full",
                "translate: var(--tw-translate-x) -100%;"
            ],
            [
                "translate-y-px",
                "translate: var(--tw-translate-x) 1px;"
            ],
            [
                "-translate-y-px",
                "translate: var(--tw-translate-x) -1px;"
            ],
            [
                "translate-y-(<custom-property>)",
                "translate: var(--tw-translate-x) var(<custom-property>);"
            ],
            [
                "translate-y-[<value>]",
                "translate: var(--tw-translate-x) <value>;"
            ],
            [
                "translate-z-<number>",
                "translate: var(--tw-translate-x) var(--tw-translate-y) calc(var(--spacing) * <number>);"
            ],
            [
                "-translate-z-<number>",
                "translate: var(--tw-translate-x) var(--tw-translate-y) calc(var(--spacing) * -<number>);"
            ],
            [
                "translate-z-px",
                "translate: var(--tw-translate-x) var(--tw-translate-y) 1px;"
            ],
            [
                "-translate-z-px",
                "translate: var(--tw-translate-x) var(--tw-translate-y) -1px;"
            ],
            [
                "translate-z-(<custom-property>)",
                "translate: var(--tw-translate-x) var(--tw-translate-y) var(<custom-property>);"
            ],
            [
                "translate-z-[<value>]",
                "translate: var(--tw-translate-x) var(--tw-translate-y) <value>;"
            ],
            [
                "translate-none",
                "translate: none;"
            ]
        ]
    }
]