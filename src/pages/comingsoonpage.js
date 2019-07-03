import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/IndexHeroArea/IndexHeroArea"
import Footer from "../components/Footer/Footer"
import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import Emoji from '../components/Emoji'

const data = {
    labels: ['Mar 18','Apr 18','May 18','Jun 18','Jul 18','Aug 18','Sep 18','Oct 18','Nov 18','Dec 18','Jan 19','Feb 19','Mar 19','Apr 19','May 19'],
    datasets: [
      {
        label: 'Gross Total Revenue',
        fill: true,
        lineTension: 0.4,
        backgroundColor: 'rgba(33,44,79,1)',
        borderColor: 'rgba(33,44,79,1)',
        borderCapStyle: 'square',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'round',
        pointBorderColor: 'rgba(255,255,255,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(0,0,0,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [267,1418,798,618,1499,628,483,759,2741,2602,3215,1562,7566,4619,3213]
      }
    ]
};

const options = {
    legend: {
        display: false,
    },
};

const LineChart = styled.div`
  display: grid;
  justify-items: center;
  margin: auto;
  width: 75%;
  height: 75%;
`

const StartupName = styled.h1`
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

const TextArea = styled.h2`
  margin: 15px 15px;
  justify-items: left;
  font-size: 25px;
  width: 85%;
  @media (max-width: 640px){
      font-size: 20px;
  }
`




const ComingSoon = () => (
    <Layout>
        <HeroArea/>
        <SEO title="Coming Soon Startup Page"/>
        <LineChart>
          <StartupName>Open Startup</StartupName>
          <TextArea>Revenue <Emoji symbol="💰" label="Money Bag"/></TextArea>
          <Line 
              data={data} 
              options = {options}
            />
        </LineChart>
        <Footer/>
    </Layout>
)

export default ComingSoon