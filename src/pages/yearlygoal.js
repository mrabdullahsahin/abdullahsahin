import React from "react"
import "./yearlygoal.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/IndexHeroArea/IndexHeroArea"
import Footer from "../components/Footer/Footer"
import YearlyGoals from "../components/YearlyGoal/YearlyGoal"


const YearlyGoal = () => (
    <Layout>
        <HeroArea/>
        <SEO title="Yearly Goal"/>
        <YearlyGoals/>
        <Footer/>
    </Layout>
)

export default YearlyGoal