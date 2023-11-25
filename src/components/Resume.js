import * as React from 'react'
import downloadFile from '../../public/static/files/Xinyue_Li\'s_Resume.pdf'
import { resume_container,
    resume_heading,
    resume_download_container,
    resume_download_text,
    resume_download_button }
    from './Resume.module.css'

const Resume = () => {
    return (
        <div className={resume_container}>
            <h1 className={resume_heading}>MY RESUME</h1>
            <div className={resume_download_container}>
                <a href={downloadFile} className={resume_download_text} download>
                    Xinyue_Li_Resume_2023
                </a>
                <a href={downloadFile} className={resume_download_button} download>
                    Download
                </a>
            </div>
        </div>
    )
}

export default Resume