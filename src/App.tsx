import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";

function App() {
    const [currentTheme, setCurrentTheme] = useState<
        "dark" | "light" | "default"
    >("default");

    const [isStuck, setIsStuck] = useState(false);
    const [{ cursorX, cursorY }, setCursorCords] = useState({
        cursorX: -100,
        cursorY: -100,
    });
    const cursorInner = useRef<HTMLDivElement>(null);
    const cursorOuter = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const mouseMoveEventListener = (event: MouseEvent) => {
            setCursorCords({ cursorX: event.x, cursorY: event.y });
        };
        window.addEventListener("mousemove", mouseMoveEventListener);
        return () => {
            window.removeEventListener("mousemove", mouseMoveEventListener);
        };
    }, []);

    useLayoutEffect(() => {
        gsap.set(".cursor--inner", {
            x: cursorX,
            y: cursorY,
        });
        if (!isStuck) {
            gsap.set(".cursor--outer", {
                height: "40px",
                width: "40px",
            });
            if (cursorOuter.current) {
                gsap.to(".cursor--outer", {
                    x: cursorX - cursorOuter.current.clientHeight / 2 - 1,
                    y: cursorY - cursorOuter.current.clientWidth / 2 - 1,
                    duration: 0.16,
                });
            }
        }
    }, [cursorX, cursorY, isStuck]);

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
            <Header
                currentTheme={currentTheme}
                setCurrentTheme={setCurrentTheme}
            />
            <Outlet context={{ cursorX, cursorY, isStuck, setIsStuck }} />
            <div ref={cursorInner} className="cursor cursor--inner"></div>
            <div ref={cursorOuter} className="cursor cursor--outer"></div>
        </div>
    );
}

export default App;
