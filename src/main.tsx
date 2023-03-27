import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { PageTransition } from "./components/PageTransition/PageTransition";
import "./index.css";
import { AboutMePage } from "./pages/aboutme/AboutMePage";
import { WorkPage } from "./pages/work/WorkPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "work",
                element: (
                    <PageTransition>
                        <WorkPage />
                    </PageTransition>
                ),
            },
            {
                path: "/",
                element: (
                    <PageTransition>
                        <AboutMePage />
                    </PageTransition>
                ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
