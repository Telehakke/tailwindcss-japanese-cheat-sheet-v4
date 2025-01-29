export const BreakpointPrefixEnum = {
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
} as const;

export type BreakpointPrefix =
    (typeof BreakpointPrefixEnum)[keyof typeof BreakpointPrefixEnum];

/**
 * window.innerWidthを受け取り、TailwindCSSで使われるブレイクポイント接頭辞を返す
 */
export const getBreakpointPrefix = (innerWidth: number): BreakpointPrefix => {
    if (innerWidth >= 1280) return BreakpointPrefixEnum.xl;
    if (innerWidth >= 1024) return BreakpointPrefixEnum.lg;
    if (innerWidth >= 768) return BreakpointPrefixEnum.md;
    return BreakpointPrefixEnum.sm;
};
