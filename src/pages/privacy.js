import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/IndexHeroArea/IndexHeroArea"
import Footer from "../components/Footer/Footer"

const PrivacyArea = styled.div`
    display: grid;
    justify-items: center;
    text-align: left;
`

const PrivacyTitle = styled.h1`
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

const PrivacyText = styled.p`
    margin: 20px 20px;
    text-align: justify;
    font-size: 25px;
    width: 75%;
    line-height: 1.5;
    @media (max-width: 640px){
        font-size: 20px;
    }
`

const Privacy = () => (
    <Layout>
        <HeroArea/>
        <SEO title="Privacy Policy"/>

        <PrivacyArea>
            <PrivacyTitle>Privacy Policy</PrivacyTitle>
            <PrivacyText>
                We do not share personal information with third-parties nor do we store information we collect about your visit to this blog for use other than to analyze content performance through the use of cookies, which you can turn off at anytime by modifying your internet browser's settings. We are not responsible for the republishing of the content found on this blog on other websites or media without our permission. This privacy policy is subject to change without notice.
            </PrivacyText>
        </PrivacyArea>

        <Footer/>
    </Layout>
)

export default Privacy