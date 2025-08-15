import * as React from 'react'
import { exper_block } from './ExperienceBlock.module.css'

const ExperienceBlock = ({children}) => {
    return (
        <div className={exper_block}>
            {children}
        </div>
    )
}

export default ExperienceBlock