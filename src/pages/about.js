import React from "react";
import { FaJava } from "@react-icons/all-files/fa/FaJava";
import { SiSpring } from "@react-icons/all-files/si/SiSpring";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiMicrosoftazure } from "@react-icons/all-files/si/SiMicrosoftazure";
import { SiGraphql } from "@react-icons/all-files/si/SiGraphql";
import { SiApachekafka } from "@react-icons/all-files/si/SiApachekafka";
import { SiKubernetes } from "@react-icons/all-files/si/SiKubernetes";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { SiTerraform } from "@react-icons/all-files/si/SiTerraform";
import { SiDocker } from "@react-icons/all-files/si/SiDocker";
import { SiPostgresql } from "@react-icons/all-files/si/SiPostgresql";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap";
import { SiGatsby } from "@react-icons/all-files/si/SiGatsby";
import { SiSass } from "@react-icons/all-files/si/SiSass";
import { SiAngular } from "@react-icons/all-files/si/SiAngular";
import { FaConnectdevelop as Microservices } from "@react-icons/all-files/fa/FaConnectdevelop";
import { VscJson } from "@react-icons/all-files/vsc/VscJson";

const iconSizing = {
    width: '40px'
}

export default function About() {

    return (
        <>
            <a id="about-me">&nbsp;</a>
            <section id="about" class="spacer-lg">
                <div class="container d-flex justify-content-center mt-5 p-5">
                    <div class="container">
                        <div class="heading">
                            <div>About Me</div>
                        </div>
                        <div class="row d-flex justify-content-center align-content-center mt-5">
                            <div id="img-col" class="col text-center">
                                <img src="/gagan.jpg" alt="Gagandeep Singh" />
                            </div>
                            <div class="col d-flex flex-column align-items-center">
                                <div class="about besides-column p-3">
                                    Hi, my name is <span
                                        style={{ fontFamily: 'var(--cs-nb-text-font)', color: 'var(--cs-highlight-font-color)' }}>Gagandeep Singh</span>.
                                    I'm a Java developer with great interpersonal skills,
                                    team player having around 12 years of experience in application development, testing
                                    and deployment.
                                </div>
                                <div class="about besides-column p-3">
                                    Developing applications is not just a job for me, it's my passion, and I derive joy from
                                    what I love doing. When I'm not working I love spending time watching movie or playing
                                    games.
                                </div>
                            </div>
                        </div>
                        <hr class="m-5" />
                        <div class="container"
                            style={{ fontFamily: 'var(--cs-logo-text-font)', color: 'var(--cs-primary-font-color)' }}>
                            <div class="px-1 mt-4 text-center">
                                List of technologies that I'm constantly using for application development.
                            </div>
                            <div class="row row-cols-2 row-cols-md-4 text-center my-5 mx-lg-5"
                                style={{ fontFamily: 'var(--cs-nb-text-font)', color: 'var(--cs-highlight-font-color)'}}>

                                <div class="tech mt-4">
                                    <FaJava style={iconSizing} />
                                    <div>
                                        <p>Java</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiSpring style={iconSizing} />
                                    <div>
                                        <p>Spring</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiMicrosoftazure style={iconSizing} />
                                    <div>
                                        <p>Azure</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <Microservices style={iconSizing}/>
                                    <div>
                                        <p>Microservices</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiApachekafka style={iconSizing} />
                                    <div>
                                        <p>Kafka</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiKubernetes style={iconSizing} />
                                    <div>
                                        <p>Kubernetes</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiDocker style={iconSizing} />
                                    <div>
                                        <p>Docker</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiMongodb style={iconSizing} />
                                    <div>
                                        <p>MongoDB</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiPostgresql style={iconSizing} />
                                    <div>
                                        <p>PostgreSQL</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiGraphql style={iconSizing} />
                                    <div>
                                        <p>GraphQL</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiTerraform style={iconSizing} />
                                    <div>
                                        <p>Terraform</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <VscJson style={iconSizing} />
                                    <div>
                                        <p>JSON</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <FaReact style={iconSizing} />
                                    <div>
                                        <p>React</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiAngular style={iconSizing} />
                                    <div>
                                        <p>Angular</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiHtml5 style={iconSizing} />
                                    <div>
                                        <p>HTML</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiCss3 style={iconSizing} />
                                    <div>
                                        <p>CSS</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiJavascript style={iconSizing} />
                                    <div>
                                        <p>Java Script</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiBootstrap style={iconSizing} />
                                    <div>
                                        <p>Bootstrap</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiSass style={iconSizing} />
                                    <div>
                                        <p>Sass</p>
                                    </div>
                                </div>

                                <div class="tech mt-4">
                                    <SiGatsby style={iconSizing} />
                                    <div>
                                        <p>Gatsby</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 