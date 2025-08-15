import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { intro_container, intro_text, intro_image} from './Introduction.module.css'

const Introduction = () => {
    return (
        <div className={intro_container}>
            <p className={intro_text}>I’m a fourth-year Computer Science student at the University of Toronto with a strong passion for software development. I enjoy building impactful, user-focused applications and exploring innovative technologies. Always eager to learn and collaborate, I’m excited to contribute my skills to meaningful projects in the tech world.</p>
            <StaticImage className={intro_image}
            src="../images/intro.jpg"/>
        </div>
    )
}

export default Introduction