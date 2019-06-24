import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexHeroArea from "../components/IndexHeroArea/IndexHeroArea"
import Footer from "../components/Footer/Footer"

const SecondPage = () => (
  <Layout>
    <IndexHeroArea/>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Footer/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
