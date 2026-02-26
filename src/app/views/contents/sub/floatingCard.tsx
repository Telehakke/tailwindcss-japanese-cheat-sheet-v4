import type { JSX, ReactNode } from "react";

export const FloatingCard = (props: { children?: ReactNode }): JSX.Element => {
    return (
        <div className="overflow-hidden rounded-xl bg-white p-4 shadow-md dark:bg-neutral-800">
            {props.children}
        </div>
    );
};
