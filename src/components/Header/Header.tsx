import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "../Icons/Icons";
import {
    cursorElementEnter,
    cursorElementLeave,
} from "../../utils/animationFunctions";

export function Header({
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
    const themeToggleRef = useRef<HTMLButtonElement>(null);

    return (
        <header>
            <span className="logo">sp.</span>
            <nav className="navigation">
                <NavLink
                    to="/"
                    ref={aboutMeRef}
                    onMouseEnter={() => {
                        cursorElementEnter(isStuck, aboutMeRef, {
                            borderRadius: "100rem",
                        });
                    }}
                    onMouseLeave={() => {
                        cursorElementLeave(isStuck, { borderRadius: "50%" });
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
                        cursorElementEnter(isStuck, workRef, {
                            borderRadius: "100rem",
                        });
                    }}
                    onMouseLeave={() => {
                        cursorElementLeave(isStuck, { borderRadius: "50%" });
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
                title={`Make theme ${
                    currentTheme === "light" ? "dark" : "light"
                }`}
                onClick={() => {
                    setCurrentTheme(
                        currentTheme === "light" ? "dark" : "light"
                    );
                    localStorage.setItem(
                        "currentTheme",
                        currentTheme === "light" ? "dark" : "light"
                    );
                }}
                ref={themeToggleRef}
                onMouseEnter={() => {
                    cursorElementEnter(isStuck, themeToggleRef);
                }}
                onMouseLeave={() => {
                    cursorElementLeave(isStuck);
                }}
                className="theme-toggle icon-container"
            >
                {currentTheme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
        </header>
    );
}
