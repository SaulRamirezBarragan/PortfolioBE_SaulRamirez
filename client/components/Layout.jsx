/* 
author: Saul Ramirez Barragan
course: COMP229 - Web Application Development
Date: June 02
Week2 Lab1
*/
import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
    return (       
        <div>
            <h1 class = "mt-0">My Portfolio</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About Me</Link> |
<Link to="/education"> Education</Link> | <Link to="/project">Projects</Link> | 
<Link to="/services"> Services</Link> | <Link to="/contact">Contact</Link>
            </nav>
            <hr />
        </div>
    );
}