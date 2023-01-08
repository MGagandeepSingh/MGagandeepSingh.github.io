import * as React from "react"
import Layout from "../components/layout"
import About from "./about"
import Edex from "./edex"
import Intro from "./intro"
import Title from "../components/title"

export default function Home() {
  return (
    <Layout>
      <Title title='Home' />
      <Intro />
      <About />
      <Edex />
    </Layout>
  )
}
