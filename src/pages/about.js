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
    line-height: 1.5;
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
                Hi, 
                <br></br>
                <br></br>
                My name is <strong>Abdullah</strong> and I'm a Software Engineer, Digital Craftsman and Indie Maker. I’m mainly interested in <strong>SaaS</strong>, <strong>UI</strong>, <strong>UX</strong>, <strong>Python</strong> (programming language)! Here, in my personal website you’ll find my musings and thoughts about random topics. Some of the my social media accounts:

                <ul>
                    <li> <a href="https://github.com/mrabdullahsahin" target="blank"> Github </a> </li>
                    <li> <a href="https://www.linkedin.com/in/mrabdullahsahin/" target="blank"> Linkedin </a></li>
                    <li> <a href="https://twitter.com/mrabdullahsahin" target="blank"> Twitter </a></li>
                    <li> <a href="https://www.instagram.com/mrabdullahsahin/" target="blank"> Instagram </a></li>
                    <li> <a href="https://www.goodreads.com/user/show/78190102-abdullah" target="blank"> Goodreads </a></li>
                    <li> <a href="https://dribbble.com/abdullahsahin" target="blank"> Dribbble </a></li>
                    <li> <a href="https://www.behance.net/abdullahsaf7fe/" target="blank"> Behance </a></li>
                    <li> <a href="https://getmakerlog.com/@abdullahsahin" target="blank"> Makerlog </a></li>
                    <li> <a href="https://medium.com/@abdullahsahin" target="blank"> Medium </a></li>
                    <li> <a href="https://www.kaggle.com/abdullahsahin" target="blank"> Kaggle </a></li>
                </ul>

                Some of the open source projects I’ve wrote in the past or currently maintaining are:

                <ul>
                    <li> <a href="https://github.com/mrabdullahsahin/data-structures-algorithms" target="blank"> data-structures-algorithms </a> </li>
                    <li> <a href="https://github.com/mrabdullahsahin/data-analysis-data-visualization" target="blank"> data-analysis-data-visualization </a> </li>
                    <li> <a href="https://github.com/mrabdullahsahin/fikrin-hayati" target="blank"> fikrin-hayati </a> </li>
                    <li> <a href="https://github.com/mrabdullahsahin/yolharitasi" target="blank"> yolharitasi </a> </li>
                    <li> <a href="https://github.com/mrabdullahsahin/ios-programlama-kaynaklar" target="blank"> ios-programlama-kaynaklar </a> </li>
                    <li>… and many more on <a href="https://github.com/mrabdullahsahin" target="blank"> my personal Github profile! </a> </li>
                </ul>

                For random bits follow me on twitter: <strong><a href="https://twitter.com/mrabdullahsahin" target="blank">@mrabdullahsahin</a> </strong>. For more info about my professional career, visit my <strong><a href="https://www.linkedin.com/in/mrabdullahsahin/" target="blank">Linkedin profile</a></strong>.
                <br></br>
                <br></br>
                If you have any questions please feel free to send an email to: <strong> abdullahsahinceo @ gmail.com </strong>

            </AboutText>
        </AboutArea>

        <Footer/>
    </Layout>
)

export default About