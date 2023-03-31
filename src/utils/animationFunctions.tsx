import gsap from "gsap";

interface animStuckType extends React.MutableRefObject<boolean> {}
interface itemRefType
    extends React.RefObject<
        | HTMLButtonElement
        | HTMLDivElement
        | HTMLAnchorElement
        | HTMLImageElement
    > {}

export function cursorElementEnter(
    isStuck: animStuckType,
    themeToggleRef: itemRefType,
    customProperties: Object = {}
) {
    const toggleRect = themeToggleRef.current?.getBoundingClientRect();
    gsap.to(".cursor--outer", {
        height: toggleRect?.height,
        width: toggleRect?.width,
        x: toggleRect?.x,
        y: toggleRect?.y,
        duration: 0.8,
        ease: "power2.out",
        ...customProperties,
    });
    isStuck.current = true;
}

export function cursorElementLeave(
    isStuck: animStuckType,
    customProperties: Object = {}
) {
    isStuck.current = false;
    gsap.to(".cursor--outer", {
        height: "40px",
        width: "40px",
        duration: 0.4,
        ...customProperties,
    });
}
