import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/IndexHeroArea/IndexHeroArea"
import Footer from "../components/Footer/Footer"

const OpenStartup = () => (
    <Layout>
        <HeroArea/>
        <SEO title="Open Startup"/>

        <Footer/>
    </Layout>
)

export default OpenStartup