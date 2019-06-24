import React from "react"
import { Link } from "gatsby"
import "./yearlygoal.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/IndexHeroArea/IndexHeroArea"
import Footer from "../components/Footer/Footer"


const YearlyGoal = () => (
    <Layout>
        <HeroArea/>
        <SEO title="Yearly Goal"/>

        <div className="GoalTable">
            <h1>Personal Goals 2019</h1>
            <table>
                <thead>
                    <th>Task</th>
                    <th>Progress</th>
                </thead>
                <tbody>
                    <tr>
                        <td>🚀 Launch Products</td>
                        <td>3/4</td>
                    </tr>
                    <tr>
                        <td>📚 Books per year</td>
                        <td>10/15</td>
                    </tr>
                    <tr>
                        <td>💰 Earn $1k / month</td>
                        <td>82%</td>
                    </tr>
                    <tr>
                        <td>📝 Publish on blog</td>
                        <td>10/15</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <Footer/>
    </Layout>
)

export default YearlyGoal