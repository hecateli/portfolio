import * as React from 'react'
import { proj_block } from './ProjectBlock.module.css'

const ProjectBlock = ({children}) => {
    return (
        <div className={proj_block}>
            {children}
        </div>
    )
}

export default ProjectBlock