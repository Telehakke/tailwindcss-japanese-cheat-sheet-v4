export const version = "v4.1";
export const documentations = [
    {
        "url": "https://tailwindcss.com/docs/flex-basis",
        "entry": "flex-basis",
        "description": "Utilities for controlling the initial size of flex items.",
        "parameters": [
            [
                "basis-<number>",
                "flex-basis: calc(var(--spacing) * <number>);"
            ],
            [
                "basis-<fraction>",
                "flex-basis: calc(<fraction> * 100%);"
            ],
            [
                "basis-full",
                "flex-basis: 100%;"
            ],
            [
                "basis-auto",
                "flex-basis: auto;"
            ],
            [
                "basis-3xs",
                "flex-basis: var(--container-3xs); /* 16rem (256px) */"
            ],
            [
                "basis-2xs",
                "flex-basis: var(--container-2xs); /* 18rem (288px) */"
            ],
            [
                "basis-xs",
                "flex-basis: var(--container-xs); /* 20rem (320px) */"
            ],
            [
                "basis-sm",
                "flex-basis: var(--container-sm); /* 24rem (384px) */"
            ],
            [
                "basis-md",
                "flex-basis: var(--container-md); /* 28rem (448px) */"
            ],
            [
                "basis-lg",
                "flex-basis: var(--container-lg); /* 32rem (512px) */"
            ],
            [
                "basis-xl",
                "flex-basis: var(--container-xl); /* 36rem (576px) */"
            ],
            [
                "basis-2xl",
                "flex-basis: var(--container-2xl); /* 42rem (672px) */"
            ],
            [
                "basis-3xl",
                "flex-basis: var(--container-3xl); /* 48rem (768px) */"
            ],
            [
                "basis-4xl",
                "flex-basis: var(--container-4xl); /* 56rem (896px) */"
            ],
            [
                "basis-5xl",
                "flex-basis: var(--container-5xl); /* 64rem (1024px) */"
            ],
            [
                "basis-6xl",
                "flex-basis: var(--container-6xl); /* 72rem (1152px) */"
            ],
            [
                "basis-7xl",
                "flex-basis: var(--container-7xl); /* 80rem (1280px) */"
            ],
            [
                "basis-(<custom-property>)",
                "flex-basis: var(<custom-property>);"
            ],
            [
                "basis-[<value>]",
                "flex-basis: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/flex-direction",
        "entry": "flex-direction",
        "description": "Utilities for controlling the direction of flex items.",
        "parameters": [
            [
                "flex-row",
                "flex-direction: row;"
            ],
            [
                "flex-row-reverse",
                "flex-direction: row-reverse;"
            ],
            [
                "flex-col",
                "flex-direction: column;"
            ],
            [
                "flex-col-reverse",
                "flex-direction: column-reverse;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/flex-wrap",
        "entry": "flex-wrap",
        "description": "Utilities for controlling how flex items wrap.",
        "parameters": [
            [
                "flex-nowrap",
                "flex-wrap: nowrap;"
            ],
            [
                "flex-wrap",
                "flex-wrap: wrap;"
            ],
            [
                "flex-wrap-reverse",
                "flex-wrap: wrap-reverse;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/flex",
        "entry": "flex",
        "description": "Utilities for controlling how flex items both grow and shrink.",
        "parameters": [
            [
                "flex-<number>",
                "flex: <number>;"
            ],
            [
                "flex-<fraction>",
                "flex: calc(<fraction> * 100%);"
            ],
            [
                "flex-auto",
                "flex: 1 1 auto;"
            ],
            [
                "flex-initial",
                "flex: 0 1 auto;"
            ],
            [
                "flex-none",
                "flex: none;"
            ],
            [
                "flex-(<custom-property>)",
                "flex: var(<custom-property>);"
            ],
            [
                "flex-[<value>]",
                "flex: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/flex-grow",
        "entry": "flex-grow",
        "description": "Utilities for controlling how flex items grow.",
        "parameters": [
            [
                "grow",
                "flex-grow: 1;"
            ],
            [
                "grow-<number>",
                "flex-grow: <number>;"
            ],
            [
                "grow-[<value>]",
                "flex-grow: <value>;"
            ],
            [
                "grow-(<custom-property>)",
                "flex-grow: var(<custom-property>);"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/flex-shrink",
        "entry": "flex-shrink",
        "description": "Utilities for controlling how flex items shrink.",
        "parameters": [
            [
                "shrink",
                "flex-shrink: 1;"
            ],
            [
                "shrink-<number>",
                "flex-shrink: <number>;"
            ],
            [
                "shrink-[<value>]",
                "flex-shrink: <value>;"
            ],
            [
                "shrink-(<custom-property>)",
                "flex-shrink: var(<custom-property>);"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/order",
        "entry": "order",
        "description": "Utilities for controlling the order of flex and grid items.",
        "parameters": [
            [
                "order-<number>",
                "order: <number>;"
            ],
            [
                "-order-<number>",
                "order: calc(<number> * -1);"
            ],
            [
                "order-first",
                "order: calc(-infinity);"
            ],
            [
                "order-last",
                "order: calc(infinity);"
            ],
            [
                "order-none",
                "order: 0;"
            ],
            [
                "order-(<custom-property>)",
                "order: var(<custom-property>);"
            ],
            [
                "order-[<value>]",
                "order: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/grid-template-columns",
        "entry": "grid-template-columns",
        "description": "Utilities for specifying the columns in a grid layout.",
        "parameters": [
            [
                "grid-cols-<number>",
                "grid-template-columns: repeat(<number>, minmax(0, 1fr));"
            ],
            [
                "grid-cols-none",
                "grid-template-columns: none;"
            ],
            [
                "grid-cols-subgrid",
                "grid-template-columns: subgrid;"
            ],
            [
                "grid-cols-[<value>]",
                "grid-template-columns: <value>;"
            ],
            [
                "grid-cols-(<custom-property>)",
                "grid-template-columns: var(<custom-property>);"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/grid-column",
        "entry": "grid-column",
        "description": "Utilities for controlling how elements are sized and placed across grid columns.",
        "parameters": [
            [
                "col-span-<number>",
                "grid-column: span <number> / span <number>;"
            ],
            [
                "col-span-full",
                "grid-column: 1 / -1;"
            ],
            [
                "col-span-(<custom-property>)",
                "grid-column: span var(<custom-property>) / span var(<custom-property>);"
            ],
            [
                "col-span-[<value>]",
                "grid-column: span <value> / span <value>;"
            ],
            [
                "col-start-<number>",
                "grid-column-start: <number>;"
            ],
            [
                "-col-start-<number>",
                "grid-column-start: calc(<number> * -1);"
            ],
            [
                "col-start-auto",
                "grid-column-start: auto;"
            ],
            [
                "col-start-(<custom-property>)",
                "grid-column-start: var(<custom-property>);"
            ],
            [
                "col-start-[<value>]",
                "grid-column-start: <value>;"
            ],
            [
                "col-end-<number>",
                "grid-column-end: <number>;"
            ],
            [
                "-col-end-<number>",
                "grid-column-end: calc(<number> * -1);"
            ],
            [
                "col-end-auto",
                "grid-column-end: auto;"
            ],
            [
                "col-end-(<custom-property>)",
                "grid-column-end: var(<custom-property>);"
            ],
            [
                "col-end-[<value>]",
                "grid-column-end: <value>;"
            ],
            [
                "col-auto",
                "grid-column: auto;"
            ],
            [
                "col-<number>",
                "grid-column: <number>;"
            ],
            [
                "-col-<number>",
                "grid-column: calc(<number> * -1);"
            ],
            [
                "col-(<custom-property>)",
                "grid-column: var(<custom-property>);"
            ],
            [
                "col-[<value>]",
                "grid-column: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/grid-template-rows",
        "entry": "grid-template-rows",
        "description": "Utilities for specifying the rows in a grid layout.",
        "parameters": [
            [
                "grid-rows-<number>",
                "grid-template-rows: repeat(<number>, minmax(0, 1fr));"
            ],
            [
                "grid-rows-none",
                "grid-template-rows: none;"
            ],
            [
                "grid-rows-subgrid",
                "grid-template-rows: subgrid;"
            ],
            [
                "grid-rows-[<value>]",
                "grid-template-rows: <value>;"
            ],
            [
                "grid-rows-(<custom-property>)",
                "grid-template-rows: var(<custom-property>);"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/grid-row",
        "entry": "grid-row",
        "description": "Utilities for controlling how elements are sized and placed across grid rows.",
        "parameters": [
            [
                "row-span-<number>",
                "grid-row: span <number> / span <number>;"
            ],
            [
                "row-span-full",
                "grid-row: 1 / -1;"
            ],
            [
                "row-span-(<custom-property>)",
                "grid-row: span var(<custom-property>) / span var(<custom-property>);"
            ],
            [
                "row-span-[<value>]",
                "grid-row: span <value> / span <value>;"
            ],
            [
                "row-start-<number>",
                "grid-row-start: <number>;"
            ],
            [
                "-row-start-<number>",
                "grid-row-start: calc(<number> * -1);"
            ],
            [
                "row-start-auto",
                "grid-row-start: auto;"
            ],
            [
                "row-start-(<custom-property>)",
                "grid-row-start: var(<custom-property>);"
            ],
            [
                "row-start-[<value>]",
                "grid-row-start: <value>;"
            ],
            [
                "row-end-<number>",
                "grid-row-end: <number>;"
            ],
            [
                "-row-end-<number>",
                "grid-row-end: calc(<number> * -1);"
            ],
            [
                "row-end-auto",
                "grid-row-end: auto;"
            ],
            [
                "row-end-(<custom-property>)",
                "grid-row-end: var(<custom-property>);"
            ],
            [
                "row-end-[<value>]",
                "grid-row-end: <value>;"
            ],
            [
                "row-auto",
                "grid-row: auto;"
            ],
            [
                "row-<number>",
                "grid-row: <number>;"
            ],
            [
                "-row-<number>",
                "grid-row: calc(<number> * -1);"
            ],
            [
                "row-(<custom-property>)",
                "grid-row: var(<custom-property>);"
            ],
            [
                "row-[<value>]",
                "grid-row: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/grid-auto-flow",
        "entry": "grid-auto-flow",
        "description": "Utilities for controlling how elements in a grid are auto-placed.",
        "parameters": [
            [
                "grid-flow-row",
                "grid-auto-flow: row;"
            ],
            [
                "grid-flow-col",
                "grid-auto-flow: column;"
            ],
            [
                "grid-flow-dense",
                "grid-auto-flow: dense;"
            ],
            [
                "grid-flow-row-dense",
                "grid-auto-flow: row dense;"
            ],
            [
                "grid-flow-col-dense",
                "grid-auto-flow: column dense;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/grid-auto-columns",
        "entry": "grid-auto-columns",
        "description": "Utilities for controlling the size of implicitly-created grid columns.",
        "parameters": [
            [
                "auto-cols-auto",
                "grid-auto-columns: auto;"
            ],
            [
                "auto-cols-min",
                "grid-auto-columns: min-content;"
            ],
            [
                "auto-cols-max",
                "grid-auto-columns: max-content;"
            ],
            [
                "auto-cols-fr",
                "grid-auto-columns: minmax(0, 1fr);"
            ],
            [
                "auto-cols-(<custom-property>)",
                "grid-auto-columns: var(<custom-property>);"
            ],
            [
                "auto-cols-[<value>]",
                "grid-auto-columns: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/grid-auto-rows",
        "entry": "grid-auto-rows",
        "description": "Utilities for controlling the size of implicitly-created grid rows.",
        "parameters": [
            [
                "auto-rows-auto",
                "grid-auto-rows: auto;"
            ],
            [
                "auto-rows-min",
                "grid-auto-rows: min-content;"
            ],
            [
                "auto-rows-max",
                "grid-auto-rows: max-content;"
            ],
            [
                "auto-rows-fr",
                "grid-auto-rows: minmax(0, 1fr);"
            ],
            [
                "auto-rows-(<custom-property>)",
                "grid-auto-rows: var(<custom-property>);"
            ],
            [
                "auto-rows-[<value>]",
                "grid-auto-rows: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/gap",
        "entry": "gap",
        "description": "Utilities for controlling gutters between grid and flexbox items.",
        "parameters": [
            [
                "gap-<number>",
                "gap: calc(var(--spacing) * <value>);"
            ],
            [
                "gap-(<custom-property>)",
                "gap: var(<custom-property>);"
            ],
            [
                "gap-[<value>]",
                "gap: <value>;"
            ],
            [
                "gap-x-<number>",
                "column-gap: calc(var(--spacing) * <value>);"
            ],
            [
                "gap-x-(<custom-property>)",
                "column-gap: var(<custom-property>);"
            ],
            [
                "gap-x-[<value>]",
                "column-gap: <value>;"
            ],
            [
                "gap-y-<number>",
                "row-gap: calc(var(--spacing) * <value>);"
            ],
            [
                "gap-y-(<custom-property>)",
                "row-gap: var(<custom-property>);"
            ],
            [
                "gap-y-[<value>]",
                "row-gap: <value>;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/justify-content",
        "entry": "justify-content",
        "description": "Utilities for controlling how flex and grid items are positioned along a container's main axis.",
        "parameters": [
            [
                "justify-start",
                "justify-content: flex-start;"
            ],
            [
                "justify-end",
                "justify-content: flex-end;"
            ],
            [
                "justify-end-safe",
                "justify-content: safe flex-end;"
            ],
            [
                "justify-center",
                "justify-content: center;"
            ],
            [
                "justify-center-safe",
                "justify-content: safe center;"
            ],
            [
                "justify-between",
                "justify-content: space-between;"
            ],
            [
                "justify-around",
                "justify-content: space-around;"
            ],
            [
                "justify-evenly",
                "justify-content: space-evenly;"
            ],
            [
                "justify-stretch",
                "justify-content: stretch;"
            ],
            [
                "justify-baseline",
                "justify-content: baseline;"
            ],
            [
                "justify-normal",
                "justify-content: normal;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/justify-items",
        "entry": "justify-items",
        "description": "Utilities for controlling how grid items are aligned along their inline axis.",
        "parameters": [
            [
                "justify-items-start",
                "justify-items: start;"
            ],
            [
                "justify-items-end",
                "justify-items: end;"
            ],
            [
                "justify-items-end-safe",
                "justify-items: safe end;"
            ],
            [
                "justify-items-center",
                "justify-items: center;"
            ],
            [
                "justify-items-center-safe",
                "justify-items: safe center;"
            ],
            [
                "justify-items-stretch",
                "justify-items: stretch;"
            ],
            [
                "justify-items-normal",
                "justify-items: normal;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/justify-self",
        "entry": "justify-self",
        "description": "Utilities for controlling how an individual grid item is aligned along its inline axis.",
        "parameters": [
            [
                "justify-self-auto",
                "justify-self: auto;"
            ],
            [
                "justify-self-start",
                "justify-self: start;"
            ],
            [
                "justify-self-center",
                "justify-self: center;"
            ],
            [
                "justify-self-center-safe",
                "justify-self: safe center;"
            ],
            [
                "justify-self-end",
                "justify-self: end;"
            ],
            [
                "justify-self-end-safe",
                "justify-self: safe end;"
            ],
            [
                "justify-self-stretch",
                "justify-self: stretch;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/align-content",
        "entry": "align-content",
        "description": "Utilities for controlling how rows are positioned in multi-row flex and grid containers.",
        "parameters": [
            [
                "content-normal",
                "align-content: normal;"
            ],
            [
                "content-center",
                "align-content: center;"
            ],
            [
                "content-start",
                "align-content: flex-start;"
            ],
            [
                "content-end",
                "align-content: flex-end;"
            ],
            [
                "content-between",
                "align-content: space-between;"
            ],
            [
                "content-around",
                "align-content: space-around;"
            ],
            [
                "content-evenly",
                "align-content: space-evenly;"
            ],
            [
                "content-baseline",
                "align-content: baseline;"
            ],
            [
                "content-stretch",
                "align-content: stretch;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/align-items",
        "entry": "align-items",
        "description": "Utilities for controlling how flex and grid items are positioned along a container's cross axis.",
        "parameters": [
            [
                "items-start",
                "align-items: flex-start;"
            ],
            [
                "items-end",
                "align-items: flex-end;"
            ],
            [
                "items-end-safe",
                "align-items: safe flex-end;"
            ],
            [
                "items-center",
                "align-items: center;"
            ],
            [
                "items-center-safe",
                "align-items: safe center;"
            ],
            [
                "items-baseline",
                "align-items: baseline;"
            ],
            [
                "items-baseline-last",
                "align-items: last baseline;"
            ],
            [
                "items-stretch",
                "align-items: stretch;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/align-self",
        "entry": "align-self",
        "description": "Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.",
        "parameters": [
            [
                "self-auto",
                "align-self: auto;"
            ],
            [
                "self-start",
                "align-self: flex-start;"
            ],
            [
                "self-end",
                "align-self: flex-end;"
            ],
            [
                "self-end-safe",
                "align-self: safe flex-end;"
            ],
            [
                "self-center",
                "align-self: center;"
            ],
            [
                "self-center-safe",
                "align-self: safe center;"
            ],
            [
                "self-stretch",
                "align-self: stretch;"
            ],
            [
                "self-baseline",
                "align-self: baseline;"
            ],
            [
                "self-baseline",
                "align-self: last baseline;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/place-content",
        "entry": "place-content",
        "description": "Utilities for controlling how content is justified and aligned at the same time.",
        "parameters": [
            [
                "place-content-center",
                "place-content: center;"
            ],
            [
                "place-content-center-safe",
                "place-content: safe center;"
            ],
            [
                "place-content-start",
                "place-content: start;"
            ],
            [
                "place-content-end",
                "place-content: end;"
            ],
            [
                "place-content-end-safe",
                "place-content: safe end;"
            ],
            [
                "place-content-between",
                "place-content: space-between;"
            ],
            [
                "place-content-around",
                "place-content: space-around;"
            ],
            [
                "place-content-evenly",
                "place-content: space-evenly;"
            ],
            [
                "place-content-baseline",
                "place-content: baseline;"
            ],
            [
                "place-content-stretch",
                "place-content: stretch;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/place-items",
        "entry": "place-items",
        "description": "Utilities for controlling how items are justified and aligned at the same time.",
        "parameters": [
            [
                "place-items-start",
                "place-items: start;"
            ],
            [
                "place-items-end",
                "place-items: end;"
            ],
            [
                "place-items-end-safe",
                "place-items: safe end;"
            ],
            [
                "place-items-center",
                "place-items: center;"
            ],
            [
                "place-items-center-safe",
                "place-items: safe center;"
            ],
            [
                "place-items-baseline",
                "place-items: baseline;"
            ],
            [
                "place-items-stretch",
                "place-items: stretch;"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/place-self",
        "entry": "place-self",
        "description": "Utilities for controlling how an individual item is justified and aligned at the same time.",
        "parameters": [
            [
                "place-self-auto",
                "place-self: auto;"
            ],
            [
                "place-self-start",
                "place-self: start;"
            ],
            [
                "place-self-end",
                "place-self: end;"
            ],
            [
                "place-self-end-safe",
                "place-self: safe end;"
            ],
            [
                "place-self-center",
                "place-self: center;"
            ],
            [
                "place-self-center-safe",
                "place-self: safe center;"
            ],
            [
                "place-self-stretch",
                "place-self: stretch;"
            ]
        ]
    }
]