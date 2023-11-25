import * as React from "react"
import Layout from '../components/layout'
import Welcome from "../components/Welcome"

const IndexPage = () => {
  return (
    <div>
        <Layout pageTitle="">
          
        </Layout>
        <Welcome/>
    </div>

  )
}

export default IndexPage

export const Head = () => <title>YUE's Portfolio</title>
