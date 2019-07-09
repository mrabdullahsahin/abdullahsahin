import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroArea from "../components/IndexHeroArea/IndexHeroArea"
import LatestPost from "../components/LatestPost/LatestPost"
import Footer from "../components/Footer/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <HeroArea/>
    <div className="Logs">
      <h2>My Logs</h2>
      <div className="MakerLog">
        <iframe title="Makerlog Embed" height="300" width="50%" align="middle" scrolling="no" frameborder="0" allowtransparency="true" src="https://api.getmakerlog.com/users/2864/embed"></iframe>
      </div>
    </div>
    <LatestPost/>
    <Footer/>
  </Layout>
)

export default IndexPage
