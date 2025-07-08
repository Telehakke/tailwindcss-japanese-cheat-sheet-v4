import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { breakpointPrefixAtom } from "./appStates";
import { getBreakpointPrefix } from "./models/breakpointPrefix";
import Contents from "./views/contents/contents";
import CheatSheetController from "./views/controller/cheatSheetController";
import CopiedMessageBox from "./views/copiedMessageBox";
import Footer from "./views/footer";
import Header from "./views/header";
import Sidebar from "./views/sidebar";

const App = () => {
    const setBreakpointPrefix = useSetAtom(breakpointPrefixAtom);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setBreakpointPrefix(getBreakpointPrefix(window.innerWidth));
        });
    }, [setBreakpointPrefix]);

    return (
        <>
            <div className="space-y-4 p-4">
                <Header />
                <CheatSheetController />
                <Contents />
                <Footer />
            </div>
            <Sidebar />
            <CopiedMessageBox />
        </>
    );
};

export default App;
