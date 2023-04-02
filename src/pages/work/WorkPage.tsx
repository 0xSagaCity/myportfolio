import { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import {
    cursorElementEnter,
    cursorElementLeave,
} from "../../utils/animationFunctions";
import { projectData } from "../../utils/projectData";
import "./WorkPage.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type Project = {
    title: string;
    description: string;
    linkSource: string;
    linkLive: string;
    thumbnail: string;
    icons: {
        name: string;
        link: string;
    }[];
};

function Project({ project, number }: { project: Project; number: number }) {
    const {
        isStuck,
    }: {
        isStuck: React.MutableRefObject<boolean>;
    } = useOutletContext();
    const projectLinksRef = useRef<HTMLDivElement>(null);

    return (
        <section className="project">
            <div className="project-title--container">
                <div className="project-title--wrapper">
                    <div className="project-index--container">
                        <span className="index-number">0{number}</span>
                        <span className="index-line"></span>
                        <span className="index-total">03</span>
                    </div>
                    <div className="work-overflow--wrapper">
                        <h3 className="project-title">{project.title}.</h3>
                    </div>
                </div>
                <div className="title-separator--component">
                    <div className="work-overflow--wrapper">
                        <div className="title-line"></div>
                    </div>
                    <div className="title-square"></div>
                </div>
            </div>
            <div className="project-body--container">
                <img
                    src={project.thumbnail}
                    alt="project thumnail"
                    className="project-thumbnail"
                />
                <div
                    className="project-links"
                    ref={projectLinksRef}
                    onMouseEnter={() =>
                        cursorElementEnter(isStuck, projectLinksRef, {
                            borderRadius: 0,
                        })
                    }
                    onMouseLeave={() => cursorElementLeave(isStuck)}
                >
                    <a
                        className="project-live--container"
                        href={project.linkLive}
                    >
                        <span>Live</span>
                        <span className="link-indicator">↗</span>
                    </a>
                    <a
                        className="project-code--container"
                        href={project.linkSource}
                    >
                        <span>Github</span>
                        <span className="link-indicator">↗</span>
                    </a>
                </div>
                <div className="work-overflow--wrapper">
                    <p className="project-description">{project.description}</p>
                </div>
                <div className="project-tech--container">
                    <span className="tech-subtitle">Technology used</span>
                    <div className="project-icons"></div>
                </div>
            </div>
        </section>
    );
}

export function WorkPage() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.set([".project-title", ".title-square"], {
            opacity: 0,
        });
        gsap.set(".project-title", { yPercent: 60 });
        gsap.set(".title-line", { xPercent: -100 });
        gsap.set(".title-square", { scale: 3 });
        gsap.set(".project-thumbnail", { autoAlpha: 0 });
        gsap.set(
            [
                ".project-thumbnail",
                ".project-links",
                ".project-description",
                ".project-tech--container",
            ],
            { y: 100 }
        );

        let allTitleEle = gsap.utils.toArray(".project-title");
        allTitleEle.forEach((title) => {
            gsap.to(title, {
                opacity: 1,
                yPercent: 0,
                duration: 0.6,
                scrollTrigger: {
                    trigger: title,
                    start: "top bottom-=100",
                    end: "bottom bottom",
                },
            });
        });

        let allLineComponents = gsap.utils.toArray(".title-line");
        allLineComponents.forEach((line) => {
            gsap.to(line, {
                xPercent: 0,
                duration: 1.8,
                ease: "power2.out",
                delay: 0.4,
                scrollTrigger: {
                    trigger: line,
                },
            });
        });

        let allSquares = gsap.utils.toArray(".title-square");
        allSquares.forEach((square) => {
            gsap.to(square, {
                opacity: 1,
                rotate: "180deg",
                ease: "power2.out",
                scale: 1,
                duration: 0.8,
                delay: 2.4,
                scrollTrigger: {
                    trigger: square,
                },
            });
        });

        let allThumbnails = gsap.utils.toArray(".project-thumbnail");
        allThumbnails.forEach((thumbnail) => {
            gsap.to(thumbnail, {
                autoAlpha: 1,
                duration: 1,
                y: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: thumbnail,
                },
            });
        });

        let allProjectLinks = gsap.utils.toArray(".project-links");
        allProjectLinks.forEach((links) => {
            gsap.to(links, {
                opacity: 1,
                duration: 1,
                y: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: links,
                },
            });
        });

        let allProjectDescriptions = gsap.utils.toArray(".project-description");
        allProjectDescriptions.forEach((desc) => {
            gsap.to(desc, {
                opacity: 1,
                duration: 1,
                y: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: desc,
                },
            });
        });

        let allProjectTech = gsap.utils.toArray(".project-tech--container");
        allProjectTech.forEach((tech) => {
            gsap.to(tech, {
                opacity: 1,
                duration: 1,
                y: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: tech,
                    start: "top bottom",
                    end: "bottom bottom",
                },
            });
        });
    }, []);

    return (
        <main className="work-container">
            {projectData.map((project, index) => {
                return (
                    <Project
                        project={project}
                        number={index + 1}
                        key={`Project-${index}`}
                    />
                );
            })}
        </main>
    );
}
