import { Portal } from "@ark-ui/react";
import {
    Select as ArkSelect,
    createListCollection,
} from "@ark-ui/react/select";
import { Check, ChevronDown } from "lucide-react";
import type { JSX, ReactNode } from "react";

export type SelectItem = {
    /** ユニークな値 */
    value: string;
    /** ラベル */
    label: ReactNode;
};

type SelectProps = Partial<{
    /** クラス名 */
    className: string;
    /** プレースホルダー */
    placeholder: string;
    /** 項目 */
    items: SelectItem[];
    /** 複数選択可能にするかどうか */
    multiple: boolean;
    /** 初期値（非制御） */
    defaultValue: string[];
    /** 値 */
    value: string[];
    /** 初期展開状態 */
    defaultOpen: boolean;
    /** 展開状態 */
    open: boolean;
    /** 値が変化するたびに呼び出される関数 */
    onValueChange: (value: string[]) => void;
    /** 開閉するたびに呼び出される関数 */
    onOpenChange: (open: boolean) => void;
    /** SelectItemを渡す */
    children?: ReactNode;
}>;

export const Select = (props: SelectProps): JSX.Element => {
    return (
        <Root {...props}>
            <Control {...props} />
            <Content {...props} />
            <ArkSelect.HiddenSelect />
        </Root>
    );
};

/* -------------------------------------------------------------------------- */

const Root = (
    props: Partial<{
        className: string;
        items: SelectItem[];
        multiple: boolean;
        defaultValue: string[];
        value: string[];
        defaultOpen: boolean;
        open: boolean;
        onValueChange: (value: string[]) => void;
        onOpenChange: (open: boolean) => void;
        children: ReactNode;
    }>,
): JSX.Element => {
    const collection = createListCollection({
        items: props.items ?? [],
    });

    return (
        <ArkSelect.Root
            className={props.className}
            collection={collection}
            multiple={props.multiple}
            defaultValue={props.defaultValue}
            value={props.value}
            defaultOpen={props.defaultOpen}
            open={props.open}
            onValueChange={(v) => props.onValueChange?.(v.value)}
            onOpenChange={(details) => props.onOpenChange?.(details.open)}
        >
            {props.children}
        </ArkSelect.Root>
    );
};

/* -------------------------------------------------------------------------- */

const Control = (props: { placeholder?: string }): JSX.Element => {
    return (
        <ArkSelect.Control className="flex items-center gap-2">
            <Trigger {...props} />
        </ArkSelect.Control>
    );
};

const Trigger = (props: { placeholder?: string }): JSX.Element => {
    const className = {
        _: "h-8 w-full overflow-hidden rounded-md px-2 text-sm transition",
        flex: "flex items-center justify-between gap-2",
        placeholderText:
            "data-placeholder-shown:text-neutral-500 dark:data-placeholder-shown:text-neutral-400",
        bg: "bg-white dark:bg-neutral-900",
        hoverBg: "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        activeBg: "active:bg-neutral-200 dark:active:bg-neutral-700",
        border: "border border-neutral-300 dark:border-neutral-600",
        focusBorder: "focus-visible:border-transparent",
        outline:
            "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
        stroke: "stroke-neutral-500 dark:stroke-neutral-400",
    };

    return (
        <ArkSelect.Trigger className={Object.values(className).join(" ")}>
            <ArkSelect.ValueText
                className="truncate"
                placeholder={props.placeholder}
            />
            <ArkSelect.Indicator>
                <ChevronDown className="size-4 stroke-inherit" />
            </ArkSelect.Indicator>
        </ArkSelect.Trigger>
    );
};

/* -------------------------------------------------------------------------- */

const Content = (props: { children?: ReactNode }): JSX.Element => {
    const className = {
        _: "z-9999 w-(--reference-width) rounded-md p-2 shadow-lg transition",
        bg: "bg-white dark:bg-neutral-900",
        border: "border border-neutral-300 dark:border-neutral-600",
        focusBorder: "focus-visible:border-transparent",
        outline:
            "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
        fadeInOut:
            "data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
    };

    return (
        <Portal>
            <ArkSelect.Positioner>
                <ArkSelect.Content
                    className={Object.values(className).join(" ")}
                >
                    <ArkSelect.ItemGroup>{props.children}</ArkSelect.ItemGroup>
                </ArkSelect.Content>
            </ArkSelect.Positioner>
        </Portal>
    );
};

export const SelectItem = (props: { item: SelectItem }): JSX.Element => {
    const className = {
        _: "cursor-default p-1 transition data-[state=unchecked]:pl-6",
        flex: "flex items-center gap-1",
        highlightedBg:
            "data-highlighted:bg-neutral-100 dark:data-highlighted:bg-neutral-800",
        stroke: "stroke-blue-500",
    };

    return (
        <ArkSelect.Item
            className={Object.values(className).join(" ")}
            item={props.item.value}
        >
            <ArkSelect.ItemIndicator>
                <Check className="size-4 stroke-inherit" />
            </ArkSelect.ItemIndicator>
            <ArkSelect.ItemText className="text-sm">
                {props.item.label}
            </ArkSelect.ItemText>
        </ArkSelect.Item>
    );
};

export const SelectItemAnchor = (props: {
    item: SelectItem;
    href: string;
}): JSX.Element => {
    const className = {
        _: "block p-1 pl-6 text-sm transition",
        highlightedBg:
            "data-highlighted:bg-neutral-100 dark:data-highlighted:bg-neutral-800",
    };

    return (
        <ArkSelect.Item
            className={Object.values(className).join(" ")}
            item={props.item.value}
            asChild
        >
            <a href={props.href} tabIndex={-1}>
                {props.item.label}
            </a>
        </ArkSelect.Item>
    );
};
