import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Greeting from '../components/greeting'
const IndexPage = () => {
  return (
    <Layout pageTitle="Plagues are fun">
      <p>
      <div>
         <Greeting name="Dr. Plague"/>
        </div>
        I'm adding some info about the plagues while following the Gatsby Tutorial.</p>
      <StaticImage 
      alt="Dr Plague enjoying life"
      src="../images/drplague.jpg"
      width={400}
      />
    </Layout>
  )
}
export default IndexPage