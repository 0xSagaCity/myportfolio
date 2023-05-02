import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

export function SmoothScroll({
    children,
}: {
    children: JSX.Element[] | JSX.Element;
}): JSX.Element {
    const smoothScrollEffectId = useRef(0);
    const lenis = new Lenis({
        lerp: 0.08,
    });

    function raf(time: any) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    useEffect(() => {
        lenis.on("scroll", () => {});
        smoothScrollEffectId.current = requestAnimationFrame(raf);
        return () => cancelAnimationFrame(smoothScrollEffectId.current);
    }, []);
    return <div>{children}</div>;
}
