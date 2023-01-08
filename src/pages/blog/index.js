import React from "react";
import Layout from "../../components/layout";
import Title from "../../components/title";

const textStyle = {
    color: 'var(--cs-primary-font-color)',
    fontFamily: 'var(--cs-nb-text-font)',
    height: '5rem',
    paddingTop: '.5rem'
}

const heightContainer = {
    minHeight: '200px'
}

export default function Blog() {
    return (
        <Layout>
            <Title title='Blog' />
            <div class="container spacer-lg">
                <h2 class="heading">Blog Posts</h2>
                <hr />

                <div class="row px-5 mt-5">
                    <div class="col-sm-4 my-4">
                        <div class="card" style={heightContainer}>
                            <div class="card-body">
                                <h5 class="card-title heading">Java</h5>
                                <p class="card-text" style={textStyle}>Snippets and basics of Java programming language</p>
                                <a href="/blog/java" class="btn btn-secondary">Go</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 my-4">
                        <div class="card" style={heightContainer}>
                            <div class="card-body">
                                <h5 class="card-title heading">Docker Compose</h5>
                                <p class="card-text" style={textStyle}>Various Docker Compose files</p>
                                <a href="/blog/docker" class="btn btn-secondary">Go</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}