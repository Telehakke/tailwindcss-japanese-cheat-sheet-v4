import { useSetAtom } from "jotai";
import { useEffect, type JSX } from "react";
import { breakpointAtom, toaster } from "./presentation/atoms";
import { Body } from "./presentation/react/body/Body";
import { Toast } from "./presentation/react/common/Toast";
import { Controller } from "./presentation/react/controller/Controller";
import { Header } from "./presentation/react/header/Header";
import { SideMenu } from "./presentation/react/SideMenu";
import { createBreakpoint } from "./presentation/utils/breakpoint";

export const App = (): JSX.Element => {
  const setBreakpoint = useSetAtom(breakpointAtom);

  useEffect(() => {
    // ブラウザのリサイズでブレイクポイントを変更
    const callback = (): void => {
      setBreakpoint(createBreakpoint(window.innerWidth));
    };
    window.addEventListener("resize", callback);
    return (): void => window.removeEventListener("resize", callback);
  }, [setBreakpoint]);

  return (
    <>
      <div className="p-4">
        <Header />
        <Controller />
        <Body />
      </div>
      <SideMenu />
      <Toast toaster={toaster} />
    </>
  );
};
