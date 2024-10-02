"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import ProjectSingular from './ProjectSingular'
import useSectionInview from '@/lib/hooks'


const Projects = () => { 
    const {ref}=useSectionInview("Projects",0.5)
  return (
    <div ref={ref} className='scroll-mt-28 mb-28' id='projects'>
        <SectionHeading title='projects'/>
        <div className="">
            {
                projectsData.map((item,idx)=>(
                    <ProjectSingular key={idx} {...item}/>
                    
                ))
            }
        </div>
    </div>
  )
}

export default Projects