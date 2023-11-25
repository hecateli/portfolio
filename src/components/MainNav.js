import * as React from 'react'
import { Link } from 'gatsby'
import { AiOutlineMenu } from "react-icons/ai";
import {
    container,
    navLinks,
    navLinkItem,
    navLinkText,
    logo,
    navLinkIcon,
    navLinkBut
  } from './MainNav.module.css'

const MainNav = () => {
    return (
        <nav className={container}>
            <Link to="/" className={logo}>YUE</Link>
            <ul className={navLinks}>       
                <li className={navLinkIcon}>
                    <button className={navLinkBut}>
                        <AiOutlineMenu size={15}/>
                    </button>
                </li>
                <li className={navLinkItem}>
                    <Link to="/life" className={navLinkText}>
                        LIFE
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
            
        </nav>
    )
}

export default MainNav
