export function SocialBar() {
    const allSocialIcons = [
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="social-icon"
            viewBox="0 0 21 20"
        >
            <path
                className="github-icon social-icon-path"
                d="M10.42.076a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85v2.74c0 .27.16.59.67.5 3.97-1.34 6.83-5.08 6.83-9.5a9.999 9.999 0 0 0-10-10Z"
            />
        </svg>,
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="social-icon"
            viewBox="0 0 21 17"
        >
            <path
                className="gmail-icon social-icon-path"
                d="M18.5 14.834h-2v-8.75l-6 3.75-6-3.75v8.75h-2v-12h1.2l6.8 4.25 6.8-4.25h1.2m0-2h-16c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Z"
            />
        </svg>,
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="social-icon"
            viewBox="0 0 19 19"
        >
            <path
                className="linkedin-icon social-icon-path"
                d="M16.42.833a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h14Zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11H7.55v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79ZM4.3 6.394a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68Zm1.39 9.94v-8.37H2.92v8.37h2.77Z"
            />
        </svg>,
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="social-icon"
            viewBox="0 0 22 18"
        >
            <path
                className="twitter-icon social-icon-path"
                d="M21.42 2.333c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05-.79-.86-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23Z"
            />
        </svg>,
    ];

    const iconTitles = [
        "Github Link",
        "Gmail Icon",
        "LinkedIn Icon",
        "Twitter Icon",
    ];

    return (
        <div className="social-icons-inner">
            {allSocialIcons.map((icon, index) => {
                return (
                    <div
                        key={`social-icon-${index}`}
                        title={iconTitles[index]}
                        className="social-icon-wrapper"
                    >
                        {icon}
                    </div>
                );
            })}
        </div>
    );
}
