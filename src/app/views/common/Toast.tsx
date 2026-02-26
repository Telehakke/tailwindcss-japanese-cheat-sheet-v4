import { Portal } from "@ark-ui/react";
import {
    Toast as ArkToast,
    Toaster,
    type CreateToasterReturn,
} from "@ark-ui/react/toast";
import { X } from "lucide-react";
import type { JSX, ReactNode } from "react";

type ToastProps = Partial<{
    /** createToaster()の戻り値を受け取る */
    toaster: CreateToasterReturn;
}>;

export const Toast = (props: ToastProps): JSX.Element => {
    return (
        <Root {...props}>
            <Title />
            <Description />
            <CloseTrigger />
        </Root>
    );
};

/* -------------------------------------------------------------------------- */

const Root = (
    props: Partial<{
        toaster: CreateToasterReturn;
        children?: ReactNode;
    }>,
): JSX.Element => {
    const className = {
        requiredStyles:
            "z-(--z-index) h-(--height) translate-x-(--x) translate-y-(--y) scale-(--scale) opacity-(--opacity) will-change-[translate,opacity,scale]",
        _: "group w-[calc(100%-var(--gap)*2)] rounded-lg p-4 shadow-lg transition duration-400",
        flex: "flex flex-col gap-1",
        position: "data-[align=center]:inset-x-0",
        desktopStyles: "sm:max-w-80 sm:data-[align=center]:inset-x-auto",
        bg: "bg-white dark:bg-neutral-900",
        errorBg: "data-[type=error]:bg-red-500",
        warningBg: "data-[type=warning]:bg-orange-500",
        successBg: "data-[type=success]:bg-green-500",
        border: "border border-transparent",
        infoBorder:
            "data-[type=info]:border-neutral-300 dark:data-[type=info]:border-neutral-600",
        focusBorder: "focus-visible:border-transparent",
        outline:
            "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
    };

    if (!props.toaster) return <></>;
    return (
        <Portal>
            <Toaster className="w-screen" toaster={props.toaster}>
                {() => (
                    <ArkToast.Root
                        className={Object.values(className).join(" ")}
                    >
                        {props.children}
                    </ArkToast.Root>
                )}
            </Toaster>
        </Portal>
    );
};

/* -------------------------------------------------------------------------- */

const Title = (): JSX.Element => {
    const className = {
        _: "font-bold",
        text: "text-neutral-100",
        infoText: "group-data-[type=info]:text-inherit",
    };

    return (
        <ArkToast.Context>
            {(context) => (
                <ArkToast.Title className={Object.values(className).join(" ")}>
                    {context.title}
                </ArkToast.Title>
            )}
        </ArkToast.Context>
    );
};

/* -------------------------------------------------------------------------- */

const Description = (): JSX.Element => {
    const className = {
        _: "text-sm",
        text: "text-neutral-100",
        infoText:
            "group-data-[type=info]:text-neutral-500 dark:group-data-[type=info]:text-neutral-400",
    };

    return (
        <ArkToast.Context>
            {(context) => (
                <ArkToast.Description
                    className={Object.values(className).join(" ")}
                >
                    {context.description}
                </ArkToast.Description>
            )}
        </ArkToast.Context>
    );
};

/* -------------------------------------------------------------------------- */

const CloseTrigger = (): JSX.Element => {
    const className = {
        _: "size-8 rounded-full transition",
        grid: "grid place-items-center",
        position: "absolute top-1 right-1",
        hoverBg: "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        HoverErrorBg: "hover:group-data-[type=error]:bg-red-600",
        HoverWarningBg: "hover:group-data-[type=warning]:bg-orange-600",
        HoverSuccessBg: "hover:group-data-[type=success]:bg-green-600",
        activeBg: "active:bg-neutral-200 dark:active:bg-neutral-700",
        activeErrorBg: "active:group-data-[type=error]:bg-red-700",
        activeWarningBg: "active:group-data-[type=warning]:bg-orange-700",
        activeSuccessBg: "active:group-data-[type=success]:bg-green-700",
        outline:
            "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
        stroke: "stroke-neutral-100",
        infoStroke:
            "group-data-[type=info]:stroke-neutral-500 dark:group-data-[type=info]:stroke-neutral-400",
    };

    return (
        <ArkToast.CloseTrigger className={Object.values(className).join(" ")}>
            <X className="size-4 stroke-inherit" />
        </ArkToast.CloseTrigger>
    );
};
