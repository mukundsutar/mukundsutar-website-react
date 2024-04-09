import React from "react";
import "../CSS/Header.css";
import { HashLink } from "react-router-hash-link";
import Resume from "../docs/Mukund_Sutar.pdf";
import { useMediaQuery } from "react-responsive";
import { useToggleStore } from "../store/storage";

export default function Header() {
    const { isToggled, toggle } = useToggleStore();

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
        const yOffset = -90;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 1224px)",
    });
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

    return (
        <>
            {isDesktopOrLaptop && (
                <div className="navbar-container" style={{zIndex:"10"}}>
                    <HashLink smooth to="#">
                        <div className="navbar-ele header-button">Home</div>
                    </HashLink>

                    <HashLink
                        smooth
                        to="#about"
                        scroll={(el) => scrollWithOffset(el)}
                    >
                        <div className="navbar-ele header-button">About Me</div>
                    </HashLink>

                    <HashLink
                        smooth
                        to="#project"
                        scroll={(el) => scrollWithOffset(el)}
                    >
                        <div className="navbar-ele header-button">Projects</div>
                    </HashLink>

                    <HashLink smooth to="#skill">
                        <div className="navbar-ele header-button">Skills</div>
                    </HashLink>

                    <div className="navbar-ele header-button">
                        <a
                            href={Resume}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </div>

                    <HashLink smooth to="#contact">
                        <div className="navbar-ele header-button">Contact</div>
                    </HashLink>
                </div>
            )}

            {isTabletOrMobile && (
                <div className="navbar-container" style={{zIndex:"10"}}>
                    <HashLink smooth to="#" onClick={toggle}>
                        <div className="navbar-ele header-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-list"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                        </div>
                    </HashLink>

                    <div className="navbar-ele navbar-name">Mukund Sutar</div>
                </div>
            )}
        </>
    );
}
