import * as React from 'react'
import {
    edu_container
} from './EducationBlock.module.css'

const EducationBlock = ({ children }) => {
    return (
        <main className={edu_container}>
            {children}
        </main>
    )
}

export default EducationBlock