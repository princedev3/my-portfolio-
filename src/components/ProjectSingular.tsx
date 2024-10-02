"use client"
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import React, { useRef } from 'react'
import { useScroll,motion, useTransform } from 'framer-motion'

type projectProps = (typeof projectsData)[number]

export default function ProjectSingular({title,description,tags,imageUrl}:projectProps){

    const ref = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
        target:ref,
        offset:["0 1","1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress,[0,1],[0.8,1])
    const opacityProgress = useTransform(scrollYProgress,[0,1],[0.7,1])
    return (

        <motion.div
        style={{
            scale:scaleProgress,
            opacity:opacityProgress
        }}
        ref={ref}
        className='mb-3 sm:mb-8  last:mb-0 group rounded-lg overflow-hidden'
        >
        <section  
        className="  bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8  relative sm:h-[20rem]  group-even:pl-8 hover:bg-gray-200 transition">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10  sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem] rounded-lg">
          <p className="text-2xl font-semibold text-gray-700">{title}</p>
         <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
         <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {
            tags.map((item,idx)=>(
                    <li key={idx} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">{item}</li>
                ))
            }
         </ul>
          </div>
         
         <Image src={imageUrl} alt='project' quality={95} width={200} height={200} className='object-cover absolute -right-40 top-8  w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40  
         group-hover:-translate-x-2
         group-hover:translate-y-2
         group-hover:scale-[1.04]
         group-hover:-rotate-2
         group-even:group-hover:-translate-x-2
         group-even:group-hover:rotate-2
         transition
         '/>
        </section>
        </motion.div>
    )
}

