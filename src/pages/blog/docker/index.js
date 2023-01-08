import React from "react";
import Layout from "../../../components/layout";
import Title from "../../../components/title";
import Highlight from "react-highlight";
import { Link } from "gatsby";

const redis = `version: '3.8'
services:
    redis:
        image: redis/redis-stack:6.2.4-v3
        container-name: 'redis-stack-6379'
        command: redis-server --requirepass admin
        restart: always
        volumes:
            - cache:/var/lib/redis/data
        ports:
            - '6379:6379'
volumes:
    cache:
        driver: local`;

const postgresql = `version: '3.8'
services:
    db:
        image: postgres:latest
        restart: always
        environment:
            - POSTGRES_USER=admin
            - POSTGRES_PASSWORD=admin
        volumes:
            - db:/var/lib/postgres/data
        ports:
            - '5433:5432'
volumes:
    db:
        driver: local`;

const mongo = `version: '3.8'
services:
    database: 
        image: 'mongo'
        container_name: 'my-mongo-container'
        restart: always
        environment:
            - MONGO_INITDB_DATABASE=sandbox
            - MONGO_INITDB_ROOT_USERNAME=admin
            - MONGO_INITDB_ROOT_PASSWORD=admin
        volumes:
            - database:/var/lib/mongo/data
        ports:
            - '27019:27017'
volumes:
    db:
        driver: local`;

export default function Docker() {
    return (
        <>
            <Layout>
                <Title title='Docker Compose' />
                <div class="container spacer-lg">

                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/blog">Blog</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Docker Compose</li>
                        </ol>
                    </nav>

                    <h2 class="heading mt-5">Docker Compose Files</h2>
                    <hr />

                    <div class="row px-5 mt-5">

                        <section class="container">
                            <div class="collapse-btn">
                                <div class="m-2" data-bs-toggle="collapse"
                                    href="#redis-collapse" role="button" aria-expanded="false" aria-controls="redis-collapse">Redis Cache</div>
                                <div class="collapse container" id="redis-collapse">
                                    <pre>
                                        <code>
                                            <Highlight className="language-yaml">{redis}</Highlight>
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section class="container mt-4">
                            <div class="collapse-btn">
                                <div class="m-2" data-bs-toggle="collapse"
                                    href="#postgres-collapse" role="button" aria-expanded="false"
                                    aria-controls="postgres-collapse">
                                    Postgres DB
                                </div>
                                <div class="collapse container" id="postgres-collapse">
                                    <pre>
                                        <code>
                                            <Highlight className="language-yaml">{postgresql}</Highlight>
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section class="container mt-4">
                            <div class="collapse-btn">
                                <div class="m-2" data-bs-toggle="collapse"
                                    href="#mongodb-collapse" role="button" aria-expanded="false"
                                    aria-controls="mongodb-collapse">
                                    Mongo DB
                                </div>
                                <div class="collapse container" id="mongodb-collapse">
                                    <pre>
                                        <code>
                                            <Highlight className="language-yaml">{mongo}</Highlight>
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section class="container mt-4">
                            <div class="collapse-btn">
                                <div class="m-2" data-bs-toggle="collapse"
                                    href="#kafka-collapse" role="button" aria-expanded="false"
                                    aria-controls="kafka-collapse">
                                    Kafka
                                </div>
                                <div class="collapse container" id="kafka-collapse">
                                    <pre>
                                        <code>
                                            <Highlight className="language-yaml">{mongo}</Highlight>
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Layout>
        </>
    )
}