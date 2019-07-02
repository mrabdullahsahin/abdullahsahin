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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed egestas libero, et molestie nisl. In eget orci in est ornare placerat eget a orci. Suspendisse vestibulum tortor quis libero commodo, vel auctor justo tempor. Sed nec sapien rhoncus, vehicula velit a, euismod est. Phasellus dignissim mauris non mi tincidunt, sit amet gravida eros feugiat. Proin sodales tempus nisi in interdum. In in diam vel diam dapibus laoreet. In in quam posuere, porttitor nunc sit amet, consequat metus. Cras at feugiat mi, sed suscipit nisi.

                Cras quis arcu ut tortor imperdiet fermentum. Curabitur sit amet ipsum id ex luctus lobortis vitae quis lacus. Nulla nec turpis dignissim, bibendum tortor eget, viverra sem. Nullam eu eros quis erat dapibus tempus. Maecenas convallis pretium enim, a malesuada felis. Duis ut scelerisque erat, eget egestas quam. Vestibulum id interdum massa.

                Mauris lacus massa, eleifend ut risus eget, accumsan dapibus erat. Etiam pulvinar sollicitudin neque, vulputate ultricies magna dignissim vitae. Maecenas hendrerit nibh tellus, id maximus metus malesuada sed. Duis lacus sem, gravida id nibh vitae, euismod efficitur dolor. Phasellus gravida mattis risus, in ultricies mi consequat nec. Integer posuere laoreet neque et rutrum. Mauris volutpat cursus accumsan. Suspendisse varius dolor in purus maximus convallis. Etiam varius, neque lobortis tincidunt commodo, arcu sem congue est, sed egestas mauris massa et metus. Donec neque risus, mattis id tincidunt eget, dapibus et velit. Sed sed libero suscipit, tempus lorem nec, posuere nibh.

                Sed mattis est eu finibus pharetra. Suspendisse pulvinar suscipit odio, vitae molestie lacus dignissim at. Proin tristique, mi in sagittis efficitur, felis augue blandit velit, vitae tempus tellus massa et dui. Quisque tincidunt turpis ligula, at vulputate dui molestie vitae. Nunc ullamcorper, erat pellentesque sodales mollis, massa odio gravida lectus, quis hendrerit turpis augue efficitur lorem. Vivamus nec dignissim risus. Nulla facilisi. Sed scelerisque arcu velit. Mauris volutpat mauris non nibh feugiat, quis fringilla mauris consectetur.

                Sed sagittis quam sit amet sem hendrerit hendrerit. Vivamus sit amet lacus sit amet eros consequat sodales. Sed sed purus euismod, suscipit ante et, ultricies ligula. Proin eget turpis nec dolor laoreet maximus. Nunc rhoncus suscipit consectetur. Aliquam a massa et orci iaculis elementum. Donec vestibulum pharetra bibendum. Phasellus aliquet vestibulum venenatis. Duis faucibus porta iaculis. 
            </ContactText>
        </ContactArea>

        <Footer/>
    </Layout>
)

export default Contact