import { useRef } from "react";
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
                    <h3 className="project-title">{project.title}.</h3>
                </div>
                <div className="title-separator--component">
                    <div className="title-line"></div>
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
                <p className="project-description">{project.description}</p>
                <div className="project-tech--container">
                    <span className="tech-subtitle">Technology used</span>
                    <div className="project-icons"></div>
                </div>
            </div>
        </section>
    );
}

export function WorkPage({
    isStuck,
}: {
    isStuck: React.MutableRefObject<boolean>;
}) {
    return (
        <main className="work-container">
            {projectData.map((project, index) => {
                return (
                    <Project
                        project={project}
                        number={index + 1}
                        isStuck={isStuck}
                        key={`Project-${index}`}
                    />
                );
            })}
        </main>
    );
}
