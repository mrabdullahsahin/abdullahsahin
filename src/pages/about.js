import React from "react"
import { Link } from "gatsby"
import "./about.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/IndexHeroArea/IndexHeroArea"
import Footer from "../components/Footer/Footer"

const About = () => (
    <Layout>
        <HeroArea/>
        <SEO title="About"/>

        <Footer/>
    </Layout>
)

export default About