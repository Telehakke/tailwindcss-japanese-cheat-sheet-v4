import { type JSX } from "react";
import { VersionEnum } from "../../../models/version";
import { Select, SelectItem, SelectItemAnchor } from "../../common/Select";

const V3 = "v3";
const V4 = "v4";
const GOTO_V3 = "https://telehakke.github.io/tailwindcss-japanese-cheat-sheet/";

const items: SelectItem[] = [
    { value: V4, label: VersionEnum.v4_2 },
    { value: V3, label: V3 },
];

export const VersionSelect = (): JSX.Element => {
    const handleValueChange = (value: string[]): void => {
        if (value[0] === V3) {
            window.location.href = GOTO_V3;
        }
    };

    return (
        <Select
            className="w-20"
            items={items}
            value={[V4]}
            onValueChange={handleValueChange}
        >
            <SelectItem item={items[0]} />
            <SelectItemAnchor item={items[1]} href={GOTO_V3} />
        </Select>
    );
};
