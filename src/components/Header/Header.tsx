import { NavLink } from "react-router-dom";
import "./Header.css";

export function Header({
    currentTheme,
    setCurrentTheme,
}: {
    currentTheme: "dark" | "light";
    setCurrentTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
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
                }}
                className="theme-toggle"
            >
                CO
            </button>
        </header>
    );
}
