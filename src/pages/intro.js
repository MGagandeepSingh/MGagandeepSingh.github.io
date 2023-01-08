import { Link } from "gatsby";
import React from "react";

export default function Intro() {
    return (
        <section id="hey" class="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div class="ps-4">
                <div class="hey h4">Hey there, this is</div>
                <div class="name h1">Gagandeep Singh.</div>
                <div class="title h2">Full Stack Software Developer</div>
                <p class="about">
                    I'm a software engineer with 12 years of experience in software development, and I'm
                    currently
                    employed with <a href="https://maersk.com/" target="_blank">Maersk</a>.
                </p>
                <button type="button">
                    <Link to="/blog">
                        Visit my Tech Blog
                    </Link>
                </button>
            </div>
        </section>
    )
}
