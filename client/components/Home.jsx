/* 
author: Saul Ramirez Barragan
course: COMP229 - Web Application Development
Date: June 02
Week2 Lab1
*/
//Home Page
import { Link } from 'react-router-dom';

export default function Home() {
    
    return (
            <>
            <section id = "home">
                {/* Welcome message */}
                <div class="welcome">
                    <h1>Welcome</h1>
                    <p>
                        This is my portfolio, here you will find evidence of projects that I've worked on.
                        This is an ongoing project, the design and format of this web page may change in the future.
                    </p>
                </div>
                {/* Mission message */}
                <div class="mission">
                    <h1>Mission</h1>
                    <p>
                        My mission is to contribute to the development of innovative hardware and software technologies.
                        I strive to expand my knowledge every day and apply my skills to create high-quality projects.
                    </p>
                </div>
                <div class = "home-buttons">
                    <Link to="/about">
                        <button>About Me</button>
                    </Link>
                    <Link to="/education">
                        <button>Education</button>
                    </Link>
                    <Link to="/project">
                        <button>Projects</button>
                    </Link>
                    <Link to="/services">
                        <button>Services</button>
                    </Link>
                    <Link to="/contact">
                        <button>Contact Me</button>
                    </Link>
                </div>
            </section>
            </>
        );
    }