import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import EducationBlock from '../components/EducationBlock'
import EducationCard from '../components/EducationCard'
import { edu_img } from '../components/Education.module.css'

const Education = () => {
  return (
    <Layout pageTitle="EDUCATION">
      <EducationBlock>
        <StaticImage src='../images/univers.jpg' className={ edu_img }/>
        <EducationCard 
          status='UNDERGRADUATE'
          time='Sept 2022 - Present'
          name='UNIVERSITY OF TORONTO'
          link='https://www.utoronto.ca/'
          program='Compuer Science Specialist'
          focus='Focus In Web and Internet Technologies & Artificial Intelligence'
        />
        <EducationCard 
          status='HIGH SCHOOL'
          time='Sept 2019 - June 2022'
          name='GUANGZHOU NO.6 HIGH SCHOOL'
          link='https://www.gz6hs.cn/'
        />
        <StaticImage src='../images/six.png' className={ edu_img }/>
        <StaticImage src='../images/qea.jpg' className={ edu_img }/>
        <EducationCard 
          status='HIGH SCHOOL'
          time='Sept 2020 - June 2022'
          name='QUEEN’S ELITE ACADEMY'
          link='https://queenscanada.com/'
        />
      </EducationBlock>
    </Layout>
  )
}

export const Head = () => <title>EDUCATION | YUE's Portfolio</title>

export default Education