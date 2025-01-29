export const version = "v4.0";
export const documentations = [
    {
        "url": "https://tailwindcss.com/docs/font-family",
        "entry": "font-family",
        "description": "Utilities for controlling the font family of an element.",
        "parameters": [
            [
                "font-sans",
                "font-family: var(--font-sans); /* ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' */"
            ],
            [
                "font-serif",
                "font-family: var(--font-serif); /* ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif */"
            ],
            [
                "font-mono",
                "font-family: var(--font-mono); /* ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace */"
            ],
            [
                "font-(family-name:<custom-property>)",
                "font-family: var(<custom-property>);"
            ],
            [
                "font-[<value>]",
                "font-family: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/font-size",
        "entry": "font-size",
        "description": "Utilities for controlling the font size of an element.",
        "parameters": [
            [
                "text-xs",
                "font-size: var(--text-xs); /* 0.75rem (12px) */ \nline-height: var(--text-xs--line-height); /* calc(1 / 0.75) */"
            ],
            [
                "text-sm",
                "font-size: var(--text-sm); /* 0.875rem (14px) */ \nline-height: var(--text-sm--line-height); /* calc(1.25 / 0.875) */"
            ],
            [
                "text-base",
                "font-size: var(--text-base); /* 1rem (16px) */ \nline-height: var(--text-base--line-height); /* calc(1.5 / 1) */"
            ],
            [
                "text-lg",
                "font-size: var(--text-lg); /* 1.125rem (18px) */ \nline-height: var(--text-lg--line-height); /* calc(1.75 / 1.125) */"
            ],
            [
                "text-xl",
                "font-size: var(--text-xl); /* 1.25rem (20px) */ \nline-height: var(--text-xl--line-height); /* calc(1.75 / 1.25) */"
            ],
            [
                "text-2xl",
                "font-size: var(--text-2xl); /* 1.5rem (24px) */ \nline-height: var(--text-2xl--line-height); /* calc(2 / 1.5) */"
            ],
            [
                "text-3xl",
                "font-size: var(--text-3xl); /* 1.875rem (30px) */ \nline-height: var(--text-3xl--line-height); /* calc(2.25 / 1.875) */"
            ],
            [
                "text-4xl",
                "font-size: var(--text-4xl); /* 2.25rem (36px) */ \nline-height: var(--text-4xl--line-height); /* calc(2.5 / 2.25) */"
            ],
            [
                "text-5xl",
                "font-size: var(--text-5xl); /* 3rem (48px) */ \nline-height: var(--text-5xl--line-height); /* 1 */"
            ],
            [
                "text-6xl",
                "font-size: var(--text-6xl); /* 3.75rem (60px) */ \nline-height: var(--text-6xl--line-height); /* 1 */"
            ],
            [
                "text-7xl",
                "font-size: var(--text-7xl); /* 4.5rem (72px) */ \nline-height: var(--text-7xl--line-height); /* 1 */"
            ],
            [
                "text-8xl",
                "font-size: var(--text-8xl); /* 6rem (96px) */ \nline-height: var(--text-8xl--line-height); /* 1 */"
            ],
            [
                "text-9xl",
                "font-size: var(--text-9xl); /* 8rem (128px) */ \nline-height: var(--text-9xl--line-height); /* 1 */"
            ],
            [
                "text-(length:<custom-property>)",
                "font-size: var(<custom-property>);"
            ],
            [
                "text-[<value>]",
                "font-size: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/font-smoothing",
        "entry": "font-smoothing",
        "description": "Utilities for controlling the font smoothing of an element.",
        "parameters": [
            [
                "antialiased",
                "-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;"
            ],
            [
                "subpixel-antialiased",
                "-webkit-font-smoothing: auto;\n-moz-osx-font-smoothing: auto;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/font-style",
        "entry": "font-style",
        "description": "Utilities for controlling the style of text.",
        "parameters": [
            [
                "italic",
                "font-style: italic;"
            ],
            [
                "not-italic",
                "font-style: normal;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/font-weight",
        "entry": "font-weight",
        "description": "Utilities for controlling the font weight of an element.",
        "parameters": [
            [
                "font-thin",
                "font-weight: 100;"
            ],
            [
                "font-extralight",
                "font-weight: 200;"
            ],
            [
                "font-light",
                "font-weight: 300;"
            ],
            [
                "font-normal",
                "font-weight: 400;"
            ],
            [
                "font-medium",
                "font-weight: 500;"
            ],
            [
                "font-semibold",
                "font-weight: 600;"
            ],
            [
                "font-bold",
                "font-weight: 700;"
            ],
            [
                "font-extrabold",
                "font-weight: 800;"
            ],
            [
                "font-black",
                "font-weight: 900;"
            ],
            [
                "font-(<custom-property>)",
                "font-weight: var(<custom-property>);"
            ],
            [
                "font-[<value>]",
                "font-weight: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/font-stretch",
        "entry": "font-stretch",
        "description": "Utilities for selecting the width of a font face.",
        "parameters": [
            [
                "font-stretch-ultra-condensed",
                "font-stretch: ultra-condensed; /* 50% */"
            ],
            [
                "font-stretch-extra-condensed",
                "font-stretch: extra-condensed; /* 62.5% */"
            ],
            [
                "font-stretch-condensed",
                "font-stretch: condensed; /* 75% */"
            ],
            [
                "font-stretch-semi-condensed",
                "font-stretch: semi-condensed; /* 87.5% */"
            ],
            [
                "font-stretch-normal",
                "font-stretch: normal; /* 100% */"
            ],
            [
                "font-stretch-semi-expanded",
                "font-stretch: semi-expanded; /* 112.5% */"
            ],
            [
                "font-stretch-expanded",
                "font-stretch: expanded; /* 125% */"
            ],
            [
                "font-stretch-extra-expanded",
                "font-stretch: extra-expanded; /* 150% */"
            ],
            [
                "font-stretch-ultra-expanded",
                "font-stretch: ultra-expanded; /* 200% */"
            ],
            [
                "font-stretch-<percentage>",
                "font-stretch: <percentage>;"
            ],
            [
                "font-stretch-(<custom-property>)",
                "font-stretch: var(<custom-property>);"
            ],
            [
                "font-stretch-[<value>]",
                "font-stretch: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/font-variant-numeric",
        "entry": "font-variant-numeric",
        "description": "Utilities for controlling the variant of numbers.",
        "parameters": [
            [
                "normal-nums",
                "font-variant-numeric: normal;"
            ],
            [
                "ordinal",
                "font-variant-numeric: ordinal;"
            ],
            [
                "slashed-zero",
                "font-variant-numeric: slashed-zero;"
            ],
            [
                "lining-nums",
                "font-variant-numeric: lining-nums;"
            ],
            [
                "oldstyle-nums",
                "font-variant-numeric: oldstyle-nums;"
            ],
            [
                "proportional-nums",
                "font-variant-numeric: proportional-nums;"
            ],
            [
                "tabular-nums",
                "font-variant-numeric: tabular-nums;"
            ],
            [
                "diagonal-fractions",
                "font-variant-numeric: diagonal-fractions;"
            ],
            [
                "stacked-fractions",
                "font-variant-numeric: stacked-fractions;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/letter-spacing",
        "entry": "letter-spacing",
        "description": "Utilities for controlling the tracking, or letter spacing, of an element.",
        "parameters": [
            [
                "tracking-tighter",
                "letter-spacing: var(--tracking-tighter); /* -0.05em */"
            ],
            [
                "tracking-tight",
                "letter-spacing: var(--tracking-tight); /* -0.025em */"
            ],
            [
                "tracking-normal",
                "letter-spacing: var(--tracking-normal); /* 0em */"
            ],
            [
                "tracking-wide",
                "letter-spacing: var(--tracking-wide); /* 0.025em */"
            ],
            [
                "tracking-wider",
                "letter-spacing: var(--tracking-wider); /* 0.05em */"
            ],
            [
                "tracking-widest",
                "letter-spacing: var(--tracking-widest); /* 0.1em */"
            ],
            [
                "tracking-(<custom-property>)",
                "letter-spacing: var(<custom-property>);"
            ],
            [
                "tracking-[<value>]",
                "letter-spacing: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/line-clamp",
        "entry": "line-clamp",
        "description": "Utilities for clamping text to a specific number of lines.",
        "parameters": [
            [
                "line-clamp-<number>",
                "overflow: hidden;\ndisplay: -webkit-box;\n-webkit-box-orient: vertical;\n-webkit-line-clamp: <number>;"
            ],
            [
                "line-clamp-none",
                "overflow: visible;\ndisplay: block;\n-webkit-box-orient: horizontal;\n-webkit-line-clamp: unset;"
            ],
            [
                "line-clamp-(<custom-property>)",
                "overflow: hidden;\ndisplay: -webkit-box;\n-webkit-box-orient: vertical;\n-webkit-line-clamp: var(<custom-property>);"
            ],
            [
                "line-clamp-[<value>]",
                "overflow: hidden;\ndisplay: -webkit-box;\n-webkit-box-orient: vertical;\n-webkit-line-clamp: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/line-height",
        "entry": "line-height",
        "description": "Utilities for controlling the leading, or line height, of an element.",
        "parameters": [
            [
                "text-<size>/<number>",
                "font-size: <size>;\nline-height: calc(var(--spacing) * <number>);"
            ],
            [
                "text-<size>/(<custom-property>)",
                "font-size: <size>;\nline-height: var(<custom-property>);"
            ],
            [
                "text-<size>/[<value>]",
                "font-size: <size>;\nline-height: <value>;"
            ],
            [
                "leading-none",
                "line-height: 1;"
            ],
            [
                "leading-<number>",
                "line-height: calc(var(--spacing) * <number>)"
            ],
            [
                "leading-(<custom-property>)",
                "line-height: var(<custom-property>);"
            ],
            [
                "leading-[<value>]",
                "line-height: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/list-style-image",
        "entry": "list-style-image",
        "description": "Utilities for controlling the marker images for list items.",
        "parameters": [
            [
                "list-image-[<value>]",
                "list-style-image: <value>;"
            ],
            [
                "list-image-(<custom-property>)",
                "list-style-image: var(<custom-property>);"
            ],
            [
                "list-image-none",
                "list-style-image: none;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/list-style-position",
        "entry": "list-style-position",
        "description": "Utilities for controlling the position of bullets and numbers in lists.",
        "parameters": [
            [
                "list-inside",
                "list-style-position: inside;"
            ],
            [
                "list-outside",
                "list-style-position: outside;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/list-style-type",
        "entry": "list-style-type",
        "description": "Utilities for controlling the marker style of a list.",
        "parameters": [
            [
                "list-disc",
                "list-style-type: disc;"
            ],
            [
                "list-decimal",
                "list-style-type: decimal;"
            ],
            [
                "list-none",
                "list-style-type: none;"
            ],
            [
                "list-(<custom-property>)",
                "list-style-type: var(<custom-property>);"
            ],
            [
                "list-[<value>]",
                "list-style-type: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/text-align",
        "entry": "text-align",
        "description": "Utilities for controlling the alignment of text.",
        "parameters": [
            [
                "text-left",
                "text-align: left;"
            ],
            [
                "text-center",
                "text-align: center;"
            ],
            [
                "text-right",
                "text-align: right;"
            ],
            [
                "text-justify",
                "text-align: justify;"
            ],
            [
                "text-start",
                "text-align: start;"
            ],
            [
                "text-end",
                "text-align: end;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/color",
        "entry": "color",
        "description": "Utilities for controlling the text color of an element.",
        "parameters": [
            [
                "text-inherit",
                "color: inherit;"
            ],
            [
                "text-current",
                "color: currentColor;"
            ],
            [
                "text-transparent",
                "color: transparent;"
            ],
            [
                "text-black",
                "color: var(--color-black); /* #000 */"
            ],
            [
                "text-white",
                "color: var(--color-white); /* #fff */"
            ],
            [
                "text-red-50",
                "color: var(--color-red-50); /* oklch(0.971 0.013 17.38) */"
            ],
            [
                "text-red-100",
                "color: var(--color-red-100); /* oklch(0.936 0.032 17.717) */"
            ],
            [
                "text-red-200",
                "color: var(--color-red-200); /* oklch(0.885 0.062 18.334) */"
            ],
            [
                "text-red-300",
                "color: var(--color-red-300); /* oklch(0.808 0.114 19.571) */"
            ],
            [
                "text-red-400",
                "color: var(--color-red-400); /* oklch(0.704 0.191 22.216) */"
            ],
            [
                "text-red-500",
                "color: var(--color-red-500); /* oklch(0.637 0.237 25.331) */"
            ],
            [
                "text-red-600",
                "color: var(--color-red-600); /* oklch(0.577 0.245 27.325) */"
            ],
            [
                "text-red-700",
                "color: var(--color-red-700); /* oklch(0.505 0.213 27.518) */"
            ],
            [
                "text-red-800",
                "color: var(--color-red-800); /* oklch(0.444 0.177 26.899) */"
            ],
            [
                "text-red-900",
                "color: var(--color-red-900); /* oklch(0.396 0.141 25.723) */"
            ],
            [
                "text-red-950",
                "color: var(--color-red-950); /* oklch(0.258 0.092 26.042) */"
            ],
            [
                "text-orange-50",
                "color: var(--color-orange-50); /* oklch(0.98 0.016 73.684) */"
            ],
            [
                "text-orange-100",
                "color: var(--color-orange-100); /* oklch(0.954 0.038 75.164) */"
            ],
            [
                "text-orange-200",
                "color: var(--color-orange-200); /* oklch(0.901 0.076 70.697) */"
            ],
            [
                "text-orange-300",
                "color: var(--color-orange-300); /* oklch(0.837 0.128 66.29) */"
            ],
            [
                "text-orange-400",
                "color: var(--color-orange-400); /* oklch(0.75 0.183 55.934) */"
            ],
            [
                "text-orange-500",
                "color: var(--color-orange-500); /* oklch(0.705 0.213 47.604) */"
            ],
            [
                "text-orange-600",
                "color: var(--color-orange-600); /* oklch(0.646 0.222 41.116) */"
            ],
            [
                "text-orange-700",
                "color: var(--color-orange-700); /* oklch(0.553 0.195 38.402) */"
            ],
            [
                "text-orange-800",
                "color: var(--color-orange-800); /* oklch(0.47 0.157 37.304) */"
            ],
            [
                "text-orange-900",
                "color: var(--color-orange-900); /* oklch(0.408 0.123 38.172) */"
            ],
            [
                "text-orange-950",
                "color: var(--color-orange-950); /* oklch(0.266 0.079 36.259) */"
            ],
            [
                "text-amber-50",
                "color: var(--color-amber-50); /* oklch(0.987 0.022 95.277) */"
            ],
            [
                "text-amber-100",
                "color: var(--color-amber-100); /* oklch(0.962 0.059 95.617) */"
            ],
            [
                "text-amber-200",
                "color: var(--color-amber-200); /* oklch(0.924 0.12 95.746) */"
            ],
            [
                "text-amber-300",
                "color: var(--color-amber-300); /* oklch(0.879 0.169 91.605) */"
            ],
            [
                "text-amber-400",
                "color: var(--color-amber-400); /* oklch(0.828 0.189 84.429) */"
            ],
            [
                "text-amber-500",
                "color: var(--color-amber-500); /* oklch(0.769 0.188 70.08) */"
            ],
            [
                "text-amber-600",
                "color: var(--color-amber-600); /* oklch(0.666 0.179 58.318) */"
            ],
            [
                "text-amber-700",
                "color: var(--color-amber-700); /* oklch(0.555 0.163 48.998) */"
            ],
            [
                "text-amber-800",
                "color: var(--color-amber-800); /* oklch(0.473 0.137 46.201) */"
            ],
            [
                "text-amber-900",
                "color: var(--color-amber-900); /* oklch(0.414 0.112 45.904) */"
            ],
            [
                "text-amber-950",
                "color: var(--color-amber-950); /* oklch(0.279 0.077 45.635) */"
            ],
            [
                "text-yellow-50",
                "color: var(--color-yellow-50); /* oklch(0.987 0.026 102.212) */"
            ],
            [
                "text-yellow-100",
                "color: var(--color-yellow-100); /* oklch(0.973 0.071 103.193) */"
            ],
            [
                "text-yellow-200",
                "color: var(--color-yellow-200); /* oklch(0.945 0.129 101.54) */"
            ],
            [
                "text-yellow-300",
                "color: var(--color-yellow-300); /* oklch(0.905 0.182 98.111) */"
            ],
            [
                "text-yellow-400",
                "color: var(--color-yellow-400); /* oklch(0.852 0.199 91.936) */"
            ],
            [
                "text-yellow-500",
                "color: var(--color-yellow-500); /* oklch(0.795 0.184 86.047) */"
            ],
            [
                "text-yellow-600",
                "color: var(--color-yellow-600); /* oklch(0.681 0.162 75.834) */"
            ],
            [
                "text-yellow-700",
                "color: var(--color-yellow-700); /* oklch(0.554 0.135 66.442) */"
            ],
            [
                "text-yellow-800",
                "color: var(--color-yellow-800); /* oklch(0.476 0.114 61.907) */"
            ],
            [
                "text-yellow-900",
                "color: var(--color-yellow-900); /* oklch(0.421 0.095 57.708) */"
            ],
            [
                "text-yellow-950",
                "color: var(--color-yellow-950); /* oklch(0.286 0.066 53.813) */"
            ],
            [
                "text-lime-50",
                "color: var(--color-lime-50); /* oklch(0.986 0.031 120.757) */"
            ],
            [
                "text-lime-100",
                "color: var(--color-lime-100); /* oklch(0.967 0.067 122.328) */"
            ],
            [
                "text-lime-200",
                "color: var(--color-lime-200); /* oklch(0.938 0.127 124.321) */"
            ],
            [
                "text-lime-300",
                "color: var(--color-lime-300); /* oklch(0.897 0.196 126.665) */"
            ],
            [
                "text-lime-400",
                "color: var(--color-lime-400); /* oklch(0.841 0.238 128.85) */"
            ],
            [
                "text-lime-500",
                "color: var(--color-lime-500); /* oklch(0.768 0.233 130.85) */"
            ],
            [
                "text-lime-600",
                "color: var(--color-lime-600); /* oklch(0.648 0.2 131.684) */"
            ],
            [
                "text-lime-700",
                "color: var(--color-lime-700); /* oklch(0.532 0.157 131.589) */"
            ],
            [
                "text-lime-800",
                "color: var(--color-lime-800); /* oklch(0.453 0.124 130.933) */"
            ],
            [
                "text-lime-900",
                "color: var(--color-lime-900); /* oklch(0.405 0.101 131.063) */"
            ],
            [
                "text-lime-950",
                "color: var(--color-lime-950); /* oklch(0.274 0.072 132.109) */"
            ],
            [
                "text-green-50",
                "color: var(--color-green-50); /* oklch(0.982 0.018 155.826) */"
            ],
            [
                "text-green-100",
                "color: var(--color-green-100); /* oklch(0.962 0.044 156.743) */"
            ],
            [
                "text-green-200",
                "color: var(--color-green-200); /* oklch(0.925 0.084 155.995) */"
            ],
            [
                "text-green-300",
                "color: var(--color-green-300); /* oklch(0.871 0.15 154.449) */"
            ],
            [
                "text-green-400",
                "color: var(--color-green-400); /* oklch(0.792 0.209 151.711) */"
            ],
            [
                "text-green-500",
                "color: var(--color-green-500); /* oklch(0.723 0.219 149.579) */"
            ],
            [
                "text-green-600",
                "color: var(--color-green-600); /* oklch(0.627 0.194 149.214) */"
            ],
            [
                "text-green-700",
                "color: var(--color-green-700); /* oklch(0.527 0.154 150.069) */"
            ],
            [
                "text-green-800",
                "color: var(--color-green-800); /* oklch(0.448 0.119 151.328) */"
            ],
            [
                "text-green-900",
                "color: var(--color-green-900); /* oklch(0.393 0.095 152.535) */"
            ],
            [
                "text-green-950",
                "color: var(--color-green-950); /* oklch(0.266 0.065 152.934) */"
            ],
            [
                "text-emerald-50",
                "color: var(--color-emerald-50); /* oklch(0.979 0.021 166.113) */"
            ],
            [
                "text-emerald-100",
                "color: var(--color-emerald-100); /* oklch(0.95 0.052 163.051) */"
            ],
            [
                "text-emerald-200",
                "color: var(--color-emerald-200); /* oklch(0.905 0.093 164.15) */"
            ],
            [
                "text-emerald-300",
                "color: var(--color-emerald-300); /* oklch(0.845 0.143 164.978) */"
            ],
            [
                "text-emerald-400",
                "color: var(--color-emerald-400); /* oklch(0.765 0.177 163.223) */"
            ],
            [
                "text-emerald-500",
                "color: var(--color-emerald-500); /* oklch(0.696 0.17 162.48) */"
            ],
            [
                "text-emerald-600",
                "color: var(--color-emerald-600); /* oklch(0.596 0.145 163.225) */"
            ],
            [
                "text-emerald-700",
                "color: var(--color-emerald-700); /* oklch(0.508 0.118 165.612) */"
            ],
            [
                "text-emerald-800",
                "color: var(--color-emerald-800); /* oklch(0.432 0.095 166.913) */"
            ],
            [
                "text-emerald-900",
                "color: var(--color-emerald-900); /* oklch(0.378 0.077 168.94) */"
            ],
            [
                "text-emerald-950",
                "color: var(--color-emerald-950); /* oklch(0.262 0.051 172.552) */"
            ],
            [
                "text-teal-50",
                "color: var(--color-teal-50); /* oklch(0.984 0.014 180.72) */"
            ],
            [
                "text-teal-100",
                "color: var(--color-teal-100); /* oklch(0.953 0.051 180.801) */"
            ],
            [
                "text-teal-200",
                "color: var(--color-teal-200); /* oklch(0.91 0.096 180.426) */"
            ],
            [
                "text-teal-300",
                "color: var(--color-teal-300); /* oklch(0.855 0.138 181.071) */"
            ],
            [
                "text-teal-400",
                "color: var(--color-teal-400); /* oklch(0.777 0.152 181.912) */"
            ],
            [
                "text-teal-500",
                "color: var(--color-teal-500); /* oklch(0.704 0.14 182.503) */"
            ],
            [
                "text-teal-600",
                "color: var(--color-teal-600); /* oklch(0.6 0.118 184.704) */"
            ],
            [
                "text-teal-700",
                "color: var(--color-teal-700); /* oklch(0.511 0.096 186.391) */"
            ],
            [
                "text-teal-800",
                "color: var(--color-teal-800); /* oklch(0.437 0.078 188.216) */"
            ],
            [
                "text-teal-900",
                "color: var(--color-teal-900); /* oklch(0.386 0.063 188.416) */"
            ],
            [
                "text-teal-950",
                "color: var(--color-teal-950); /* oklch(0.277 0.046 192.524) */"
            ],
            [
                "text-cyan-50",
                "color: var(--color-cyan-50); /* oklch(0.984 0.019 200.873) */"
            ],
            [
                "text-cyan-100",
                "color: var(--color-cyan-100); /* oklch(0.956 0.045 203.388) */"
            ],
            [
                "text-cyan-200",
                "color: var(--color-cyan-200); /* oklch(0.917 0.08 205.041) */"
            ],
            [
                "text-cyan-300",
                "color: var(--color-cyan-300); /* oklch(0.865 0.127 207.078) */"
            ],
            [
                "text-cyan-400",
                "color: var(--color-cyan-400); /* oklch(0.789 0.154 211.53) */"
            ],
            [
                "text-cyan-500",
                "color: var(--color-cyan-500); /* oklch(0.715 0.143 215.221) */"
            ],
            [
                "text-cyan-600",
                "color: var(--color-cyan-600); /* oklch(0.609 0.126 221.723) */"
            ],
            [
                "text-cyan-700",
                "color: var(--color-cyan-700); /* oklch(0.52 0.105 223.128) */"
            ],
            [
                "text-cyan-800",
                "color: var(--color-cyan-800); /* oklch(0.45 0.085 224.283) */"
            ],
            [
                "text-cyan-900",
                "color: var(--color-cyan-900); /* oklch(0.398 0.07 227.392) */"
            ],
            [
                "text-cyan-950",
                "color: var(--color-cyan-950); /* oklch(0.302 0.056 229.695) */"
            ],
            [
                "text-sky-50",
                "color: var(--color-sky-50); /* oklch(0.977 0.013 236.62) */"
            ],
            [
                "text-sky-100",
                "color: var(--color-sky-100); /* oklch(0.951 0.026 236.824) */"
            ],
            [
                "text-sky-200",
                "color: var(--color-sky-200); /* oklch(0.901 0.058 230.902) */"
            ],
            [
                "text-sky-300",
                "color: var(--color-sky-300); /* oklch(0.828 0.111 230.318) */"
            ],
            [
                "text-sky-400",
                "color: var(--color-sky-400); /* oklch(0.746 0.16 232.661) */"
            ],
            [
                "text-sky-500",
                "color: var(--color-sky-500); /* oklch(0.685 0.169 237.323) */"
            ],
            [
                "text-sky-600",
                "color: var(--color-sky-600); /* oklch(0.588 0.158 241.966) */"
            ],
            [
                "text-sky-700",
                "color: var(--color-sky-700); /* oklch(0.5 0.134 242.749) */"
            ],
            [
                "text-sky-800",
                "color: var(--color-sky-800); /* oklch(0.443 0.11 240.79) */"
            ],
            [
                "text-sky-900",
                "color: var(--color-sky-900); /* oklch(0.391 0.09 240.876) */"
            ],
            [
                "text-sky-950",
                "color: var(--color-sky-950); /* oklch(0.293 0.066 243.157) */"
            ],
            [
                "text-blue-50",
                "color: var(--color-blue-50); /* oklch(0.97 0.014 254.604) */"
            ],
            [
                "text-blue-100",
                "color: var(--color-blue-100); /* oklch(0.932 0.032 255.585) */"
            ],
            [
                "text-blue-200",
                "color: var(--color-blue-200); /* oklch(0.882 0.059 254.128) */"
            ],
            [
                "text-blue-300",
                "color: var(--color-blue-300); /* oklch(0.809 0.105 251.813) */"
            ],
            [
                "text-blue-400",
                "color: var(--color-blue-400); /* oklch(0.707 0.165 254.624) */"
            ],
            [
                "text-blue-500",
                "color: var(--color-blue-500); /* oklch(0.623 0.214 259.815) */"
            ],
            [
                "text-blue-600",
                "color: var(--color-blue-600); /* oklch(0.546 0.245 262.881) */"
            ],
            [
                "text-blue-700",
                "color: var(--color-blue-700); /* oklch(0.488 0.243 264.376) */"
            ],
            [
                "text-blue-800",
                "color: var(--color-blue-800); /* oklch(0.424 0.199 265.638) */"
            ],
            [
                "text-blue-900",
                "color: var(--color-blue-900); /* oklch(0.379 0.146 265.522) */"
            ],
            [
                "text-blue-950",
                "color: var(--color-blue-950); /* oklch(0.282 0.091 267.935) */"
            ],
            [
                "text-indigo-50",
                "color: var(--color-indigo-50); /* oklch(0.962 0.018 272.314) */"
            ],
            [
                "text-indigo-100",
                "color: var(--color-indigo-100); /* oklch(0.93 0.034 272.788) */"
            ],
            [
                "text-indigo-200",
                "color: var(--color-indigo-200); /* oklch(0.87 0.065 274.039) */"
            ],
            [
                "text-indigo-300",
                "color: var(--color-indigo-300); /* oklch(0.785 0.115 274.713) */"
            ],
            [
                "text-indigo-400",
                "color: var(--color-indigo-400); /* oklch(0.673 0.182 276.935) */"
            ],
            [
                "text-indigo-500",
                "color: var(--color-indigo-500); /* oklch(0.585 0.233 277.117) */"
            ],
            [
                "text-indigo-600",
                "color: var(--color-indigo-600); /* oklch(0.511 0.262 276.966) */"
            ],
            [
                "text-indigo-700",
                "color: var(--color-indigo-700); /* oklch(0.457 0.24 277.023) */"
            ],
            [
                "text-indigo-800",
                "color: var(--color-indigo-800); /* oklch(0.398 0.195 277.366) */"
            ],
            [
                "text-indigo-900",
                "color: var(--color-indigo-900); /* oklch(0.359 0.144 278.697) */"
            ],
            [
                "text-indigo-950",
                "color: var(--color-indigo-950); /* oklch(0.257 0.09 281.288) */"
            ],
            [
                "text-violet-50",
                "color: var(--color-violet-50); /* oklch(0.969 0.016 293.756) */"
            ],
            [
                "text-violet-100",
                "color: var(--color-violet-100); /* oklch(0.943 0.029 294.588) */"
            ],
            [
                "text-violet-200",
                "color: var(--color-violet-200); /* oklch(0.894 0.057 293.283) */"
            ],
            [
                "text-violet-300",
                "color: var(--color-violet-300); /* oklch(0.811 0.111 293.571) */"
            ],
            [
                "text-violet-400",
                "color: var(--color-violet-400); /* oklch(0.702 0.183 293.541) */"
            ],
            [
                "text-violet-500",
                "color: var(--color-violet-500); /* oklch(0.606 0.25 292.717) */"
            ],
            [
                "text-violet-600",
                "color: var(--color-violet-600); /* oklch(0.541 0.281 293.009) */"
            ],
            [
                "text-violet-700",
                "color: var(--color-violet-700); /* oklch(0.491 0.27 292.581) */"
            ],
            [
                "text-violet-800",
                "color: var(--color-violet-800); /* oklch(0.432 0.232 292.759) */"
            ],
            [
                "text-violet-900",
                "color: var(--color-violet-900); /* oklch(0.38 0.189 293.745) */"
            ],
            [
                "text-violet-950",
                "color: var(--color-violet-950); /* oklch(0.283 0.141 291.089) */"
            ],
            [
                "text-purple-50",
                "color: var(--color-purple-50); /* oklch(0.977 0.014 308.299) */"
            ],
            [
                "text-purple-100",
                "color: var(--color-purple-100); /* oklch(0.946 0.033 307.174) */"
            ],
            [
                "text-purple-200",
                "color: var(--color-purple-200); /* oklch(0.902 0.063 306.703) */"
            ],
            [
                "text-purple-300",
                "color: var(--color-purple-300); /* oklch(0.827 0.119 306.383) */"
            ],
            [
                "text-purple-400",
                "color: var(--color-purple-400); /* oklch(0.714 0.203 305.504) */"
            ],
            [
                "text-purple-500",
                "color: var(--color-purple-500); /* oklch(0.627 0.265 303.9) */"
            ],
            [
                "text-purple-600",
                "color: var(--color-purple-600); /* oklch(0.558 0.288 302.321) */"
            ],
            [
                "text-purple-700",
                "color: var(--color-purple-700); /* oklch(0.496 0.265 301.924) */"
            ],
            [
                "text-purple-800",
                "color: var(--color-purple-800); /* oklch(0.438 0.218 303.724) */"
            ],
            [
                "text-purple-900",
                "color: var(--color-purple-900); /* oklch(0.381 0.176 304.987) */"
            ],
            [
                "text-purple-950",
                "color: var(--color-purple-950); /* oklch(0.291 0.149 302.717) */"
            ],
            [
                "text-fuchsia-50",
                "color: var(--color-fuchsia-50); /* oklch(0.977 0.017 320.058) */"
            ],
            [
                "text-fuchsia-100",
                "color: var(--color-fuchsia-100); /* oklch(0.952 0.037 318.852) */"
            ],
            [
                "text-fuchsia-200",
                "color: var(--color-fuchsia-200); /* oklch(0.903 0.076 319.62) */"
            ],
            [
                "text-fuchsia-300",
                "color: var(--color-fuchsia-300); /* oklch(0.833 0.145 321.434) */"
            ],
            [
                "text-fuchsia-400",
                "color: var(--color-fuchsia-400); /* oklch(0.74 0.238 322.16) */"
            ],
            [
                "text-fuchsia-500",
                "color: var(--color-fuchsia-500); /* oklch(0.667 0.295 322.15) */"
            ],
            [
                "text-fuchsia-600",
                "color: var(--color-fuchsia-600); /* oklch(0.591 0.293 322.896) */"
            ],
            [
                "text-fuchsia-700",
                "color: var(--color-fuchsia-700); /* oklch(0.518 0.253 323.949) */"
            ],
            [
                "text-fuchsia-800",
                "color: var(--color-fuchsia-800); /* oklch(0.452 0.211 324.591) */"
            ],
            [
                "text-fuchsia-900",
                "color: var(--color-fuchsia-900); /* oklch(0.401 0.17 325.612) */"
            ],
            [
                "text-fuchsia-950",
                "color: var(--color-fuchsia-950); /* oklch(0.293 0.136 325.661) */"
            ],
            [
                "text-pink-50",
                "color: var(--color-pink-50); /* oklch(0.971 0.014 343.198) */"
            ],
            [
                "text-pink-100",
                "color: var(--color-pink-100); /* oklch(0.948 0.028 342.258) */"
            ],
            [
                "text-pink-200",
                "color: var(--color-pink-200); /* oklch(0.899 0.061 343.231) */"
            ],
            [
                "text-pink-300",
                "color: var(--color-pink-300); /* oklch(0.823 0.12 346.018) */"
            ],
            [
                "text-pink-400",
                "color: var(--color-pink-400); /* oklch(0.718 0.202 349.761) */"
            ],
            [
                "text-pink-500",
                "color: var(--color-pink-500); /* oklch(0.656 0.241 354.308) */"
            ],
            [
                "text-pink-600",
                "color: var(--color-pink-600); /* oklch(0.592 0.249 0.584) */"
            ],
            [
                "text-pink-700",
                "color: var(--color-pink-700); /* oklch(0.525 0.223 3.958) */"
            ],
            [
                "text-pink-800",
                "color: var(--color-pink-800); /* oklch(0.459 0.187 3.815) */"
            ],
            [
                "text-pink-900",
                "color: var(--color-pink-900); /* oklch(0.408 0.153 2.432) */"
            ],
            [
                "text-pink-950",
                "color: var(--color-pink-950); /* oklch(0.284 0.109 3.907) */"
            ],
            [
                "text-rose-50",
                "color: var(--color-rose-50); /* oklch(0.969 0.015 12.422) */"
            ],
            [
                "text-rose-100",
                "color: var(--color-rose-100); /* oklch(0.941 0.03 12.58) */"
            ],
            [
                "text-rose-200",
                "color: var(--color-rose-200); /* oklch(0.892 0.058 10.001) */"
            ],
            [
                "text-rose-300",
                "color: var(--color-rose-300); /* oklch(0.81 0.117 11.638) */"
            ],
            [
                "text-rose-400",
                "color: var(--color-rose-400); /* oklch(0.712 0.194 13.428) */"
            ],
            [
                "text-rose-500",
                "color: var(--color-rose-500); /* oklch(0.645 0.246 16.439) */"
            ],
            [
                "text-rose-600",
                "color: var(--color-rose-600); /* oklch(0.586 0.253 17.585) */"
            ],
            [
                "text-rose-700",
                "color: var(--color-rose-700); /* oklch(0.514 0.222 16.935) */"
            ],
            [
                "text-rose-800",
                "color: var(--color-rose-800); /* oklch(0.455 0.188 13.697) */"
            ],
            [
                "text-rose-900",
                "color: var(--color-rose-900); /* oklch(0.41 0.159 10.272) */"
            ],
            [
                "text-rose-950",
                "color: var(--color-rose-950); /* oklch(0.271 0.105 12.094) */"
            ],
            [
                "text-slate-50",
                "color: var(--color-slate-50); /* oklch(0.984 0.003 247.858) */"
            ],
            [
                "text-slate-100",
                "color: var(--color-slate-100); /* oklch(0.968 0.007 247.896) */"
            ],
            [
                "text-slate-200",
                "color: var(--color-slate-200); /* oklch(0.929 0.013 255.508) */"
            ],
            [
                "text-slate-300",
                "color: var(--color-slate-300); /* oklch(0.869 0.022 252.894) */"
            ],
            [
                "text-slate-400",
                "color: var(--color-slate-400); /* oklch(0.704 0.04 256.788) */"
            ],
            [
                "text-slate-500",
                "color: var(--color-slate-500); /* oklch(0.554 0.046 257.417) */"
            ],
            [
                "text-slate-600",
                "color: var(--color-slate-600); /* oklch(0.446 0.043 257.281) */"
            ],
            [
                "text-slate-700",
                "color: var(--color-slate-700); /* oklch(0.372 0.044 257.287) */"
            ],
            [
                "text-slate-800",
                "color: var(--color-slate-800); /* oklch(0.279 0.041 260.031) */"
            ],
            [
                "text-slate-900",
                "color: var(--color-slate-900); /* oklch(0.208 0.042 265.755) */"
            ],
            [
                "text-slate-950",
                "color: var(--color-slate-950); /* oklch(0.129 0.042 264.695) */"
            ],
            [
                "text-gray-50",
                "color: var(--color-gray-50); /* oklch(0.985 0.002 247.839) */"
            ],
            [
                "text-gray-100",
                "color: var(--color-gray-100); /* oklch(0.967 0.003 264.542) */"
            ],
            [
                "text-gray-200",
                "color: var(--color-gray-200); /* oklch(0.928 0.006 264.531) */"
            ],
            [
                "text-gray-300",
                "color: var(--color-gray-300); /* oklch(0.872 0.01 258.338) */"
            ],
            [
                "text-gray-400",
                "color: var(--color-gray-400); /* oklch(0.707 0.022 261.325) */"
            ],
            [
                "text-gray-500",
                "color: var(--color-gray-500); /* oklch(0.551 0.027 264.364) */"
            ],
            [
                "text-gray-600",
                "color: var(--color-gray-600); /* oklch(0.446 0.03 256.802) */"
            ],
            [
                "text-gray-700",
                "color: var(--color-gray-700); /* oklch(0.373 0.034 259.733) */"
            ],
            [
                "text-gray-800",
                "color: var(--color-gray-800); /* oklch(0.278 0.033 256.848) */"
            ],
            [
                "text-gray-900",
                "color: var(--color-gray-900); /* oklch(0.21 0.034 264.665) */"
            ],
            [
                "text-gray-950",
                "color: var(--color-gray-950); /* oklch(0.13 0.028 261.692) */"
            ],
            [
                "text-zinc-50",
                "color: var(--color-zinc-50); /* oklch(0.985 0 0) */"
            ],
            [
                "text-zinc-100",
                "color: var(--color-zinc-100); /* oklch(0.967 0.001 286.375) */"
            ],
            [
                "text-zinc-200",
                "color: var(--color-zinc-200); /* oklch(0.92 0.004 286.32) */"
            ],
            [
                "text-zinc-300",
                "color: var(--color-zinc-300); /* oklch(0.871 0.006 286.286) */"
            ],
            [
                "text-zinc-400",
                "color: var(--color-zinc-400); /* oklch(0.705 0.015 286.067) */"
            ],
            [
                "text-zinc-500",
                "color: var(--color-zinc-500); /* oklch(0.552 0.016 285.938) */"
            ],
            [
                "text-zinc-600",
                "color: var(--color-zinc-600); /* oklch(0.442 0.017 285.786) */"
            ],
            [
                "text-zinc-700",
                "color: var(--color-zinc-700); /* oklch(0.37 0.013 285.805) */"
            ],
            [
                "text-zinc-800",
                "color: var(--color-zinc-800); /* oklch(0.274 0.006 286.033) */"
            ],
            [
                "text-zinc-900",
                "color: var(--color-zinc-900); /* oklch(0.21 0.006 285.885) */"
            ],
            [
                "text-zinc-950",
                "color: var(--color-zinc-950); /* oklch(0.141 0.005 285.823) */"
            ],
            [
                "text-neutral-50",
                "color: var(--color-neutral-50); /* oklch(0.985 0 0) */"
            ],
            [
                "text-neutral-100",
                "color: var(--color-neutral-100); /* oklch(0.97 0 0) */"
            ],
            [
                "text-neutral-200",
                "color: var(--color-neutral-200); /* oklch(0.922 0 0) */"
            ],
            [
                "text-neutral-300",
                "color: var(--color-neutral-300); /* oklch(0.87 0 0) */"
            ],
            [
                "text-neutral-400",
                "color: var(--color-neutral-400); /* oklch(0.708 0 0) */"
            ],
            [
                "text-neutral-500",
                "color: var(--color-neutral-500); /* oklch(0.556 0 0) */"
            ],
            [
                "text-neutral-600",
                "color: var(--color-neutral-600); /* oklch(0.439 0 0) */"
            ],
            [
                "text-neutral-700",
                "color: var(--color-neutral-700); /* oklch(0.371 0 0) */"
            ],
            [
                "text-neutral-800",
                "color: var(--color-neutral-800); /* oklch(0.269 0 0) */"
            ],
            [
                "text-neutral-900",
                "color: var(--color-neutral-900); /* oklch(0.205 0 0) */"
            ],
            [
                "text-neutral-950",
                "color: var(--color-neutral-950); /* oklch(0.145 0 0) */"
            ],
            [
                "text-stone-50",
                "color: var(--color-stone-50); /* oklch(0.985 0.001 106.423) */"
            ],
            [
                "text-stone-100",
                "color: var(--color-stone-100); /* oklch(0.97 0.001 106.424) */"
            ],
            [
                "text-stone-200",
                "color: var(--color-stone-200); /* oklch(0.923 0.003 48.717) */"
            ],
            [
                "text-stone-300",
                "color: var(--color-stone-300); /* oklch(0.869 0.005 56.366) */"
            ],
            [
                "text-stone-400",
                "color: var(--color-stone-400); /* oklch(0.709 0.01 56.259) */"
            ],
            [
                "text-stone-500",
                "color: var(--color-stone-500); /* oklch(0.553 0.013 58.071) */"
            ],
            [
                "text-stone-600",
                "color: var(--color-stone-600); /* oklch(0.444 0.011 73.639) */"
            ],
            [
                "text-stone-700",
                "color: var(--color-stone-700); /* oklch(0.374 0.01 67.558) */"
            ],
            [
                "text-stone-800",
                "color: var(--color-stone-800); /* oklch(0.268 0.007 34.298) */"
            ],
            [
                "text-stone-900",
                "color: var(--color-stone-900); /* oklch(0.216 0.006 56.043) */"
            ],
            [
                "text-stone-950",
                "color: var(--color-stone-950); /* oklch(0.147 0.004 49.25) */"
            ],
            [
                "text-(<custom-property>)",
                "color: var(<custom-property>);"
            ],
            [
                "text-[<value>]",
                "color: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/text-decoration-line",
        "entry": "text-decoration-line",
        "description": "Utilities for controlling the decoration of text.",
        "parameters": [
            [
                "underline",
                "text-decoration-line: underline;"
            ],
            [
                "overline",
                "text-decoration-line: overline;"
            ],
            [
                "line-through",
                "text-decoration-line: line-through;"
            ],
            [
                "no-underline",
                "text-decoration-line: none;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/text-decoration-color",
        "entry": "text-decoration-color",
        "description": "Utilities for controlling the color of text decorations.",
        "parameters": [
            [
                "decoration-inherit",
                "text-decoration-color: inherit;"
            ],
            [
                "decoration-current",
                "text-decoration-color: currentColor;"
            ],
            [
                "decoration-transparent",
                "text-decoration-color: transparent;"
            ],
            [
                "decoration-black",
                "text-decoration-color: var(--color-black); /* #000 */"
            ],
            [
                "decoration-white",
                "text-decoration-color: var(--color-white); /* #fff */"
            ],
            [
                "decoration-red-50",
                "text-decoration-color: var(--color-red-50); /* oklch(0.971 0.013 17.38) */"
            ],
            [
                "decoration-red-100",
                "text-decoration-color: var(--color-red-100); /* oklch(0.936 0.032 17.717) */"
            ],
            [
                "decoration-red-200",
                "text-decoration-color: var(--color-red-200); /* oklch(0.885 0.062 18.334) */"
            ],
            [
                "decoration-red-300",
                "text-decoration-color: var(--color-red-300); /* oklch(0.808 0.114 19.571) */"
            ],
            [
                "decoration-red-400",
                "text-decoration-color: var(--color-red-400); /* oklch(0.704 0.191 22.216) */"
            ],
            [
                "decoration-red-500",
                "text-decoration-color: var(--color-red-500); /* oklch(0.637 0.237 25.331) */"
            ],
            [
                "decoration-red-600",
                "text-decoration-color: var(--color-red-600); /* oklch(0.577 0.245 27.325) */"
            ],
            [
                "decoration-red-700",
                "text-decoration-color: var(--color-red-700); /* oklch(0.505 0.213 27.518) */"
            ],
            [
                "decoration-red-800",
                "text-decoration-color: var(--color-red-800); /* oklch(0.444 0.177 26.899) */"
            ],
            [
                "decoration-red-900",
                "text-decoration-color: var(--color-red-900); /* oklch(0.396 0.141 25.723) */"
            ],
            [
                "decoration-red-950",
                "text-decoration-color: var(--color-red-950); /* oklch(0.258 0.092 26.042) */"
            ],
            [
                "decoration-orange-50",
                "text-decoration-color: var(--color-orange-50); /* oklch(0.98 0.016 73.684) */"
            ],
            [
                "decoration-orange-100",
                "text-decoration-color: var(--color-orange-100); /* oklch(0.954 0.038 75.164) */"
            ],
            [
                "decoration-orange-200",
                "text-decoration-color: var(--color-orange-200); /* oklch(0.901 0.076 70.697) */"
            ],
            [
                "decoration-orange-300",
                "text-decoration-color: var(--color-orange-300); /* oklch(0.837 0.128 66.29) */"
            ],
            [
                "decoration-orange-400",
                "text-decoration-color: var(--color-orange-400); /* oklch(0.75 0.183 55.934) */"
            ],
            [
                "decoration-orange-500",
                "text-decoration-color: var(--color-orange-500); /* oklch(0.705 0.213 47.604) */"
            ],
            [
                "decoration-orange-600",
                "text-decoration-color: var(--color-orange-600); /* oklch(0.646 0.222 41.116) */"
            ],
            [
                "decoration-orange-700",
                "text-decoration-color: var(--color-orange-700); /* oklch(0.553 0.195 38.402) */"
            ],
            [
                "decoration-orange-800",
                "text-decoration-color: var(--color-orange-800); /* oklch(0.47 0.157 37.304) */"
            ],
            [
                "decoration-orange-900",
                "text-decoration-color: var(--color-orange-900); /* oklch(0.408 0.123 38.172) */"
            ],
            [
                "decoration-orange-950",
                "text-decoration-color: var(--color-orange-950); /* oklch(0.266 0.079 36.259) */"
            ],
            [
                "decoration-amber-50",
                "text-decoration-color: var(--color-amber-50); /* oklch(0.987 0.022 95.277) */"
            ],
            [
                "decoration-amber-100",
                "text-decoration-color: var(--color-amber-100); /* oklch(0.962 0.059 95.617) */"
            ],
            [
                "decoration-amber-200",
                "text-decoration-color: var(--color-amber-200); /* oklch(0.924 0.12 95.746) */"
            ],
            [
                "decoration-amber-300",
                "text-decoration-color: var(--color-amber-300); /* oklch(0.879 0.169 91.605) */"
            ],
            [
                "decoration-amber-400",
                "text-decoration-color: var(--color-amber-400); /* oklch(0.828 0.189 84.429) */"
            ],
            [
                "decoration-amber-500",
                "text-decoration-color: var(--color-amber-500); /* oklch(0.769 0.188 70.08) */"
            ],
            [
                "decoration-amber-600",
                "text-decoration-color: var(--color-amber-600); /* oklch(0.666 0.179 58.318) */"
            ],
            [
                "decoration-amber-700",
                "text-decoration-color: var(--color-amber-700); /* oklch(0.555 0.163 48.998) */"
            ],
            [
                "decoration-amber-800",
                "text-decoration-color: var(--color-amber-800); /* oklch(0.473 0.137 46.201) */"
            ],
            [
                "decoration-amber-900",
                "text-decoration-color: var(--color-amber-900); /* oklch(0.414 0.112 45.904) */"
            ],
            [
                "decoration-amber-950",
                "text-decoration-color: var(--color-amber-950); /* oklch(0.279 0.077 45.635) */"
            ],
            [
                "decoration-yellow-50",
                "text-decoration-color: var(--color-yellow-50); /* oklch(0.987 0.026 102.212) */"
            ],
            [
                "decoration-yellow-100",
                "text-decoration-color: var(--color-yellow-100); /* oklch(0.973 0.071 103.193) */"
            ],
            [
                "decoration-yellow-200",
                "text-decoration-color: var(--color-yellow-200); /* oklch(0.945 0.129 101.54) */"
            ],
            [
                "decoration-yellow-300",
                "text-decoration-color: var(--color-yellow-300); /* oklch(0.905 0.182 98.111) */"
            ],
            [
                "decoration-yellow-400",
                "text-decoration-color: var(--color-yellow-400); /* oklch(0.852 0.199 91.936) */"
            ],
            [
                "decoration-yellow-500",
                "text-decoration-color: var(--color-yellow-500); /* oklch(0.795 0.184 86.047) */"
            ],
            [
                "decoration-yellow-600",
                "text-decoration-color: var(--color-yellow-600); /* oklch(0.681 0.162 75.834) */"
            ],
            [
                "decoration-yellow-700",
                "text-decoration-color: var(--color-yellow-700); /* oklch(0.554 0.135 66.442) */"
            ],
            [
                "decoration-yellow-800",
                "text-decoration-color: var(--color-yellow-800); /* oklch(0.476 0.114 61.907) */"
            ],
            [
                "decoration-yellow-900",
                "text-decoration-color: var(--color-yellow-900); /* oklch(0.421 0.095 57.708) */"
            ],
            [
                "decoration-yellow-950",
                "text-decoration-color: var(--color-yellow-950); /* oklch(0.286 0.066 53.813) */"
            ],
            [
                "decoration-lime-50",
                "text-decoration-color: var(--color-lime-50); /* oklch(0.986 0.031 120.757) */"
            ],
            [
                "decoration-lime-100",
                "text-decoration-color: var(--color-lime-100); /* oklch(0.967 0.067 122.328) */"
            ],
            [
                "decoration-lime-200",
                "text-decoration-color: var(--color-lime-200); /* oklch(0.938 0.127 124.321) */"
            ],
            [
                "decoration-lime-300",
                "text-decoration-color: var(--color-lime-300); /* oklch(0.897 0.196 126.665) */"
            ],
            [
                "decoration-lime-400",
                "text-decoration-color: var(--color-lime-400); /* oklch(0.841 0.238 128.85) */"
            ],
            [
                "decoration-lime-500",
                "text-decoration-color: var(--color-lime-500); /* oklch(0.768 0.233 130.85) */"
            ],
            [
                "decoration-lime-600",
                "text-decoration-color: var(--color-lime-600); /* oklch(0.648 0.2 131.684) */"
            ],
            [
                "decoration-lime-700",
                "text-decoration-color: var(--color-lime-700); /* oklch(0.532 0.157 131.589) */"
            ],
            [
                "decoration-lime-800",
                "text-decoration-color: var(--color-lime-800); /* oklch(0.453 0.124 130.933) */"
            ],
            [
                "decoration-lime-900",
                "text-decoration-color: var(--color-lime-900); /* oklch(0.405 0.101 131.063) */"
            ],
            [
                "decoration-lime-950",
                "text-decoration-color: var(--color-lime-950); /* oklch(0.274 0.072 132.109) */"
            ],
            [
                "decoration-green-50",
                "text-decoration-color: var(--color-green-50); /* oklch(0.982 0.018 155.826) */"
            ],
            [
                "decoration-green-100",
                "text-decoration-color: var(--color-green-100); /* oklch(0.962 0.044 156.743) */"
            ],
            [
                "decoration-green-200",
                "text-decoration-color: var(--color-green-200); /* oklch(0.925 0.084 155.995) */"
            ],
            [
                "decoration-green-300",
                "text-decoration-color: var(--color-green-300); /* oklch(0.871 0.15 154.449) */"
            ],
            [
                "decoration-green-400",
                "text-decoration-color: var(--color-green-400); /* oklch(0.792 0.209 151.711) */"
            ],
            [
                "decoration-green-500",
                "text-decoration-color: var(--color-green-500); /* oklch(0.723 0.219 149.579) */"
            ],
            [
                "decoration-green-600",
                "text-decoration-color: var(--color-green-600); /* oklch(0.627 0.194 149.214) */"
            ],
            [
                "decoration-green-700",
                "text-decoration-color: var(--color-green-700); /* oklch(0.527 0.154 150.069) */"
            ],
            [
                "decoration-green-800",
                "text-decoration-color: var(--color-green-800); /* oklch(0.448 0.119 151.328) */"
            ],
            [
                "decoration-green-900",
                "text-decoration-color: var(--color-green-900); /* oklch(0.393 0.095 152.535) */"
            ],
            [
                "decoration-green-950",
                "text-decoration-color: var(--color-green-950); /* oklch(0.266 0.065 152.934) */"
            ],
            [
                "decoration-emerald-50",
                "text-decoration-color: var(--color-emerald-50); /* oklch(0.979 0.021 166.113) */"
            ],
            [
                "decoration-emerald-100",
                "text-decoration-color: var(--color-emerald-100); /* oklch(0.95 0.052 163.051) */"
            ],
            [
                "decoration-emerald-200",
                "text-decoration-color: var(--color-emerald-200); /* oklch(0.905 0.093 164.15) */"
            ],
            [
                "decoration-emerald-300",
                "text-decoration-color: var(--color-emerald-300); /* oklch(0.845 0.143 164.978) */"
            ],
            [
                "decoration-emerald-400",
                "text-decoration-color: var(--color-emerald-400); /* oklch(0.765 0.177 163.223) */"
            ],
            [
                "decoration-emerald-500",
                "text-decoration-color: var(--color-emerald-500); /* oklch(0.696 0.17 162.48) */"
            ],
            [
                "decoration-emerald-600",
                "text-decoration-color: var(--color-emerald-600); /* oklch(0.596 0.145 163.225) */"
            ],
            [
                "decoration-emerald-700",
                "text-decoration-color: var(--color-emerald-700); /* oklch(0.508 0.118 165.612) */"
            ],
            [
                "decoration-emerald-800",
                "text-decoration-color: var(--color-emerald-800); /* oklch(0.432 0.095 166.913) */"
            ],
            [
                "decoration-emerald-900",
                "text-decoration-color: var(--color-emerald-900); /* oklch(0.378 0.077 168.94) */"
            ],
            [
                "decoration-emerald-950",
                "text-decoration-color: var(--color-emerald-950); /* oklch(0.262 0.051 172.552) */"
            ],
            [
                "decoration-teal-50",
                "text-decoration-color: var(--color-teal-50); /* oklch(0.984 0.014 180.72) */"
            ],
            [
                "decoration-teal-100",
                "text-decoration-color: var(--color-teal-100); /* oklch(0.953 0.051 180.801) */"
            ],
            [
                "decoration-teal-200",
                "text-decoration-color: var(--color-teal-200); /* oklch(0.91 0.096 180.426) */"
            ],
            [
                "decoration-teal-300",
                "text-decoration-color: var(--color-teal-300); /* oklch(0.855 0.138 181.071) */"
            ],
            [
                "decoration-teal-400",
                "text-decoration-color: var(--color-teal-400); /* oklch(0.777 0.152 181.912) */"
            ],
            [
                "decoration-teal-500",
                "text-decoration-color: var(--color-teal-500); /* oklch(0.704 0.14 182.503) */"
            ],
            [
                "decoration-teal-600",
                "text-decoration-color: var(--color-teal-600); /* oklch(0.6 0.118 184.704) */"
            ],
            [
                "decoration-teal-700",
                "text-decoration-color: var(--color-teal-700); /* oklch(0.511 0.096 186.391) */"
            ],
            [
                "decoration-teal-800",
                "text-decoration-color: var(--color-teal-800); /* oklch(0.437 0.078 188.216) */"
            ],
            [
                "decoration-teal-900",
                "text-decoration-color: var(--color-teal-900); /* oklch(0.386 0.063 188.416) */"
            ],
            [
                "decoration-teal-950",
                "text-decoration-color: var(--color-teal-950); /* oklch(0.277 0.046 192.524) */"
            ],
            [
                "decoration-cyan-50",
                "text-decoration-color: var(--color-cyan-50); /* oklch(0.984 0.019 200.873) */"
            ],
            [
                "decoration-cyan-100",
                "text-decoration-color: var(--color-cyan-100); /* oklch(0.956 0.045 203.388) */"
            ],
            [
                "decoration-cyan-200",
                "text-decoration-color: var(--color-cyan-200); /* oklch(0.917 0.08 205.041) */"
            ],
            [
                "decoration-cyan-300",
                "text-decoration-color: var(--color-cyan-300); /* oklch(0.865 0.127 207.078) */"
            ],
            [
                "decoration-cyan-400",
                "text-decoration-color: var(--color-cyan-400); /* oklch(0.789 0.154 211.53) */"
            ],
            [
                "decoration-cyan-500",
                "text-decoration-color: var(--color-cyan-500); /* oklch(0.715 0.143 215.221) */"
            ],
            [
                "decoration-cyan-600",
                "text-decoration-color: var(--color-cyan-600); /* oklch(0.609 0.126 221.723) */"
            ],
            [
                "decoration-cyan-700",
                "text-decoration-color: var(--color-cyan-700); /* oklch(0.52 0.105 223.128) */"
            ],
            [
                "decoration-cyan-800",
                "text-decoration-color: var(--color-cyan-800); /* oklch(0.45 0.085 224.283) */"
            ],
            [
                "decoration-cyan-900",
                "text-decoration-color: var(--color-cyan-900); /* oklch(0.398 0.07 227.392) */"
            ],
            [
                "decoration-cyan-950",
                "text-decoration-color: var(--color-cyan-950); /* oklch(0.302 0.056 229.695) */"
            ],
            [
                "decoration-sky-50",
                "text-decoration-color: var(--color-sky-50); /* oklch(0.977 0.013 236.62) */"
            ],
            [
                "decoration-sky-100",
                "text-decoration-color: var(--color-sky-100); /* oklch(0.951 0.026 236.824) */"
            ],
            [
                "decoration-sky-200",
                "text-decoration-color: var(--color-sky-200); /* oklch(0.901 0.058 230.902) */"
            ],
            [
                "decoration-sky-300",
                "text-decoration-color: var(--color-sky-300); /* oklch(0.828 0.111 230.318) */"
            ],
            [
                "decoration-sky-400",
                "text-decoration-color: var(--color-sky-400); /* oklch(0.746 0.16 232.661) */"
            ],
            [
                "decoration-sky-500",
                "text-decoration-color: var(--color-sky-500); /* oklch(0.685 0.169 237.323) */"
            ],
            [
                "decoration-sky-600",
                "text-decoration-color: var(--color-sky-600); /* oklch(0.588 0.158 241.966) */"
            ],
            [
                "decoration-sky-700",
                "text-decoration-color: var(--color-sky-700); /* oklch(0.5 0.134 242.749) */"
            ],
            [
                "decoration-sky-800",
                "text-decoration-color: var(--color-sky-800); /* oklch(0.443 0.11 240.79) */"
            ],
            [
                "decoration-sky-900",
                "text-decoration-color: var(--color-sky-900); /* oklch(0.391 0.09 240.876) */"
            ],
            [
                "decoration-sky-950",
                "text-decoration-color: var(--color-sky-950); /* oklch(0.293 0.066 243.157) */"
            ],
            [
                "decoration-blue-50",
                "text-decoration-color: var(--color-blue-50); /* oklch(0.97 0.014 254.604) */"
            ],
            [
                "decoration-blue-100",
                "text-decoration-color: var(--color-blue-100); /* oklch(0.932 0.032 255.585) */"
            ],
            [
                "decoration-blue-200",
                "text-decoration-color: var(--color-blue-200); /* oklch(0.882 0.059 254.128) */"
            ],
            [
                "decoration-blue-300",
                "text-decoration-color: var(--color-blue-300); /* oklch(0.809 0.105 251.813) */"
            ],
            [
                "decoration-blue-400",
                "text-decoration-color: var(--color-blue-400); /* oklch(0.707 0.165 254.624) */"
            ],
            [
                "decoration-blue-500",
                "text-decoration-color: var(--color-blue-500); /* oklch(0.623 0.214 259.815) */"
            ],
            [
                "decoration-blue-600",
                "text-decoration-color: var(--color-blue-600); /* oklch(0.546 0.245 262.881) */"
            ],
            [
                "decoration-blue-700",
                "text-decoration-color: var(--color-blue-700); /* oklch(0.488 0.243 264.376) */"
            ],
            [
                "decoration-blue-800",
                "text-decoration-color: var(--color-blue-800); /* oklch(0.424 0.199 265.638) */"
            ],
            [
                "decoration-blue-900",
                "text-decoration-color: var(--color-blue-900); /* oklch(0.379 0.146 265.522) */"
            ],
            [
                "decoration-blue-950",
                "text-decoration-color: var(--color-blue-950); /* oklch(0.282 0.091 267.935) */"
            ],
            [
                "decoration-indigo-50",
                "text-decoration-color: var(--color-indigo-50); /* oklch(0.962 0.018 272.314) */"
            ],
            [
                "decoration-indigo-100",
                "text-decoration-color: var(--color-indigo-100); /* oklch(0.93 0.034 272.788) */"
            ],
            [
                "decoration-indigo-200",
                "text-decoration-color: var(--color-indigo-200); /* oklch(0.87 0.065 274.039) */"
            ],
            [
                "decoration-indigo-300",
                "text-decoration-color: var(--color-indigo-300); /* oklch(0.785 0.115 274.713) */"
            ],
            [
                "decoration-indigo-400",
                "text-decoration-color: var(--color-indigo-400); /* oklch(0.673 0.182 276.935) */"
            ],
            [
                "decoration-indigo-500",
                "text-decoration-color: var(--color-indigo-500); /* oklch(0.585 0.233 277.117) */"
            ],
            [
                "decoration-indigo-600",
                "text-decoration-color: var(--color-indigo-600); /* oklch(0.511 0.262 276.966) */"
            ],
            [
                "decoration-indigo-700",
                "text-decoration-color: var(--color-indigo-700); /* oklch(0.457 0.24 277.023) */"
            ],
            [
                "decoration-indigo-800",
                "text-decoration-color: var(--color-indigo-800); /* oklch(0.398 0.195 277.366) */"
            ],
            [
                "decoration-indigo-900",
                "text-decoration-color: var(--color-indigo-900); /* oklch(0.359 0.144 278.697) */"
            ],
            [
                "decoration-indigo-950",
                "text-decoration-color: var(--color-indigo-950); /* oklch(0.257 0.09 281.288) */"
            ],
            [
                "decoration-violet-50",
                "text-decoration-color: var(--color-violet-50); /* oklch(0.969 0.016 293.756) */"
            ],
            [
                "decoration-violet-100",
                "text-decoration-color: var(--color-violet-100); /* oklch(0.943 0.029 294.588) */"
            ],
            [
                "decoration-violet-200",
                "text-decoration-color: var(--color-violet-200); /* oklch(0.894 0.057 293.283) */"
            ],
            [
                "decoration-violet-300",
                "text-decoration-color: var(--color-violet-300); /* oklch(0.811 0.111 293.571) */"
            ],
            [
                "decoration-violet-400",
                "text-decoration-color: var(--color-violet-400); /* oklch(0.702 0.183 293.541) */"
            ],
            [
                "decoration-violet-500",
                "text-decoration-color: var(--color-violet-500); /* oklch(0.606 0.25 292.717) */"
            ],
            [
                "decoration-violet-600",
                "text-decoration-color: var(--color-violet-600); /* oklch(0.541 0.281 293.009) */"
            ],
            [
                "decoration-violet-700",
                "text-decoration-color: var(--color-violet-700); /* oklch(0.491 0.27 292.581) */"
            ],
            [
                "decoration-violet-800",
                "text-decoration-color: var(--color-violet-800); /* oklch(0.432 0.232 292.759) */"
            ],
            [
                "decoration-violet-900",
                "text-decoration-color: var(--color-violet-900); /* oklch(0.38 0.189 293.745) */"
            ],
            [
                "decoration-violet-950",
                "text-decoration-color: var(--color-violet-950); /* oklch(0.283 0.141 291.089) */"
            ],
            [
                "decoration-purple-50",
                "text-decoration-color: var(--color-purple-50); /* oklch(0.977 0.014 308.299) */"
            ],
            [
                "decoration-purple-100",
                "text-decoration-color: var(--color-purple-100); /* oklch(0.946 0.033 307.174) */"
            ],
            [
                "decoration-purple-200",
                "text-decoration-color: var(--color-purple-200); /* oklch(0.902 0.063 306.703) */"
            ],
            [
                "decoration-purple-300",
                "text-decoration-color: var(--color-purple-300); /* oklch(0.827 0.119 306.383) */"
            ],
            [
                "decoration-purple-400",
                "text-decoration-color: var(--color-purple-400); /* oklch(0.714 0.203 305.504) */"
            ],
            [
                "decoration-purple-500",
                "text-decoration-color: var(--color-purple-500); /* oklch(0.627 0.265 303.9) */"
            ],
            [
                "decoration-purple-600",
                "text-decoration-color: var(--color-purple-600); /* oklch(0.558 0.288 302.321) */"
            ],
            [
                "decoration-purple-700",
                "text-decoration-color: var(--color-purple-700); /* oklch(0.496 0.265 301.924) */"
            ],
            [
                "decoration-purple-800",
                "text-decoration-color: var(--color-purple-800); /* oklch(0.438 0.218 303.724) */"
            ],
            [
                "decoration-purple-900",
                "text-decoration-color: var(--color-purple-900); /* oklch(0.381 0.176 304.987) */"
            ],
            [
                "decoration-purple-950",
                "text-decoration-color: var(--color-purple-950); /* oklch(0.291 0.149 302.717) */"
            ],
            [
                "decoration-fuchsia-50",
                "text-decoration-color: var(--color-fuchsia-50); /* oklch(0.977 0.017 320.058) */"
            ],
            [
                "decoration-fuchsia-100",
                "text-decoration-color: var(--color-fuchsia-100); /* oklch(0.952 0.037 318.852) */"
            ],
            [
                "decoration-fuchsia-200",
                "text-decoration-color: var(--color-fuchsia-200); /* oklch(0.903 0.076 319.62) */"
            ],
            [
                "decoration-fuchsia-300",
                "text-decoration-color: var(--color-fuchsia-300); /* oklch(0.833 0.145 321.434) */"
            ],
            [
                "decoration-fuchsia-400",
                "text-decoration-color: var(--color-fuchsia-400); /* oklch(0.74 0.238 322.16) */"
            ],
            [
                "decoration-fuchsia-500",
                "text-decoration-color: var(--color-fuchsia-500); /* oklch(0.667 0.295 322.15) */"
            ],
            [
                "decoration-fuchsia-600",
                "text-decoration-color: var(--color-fuchsia-600); /* oklch(0.591 0.293 322.896) */"
            ],
            [
                "decoration-fuchsia-700",
                "text-decoration-color: var(--color-fuchsia-700); /* oklch(0.518 0.253 323.949) */"
            ],
            [
                "decoration-fuchsia-800",
                "text-decoration-color: var(--color-fuchsia-800); /* oklch(0.452 0.211 324.591) */"
            ],
            [
                "decoration-fuchsia-900",
                "text-decoration-color: var(--color-fuchsia-900); /* oklch(0.401 0.17 325.612) */"
            ],
            [
                "decoration-fuchsia-950",
                "text-decoration-color: var(--color-fuchsia-950); /* oklch(0.293 0.136 325.661) */"
            ],
            [
                "decoration-pink-50",
                "text-decoration-color: var(--color-pink-50); /* oklch(0.971 0.014 343.198) */"
            ],
            [
                "decoration-pink-100",
                "text-decoration-color: var(--color-pink-100); /* oklch(0.948 0.028 342.258) */"
            ],
            [
                "decoration-pink-200",
                "text-decoration-color: var(--color-pink-200); /* oklch(0.899 0.061 343.231) */"
            ],
            [
                "decoration-pink-300",
                "text-decoration-color: var(--color-pink-300); /* oklch(0.823 0.12 346.018) */"
            ],
            [
                "decoration-pink-400",
                "text-decoration-color: var(--color-pink-400); /* oklch(0.718 0.202 349.761) */"
            ],
            [
                "decoration-pink-500",
                "text-decoration-color: var(--color-pink-500); /* oklch(0.656 0.241 354.308) */"
            ],
            [
                "decoration-pink-600",
                "text-decoration-color: var(--color-pink-600); /* oklch(0.592 0.249 0.584) */"
            ],
            [
                "decoration-pink-700",
                "text-decoration-color: var(--color-pink-700); /* oklch(0.525 0.223 3.958) */"
            ],
            [
                "decoration-pink-800",
                "text-decoration-color: var(--color-pink-800); /* oklch(0.459 0.187 3.815) */"
            ],
            [
                "decoration-pink-900",
                "text-decoration-color: var(--color-pink-900); /* oklch(0.408 0.153 2.432) */"
            ],
            [
                "decoration-pink-950",
                "text-decoration-color: var(--color-pink-950); /* oklch(0.284 0.109 3.907) */"
            ],
            [
                "decoration-rose-50",
                "text-decoration-color: var(--color-rose-50); /* oklch(0.969 0.015 12.422) */"
            ],
            [
                "decoration-rose-100",
                "text-decoration-color: var(--color-rose-100); /* oklch(0.941 0.03 12.58) */"
            ],
            [
                "decoration-rose-200",
                "text-decoration-color: var(--color-rose-200); /* oklch(0.892 0.058 10.001) */"
            ],
            [
                "decoration-rose-300",
                "text-decoration-color: var(--color-rose-300); /* oklch(0.81 0.117 11.638) */"
            ],
            [
                "decoration-rose-400",
                "text-decoration-color: var(--color-rose-400); /* oklch(0.712 0.194 13.428) */"
            ],
            [
                "decoration-rose-500",
                "text-decoration-color: var(--color-rose-500); /* oklch(0.645 0.246 16.439) */"
            ],
            [
                "decoration-rose-600",
                "text-decoration-color: var(--color-rose-600); /* oklch(0.586 0.253 17.585) */"
            ],
            [
                "decoration-rose-700",
                "text-decoration-color: var(--color-rose-700); /* oklch(0.514 0.222 16.935) */"
            ],
            [
                "decoration-rose-800",
                "text-decoration-color: var(--color-rose-800); /* oklch(0.455 0.188 13.697) */"
            ],
            [
                "decoration-rose-900",
                "text-decoration-color: var(--color-rose-900); /* oklch(0.41 0.159 10.272) */"
            ],
            [
                "decoration-rose-950",
                "text-decoration-color: var(--color-rose-950); /* oklch(0.271 0.105 12.094) */"
            ],
            [
                "decoration-slate-50",
                "text-decoration-color: var(--color-slate-50); /* oklch(0.984 0.003 247.858) */"
            ],
            [
                "decoration-slate-100",
                "text-decoration-color: var(--color-slate-100); /* oklch(0.968 0.007 247.896) */"
            ],
            [
                "decoration-slate-200",
                "text-decoration-color: var(--color-slate-200); /* oklch(0.929 0.013 255.508) */"
            ],
            [
                "decoration-slate-300",
                "text-decoration-color: var(--color-slate-300); /* oklch(0.869 0.022 252.894) */"
            ],
            [
                "decoration-slate-400",
                "text-decoration-color: var(--color-slate-400); /* oklch(0.704 0.04 256.788) */"
            ],
            [
                "decoration-slate-500",
                "text-decoration-color: var(--color-slate-500); /* oklch(0.554 0.046 257.417) */"
            ],
            [
                "decoration-slate-600",
                "text-decoration-color: var(--color-slate-600); /* oklch(0.446 0.043 257.281) */"
            ],
            [
                "decoration-slate-700",
                "text-decoration-color: var(--color-slate-700); /* oklch(0.372 0.044 257.287) */"
            ],
            [
                "decoration-slate-800",
                "text-decoration-color: var(--color-slate-800); /* oklch(0.279 0.041 260.031) */"
            ],
            [
                "decoration-slate-900",
                "text-decoration-color: var(--color-slate-900); /* oklch(0.208 0.042 265.755) */"
            ],
            [
                "decoration-slate-950",
                "text-decoration-color: var(--color-slate-950); /* oklch(0.129 0.042 264.695) */"
            ],
            [
                "decoration-gray-50",
                "text-decoration-color: var(--color-gray-50); /* oklch(0.985 0.002 247.839) */"
            ],
            [
                "decoration-gray-100",
                "text-decoration-color: var(--color-gray-100); /* oklch(0.967 0.003 264.542) */"
            ],
            [
                "decoration-gray-200",
                "text-decoration-color: var(--color-gray-200); /* oklch(0.928 0.006 264.531) */"
            ],
            [
                "decoration-gray-300",
                "text-decoration-color: var(--color-gray-300); /* oklch(0.872 0.01 258.338) */"
            ],
            [
                "decoration-gray-400",
                "text-decoration-color: var(--color-gray-400); /* oklch(0.707 0.022 261.325) */"
            ],
            [
                "decoration-gray-500",
                "text-decoration-color: var(--color-gray-500); /* oklch(0.551 0.027 264.364) */"
            ],
            [
                "decoration-gray-600",
                "text-decoration-color: var(--color-gray-600); /* oklch(0.446 0.03 256.802) */"
            ],
            [
                "decoration-gray-700",
                "text-decoration-color: var(--color-gray-700); /* oklch(0.373 0.034 259.733) */"
            ],
            [
                "decoration-gray-800",
                "text-decoration-color: var(--color-gray-800); /* oklch(0.278 0.033 256.848) */"
            ],
            [
                "decoration-gray-900",
                "text-decoration-color: var(--color-gray-900); /* oklch(0.21 0.034 264.665) */"
            ],
            [
                "decoration-gray-950",
                "text-decoration-color: var(--color-gray-950); /* oklch(0.13 0.028 261.692) */"
            ],
            [
                "decoration-zinc-50",
                "text-decoration-color: var(--color-zinc-50); /* oklch(0.985 0 0) */"
            ],
            [
                "decoration-zinc-100",
                "text-decoration-color: var(--color-zinc-100); /* oklch(0.967 0.001 286.375) */"
            ],
            [
                "decoration-zinc-200",
                "text-decoration-color: var(--color-zinc-200); /* oklch(0.92 0.004 286.32) */"
            ],
            [
                "decoration-zinc-300",
                "text-decoration-color: var(--color-zinc-300); /* oklch(0.871 0.006 286.286) */"
            ],
            [
                "decoration-zinc-400",
                "text-decoration-color: var(--color-zinc-400); /* oklch(0.705 0.015 286.067) */"
            ],
            [
                "decoration-zinc-500",
                "text-decoration-color: var(--color-zinc-500); /* oklch(0.552 0.016 285.938) */"
            ],
            [
                "decoration-zinc-600",
                "text-decoration-color: var(--color-zinc-600); /* oklch(0.442 0.017 285.786) */"
            ],
            [
                "decoration-zinc-700",
                "text-decoration-color: var(--color-zinc-700); /* oklch(0.37 0.013 285.805) */"
            ],
            [
                "decoration-zinc-800",
                "text-decoration-color: var(--color-zinc-800); /* oklch(0.274 0.006 286.033) */"
            ],
            [
                "decoration-zinc-900",
                "text-decoration-color: var(--color-zinc-900); /* oklch(0.21 0.006 285.885) */"
            ],
            [
                "decoration-zinc-950",
                "text-decoration-color: var(--color-zinc-950); /* oklch(0.141 0.005 285.823) */"
            ],
            [
                "decoration-neutral-50",
                "text-decoration-color: var(--color-neutral-50); /* oklch(0.985 0 0) */"
            ],
            [
                "decoration-neutral-100",
                "text-decoration-color: var(--color-neutral-100); /* oklch(0.97 0 0) */"
            ],
            [
                "decoration-neutral-200",
                "text-decoration-color: var(--color-neutral-200); /* oklch(0.922 0 0) */"
            ],
            [
                "decoration-neutral-300",
                "text-decoration-color: var(--color-neutral-300); /* oklch(0.87 0 0) */"
            ],
            [
                "decoration-neutral-400",
                "text-decoration-color: var(--color-neutral-400); /* oklch(0.708 0 0) */"
            ],
            [
                "decoration-neutral-500",
                "text-decoration-color: var(--color-neutral-500); /* oklch(0.556 0 0) */"
            ],
            [
                "decoration-neutral-600",
                "text-decoration-color: var(--color-neutral-600); /* oklch(0.439 0 0) */"
            ],
            [
                "decoration-neutral-700",
                "text-decoration-color: var(--color-neutral-700); /* oklch(0.371 0 0) */"
            ],
            [
                "decoration-neutral-800",
                "text-decoration-color: var(--color-neutral-800); /* oklch(0.269 0 0) */"
            ],
            [
                "decoration-neutral-900",
                "text-decoration-color: var(--color-neutral-900); /* oklch(0.205 0 0) */"
            ],
            [
                "decoration-neutral-950",
                "text-decoration-color: var(--color-neutral-950); /* oklch(0.145 0 0) */"
            ],
            [
                "decoration-stone-50",
                "text-decoration-color: var(--color-stone-50); /* oklch(0.985 0.001 106.423) */"
            ],
            [
                "decoration-stone-100",
                "text-decoration-color: var(--color-stone-100); /* oklch(0.97 0.001 106.424) */"
            ],
            [
                "decoration-stone-200",
                "text-decoration-color: var(--color-stone-200); /* oklch(0.923 0.003 48.717) */"
            ],
            [
                "decoration-stone-300",
                "text-decoration-color: var(--color-stone-300); /* oklch(0.869 0.005 56.366) */"
            ],
            [
                "decoration-stone-400",
                "text-decoration-color: var(--color-stone-400); /* oklch(0.709 0.01 56.259) */"
            ],
            [
                "decoration-stone-500",
                "text-decoration-color: var(--color-stone-500); /* oklch(0.553 0.013 58.071) */"
            ],
            [
                "decoration-stone-600",
                "text-decoration-color: var(--color-stone-600); /* oklch(0.444 0.011 73.639) */"
            ],
            [
                "decoration-stone-700",
                "text-decoration-color: var(--color-stone-700); /* oklch(0.374 0.01 67.558) */"
            ],
            [
                "decoration-stone-800",
                "text-decoration-color: var(--color-stone-800); /* oklch(0.268 0.007 34.298) */"
            ],
            [
                "decoration-stone-900",
                "text-decoration-color: var(--color-stone-900); /* oklch(0.216 0.006 56.043) */"
            ],
            [
                "decoration-stone-950",
                "text-decoration-color: var(--color-stone-950); /* oklch(0.147 0.004 49.25) */"
            ],
            [
                "decoration-(<custom-property>)",
                "text-decoration-color: var(<custom-property>);"
            ],
            [
                "decoration-[<value>]",
                "text-decoration-color: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/text-decoration-style",
        "entry": "text-decoration-style",
        "description": "Utilities for controlling the style of text decorations.",
        "parameters": [
            [
                "decoration-solid",
                "text-decoration-style: solid;"
            ],
            [
                "decoration-double",
                "text-decoration-style: double;"
            ],
            [
                "decoration-dotted",
                "text-decoration-style: dotted;"
            ],
            [
                "decoration-dashed",
                "text-decoration-style: dashed;"
            ],
            [
                "decoration-wavy",
                "text-decoration-style: wavy;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/text-decoration-thickness",
        "entry": "text-decoration-thickness",
        "description": "Utilities for controlling the thickness of text decorations.",
        "parameters": [
            [
                "decoration-<number>",
                "text-decoration-thickness: <number>px;"
            ],
            [
                "decoration-from-font",
                "text-decoration-thickness: from-font;"
            ],
            [
                "decoration-auto",
                "text-decoration-thickness: auto;"
            ],
            [
                "decoration-(<custom-property>)",
                "text-decoration-thickness: var(<custom-property>);"
            ],
            [
                "decoration-[<value>]",
                "text-decoration-thickness: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/text-underline-offset",
        "entry": "text-underline-offset",
        "description": "Utilities for controlling the offset of a text underline.",
        "parameters": [
            [
                "underline-offset-<number>",
                "text-underline-offset: <number>px;"
            ],
            [
                "-underline-offset-<number>",
                "text-underline-offset: calc(<number>px * -1);"
            ],
            [
                "underline-offset-auto",
                "text-underline-offset: auto;"
            ],
            [
                "underline-offset-(<custom-property>)",
                "text-underline-offset: var(<custom-property>);"
            ],
            [
                "underline-offset-[<value>]",
                "text-underline-offset: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/text-transform",
        "entry": "text-transform",
        "description": "Utilities for controlling the capitalization of text.",
        "parameters": [
            [
                "uppercase",
                "text-transform: uppercase;"
            ],
            [
                "lowercase",
                "text-transform: lowercase;"
            ],
            [
                "capitalize",
                "text-transform: capitalize;"
            ],
            [
                "normal-case",
                "text-transform: none;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/text-overflow",
        "entry": "text-overflow",
        "description": "Utilities for controlling how the text of an element overflows.",
        "parameters": [
            [
                "truncate",
                "overflow: hidden;\ntext-overflow: ellipsis;\nwhite-space: nowrap;"
            ],
            [
                "text-ellipsis",
                "text-overflow: ellipsis;"
            ],
            [
                "text-clip",
                "text-overflow: clip;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/text-wrap",
        "entry": "text-wrap",
        "description": "Utilities for controlling how text wraps within an element.",
        "parameters": [
            [
                "text-wrap",
                "text-wrap: wrap;"
            ],
            [
                "text-nowrap",
                "text-wrap: nowrap;"
            ],
            [
                "text-balance",
                "text-wrap: balance;"
            ],
            [
                "text-pretty",
                "text-wrap: pretty;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/text-indent",
        "entry": "text-indent",
        "description": "Utilities for controlling the amount of empty space shown before text in a block.",
        "parameters": [
            [
                "indent-<number>",
                "text-indent: calc(var(--spacing) * <number>)"
            ],
            [
                "-indent-<number>",
                "text-indent: calc(var(--spacing) * -<number>)"
            ],
            [
                "indent-px",
                "text-indent: 1px;"
            ],
            [
                "-indent-px",
                "text-indent: -1px;"
            ],
            [
                "indent-(<custom-property>)",
                "text-indent: var(<custom-property>);"
            ],
            [
                "indent-[<value>]",
                "text-indent: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/vertical-align",
        "entry": "vertical-align",
        "description": "Utilities for controlling the vertical alignment of an inline or table-cell box.",
        "parameters": [
            [
                "align-baseline",
                "vertical-align: baseline;"
            ],
            [
                "align-top",
                "vertical-align: top;"
            ],
            [
                "align-middle",
                "vertical-align: middle;"
            ],
            [
                "align-bottom",
                "vertical-align: bottom;"
            ],
            [
                "align-text-top",
                "vertical-align: text-top;"
            ],
            [
                "align-text-bottom",
                "vertical-align: text-bottom;"
            ],
            [
                "align-sub",
                "vertical-align: sub;"
            ],
            [
                "align-super",
                "vertical-align: super;"
            ],
            [
                "align-(<custom-property>)",
                "vertical-align: var(<custom-property>);"
            ],
            [
                "align-[<value>]",
                "vertical-align: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/white-space",
        "entry": "white-space",
        "description": "Utilities for controlling an element's white-space property.",
        "parameters": [
            [
                "whitespace-normal",
                "white-space: normal;"
            ],
            [
                "whitespace-nowrap",
                "white-space: nowrap;"
            ],
            [
                "whitespace-pre",
                "white-space: pre;"
            ],
            [
                "whitespace-pre-line",
                "white-space: pre-line;"
            ],
            [
                "whitespace-pre-wrap",
                "white-space: pre-wrap;"
            ],
            [
                "whitespace-break-spaces",
                "white-space: break-spaces;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/word-break",
        "entry": "word-break",
        "description": "Utilities for controlling word breaks in an element.",
        "parameters": [
            [
                "break-normal",
                "overflow-wrap: normal;\nword-break: normal;"
            ],
            [
                "break-words",
                "overflow-wrap: break-word;"
            ],
            [
                "break-all",
                "word-break: break-all;"
            ],
            [
                "break-keep",
                "word-break: keep-all;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/hyphens",
        "entry": "hyphens",
        "description": "Utilities for controlling how words should be hyphenated.",
        "parameters": [
            [
                "hyphens-none",
                "hyphens: none;"
            ],
            [
                "hyphens-manual",
                "hyphens: manual;"
            ],
            [
                "hyphens-auto",
                "hyphens: auto;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/content",
        "entry": "content",
        "description": "Utilities for controlling the content of the before and after pseudo-elements.",
        "parameters": [
            [
                "content-[<value>]",
                "content: <value>;"
            ],
            [
                "content-(<custom-property>)",
                "content: var(<custom-property>);"
            ],
            [
                "content-none",
                "content: none;"
            ]
        ]
    }
]