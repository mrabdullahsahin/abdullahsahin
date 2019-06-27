import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/IndexHeroArea/IndexHeroArea"
import Footer from "../components/Footer/Footer"

const ComingSoon = () => (
    <Layout>
        <HeroArea/>
        <SEO title="Coming Soon Startup Page"/>
        <Footer/>
    </Layout>
)

export default ComingSoon