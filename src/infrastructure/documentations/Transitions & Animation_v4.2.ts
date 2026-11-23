export const version = "v4.2";
export const documentations = [
    {
        "url": "https://tailwindcss.com/docs/transition-property",
        "entry": "transition-property",
        "description": "Utilities for controlling which CSS properties transition.",
        "parameters": [
            [
                "transition",
                "transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;\ntransition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */\ntransition-duration: var(--default-transition-duration); /* 150ms */"
            ],
            [
                "transition-all",
                "transition-property: all;\ntransition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */\ntransition-duration: var(--default-transition-duration); /* 150ms */"
            ],
            [
                "transition-colors",
                "transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;\ntransition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */\ntransition-duration: var(--default-transition-duration); /* 150ms */"
            ],
            [
                "transition-opacity",
                "transition-property: opacity;\ntransition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */\ntransition-duration: var(--default-transition-duration); /* 150ms */"
            ],
            [
                "transition-shadow",
                "transition-property: box-shadow;\ntransition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */\ntransition-duration: var(--default-transition-duration); /* 150ms */"
            ],
            [
                "transition-transform",
                "transition-property: transform, translate, scale, rotate;\ntransition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */\ntransition-duration: var(--default-transition-duration); /* 150ms */"
            ],
            [
                "transition-none",
                "transition-property: none;"
            ],
            [
                "transition-(<custom-property>)",
                "transition-property: var(<custom-property>);\ntransition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */\ntransition-duration: var(--default-transition-duration); /* 150ms */"
            ],
            [
                "transition-[<value>]",
                "transition-property: <value>;\ntransition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */\ntransition-duration: var(--default-transition-duration); /* 150ms */"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/transition-behavior",
        "entry": "transition-behavior",
        "description": "Utilities to control the behavior of CSS transitions.",
        "parameters": [
            [
                "transition-normal",
                "transition-behavior: normal;"
            ],
            [
                "transition-discrete",
                "transition-behavior: allow-discrete;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/transition-duration",
        "entry": "transition-duration",
        "description": "Utilities for controlling the duration of CSS transitions.",
        "parameters": [
            [
                "duration-<number>",
                "transition-duration: <number>ms;"
            ],
            [
                "duration-initial",
                "transition-duration: initial;"
            ],
            [
                "duration-(<custom-property>)",
                "transition-duration: var(<custom-property>);"
            ],
            [
                "duration-[<value>]",
                "transition-duration: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/transition-timing-function",
        "entry": "transition-timing-function",
        "description": "Utilities for controlling the easing of CSS transitions.",
        "parameters": [
            [
                "ease-linear",
                "transition-timing-function: linear;"
            ],
            [
                "ease-in",
                "transition-timing-function: var(--ease-in); /* cubic-bezier(0.4, 0, 1, 1) */"
            ],
            [
                "ease-out",
                "transition-timing-function: var(--ease-out); /* cubic-bezier(0, 0, 0.2, 1) */"
            ],
            [
                "ease-in-out",
                "transition-timing-function: var(--ease-in-out); /* cubic-bezier(0.4, 0, 0.2, 1) */"
            ],
            [
                "ease-initial",
                "transition-timing-function: initial;"
            ],
            [
                "ease-(<custom-property>)",
                "transition-timing-function: var(<custom-property>);"
            ],
            [
                "ease-[<value>]",
                "transition-timing-function: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/transition-delay",
        "entry": "transition-delay",
        "description": "Utilities for controlling the delay of CSS transitions.",
        "parameters": [
            [
                "delay-<number>",
                "transition-delay: <number>ms;"
            ],
            [
                "delay-(<custom-property>)",
                "transition-delay: var(<custom-property>);"
            ],
            [
                "delay-[<value>]",
                "transition-delay: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/animation",
        "entry": "animation",
        "description": "Utilities for animating elements with CSS animations.",
        "parameters": [
            [
                "animate-spin",
                "animation: var(--animate-spin); /* spin 1s linear infinite */\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}"
            ],
            [
                "animate-ping",
                "animation: var(--animate-ping); /* ping 1s cubic-bezier(0, 0, 0.2, 1) infinite */\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}"
            ],
            [
                "animate-pulse",
                "animation: var(--animate-pulse); /* pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite */\n\n@keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}"
            ],
            [
                "animate-bounce",
                "animation: var(--animate-bounce); /* bounce 1s infinite */\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: none;\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}"
            ],
            [
                "animate-none",
                "animation: none;"
            ],
            [
                "animate-(<custom-property>)",
                "animation: var(<custom-property>);"
            ],
            [
                "animate-[<value>]",
                "animation: <value>;"
            ]
        ]
    }
]