export const version = "v4.0";
export const documentations = [
    {
        "url": "https://tailwindcss.com/docs/border-collapse",
        "entry": "border-collapse",
        "description": "Utilities for controlling whether table borders should collapse or be separated.",
        "parameters": [
            [
                "border-collapse",
                "border-collapse: collapse;"
            ],
            [
                "border-separate",
                "border-collapse: separate;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/border-spacing",
        "entry": "border-spacing",
        "description": "Utilities for controlling the spacing between table borders.",
        "parameters": [
            [
                "border-spacing-<number>",
                "border-spacing: calc(var(--spacing) * <number>);"
            ],
            [
                "border-spacing-(<custom-property>)",
                "border-spacing: var(<custom-property>);"
            ],
            [
                "border-spacing-[<value>]",
                "border-spacing: <value>;"
            ],
            [
                "border-spacing-x-<number>",
                "border-spacing: calc(var(--spacing) * <number>) var(--tw-border-spacing-y);"
            ],
            [
                "border-spacing-x-(<custom-property>)",
                "border-spacing: var(<custom-property>) var(--tw-border-spacing-y);"
            ],
            [
                "border-spacing-x-[<value>]",
                "border-spacing: <value> var(--tw-border-spacing-y);"
            ],
            [
                "border-spacing-y-<number>",
                "border-spacing: var(--tw-border-spacing-x) calc(var(--spacing) * <number>);"
            ],
            [
                "border-spacing-y-(<custom-property>)",
                "border-spacing: var(--tw-border-spacing-x) var(<custom-property>);"
            ],
            [
                "border-spacing-y-[<value>]",
                "border-spacing: var(--tw-border-spacing-x) <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/table-layout",
        "entry": "table-layout",
        "description": "Utilities for controlling the table layout algorithm.",
        "parameters": [
            [
                "table-auto",
                "table-layout: auto;"
            ],
            [
                "table-fixed",
                "table-layout: fixed;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/caption-side",
        "entry": "caption-side",
        "description": "Utilities for controlling the alignment of a caption element inside of a table.",
        "parameters": [
            [
                "caption-top",
                "caption-side: top;"
            ],
            [
                "caption-bottom",
                "caption-side: bottom;"
            ]
        ]
    }
]