import { ReactNode } from "react";
import { Bg } from "../../../common/classNames";

const FloatingCard = ({ children }: { children?: ReactNode }) => {
    return (
        <div className={`rounded-xl shadow-md ${Bg.neutral50_dark800}`}>
            {children}
        </div>
    );
};

export default FloatingCard;
