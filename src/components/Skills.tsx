"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import useSectionInview from '@/lib/hooks'
import {animate, delay, motion} from "framer-motion"

const Skills = () => {
    const {ref}=useSectionInview("Skills",0.5)
    const fadeInVariant = {
        initial:{
            y:100,
            opacity:0
        },
        animate:(idx:number)=>({
                y:0,
                opacity:1,
                transition:{
                    delay:0.05*idx
                }
        })
    }
  return (
    <div id='skills' ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading title='Skills'/>
        <ul className="flex flex-wrap justify-center gap-2 text-gray-800 text-lg">
            {
                skillsData.map((item,idx)=>(
                    <motion.li variants={fadeInVariant} initial="initial" viewport={{once:true}} custom={idx} whileInView="animate" key={item} className='bg-white border border-black/10 rounded-xl px-5 py-3'>{item}</motion.li>
                ))
            }
        </ul>
    </div>  
  )
}

export default Skills