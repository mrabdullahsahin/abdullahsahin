import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroArea from "../components/IndexHeroArea/IndexHeroArea"
import Footer from "../components/Footer/Footer"
import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import Emoji from '../components/Emoji'

const revenueData = {
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

const customerData = {
  labels: ['Mar 18','Apr 18','May 18','Jun 18','Jul 18','Aug 18','Sep 18','Oct 18','Nov 18','Dec 18','Jan 19','Feb 19','Mar 19','Apr 19','May 19'],
  datasets: [
    {
      label: 'Gross Total Customers',
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
      data: [8,14,7,6,12,28,30,15,4,19,10,15,7,4,32]
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
  width: 60%;
  height: 60%;
  margin-bottom: 50px;
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
  margin: 35px 35px;
  justify-items: left;
  font-size: 25px;
  width: 85%;
  @media (max-width: 640px){
      font-size: 20px;
  }
`

const OpenCard = styled.div`
  max-width: 850px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: auto;
  @media (max-width: 640px) {
    max-width: 300px;
    margin: auto;
    grid-template-columns: repeat(1, 1fr);
}
`

const CardInformation = styled.div`
  background: rgba(33, 44, 79, 1);
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
  position: relative;
  max-width: 100%;
  height: 125px;
  text-decoration: none;
`

const CardTitle = styled.h1`
  color: rgba(240,243,246, 0.5);
  font-weight: normal;
  font-size: 15px;
  text-align: left;
  margin: 25px auto 10px 25px;
`

const CardRevenue = styled.h3`
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
  font-size: 40px;
  text-align: left;
  margin: auto auto 10px 25px;
`

const ComingSoon = () => (
    <Layout>
        <HeroArea/>
        <SEO title="Coming Soon Startup Page"/>
        <LineChart>
          <StartupName>Open Startup</StartupName>
          <TextArea> Monthly Revenue <Emoji symbol="💰" label="Money Bag"/></TextArea>
          <Line 
              data={revenueData} 
              options = {options}
            />
          <TextArea>Customers <Emoji symbol="💼" label="Briefcase"/></TextArea>
          <Line 
              data={customerData} 
              options = {options}
            />
        </LineChart>

        <OpenCard>
          <CardInformation>
            <CardTitle>Total Revenue</CardTitle>
            <CardRevenue>$474,341</CardRevenue>
          </CardInformation>

          <CardInformation>
            <CardTitle>Revenue Last 12mo</CardTitle>
            <CardRevenue>$245,147/y</CardRevenue>
          </CardInformation>

          <CardInformation>
            <CardTitle>This Month's Rev. to Date</CardTitle>
            <CardRevenue>$14,897</CardRevenue>
          </CardInformation>

          <CardInformation>
            <CardTitle>Last Month's Revenue</CardTitle>
            <CardRevenue>$13,225</CardRevenue>
          </CardInformation>

          <CardInformation>
            <CardTitle>Total Product Sold</CardTitle>
            <CardRevenue>1,804</CardRevenue>
          </CardInformation>

          <CardInformation>
            <CardTitle>Total Customers</CardTitle>
            <CardRevenue>1,156</CardRevenue>
          </CardInformation>
        </OpenCard>

        <Footer/>
    </Layout>
)

export default ComingSoon