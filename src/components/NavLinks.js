import * as React from 'react'
import { Link } from 'gatsby'
import {  
    navLinks,
    navLinkItem,
    navLinkText,
 } from './NavLinks.module.css' 

const NavLinks = () => {
    return (
        <ul className={navLinks}>     
            {/* <li className={navLinkItem}>
                <Link to="/life" className={navLinkText}>
                    LIFE
                </Link>
            </li> */}
            <li className={navLinkItem}>
                <Link to="/experiences" className={navLinkText}>
                    EXPERIENCES
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/projects" className={navLinkText}>
                    PROJECTS
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/education" className={navLinkText}>
                    EDUCATION
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/" className={navLinkText}>
                    HOME
                </Link>
            </li>
        </ul>
    )
}

export default NavLinks