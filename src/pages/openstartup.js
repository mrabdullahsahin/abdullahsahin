import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/IndexHeroArea/IndexHeroArea"
import Footer from "../components/Footer/Footer"
import Card from "../components/Card/Card"

const OpenStartup = () => (
    <Layout>
        <HeroArea/>
        <SEO title="Open Startup"/>
        <Card/>
        <Footer/>
    </Layout>
)

export default OpenStartup