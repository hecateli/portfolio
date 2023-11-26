import * as React from 'react'
import { 
    proj_card,
    proj_name,
    proj_details,
    proj_but,
    proj_link
} from './ProjectCard.module.css'

const ProjectCard = (props) => {
    return (
        <div className={proj_card}>
            <h3 className={proj_name}>{props.name}</h3>
            <p className={proj_details}>{props.details}</p>
            <button className={proj_but}>
                <a className={proj_link} href={props.link}>LEARN MORE</a>
            </button>
        </div>
    )
}

export default ProjectCard