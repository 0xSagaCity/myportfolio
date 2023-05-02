import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { SocialBar } from "../../components/SocialsBar/SocialsBar";
import {
    cursorElementEnter,
    cursorElementLeave,
} from "../../utils/animationFunctions";

export function AboutMePage() {
    const exploreButtonRef = useRef<HTMLButtonElement>(null);
    const {
        isStuck,
        isTouchDevice,
    }: {
        isStuck: React.MutableRefObject<boolean>;
        isTouchDevice: boolean;
    } = useOutletContext();
    const navigate = useNavigate();
    const socialIconsRef = useRef<HTMLDivElement>(null);

    function sendToWork() {
        isStuck.current = false;
        navigate("/work");
    }

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        gsap.fromTo(
            [".greeting-english", ".greeting-hindi", ".greeting-emph"],
            {
                opacity: 0,
                yPercent: 100,
            },
            {
                opacity: 1,
                yPercent: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out",
            }
        );

        gsap.fromTo(
            ".aboutme-image-container",
            {
                scale: 0.7,
            },
            {
                scale: 1,
                duration: 0.6,
                ease: "power2.out",
            }
        );

        gsap.set([".aboutme-intro", ".aboutme-title", ".aboutme-subtitle"], {
            y: 100,
        });

        gsap.set(
            [
                ".connect-text",
                ".connect-links--container",
                ".explore-button",
                ".date-hex-container",
            ],
            {
                y: 200,
                opacity: 0,
            }
        );

        gsap.to([".aboutme-intro", ".aboutme-title", ".aboutme-subtitle"], {
            y: 0,
            duration: 1,
            stagger: 0.08,
            ease: "power2.out",
        });

        gsap.to(
            [
                ".connect-text",
                ".connect-links--container",
                ".explore-button",
                ".date-hex-container",
            ],
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".connect-text",
                },
            }
        );
    }, []);

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
                    <span className="overflow-wrapper">
                        <span className="greeting-english">Hello</span>
                    </span>
                    <span className="overflow-wrapper">
                        <span className="greeting-hindi">/ नमस्ते</span>,
                    </span>
                    <div className="greeting-text">
                        <span className="overflow-wrapper">My name is</span>
                        <span className="overflow-wrapper">
                            <span className="greeting-emph">
                                Swaraj Pavitrakar.
                            </span>
                        </span>
                    </div>
                </h2>
                <p className="aboutme-subtitle">
                    I’m a <span className="subtitle-emph">frontend</span>{" "}
                    developer based in India.
                </p>
                <p className="aboutme-speak">
                    The web should feel magical because of its immense power. I
                    help do just that. I like to leverage my skillset for
                    building cohesive, efficient web apps that have
                    <span className="speak-emp"> beautiful</span> interfaces.
                </p>
            </section>
            <section className="aboutme-connect">
                <div className="connect-container">
                    <div className="connect-left">
                        <div className="connect-text">
                            I am a web developer with a strong foundation in web
                            technologies and a love for experimentation and
                            design. I like poking around in JavaScript and
                            React, along with HTML and CSS, I like to create
                            visually stunning and functional web applications
                            that engage users. My love for typography and motion
                            design hopefully is evident in my work, as I am also
                            learning Figma and animations with GSAP and Framer
                            motion. I am a always looking to improve my skills.
                        </div>
                        <div
                            className="connect-links--container"
                            onMouseEnter={() =>
                                cursorElementEnter(
                                    isStuck,
                                    socialIconsRef,
                                    {
                                        borderRadius: 0,
                                    },
                                    isTouchDevice
                                )
                            }
                            onMouseLeave={() => {
                                cursorElementLeave(
                                    isStuck,
                                    {
                                        borderRadius: "50%",
                                    },
                                    isTouchDevice
                                );
                            }}
                        >
                            <span className="links-title">Connect with me</span>
                            <div
                                ref={socialIconsRef}
                                className="links-container"
                            >
                                <SocialBar />
                            </div>
                        </div>
                    </div>
                    <div className="connect-right">
                        <button
                            ref={exploreButtonRef}
                            className="explore-button cursor-hover-effect"
                            onMouseEnter={() =>
                                cursorElementEnter(
                                    isStuck,
                                    exploreButtonRef,
                                    {},
                                    isTouchDevice
                                )
                            }
                            onMouseLeave={() =>
                                cursorElementLeave(isStuck, {}, isTouchDevice)
                            }
                            onClick={() => sendToWork()}
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
                                <span className="date-text">
                                    {new Date()
                                        .toLocaleDateString("en-GB")
                                        .replace(/\//g, "-")}
                                </span>
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
