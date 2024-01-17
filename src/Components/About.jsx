import React from "react";
import "../CSS/About.css";
import { useMediaQuery } from "react-responsive";

export default function About() {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 1224px)",
    });
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

    return (
        <>
            <div id="about" className="about-container">
                {isDesktopOrLaptop && (
                    <p>
                        Hello there!
                        <br />
                        <br />
                        I'm Mukund Sutar, a passionate Developer with a deep
                        love for DSA. When I'm not immersed in code, you'll
                        often find me exploring the captivating worlds of Sci-fi
                        movies, taking on the role of a part-time gamer, and
                        indulging in my other great love - all things
                        automotive.
                        <br />
                        <br />
                        Based in Pune, India, I'm a dedicated Software Engineer
                        on a mission to craft digital experiences that delight
                        and inspire.
                    </p>
                )}

                {isTabletOrMobile && (
                    <p>
                        Hello There! I'm Mukund Sutar, a devoted Developer with
                        a passion for DSA. When not coding, I enjoy Sci-fi
                        movies, gaming, and all things automotive. Based in
                        Pune, India, I'm a dedicated Software Engineer crafting
                        inspiring digital experiences.
                    </p>
                )}
            </div>
        </>
    );
}
