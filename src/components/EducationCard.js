import * as React from 'react'
import { edu_card,
    edu_status,
    edu_time,
    edu_name,
    edu_program,
    edu_focus } from './EducationCard.module.css'

const EducationCard = (props) => {

    return (
        <div className={edu_card}>
            <h3 className={edu_status}>{props.status}</h3>
            <h4 className={edu_time}>{props.time}</h4>
            <a href={props.link} className={edu_name}>{props.name}</a>
            <p className={edu_program}>{props.program}</p>
            <p className={edu_focus}>{props.focus}</p>
        </div>
    ) 
}

export default EducationCard
