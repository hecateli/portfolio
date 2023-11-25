import * as React from 'react'
import { Link } from 'gatsby'
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md"
import MainHeader from './MainHeader'

import {
    container,
    logo,
    navLinkBut,
    navLinkIcon,
    navCancelBut,
    navCancelIcon,
    main_bar
  } from './MainNav.module.css'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer';

const MainNav = () => {
    const [draerIsOpen, setDrawerIsOpen] = React.useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true)
    };

    const closeDrawer = () => {
        setDrawerIsOpen(false)
    };

    return (
        <React.Fragment>
            {draerIsOpen && (
                <SideDrawer>
                    <NavLinks/>
                    <button className={navCancelBut} onClick={closeDrawer}>
                        <MdOutlineCancel className={navCancelIcon} size={15}/>
                    </button>
                </SideDrawer>
            )}
            <MainHeader >
            <nav className={container}>
                <Link to="/" className={logo}>YUE</Link>
                <nav className={main_bar}>
                    <NavLinks/>
                </nav>
                <button className={navLinkBut} onClick={openDrawer}>
                    <AiOutlineMenu className={navLinkIcon} size={15}/>
                </button>
            </nav>
        </MainHeader>
        </React.Fragment>
        
    )
}

export default MainNav
