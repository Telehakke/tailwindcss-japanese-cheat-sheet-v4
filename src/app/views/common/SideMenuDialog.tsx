import { Portal } from "@ark-ui/react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { X } from "lucide-react";
import type { JSX, ReactNode } from "react";

type SideMenuDialogProps = Partial<{
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

export const SideMenuDialog = (props: SideMenuDialogProps): JSX.Element => {
    return (
        <Root {...props}>
            <Content {...props} />
        </Root>
    );
};

/* -------------------------------------------------------------------------- */

const Root = (
    props: Partial<{
        closeOnInteractOutside: boolean;
        defaultOpen: boolean;
        open: boolean;
        onOpenChange: (open: boolean) => void;
        children: ReactNode;
    }>,
): JSX.Element => (
    <ArkDialog.Root
        closeOnInteractOutside={props.closeOnInteractOutside}
        defaultOpen={props.defaultOpen}
        open={props.open}
        onOpenChange={(v) => props.onOpenChange?.(v.open)}
    >
        {props.children}
    </ArkDialog.Root>
);

/* -------------------------------------------------------------------------- */

const Content = (props: { children?: ReactNode }): JSX.Element => {
    const className = {
        _: "h-full min-w-80 border-r p-4 shadow-lg",
        bg: "bg-neutral-100 dark:bg-neutral-900",
        border: "border-neutral-300 dark:border-neutral-600",
        fadeInOut:
            "data-[state=open]:animate-fade-in-left data-[state=closed]:animate-fade-out-left",
    };

    return (
        <Portal>
            <ArkDialog.Backdrop className="fixed inset-0 z-9999 backdrop-blur-xs" />
            <ArkDialog.Positioner className="fixed inset-y-0 left-0 z-9999">
                <ArkDialog.Content
                    className={Object.values(className).join(" ")}
                >
                    <div className="flex h-full flex-col gap-1 overflow-auto">
                        <CloseTrigger />
                        {props.children}
                    </div>
                </ArkDialog.Content>
            </ArkDialog.Positioner>
        </Portal>
    );
};

const CloseTrigger = (): JSX.Element => {
    const className = {
        _: "mb-2 size-8 flex-none self-end rounded-full transition",
        grid: "grid place-items-center",
        hoverBg: "hover:bg-neutral-200 dark:hover:bg-neutral-800",
        activeBg: "active:bg-neutral-300 dark:active:bg-neutral-700",
        outline:
            "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
        stroke: "stroke-neutral-500 dark:stroke-neutral-400",
    };

    return (
        <ArkDialog.CloseTrigger className={Object.values(className).join(" ")}>
            <X className="size-4 stroke-inherit" />
        </ArkDialog.CloseTrigger>
    );
};
