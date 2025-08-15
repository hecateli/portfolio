import * as React from 'react'
import Layout from '../components/layout'
import ExperienceBlock from '../components/ExperienceBlock'
import { StaticImage } from 'gatsby-plugin-image'
import { exper_img } from '../components/Experience.module.css'
import ExperienceCard from '../components/ExperienceCard'

const Experiences = () => {
  return (
    <Layout pageTitle="Experiences">
      <ExperienceBlock>
        <StaticImage src='../images/google.png' className={ exper_img }/>
        <ExperienceCard 
          position='Software Engineer'
          time='May 2025 - Aug 2025'
          name='Google'
          link='https://about.google'
          type='Intern'
        />
        <StaticImage src='../images/KHERG.jpeg' className={ exper_img }/>
        <ExperienceCard 
          position='Software Engineer'
          time='May 2024 - Aug 2024'
          name='University Health Network (UHN) - Kidney Health Education and Research Group'
          link='https://nefros.net'
          type='Volunteer'
        />
        <ExperienceCard 
          position='Full-stack Website Developer'
          time='Sept 2023 - Apr 2024'
          name='University Health Network (UHN) - Kidney Health Education and Research Group'
          link='https://nefros.net'
          type='Workstudy'
        />
      </ExperienceBlock>
    </Layout>
  )
}

export const Head = () => <title>EXPERIENCES | YUE's Portfolio</title>

export default Experiences