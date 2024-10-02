"use client"
import React from 'react'
import {motion} from "framer-motion"
import SectionHeading from './SectionHeading'
import useSectionInview from '@/lib/hooks'


const About = () => {
  const {ref}=useSectionInview("About",0.5)
  return (
    <motion.div
    ref={ref}
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    transition={{
        delay:0.175
    }}
    className='mb-28 max-w-[45rem] text-center scroll-mt-28' id='about'>
        <SectionHeading title='about me'/>
        <div className="mb-3 text-lg leading-8">
            <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum rem aliquam debitis! Aperiam, deleniti quo libero, beatae quidem officiis neque nostrum non consectetur atque similique at iste vero doloremque quaerat.</p>
            <p className="mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum rem aliquam debitis! Aperiam, deleniti quo libero, beatae quidem officiis neque nostrum non consectetur atque similique at iste vero doloremque quaerat.</p>
            <p className="mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum rem aliquam debitis! Aperiam, deleniti quo libero, beatae quidem officiis neque nostrum non consectetur atque similique at iste vero doloremque quaerat.</p>
            <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum rem aliquam debitis! Aperiam, deleniti quo libero, beatae quidem officiis neque nostrum non consectetur atque similique at iste vero doloremque quaerat.</p>
        </div>
    </motion.div>
  )
}

export default About