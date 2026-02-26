import { type JSX } from "react";
import { VersionSelect } from "./sub/VersionSelect";

export const Header = (): JSX.Element => {
    return (
        <div className="flex items-center gap-4">
            <h1 className="font-bold break-keep">
                Tailwind CSS 日本語チートシート v4
            </h1>
            <VersionSelect />
        </div>
    );
};
