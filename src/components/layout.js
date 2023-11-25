import * as React from 'react'
import Footer from './Footer'
import MainNav from './MainNav'

const Layout = ({ pageTitle, children }) => {
  return (
    <React.Fragment>
      <MainNav/>
      {children}
      <Footer/>
    </React.Fragment>
  )
}

export default Layout