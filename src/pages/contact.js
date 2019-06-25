import React from "react"
import { Link } from "gatsby"
import "./contact.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/IndexHeroArea/IndexHeroArea"
import Footer from "../components/Footer/Footer"

const Contact = () => (
    <Layout>
        <HeroArea/>
        <SEO title="Contact"/>
        
        <Footer/>
    </Layout>
)

export default Contact