import * as React from 'react'
import { Link } from 'gatsby'
import {  
    navLinks,
    navLinkItem,
    navLinkText,
    activeLink
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
                <Link to="/experiences" className={navLinkText} activeClassName={activeLink}>
                    EXPERIENCES
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/projects" className={navLinkText} activeClassName={activeLink}>
                    PROJECTS
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/education" className={navLinkText} activeClassName={activeLink}>
                    EDUCATION
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/" className={navLinkText} activeClassName={activeLink}>
                    HOME
                </Link>
            </li>
        </ul>
    )
}

export default NavLinks