import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";

function App() {
    const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");
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
            <Outlet />
        </div>
    );
}

export default App;
