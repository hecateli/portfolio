import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    navLinks,
    navLinkItem,
    navLinkText,
    logo
  } from './MainNav.module.css'

const MainNav = () => {
    return (
        <nav className={container}>
            <Link to="/" className={logo}>YUE</Link>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to="/" className={navLinkText}>
                        HOME
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/education" className={navLinkText}>
                        EDUCATION
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/projects" className={navLinkText}>
                        PROJECTS
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/life" className={navLinkText}>
                        LIFE
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav
