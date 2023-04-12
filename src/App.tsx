import { useLayoutEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import CursorEffect from "./components/CursorEffect/CursorEffect";
import { SmoothScroll } from "./components/SmoothScroll/SmoothScroll";
import useMediaQuery from "./hooks/useMediaQuery";

/* For the media query priority thingy */
import "./App.css";
import "./components/Header/Header.css";
import "./pages/aboutme/AboutMePage.css";
import "./pages/work/WorkPage.css";
import "./responsive/highres.css";
import "./responsive/lowres.css";
import "./responsive/mobile.css";

function App() {
    const [currentTheme, setCurrentTheme] = useState<
        "dark" | "light" | "default"
    >("default");

    const isStuck = useRef(false);
    const cursorCords = useRef({
        cursorX: -100,
        cursorY: -100,
    });

    const isTouchDevice = useMediaQuery("(max-width: 768px)");

    //Theme logic
    useLayoutEffect(() => {
        let themeInMemory = localStorage.getItem("currentTheme");
        if (themeInMemory === "light") {
            setCurrentTheme("light");
            localStorage.setItem("currentTheme", "light");
        } else if (themeInMemory === "dark") {
            setCurrentTheme("dark");
            localStorage.setItem("currentTheme", "dark");
        } else if (themeInMemory === "default") {
            if (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                setCurrentTheme("dark");
                localStorage.setItem("currentTheme", "dark");
            } else {
                setCurrentTheme("light");
                localStorage.setItem("currentTheme", "light");
            }
        }
    }, []);

    return (
        <SmoothScroll>
            <div
                className={
                    currentTheme === "light"
                        ? "app light-theme"
                        : "app dark-theme"
                }
            >
                <ScrollToTop />
                <div className="app-wrapper">
                    <Header
                        cursorCords={cursorCords}
                        isStuck={isStuck}
                        currentTheme={currentTheme}
                        setCurrentTheme={setCurrentTheme}
                        isTouchDevice={isTouchDevice}
                    />
                    <Outlet context={{ isStuck, isTouchDevice }} />
                </div>
                {!isTouchDevice ? (
                    <CursorEffect isStuck={isStuck} cursorCords={cursorCords} />
                ) : null}
            </div>
        </SmoothScroll>
    );
}

export default App;
