import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "../Icons/Icons";
import "./Header.css";
import gsap from "gsap";

export function Header({
    cursorCords,
    isStuck,
    currentTheme,
    setCurrentTheme,
}: {
    cursorCords: React.MutableRefObject<{
        cursorX: number;
        cursorY: number;
    }>;
    isStuck: React.MutableRefObject<boolean>;
    currentTheme: "dark" | "light" | "default";
    setCurrentTheme: React.Dispatch<
        React.SetStateAction<"dark" | "light" | "default">
    >;
}): JSX.Element {
    const aboutMeRef = useRef<HTMLAnchorElement>(null);
    const workRef = useRef<HTMLAnchorElement>(null);

    function addNavigationEnter(isWork: boolean) {
        isStuck.current = true;
        const linkBoundingRect = isWork
            ? workRef.current?.getBoundingClientRect()
            : aboutMeRef.current?.getBoundingClientRect();
        gsap.to(".cursor--outer", {
            height: linkBoundingRect?.height,
            width: linkBoundingRect?.width,
            x: linkBoundingRect?.x,
            y: linkBoundingRect?.y,
            borderRadius: "100rem",
            duration: 0.4,
            ease: "power2.out",
        });
    }
    function addNavigationExit() {
        isStuck.current = false;
        gsap.set(".cursor--outer", {
            height: "40px",
            width: "40px",
        });
        gsap.to(".cursor--outer", {
            x: cursorCords.current.cursorX - 20,
            y: cursorCords.current.cursorY - 20,
            borderRadius: "50%",
            duration: 0.4,
            ease: "power2.out",
        });
    }
    return (
        <header>
            <span className="logo">sp.</span>
            <nav className="navigation">
                <NavLink
                    to="/"
                    ref={aboutMeRef}
                    onMouseEnter={() => {
                        addNavigationEnter(false);
                    }}
                    onMouseLeave={() => {
                        addNavigationExit();
                    }}
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "link-wrapper pending-link"
                            : isActive
                            ? "link-wrapper active-link"
                            : "link-wrapper inactive-link"
                    }
                >
                    <span className="link link-text">
                        about me
                        <span className="link-line"></span>
                    </span>
                    <div className="link-circle"></div>
                </NavLink>
                <NavLink
                    to="work"
                    ref={workRef}
                    onMouseEnter={() => {
                        addNavigationEnter(true);
                    }}
                    onMouseLeave={() => {
                        addNavigationExit();
                    }}
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "link-wrapper pending-link"
                            : isActive
                            ? "link-wrapper active-link"
                            : "link-wrapper inactive-link"
                    }
                >
                    <span className="link link-text">
                        work
                        <span className="link-line"></span>
                    </span>
                    <div className="link-circle"></div>
                </NavLink>
            </nav>
            <button
                onClick={() => {
                    setCurrentTheme(
                        currentTheme === "light" ? "dark" : "light"
                    );
                    localStorage.setItem(
                        "currentTheme",
                        currentTheme === "light" ? "dark" : "light"
                    );
                }}
                className="theme-toggle"
            >
                {currentTheme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
        </header>
    );
}
