import React from "react"
import { Link } from "gatsby"
import profile from "../images/abdullahsahin.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="Description">
      <img src={profile} />
      <h1> 👋Hi! I'm Abdullah</h1>
      <h1> 🛠 Indie Maker from 🇹🇷 living in 🕌 Konya</h1>
      <div className="Logos">
        
      </div>
    </div>
    <SEO title="Home" />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
