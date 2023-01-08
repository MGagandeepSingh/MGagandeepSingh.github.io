import React from "react";

import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap";
import { FaShip } from "@react-icons/all-files/fa/FaShip";
import { GiTakeMyMoney } from "@react-icons/all-files/gi/GiTakeMyMoney";
import { RiBankFill } from "@react-icons/all-files/ri/RiBankFill";
import { FaMobile } from "@react-icons/all-files/fa/FaMobile";

export default function Edex() {
    return (
        <>
            <a id="ed-ex">&nbsp;</a>
            <section class="spacer-lg">
                <div class="container d-flex justify-content-center mt-5 p-5">
                    <div class="container">
                        <div class="heading">
                            <div>Education & Experience</div>
                        </div>
                        <div class="container"
                            style={{ fontFamily: 'var(--cs-logo-text-font)', color: 'var(--cs-primary-font-color)' }}>
                            <div class="mt-5">
                                <div class="mt-3 sub-head">Education</div>
                                <div class="p-2 mt-3">
                                    <div>
                                        I hold a master's degree in computer application from Guru Gobind Singh Indraprastha
                                        University.
                                    </div>
                                    <div class="row row-cols-2 text-center mt-4">
                                        <div class="mt-2 ico">
                                            <FaGraduationCap className="p-lg-5 p-sm-2" style={{ padding: '15px' }} />
                                            <div class="shrink">
                                                <p>MCA</p>
                                                <p>2007 - 2010</p>
                                                <p>GGSIPU</p>
                                            </div>
                                        </div>

                                        <div class="mt-2 ico">

                                            <FaGraduationCap className="p-lg-5 p-sm-2" style={{ padding: '15px' }} />
                                            <div class="shrink">
                                                <p>BCA</p>
                                                <p>2004 - 2007</p>
                                                <p>GGSIPU</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-5">
                                <div class="mt-3 sub-head">Experience</div>
                                <div class="p-2 mt-3">
                                    <div>
                                        I'm very fortunate that I got the opportunity to work with the following organisations.
                                    </div>
                                    <div class="row justify-content-evenly mt-3">

                                        <div class="col-md-6 ico">
                                            <div class="card my-3">
                                                <FaShip className="ms-3 mt-3" style={{ width: '40px' }} />
                                                <div class="card-body">
                                                    <h5 class="card-title">Maersk</h5>
                                                    <div class="card-subtitle text-muted">Sr. Software Engineer</div>
                                                    <div class="card-subtitle mb-2 text-muted">2021 - Current</div>
                                                    <p class="card-text">
                                                        Managing customer journey for handling orders by gathering the shipping
                                                        instructions, validating and processing bill of lading.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 ico">
                                            <div class="card my-3">
                                                <GiTakeMyMoney className="ms-3 mt-3" style={{ width: '40px' }} />
                                                <div class="card-body">
                                                    <h5 class="card-title">BlackRock</h5>
                                                    <div class="card-subtitle text-muted">Analyst</div>
                                                    <div class="card-subtitle mb-2 text-muted">2017 - 2021</div>
                                                    <p class="card-text">
                                                        Developed Swing automation framework; enables the developers and testers
                                                        to test
                                                        the Swing front-end using the framework.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 ico">
                                            <div class="card my-3">
                                                <RiBankFill className="ms-3 mt-3" style={{ width: '40px' }} />
                                                <div class="card-body">
                                                    <h5 class="card-title">RBS</h5>
                                                    <div class="card-subtitle text-muted">Software Developer</div>
                                                    <div class="card-subtitle mb-2 text-muted">2014 - 2016</div>
                                                    <p class="card-text">
                                                        Venture was a reporting tool used to get positions. Flow consists of
                                                        upstream
                                                        raw data, refined and served to users.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 ico">
                                            <div class="card my-3">
                                                <FaMobile className="ms-3 mt-3" style={{ width: '40px' }} />
                                                <div class="card-body">
                                                    <h5 class="card-title">Amdocs</h5>
                                                    <div class="card-subtitle text-muted">Subject Matter Expert</div>
                                                    <div class="card-subtitle mb-2 text-muted">2011 - 2014</div>
                                                    <p class="card-text">
                                                        Different tools for mobile wallet payments. Project's focus was the
                                                        mobile
                                                        wallet payments billing handling.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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