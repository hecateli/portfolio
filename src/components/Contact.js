import * as React from "react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { contact_container,
    contact_heading,
    contact_links,
    contact_item, 
    contact_icon } from './Contact.module.css'

const Contact = () => {
    return (
        <div className={contact_container}>
            <h1 className={contact_heading}>CONTACT ME</h1>
            <div className={contact_links}>
                <a href="mailto: hecateyue.li@mail.utoronto.ca" className={contact_item}>
                        <MdOutlineMailOutline className={contact_icon} size={36}/>
                </a>
                <a href="https://github.com/hecateli" className={contact_item}>
                    <FaGithub className={contact_icon} size={36}/>
                </a>
                <a href="https://www.instagram.com/hecateyyyue/" className={contact_item}>
                    <FaInstagram className={contact_icon} size={36}/>
                </a>
                <a href="https://www.linkedin.com/in/hecate-li" className={contact_item}>
                    <FaLinkedin className={contact_icon} size={36}/>
                </a>
            </div>
        </div>
    )
}

export default Contact