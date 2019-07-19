import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/IndexHeroArea/IndexHeroArea"
import Footer from "../components/Footer/Footer"

const TermsArea = styled.div`
    display: grid;
    justify-items: center;
    text-align: left;
`

const TermsTitle = styled.h1`
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

const TermsText = styled.p`
    margin: 20px 20px;
    text-align: justify;
    font-size: 25px;
    width: 75%;
    line-height: 1.5;
    @media (max-width: 640px){
        font-size: 20px;
    }
`

const Terms = () => (
    <Layout>
        <HeroArea/>
        <SEO title="Terms of Service"/>

        <TermsArea>
            <TermsTitle>Terms of Service</TermsTitle>
            <TermsText>
                All content provided on this blog is for informational purposes only. The owner of this blog makes no representations as to the accuracy or completeness of any information on this site or found by following any link on this site. The owner will not be liable for any errors or omissions in this information nor for the availability of this information. The owner will not be liable for any losses, injuries, or damages from the display or use of this information. These terms and conditions of use are subject to change at any time and without notice.
            </TermsText>
        </TermsArea>

        <Footer/>
    </Layout>
)

export default Terms