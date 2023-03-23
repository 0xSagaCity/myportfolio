import { useState } from "react";
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
        </div>
    );
}

export default App;
