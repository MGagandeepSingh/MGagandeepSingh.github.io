import { Link } from "gatsby";
import React from "react";
import Layout from "../../../components/layout";
import Title from "../../../components/title";

export default function Java() {
    return (
        <>
            <Layout>
                <Title title='Java' />
                <div class="container spacer-lg">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/blog">Blog</Link></li>
                            <li class="breadcrumb-item active">Java</li>
                        </ol>
                    </nav>
                    <h2 class="my-4 about-me">Java Topics</h2>
                    <hr />

                    <section class="container anchor">
                        <div class="card mt-3">
                            <div class="card-body">
                                <h5 class="card-title"><Link to="primitiveType">Java Primitive Types</Link></h5>
                                <h6 class="card-subtitle mb-2 text-muted">Explanation of Java's Primitive Data Types</h6>
                            </div>
                        </div>
                        <div class="card mt-3">
                            <div class="card-body">
                                <h5 class="card-title"><Link to="signedVsUnsigned">Signed v/s Unsigned Types</Link></h5>
                                <h6 class="card-subtitle mb-2 text-muted">Understanding what are signed and unsigned data type</h6>
                            </div>
                        </div>
                    </section>

                </div>
            </Layout>
        </>
    )
}