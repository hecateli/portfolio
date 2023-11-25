import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { intro_container, intro_text, intro_image} from './Introduction.module.css'

const Introduction = () => {
    return (
        <div className={intro_container}>
            <p className={intro_text}>I'm a second-year University of Toronto student, specializing in Computer Science and majoring in Statistics. I'm passionate about the convergence of Web Development and Artificial Intelligence. My curiosity drives me to craft user-centric websites and explore AI. Let's connect and collaborate in the dynamic world of technology!</p>
            <StaticImage className={intro_image}
            src="../images/intro.jpg"/>
        </div>
    )
}

export default Introduction