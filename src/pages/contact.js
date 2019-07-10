import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/IndexHeroArea/IndexHeroArea"
import Footer from "../components/Footer/Footer"

const ContactArea = styled.div`
    display: grid;
    justify-items: center;
    text-align: left;
`

const ContactTitle = styled.h1`
    margin: 50px 20px;
    font-size: 60px;
    text-align: center;
    font-weight: 700;
    background: linear-gradient(104.74deg, #050A27 0%,#4A548C 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 640px){
        font-size: 30px;
    }
`

const ContactText = styled.p`
    margin: 20px 20px;
    text-align: justify;
    font-size: 25px;
    width: 75%;
    @media (max-width: 640px){
        font-size: 20px;
    }
`

const Contact = () => (
    <Layout>
        <HeroArea/>
        <SEO title="Contact"/>

        <ContactArea>
            <ContactTitle>Contact</ContactTitle>
            <ContactText>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfzrvTDQs6T3cN12O_Psg4MUYBY_145qXgh8nOXMY4xtvmljQ/viewform?embedded=true" width="640" height="958" frameborder="0" marginheight="0" marginwidth="0" title="Abdullah Sahin Contact Form"></iframe>
            </ContactText>
        </ContactArea>

        <Footer/>
    </Layout>
)

export default Contact