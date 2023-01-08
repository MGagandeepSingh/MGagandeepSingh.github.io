import { Link } from "gatsby";
import React from "react";
import Layout from "../../../components/layout";
import Title from "../../../components/title";
import { BsInfoCircleFill } from "@react-icons/all-files/bs/BsInfoCircleFill";


export default function PrimitiveTypes() {
    return (
        <>
            <Layout>
                <Title title='Java Primitive Types' />
                <div class="container spacer-lg">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/blog">Blog</Link></li>
                            <li class="breadcrumb-item"><Link to="/blog/java">Java</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Java Primitive Type</li>
                        </ol>
                    </nav>
                    <div>
                        <div><h1 class="my-4 about-me mt-5">Java's Primitive Data Type</h1></div>
                        <div style={{ marginTop: '-15px' }}>
                            <div style={{ fontSize: '13px', fontWeight: '400', color: '#C0C0C0', fontStyle: 'italic' }}>Updated: 21-Dec-2022
                            </div>
                            <div style={{ fontSize: '13px', fontWeight: '400', color: '#C0C0C0', fontStyle: 'italic' }}>Author: Gagandeep Singh
                            </div>
                        </div>
                    </div>
                    <hr />

                    <section className="container" style={{ fontFamily: 'var(--cs-primary-text-font)', fontSize: '1.2rem' }}>
                        <p class="my-4">
                            Java is a strongly typed language, which means each data type such as integers, characters, decimals is
                            predefined as part of the programming language and every variable should be defined with one of the type.
                        </p>
                        <p>
                            Java has following 8 primitive data types. All of them are <span class="badge">signed</span> values
                            except
                            for <span class="badge">boolean</span> and <span class="badge">char</span> which are java's
                            unsigned
                            values.
                        </p>

                        <table class="table table-dark table-striped mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Data Type</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Default</th>
                                    <th scope="col">Values</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>byte</td>
                                    <td>1 byte</td>
                                    <td>0</td>
                                    <td>
                                        <BsInfoCircleFill style={{ width: '1.3rem' }} class="fa fa-info-circle ms-3" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="left"
                                            data-bs-title="-128 to 127" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>short</td>
                                    <td>2 byte</td>
                                    <td>0</td>
                                    <td>
                                        <BsInfoCircleFill style={{ width: '1.3rem' }} class="fa fa-info-circle ms-3" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="left"
                                            data-bs-title="-32768 to 32767" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>int</td>
                                    <td>4 byte</td>
                                    <td>0</td>
                                    <td>
                                        <BsInfoCircleFill style={{ width: '1.3rem' }} class="fa fa-info-circle ms-3" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="left"
                                            data-bs-title="-2,14,74,83,648 to 2,14,74,83,647" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>long</td>
                                    <td>8 byte</td>
                                    <td>0L</td>
                                    <td>
                                        <BsInfoCircleFill style={{ width: '1.3rem' }} class="fa fa-info-circle ms-3" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="left"
                                            data-bs-title="92,23,37,20,36,85,47,75,808 to 92,23,37,20,36,85,47,75,807" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>float</td>
                                    <td>4 byte</td>
                                    <td>0.0f</td>
                                    <td>
                                        <BsInfoCircleFill style={{ width: '1.3rem' }} class="fa fa-info-circle ms-3" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="left"
                                            data-bs-title="Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>double</td>
                                    <td>8 byte</td>
                                    <td>0.0d</td>
                                    <td>
                                        <BsInfoCircleFill style={{ width: '1.3rem' }} class="fa fa-info-circle ms-3" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="left"
                                            data-bs-title="Stores fractional numbers. Sufficient for storing 15 decimal digits" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>boolean</td>
                                    <td>1 byte</td>
                                    <td>false</td>
                                    <td>
                                        <BsInfoCircleFill style={{ width: '1.3rem' }} class="fa fa-info-circle ms-3" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="left"
                                            data-bs-title="Stores true or false values" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>char</td>
                                    <td>2 byte</td>
                                    <td>'\u0000'</td>
                                    <td>
                                        <BsInfoCircleFill style={{ width: '1.3rem' }} class="fa fa-info-circle ms-3" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="left"
                                            data-bs-title="Stored a single character / letter or ASCII values" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                </div>
            </Layout>
        </>
    )
}