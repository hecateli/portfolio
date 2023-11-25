import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { welcome_image, welcome_wrap, welcome_text, welcome_text_container } from "./Welcom.module.css"

const Welcome = () => {
    return (
        <div className={welcome_wrap}>
            <StaticImage className={welcome_image} height={'30%'}
            src="../images/welcome.jpg"/>
            <div className={welcome_text_container}>
                <p className={welcome_text}>I AM XINYUE LI</p>
                <p className={welcome_text}>WELCOME TO MY WEBSITE</p>
            </div>
        </div>
    )
}

export default Welcome