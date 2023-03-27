import "./PageTransition.css";
import { SwitchTransition, Transition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";

export function PageTransition({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const pageRef = useRef<HTMLDivElement>(null);

    function entryAnimation() {
        gsap.to(".page-container", { opacity: 1, duration: 1 });
    }

    function exitAnimation() {
        gsap.to(".page-container", { opacity: 0, duration: 1 });
    }

    return (
        <SwitchTransition>
            <Transition
                nodeRef={pageRef}
                key={location.key}
                appear={true}
                mountOnEnter={true}
                unmountOnExit={true}
                timeout={{
                    enter: 1000,
                    exit: 1000,
                }}
                onEnter={entryAnimation}
                onExiting={exitAnimation}
            >
                <div className="page-container" ref={pageRef}>
                    {children}
                </div>
            </Transition>
        </SwitchTransition>
    );
}
