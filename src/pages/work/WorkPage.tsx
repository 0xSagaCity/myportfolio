import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import {
    cursorElementEnter,
    cursorElementLeave,
} from "../../utils/animationFunctions";
import { projectData } from "../../utils/projectData";
import "./WorkPage.css";

type Project = {
    title: string;
    description: string;
    linkSource: string;
    linkLive: string;
    thumbnail: string;
    icons: {
        name: string;
        icon: JSX.Element;
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
                    <div className="project-icons">
                        {project.icons.map((iconInfo) => {
                            return (
                                <div
                                    key={`project-icon-${number}-${iconInfo.name}`}
                                    className="project-icon--wrapper"
                                    title={`${iconInfo.name} was used in this`}
                                >
                                    {iconInfo.icon}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export function WorkPage() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.set(
            [
                ".project-title",
                ".title-square",
                ".project-links",
                ".project-description",
                ".project-tech--container",
            ],
            {
                opacity: 0,
            }
        );
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
            { y: 60 }
        );

        let allTitleEle = gsap.utils.toArray(".project-title");
        allTitleEle.forEach((title) => {
            gsap.to(title, {
                opacity: 1,
                yPercent: 0,
                duration: 0.6,
                scrollTrigger: {
                    trigger: title,
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
                delay: 1.8,
                scrollTrigger: {
                    trigger: square,
                },
            });
        });

        let allThumbnails = gsap.utils.toArray(".project-thumbnail");
        allThumbnails.forEach((thumbnail) => {
            gsap.to(thumbnail, {
                autoAlpha: 1,
                duration: 0.6,
                y: 0,
                delay: 0.2,
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
                duration: 0.6,
                y: 0,
                delay: 0.3,
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
                duration: 0.6,
                y: 0,
                delay: 0.4,
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
                duration: 0.6,
                y: 0,
                delay: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: tech,
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
