import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const timeOutId = setTimeout(() => window.scrollTo(0, 0), 600);
        return () => clearTimeout(timeOutId);
    }, [pathname]);

    return null;
}
