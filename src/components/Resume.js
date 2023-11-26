import * as React from 'react'
import downloadFile from '../../public/static/files/Xinyue_Li_Resume_v1.pdf'
import { resume_container,
    resume_heading,
    resume_download_container,
    resume_download_text,
    resume_download_button,
    resume_download_icon_right,
    resume_download_icon_left }
    from './Resume.module.css'
import { MdOutlineFileDownload } from "react-icons/md";

const Resume = () => {
    return (
        <div className={resume_container}>
            <h1 className={resume_heading}>MY RESUME</h1>
            <div className={resume_download_container}>
                <a href={downloadFile} className={resume_download_text} download>
                    Xinyue_Li_Resume_2023
                    <MdOutlineFileDownload className={resume_download_icon_left}/>
                </a>
                <a href={downloadFile} className={resume_download_button} download>
                    <MdOutlineFileDownload className={resume_download_icon_right}/>
                    Download
                </a>
            </div>
        </div>
    )
}

export default Resume