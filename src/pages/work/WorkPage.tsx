import "./WorkPage.css";

export function WorkPage() {
    return (
        <main className="work-container">
            <section className="project project-one">
                <div className="project-title--container">
                    <div className="project-title--wrapper">
                        <div className="project-index--container">
                            <span className="index-number">01</span>
                            <span className="index-line"></span>
                            <span className="index-total">03</span>
                        </div>
                        <h3 className="project-title">Froots Interface.</h3>
                    </div>
                    <div className="title-separator--component">
                        <div className="title-line"></div>
                        <div className="title-square"></div>
                    </div>
                </div>
                <div className="project-body--container">
                    <img
                        src="https://i.imgur.com/Cfix2HO.png"
                        alt="project-thumnail"
                        className="project-thumbnail"
                    />
                    <div className="project-links">
                        <div className="project-live--container">
                            <span>Live</span>
                            <span className="link-indicator">↗</span>
                        </div>
                        <div className="project-code--container">
                            <span>Github</span>
                            <span className="link-indicator">↗</span>
                        </div>
                    </div>
                    <p className="project-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
                        sit amet sapien fringilla, mattis ligula consectetur,
                        ultrices mauris. Maecenas vitae mattis tellus. Nullam
                        quis imperdiet augue.
                    </p>
                    <div className="project-tech--container">
                        <span className="tech-subtitle">Technology used</span>
                        <div className="project-icons"></div>
                    </div>
                </div>
            </section>
            <section className="project project-two">
                <div className="project-title--container">
                    <div className="project-title--wrapper">
                        <div className="project-index--container">
                            <span className="index-number">02</span>
                            <span className="index-line"></span>
                            <span className="index-total">03</span>
                        </div>
                        <h3 className="project-title">
                            Multiplayer Tic Tac Toe.
                        </h3>
                    </div>
                    <div className="title-separator--component">
                        <div className="title-line"></div>
                        <div className="title-square"></div>
                    </div>
                </div>
                <div className="project-body--container">
                    <img
                        src="https://i.imgur.com/rdgFfTq.png"
                        alt="project-thumnail"
                        className="project-thumbnail"
                    />
                    <div className="project-links">
                        <div className="project-live--container">
                            <span>Live</span>
                            <span className="link-indicator">↗</span>
                        </div>
                        <div className="project-code--container">
                            <span>Github</span>
                            <span className="link-indicator">↗</span>
                        </div>
                    </div>
                    <p className="project-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
                        sit amet sapien fringilla, mattis ligula consectetur,
                        ultrices mauris. Maecenas vitae mattis tellus. Nullam
                        quis imperdiet augue.
                    </p>
                    <div className="project-tech--container">
                        <span className="tech-subtitle">Technology used</span>
                        <div className="project-icons"></div>
                    </div>
                </div>
            </section>
            <section className="project project-three">
                <div className="project-title--container">
                    <div className="project-title--wrapper">
                        <div className="project-index--container">
                            <span className="index-number">03</span>
                            <span className="index-line"></span>
                            <span className="index-total">03</span>
                        </div>
                        <h3 className="project-title">Tea Manufactuer Page.</h3>
                    </div>
                    <div className="title-separator--component">
                        <div className="title-line"></div>
                        <div className="title-square"></div>
                    </div>
                </div>
                <div className="project-body--container">
                    <img
                        src="https://i.imgur.com/KiaPH95.png"
                        alt="project-thumnail"
                        className="project-thumbnail"
                    />
                    <div className="project-links">
                        <div className="project-live--container">
                            <span>Live</span>
                            <span className="link-indicator">↗</span>
                        </div>
                        <div className="project-code--container">
                            <span>Github</span>
                            <span className="link-indicator">↗</span>
                        </div>
                    </div>
                    <p className="project-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
                        sit amet sapien fringilla, mattis ligula consectetur,
                        ultrices mauris. Maecenas vitae mattis tellus. Nullam
                        quis imperdiet augue.
                    </p>
                    <div className="project-tech--container">
                        <span className="tech-subtitle">Technology used</span>
                        <div className="project-icons"></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
