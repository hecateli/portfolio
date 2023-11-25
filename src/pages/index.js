import * as React from "react"
import Layout from '../components/layout'
import Welcome from "../components/Welcome"
import Introduction from "../components/Introduction"
import Resume from "../components/Resume"
import Contact from "../components/Contact"

const IndexPage = () => {
  return (
    <div>
        <Layout pageTitle="HOME">
          <Welcome/>
          <Introduction />
          <Resume/>
          <Contact />
        </Layout>
    </div>

  )
}

export default IndexPage

export const Head = () => <title>YUE's Portfolio</title>
