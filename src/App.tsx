import { useLayoutEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import gsap from "gsap";

function App() {
    const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

    //TODO Cursor Effect (Might extract to a component later ??? )
    const [isStuck, setIsStuck] = useState(false);
    const [{ cursorX, cursorY }, setCursorCords] = useState({
        cursorX: -100,
        cursorY: -100,
    });
    const cursorInner = useRef<HTMLDivElement>(null);
    const cursorOuter = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.set(".cursor--inner", {
            x: cursorX,
            y: cursorY,
        });
        if (!isStuck) {
            gsap.set(".cursor--outer", {
                height: "30px",
                width: "30px",
            });
            if (cursorOuter.current !== null && cursorInner.current !== null) {
                gsap.to(".cursor--outer", {
                    x: cursorX - cursorOuter.current.clientHeight / 2,
                    y: cursorY - cursorOuter.current.clientWidth / 2,
                    duration: 0.3,
                });
            }
        }
    }, [cursorX, cursorY]);

    return (
        <div
            className={
                currentTheme === "light" ? "app light-theme" : "app dark-theme"
            }
            onMouseMove={(e) => {
                setCursorCords({ cursorX: e.clientX, cursorY: e.clientY });
            }}
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
