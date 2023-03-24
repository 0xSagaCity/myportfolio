import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import "./AboutMePage.css";
import gsap from "gsap";

export function AboutMePage() {
    const exploreButtonRef = useRef<HTMLButtonElement>(null);
    const {
        cursorX,
        cursorY,
        isStuck,
        setIsStuck,
    }: {
        cursorX: number;
        cursorY: number;
        isStuck: boolean;
        setIsStuck: React.Dispatch<React.SetStateAction<boolean>>;
    } = useOutletContext();

    function exploreButtonHoverEnter() {
        setIsStuck(true);
        const exploreButtonCords =
            exploreButtonRef.current?.getBoundingClientRect();
        gsap.to(".cursor--outer", {
            x: exploreButtonCords?.x,
            y: exploreButtonCords?.y,
            width: exploreButtonRef.current?.clientWidth,
            height: exploreButtonRef.current?.clientHeight,
            duration: 0.6,
        });
    }

    function exploreButtonHoverExit() {
        setIsStuck(false);
        gsap.to(".cursor--outer", {
            height: "30px",
            width: "30px",
            x: cursorX,
            y: cursorY,
            duration: 0.2,
        });
    }

    return (
        <main className="aboutme-container">
            <section className="aboutme-intro">
                <div className="aboutme-image-container">
                    <img
                        className="aboutme-image"
                        src="/self.png"
                        alt="Self potrait"
                    />
                </div>
                <h2 className="aboutme-title">
                    <span className="greeting-english">Hello </span>
                    <span className="greeting-hindi">/ नमस्ते</span>,
                    <div className="greeting-text">
                        My name is{" "}
                        <span className="greeting-emph">
                            Swaraj Pavitrakar.
                        </span>
                    </div>
                </h2>
                <p className="aboutme-subtitle">
                    I’m a <span className="subtitle-emp">frontend</span>{" "}
                    developer based in India.
                </p>
                <p className="aboutme-speak">
                    The web should feel magical because of its immense power. I
                    help do just that. I like to leverage my skillset for
                    building cohesive, efficient web apps that have
                    <span className="speak-emp"> beautiful </span>interfaces.
                </p>
            </section>
            <section className="aboutme-connect">
                <div className="connect-container">
                    <div className="connect-left">
                        <div className="connect-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam nisi augue, sagittis id nunc ac,
                            imperdiet efficitur ex. Nulla rhoncus turpis quis
                            molestie feugiat. Nunc et mauris neque. Vestibulum
                            convallis tempor lacus. Pellentesque cursus lectus
                            ut orci pretium ultrices sit amet non metus.
                            Suspendisse eros arcu, commodo in consequat vitae,
                            luctus sed sapien. Ut et dapibus eros. Integer
                            dictum nulla nisi, non porttitor ligula consequat
                            congue.
                        </div>
                        <div className="connect-links-container">
                            <span className="links-title">Connect with me</span>
                            <div className="links-container">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 21 20"
                                >
                                    <path
                                        className="github-icon social-icon"
                                        d="M10.42.076a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85v2.74c0 .27.16.59.67.5 3.97-1.34 6.83-5.08 6.83-9.5a9.999 9.999 0 0 0-10-10Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 21 17"
                                >
                                    <path
                                        className="gmail-icon social-icon"
                                        d="M18.5 14.834h-2v-8.75l-6 3.75-6-3.75v8.75h-2v-12h1.2l6.8 4.25 6.8-4.25h1.2m0-2h-16c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 19 19"
                                >
                                    <path
                                        className="linkedin-icon social-icon"
                                        d="M16.42.833a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h14Zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11H7.55v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79ZM4.3 6.394a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68Zm1.39 9.94v-8.37H2.92v8.37h2.77Z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 22 18"
                                >
                                    <path
                                        className="twitter-icon social-icon"
                                        d="M21.42 2.333c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05-.79-.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="connect-right">
                        <button
                            ref={exploreButtonRef}
                            className="explore-button cursor-hover-effect"
                            onMouseEnter={() => exploreButtonHoverEnter()}
                            onMouseLeave={() => exploreButtonHoverExit()}
                        >
                            <span className="explore-button-text">
                                Explore my
                            </span>
                            <span className="explore-button-emp">WORK</span>
                        </button>
                        <div className="date-hex-container">
                            <div className="date-line"></div>
                            <div className="date-container">
                                <div className="date-blip"></div>
                                <span className="date-text">28-11-2022</span>
                            </div>
                            <span className="hex-text">
                                77-68-6F-20-61-6D-20-69-3F
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
