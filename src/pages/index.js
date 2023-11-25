import * as React from "react"
import Layout from '../components/layout'
import Welcome from "../components/Welcome"
import Introduction from "../components/Introduction"
import Resume from "../components/Resume"

const IndexPage = () => {
  return (
    <div>
        <Layout pageTitle="HOME">
        </Layout>
        <Welcome/>
        <Introduction />
        <Resume/>
    </div>

  )
}

export default IndexPage

export const Head = () => <title>YUE's Portfolio</title>
