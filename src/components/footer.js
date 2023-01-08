import React from "react";
import { Link } from "gatsby";

export default function Footer() {

    return (
        <div className="fluid-container" style={{ borderTop: '1px solid var(--cs-secondary-bg-color)', marginTop: '200px' }}>
            <footer className="bd-footer cs-light-bg py-5 mt-5">
                <div className="container">

                    <div className="row">

                        <div className="col-sm-8 col-md-12 col-lg-3 mb-3 mx-auto px-5">
                            <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/"
                                aria-label="Bootstrap">
                                <a className="logo" href="../../index.html">G</a>
                                <span className="fs-5 mx-auto name ms-3" style={{color: 'var(--cs-secondary-font-color)'}}> Gagandeep Singh</span>
                            </a>
                            <ul className="list-unstyled small text-muted">
                                <li className="mb-2 about">Designed and built with all the love in the world by
                                    <span style={{ fontFamily: 'var(--cs-nb-text-font)', color: 'var(--cs-highlight-font-color)' }}> Gagandeep Singh</span>
                                </li>
                                <li className="mb-2 about">Template design idea credit <a href="https://brittanychiang.com/">brittanychiang.com</a></li>
                                <li className="mb-2 about">Currently v1.0.0</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 mb-3">

                            <div className="row">

                                <div className="col-6 mb-3 px-5">
                                    <h5>Links</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2"><Link to="/">Home</Link></li>
                                        <li className="mb-2"><Link to="/#about-me">About Me</Link></li>
                                        <li className="mb-2"><Link to="/#ed-ex">Education & Experience</Link></li>
                                        <li className="mb-2"><Link to="/projects">Projects</Link></li>
                                        <li className="mb-2"><Link to="/blog">Blog</Link></li>
                                        <li className="mb-2"><Link to="/Resume.docx">Resume</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6 mb-3 px-5">
                                    <h5>Guides</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2"><Link to="/blog/docker">Docker Compose</Link></li>
                                        <li className="mb-2"><Link to="#">Guide 2</Link></li>
                                        <li className="mb-2"><Link to="#">Guide 3</Link></li>
                                        <li className="mb-2"><Link to="#">Guide 4</Link></li>
                                        <li className="mb-2"><Link to="#">Guide 5</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="row">

                                <div className="col-6 mb-3 px-5">
                                    <h5>Projects</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2"><Link to="#">Project 1</Link></li>
                                        <li className="mb-2"><Link to="#">Project 2</Link></li>
                                        <li className="mb-2"><Link to="#">Project 3</Link></li>
                                        <li className="mb-2"><Link to="#">Project 4</Link></li>
                                        <li className="mb-2"><Link to="#">Project 5</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6 mb-3 px-5">
                                    <h5>Favorite</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-2"><Link to="#">Algorithms</Link></li>
                                        <li className="mb-2"><Link to="#">Java Streams</Link></li>
                                        <li className="mb-2"><Link to="#">Kafka</Link></li>
                                        <li className="mb-2"><Link to="#">Reactive</Link></li>
                                        <li className="mb-2"><Link to="#">Cheat Sheets</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}