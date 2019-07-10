import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/IndexHeroArea/IndexHeroArea"
import Footer from "../components/Footer/Footer"

const AboutArea = styled.div`
    display: grid;
    justify-items: center;
    text-align: left;
`

const AboutTitle = styled.h1`
    margin: 50px 20px;
    font-size: 60px;
    text-align: center;
    font-weight: 700;
    background: linear-gradient(104.74deg, #050A27 0%,#4A548C 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 640px) {
        font-size: 30px;
    }
`

const AboutText = styled.p`
    margin: 20px 20px;
    text-align: justify;
    font-size: 25px;
    width: 75%;
    @media (max-width: 640px){
        font-size: 20px;
    }
`

const About = () => (
    <Layout>
        <HeroArea/>
        <SEO title="About"/>

        <AboutArea>
            <AboutTitle>About</AboutTitle>
            <AboutText>
                Hi, I'm Abdullah from Turkey. I'm a software engineer, digital craftsman and indie maker. If you wondering about my projects and me, You can contact me with the social accounts below.

                <ul>
                    <li> <a href="https://github.com/mrabdullahsahin"> Github </a> </li>
                    <li> <a href="https://www.linkedin.com/in/mrabdullahsahin/"> Linkedin </a></li>
                    <li> <a href="https://twitter.com/mrabdullahsahin"> Twitter </a></li>
                    <li> <a href="https://www.instagram.com/mrabdullahsahin/"> Instagram </a></li>
                    <li> <a href="https://www.goodreads.com/user/show/78190102-abdullah"> Goodreads </a></li>
                    <li> <a href="https://dribbble.com/abdullahsahin"> Dribbble </a></li>
                    <li> <a href="https://www.behance.net/abdullahsaf7fe/"> Behance </a></li>
                    <li> <a href="https://getmakerlog.com/@abdullahsahin"> Makerlog </a></li>
                    <li> <a href="https://medium.com/@abdullahsahin"> Medium </a></li>
                    <li> <a href="https://www.kaggle.com/abdullahsahin"> Kaggle </a></li>
                </ul>

            </AboutText>
        </AboutArea>

        <Footer/>
    </Layout>
)

export default About