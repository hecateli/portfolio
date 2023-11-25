import * as React from 'react'
import MainNav from './MainNav'
import Footer from './Footer'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <MainNav/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout