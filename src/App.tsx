import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

/* For the media query priority thingy */
import "./components/Header/Header.css";
import "./App.css";
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
    const cursorInner = useRef<HTMLDivElement>(null);
    const cursorOuter = useRef<HTMLDivElement>(null);
    const cursorAnimationId = useRef(0);

    useLayoutEffect(() => {
        const mouseMoveEventListener = (event: MouseEvent) => {
            cursorCords.current = { cursorX: event.x, cursorY: event.y };
        };
        window.addEventListener("mousemove", mouseMoveEventListener);
        return () => {
            window.removeEventListener("mousemove", mouseMoveEventListener);
        };
    }, []);

    function cursorAnimationLoop() {
        gsap.set(".cursor--inner", {
            x: cursorCords.current.cursorX,
            y: cursorCords.current.cursorY,
        });
        if (!isStuck.current) {
            gsap.to(".cursor--outer", {
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                duration: 0.4,
                ease: "power4.easeIn",
            });
            if (cursorOuter.current) {
                gsap.to(".cursor--outer", {
                    x: cursorCords.current.cursorX - 20,
                    y: cursorCords.current.cursorY - 20,
                    duration: 0.4,
                    ease: "power4.easeIn",
                });
            }
        }
        cursorAnimationId.current = requestAnimationFrame(cursorAnimationLoop);
    }

    useLayoutEffect(() => {
        cursorAnimationId.current = requestAnimationFrame(cursorAnimationLoop);
        return () => cancelAnimationFrame(cursorAnimationId.current);
    }, []);

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
        <div
            className={
                currentTheme === "light" ? "app light-theme" : "app dark-theme"
            }
        >
            <ScrollToTop />
            <div className="app-wrapper">
                <Header
                    cursorCords={cursorCords}
                    isStuck={isStuck}
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme}
                />
                <Outlet context={{ isStuck }} />
            </div>
            <div ref={cursorInner} className="cursor cursor--inner"></div>
            <div ref={cursorOuter} className="cursor cursor--outer"></div>
        </div>
    );
}

export default App;
