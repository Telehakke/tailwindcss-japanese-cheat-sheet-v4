import { Collapsible as ArkCollapsible } from "@ark-ui/react/collapsible";
import type { JSX, ReactNode } from "react";

type CollapsibleProps = Partial<{
    /** クラス名 */
    className: string;
    /** 閉じている状態の高さ */
    collapsedHeight: number;
    /** 閉じられたときにコンテンツを消去するかどうか */
    unmountOnExit: boolean;
    /** ボタンのラベル */
    label: ReactNode;
    /** 初期展開状態（非制御） */
    defaultOpen: boolean;
    /** 展開状態 */
    open: boolean;
    /** 開閉するたびに呼び出される関数 */
    onOpenChange: (open: boolean) => void;
    /** コンテンツ */
    children: ReactNode;
}>;

export const Collapsible = (props: CollapsibleProps): JSX.Element => {
    return (
        <Root {...props}>
            <Content>{props.children}</Content>
        </Root>
    );
};

/* -------------------------------------------------------------------------- */

const Root = (
    props: Partial<{
        className: string;
        collapsedHeight: number;
        unmountOnExit: boolean;
        defaultOpen: boolean;
        open: boolean;
        onOpenChange: (open: boolean) => void;
        children: ReactNode;
    }>,
): JSX.Element => {
    return (
        <ArkCollapsible.Root
            className={props.className}
            collapsedHeight={props.collapsedHeight}
            unmountOnExit={props.unmountOnExit}
            defaultOpen={props.defaultOpen}
            open={props.open}
            onOpenChange={(v) => props.onOpenChange?.(v.open)}
        >
            {props.children}
        </ArkCollapsible.Root>
    );
};

/* -------------------------------------------------------------------------- */

const Content = (props: { children?: ReactNode }): JSX.Element => {
    const className = {
        _: "overflow-hidden",
        slideUpDown:
            "data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down",
    };

    return (
        <ArkCollapsible.Content className={Object.values(className).join(" ")}>
            {props.children}
        </ArkCollapsible.Content>
    );
};
