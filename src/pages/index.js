import * as React from "react"
import Layout from '../components/layout'
import Welcome from "../components/Welcome"
import Introduction from "../components/Introduction"

const IndexPage = () => {
  return (
    <div>
        <Layout pageTitle="HOME">
        </Layout>
        <Welcome/>
        <Introduction />
    </div>

  )
}

export default IndexPage

export const Head = () => <title>YUE's Portfolio</title>
