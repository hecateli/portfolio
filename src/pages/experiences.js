import * as React from 'react'
import Layout from '../components/layout'
import ExperienceBlock from '../components/ExperienceBlock'
import { StaticImage } from 'gatsby-plugin-image'
import { proj_img } from '../components/Project.module.css'
import ProjectCard from '../components/ProjectCard'

const Experiences = () => {
  return (
    <Layout pageTitle="Experiences">
      <ExperienceBlock>
        <StaticImage src='../images/monopoly.png' className={ proj_img }/>
        <ProjectCard
          name='Monopoly: ​Adventure at U of T​'
          details='A fresh edition of Monopoly with all properties and events inspired by the University of Toronto.'
          link='https://github.com/hecateli/course-project-monopoly'
        />
        <StaticImage src='../images/nutri_track.png' className={ proj_img }/>
        <ProjectCard
          name='NutriTrack​'
          details='A full-stack web application that allows users to record their daily food intake, visualizes the analyzed data and gives personalized recommendations'
          link='https://github.com/hecateli/Food-Record'
        />
        <StaticImage src='../images/analysis.png' className={ proj_img }/>
        <ProjectCard
          name='Chinese Media Navigator​'
          details='A interactive website allowing users to dynamically explore and analyze diverse datasets pertaining to Chinese diplomatic activities across various global locations.'
          link='https://devpost.com/software/sacx-hackathon-project'
        />
      </ExperienceBlock>
    </Layout>
  )
}

export const Head = () => <title>EXPERIENCES | YUE's Portfolio</title>

export default Experiences