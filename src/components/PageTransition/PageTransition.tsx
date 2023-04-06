import "./PageTransition.css";
import { SwitchTransition, Transition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";

export function PageTransition({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const pageRef = useRef<HTMLDivElement>(null);

    function entryAnimation() {
        gsap.to(".page-container", { opacity: 1, duration: 0.6 });
    }

    function exitAnimation() {
        gsap.to(".page-container", { opacity: 0, duration: 0.6 });
    }

    return (
        <SwitchTransition>
            <Transition
                nodeRef={pageRef}
                key={location.key}
                mountOnEnter={true}
                unmountOnExit={true}
                timeout={{
                    enter: 600,
                    exit: 600,
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
