import { Portal } from "@ark-ui/react";
import { Popover as ArkPopover } from "@ark-ui/react/popover";
import type { PositioningOptions } from "@zag-js/popover";
import { EllipsisVertical, X } from "lucide-react";
import type { JSX, ReactNode } from "react";

type PopoverProps = Partial<{
    /** 表示位置 */
    positioning: PositioningOptions;
    /** 外側をクリックでダイアログを閉じるかどうか */
    closeOnInteractOutside: boolean;
    /** 初期展開状態（非制御） */
    defaultOpen: boolean;
    /** 展開状態 */
    open: boolean;
    /** 開閉するたびに呼び出される関数 */
    onOpenChange: (open: boolean) => void;
    /** コンテンツ */
    children: ReactNode;
}>;

export const Popover = (props: PopoverProps): JSX.Element => {
    return (
        <Root {...props}>
            <Trigger />
            <Content {...props}></Content>
        </Root>
    );
};

/* -------------------------------------------------------------------------- */

const Root = (
    props: Partial<{
        positioning: PositioningOptions;
        closeOnInteractOutside: boolean;
        defaultOpen: boolean;
        open: boolean;
        onOpenChange: (open: boolean) => void;
        children: ReactNode;
    }>,
): JSX.Element => {
    return (
        <ArkPopover.Root
            positioning={props.positioning}
            closeOnInteractOutside={props.closeOnInteractOutside}
            defaultOpen={props.defaultOpen}
            open={props.open}
            onOpenChange={(details) => props.onOpenChange?.(details.open)}
        >
            {props.children}
        </ArkPopover.Root>
    );
};

/* -------------------------------------------------------------------------- */

const Trigger = (): JSX.Element => {
    const className = {
        _: "size-8 rounded-full text-sm text-nowrap transition",
        flex: "flex justify-center items-center gap-1",
        position: "absolute top-4 right-4",
        hoverBg: "hover:bg-neutral-200 dark:hover:bg-neutral-700",
        activeBg: "active:bg-neutral-300 dark:active:bg-neutral-600",
        outline:
            "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
        stroke: "stroke-neutral-500 dark:stroke-neutral-400",
    };

    return (
        <ArkPopover.Trigger className={Object.values(className).join(" ")}>
            <EllipsisVertical className="stroke-inherit" />
        </ArkPopover.Trigger>
    );
};

/* -------------------------------------------------------------------------- */

const Content = (props: { children?: ReactNode }): JSX.Element => {
    const className = {
        _: "relative z-9999 rounded-lg p-4 pt-9 shadow-md transition",
        flex: "flex flex-col gap-1",
        bg: "bg-white dark:bg-neutral-900",
        border: "border border-neutral-300 dark:border-neutral-600",
        fadeInOut:
            "data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
    };

    return (
        <Portal>
            <ArkPopover.Positioner>
                <ArkPopover.Content
                    className={Object.values(className).join(" ")}
                >
                    {props.children}
                    <CloseTrigger />
                    <Arrow />
                </ArkPopover.Content>
            </ArkPopover.Positioner>
        </Portal>
    );
};

const CloseTrigger = (): JSX.Element => {
    const className = {
        _: "size-8 rounded-full transition",
        grid: "grid place-items-center",
        position: "absolute top-1 right-1",
        text: "text-neutral-500 dark:text-neutral-400",
        hoverBg: "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        activeBg: "active:bg-neutral-200 dark:active:bg-neutral-700",
        outline:
            "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
    };

    return (
        <ArkPopover.CloseTrigger className={Object.values(className).join(" ")}>
            <X className="size-4" />
        </ArkPopover.CloseTrigger>
    );
};

const Arrow = (): JSX.Element => {
    const className = {
        _: "[--arrow-background:var(--color-white)] dark:[--arrow-background:var(--color-neutral-900)]",
        border: "border-t border-l border-neutral-300 dark:border-neutral-600",
    };

    return (
        <ArkPopover.Arrow className="[--arrow-size:12px]">
            <ArkPopover.ArrowTip
                className={Object.values(className).join(" ")}
            />
        </ArkPopover.Arrow>
    );
};
