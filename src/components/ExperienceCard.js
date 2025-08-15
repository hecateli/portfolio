import * as React from 'react'
import { exper_card,
    exper_position,
    exper_time,
    exper_name,
    exper_type } from './ExperienceCard.module.css'

const ExperienceCard = (props) => {

    return (
        <div className={exper_card}>
            <h3 className={exper_position}>{props.position}</h3>
            <h4 className={exper_time}>{props.time}</h4>
            <a href={props.link} className={exper_name}>{props.name}</a>
            <p className={exper_type}>{props.type}</p>
        </div>
    ) 
}

export default ExperienceCard