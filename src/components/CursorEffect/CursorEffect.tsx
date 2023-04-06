import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorEffect({
    isStuck,
    cursorCords,
}: {
    isStuck: React.MutableRefObject<boolean>;
    cursorCords: React.MutableRefObject<{
        cursorX: number;
        cursorY: number;
    }>;
}): JSX.Element {
    const cursorInner = useRef<HTMLDivElement>(null);
    const cursorOuter = useRef<HTMLDivElement>(null);
    const cursorAnimationId = useRef(0);

    useLayoutEffect(() => {
        const mouseMoveEventListener = (event: MouseEvent) => {
            cursorCords.current = { cursorX: event.x, cursorY: event.y };
        };
        window.addEventListener("mousemove", mouseMoveEventListener);
        return () => {
            window.removeEventListener("mousemove", mouseMoveEventListener);
        };
    }, []);

    function cursorAnimationLoop() {
        gsap.set(".cursor--inner", {
            x: cursorCords.current.cursorX,
            y: cursorCords.current.cursorY,
        });
        if (!isStuck.current) {
            gsap.to(".cursor--outer", {
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                duration: 0.4,
                ease: "power4.easeIn",
            });
            if (cursorOuter.current) {
                gsap.to(".cursor--outer", {
                    x: cursorCords.current.cursorX - 20,
                    y: cursorCords.current.cursorY - 20,
                    duration: 0.4,
                    ease: "power4.easeIn",
                });
            }
        }
        cursorAnimationId.current = requestAnimationFrame(cursorAnimationLoop);
    }

    useLayoutEffect(() => {
        cursorAnimationId.current = requestAnimationFrame(cursorAnimationLoop);
        return () => cancelAnimationFrame(cursorAnimationId.current);
    }, []);

    return (
        <>
            <div ref={cursorInner} className="cursor cursor--inner"></div>
            <div ref={cursorOuter} className="cursor cursor--outer"></div>
        </>
    );
}
