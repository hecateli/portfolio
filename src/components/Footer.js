import * as React from 'react'
import { Link } from 'gatsby'
import { footer_container,
    footer_copyright,
    footer_links,
    footer_link_item
} from './Footer.module.css'

const Footer = () => {
    return (
        <div className={footer_container}>
            <div className={footer_copyright}>
                XINYUE  LI © 2023. ALL RIGHTS RESERVED.
            </div>
            <div className={footer_links}>
                <Link to="/" className={footer_link_item}>
                    HOME
                </Link>
                <Link to="/education" className={footer_link_item}>
                    EDUCATION
                </Link>
                <Link to="/projects" className={footer_link_item}>
                    PROJECTS
                </Link>
                <Link to="/life" className={footer_link_item}>
                    LIFE
                </Link>
            </div>
        </div>
    )
}

export default Footer