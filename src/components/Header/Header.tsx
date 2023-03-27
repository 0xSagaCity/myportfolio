import { NavLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "../Icons/Icons";
import "./Header.css";

export function Header({
    currentTheme,
    setCurrentTheme,
}: {
    currentTheme: "dark" | "light" | "default";
    setCurrentTheme: React.Dispatch<
        React.SetStateAction<"dark" | "light" | "default">
    >;
}): JSX.Element {
    return (
        <header>
            <span className="logo">sp.</span>
            <nav className="navigation">
                <NavLink
                    to="/"
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
