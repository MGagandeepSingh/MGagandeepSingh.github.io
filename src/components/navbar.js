import { Link } from "gatsby";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg sticky-top px-md-5">
            <div className="container-fluid">
                <Link className="navbar-brand logo" to="/">G</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto d-flex justify-content-between">
                        <Link className="nav-link mx-lg-4 my-sm-4" to="/">Introduction</Link>
                        <Link className="nav-link mx-lg-4 my-sm-4" to="/#about-me">About Me</Link>
                        <Link className="nav-link mx-lg-4 my-sm-4" to="/#ed-ex">Education & Experience</Link>
                        <Link className="nav-link mx-lg-4 my-sm-4" to="/projects">Projects</Link>
                        <Link className="nav-link mx-lg-4 my-sm-4" to="/blog">Blog</Link>
                        <div className="nav-link my-sm-4">
                            <a className="button" href="/Resume.docx" target="_blank" rel="noopener noreferrer">Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}