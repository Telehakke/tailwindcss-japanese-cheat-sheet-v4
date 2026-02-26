import { useSetAtom } from "jotai";
import { useEffect, type JSX } from "react";
import { breakpointAtom, toaster } from "./atoms";
import { BreakpointFactory } from "./models/breakpoint";
import { Toast } from "./views/common/Toast";
import { Contents } from "./views/contents/contents";
import { Controller } from "./views/controller/controller";
import { Header } from "./views/header/Header";
import { SideMenu } from "./views/SideMenu";

const App = (): JSX.Element => {
    const setBreakpoint = useSetAtom(breakpointAtom);

    useEffect(() => {
        const handleResize = (): void => {
            setBreakpoint(BreakpointFactory.create(window.innerWidth));
        };
        window.addEventListener("resize", handleResize);
        return (): void => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setBreakpoint]);

    return (
        <>
            <div className="p-4">
                <Header />
                <Controller />
                <Contents />
            </div>
            <SideMenu />
            <Toast toaster={toaster} />
        </>
    );
};

export default App;
