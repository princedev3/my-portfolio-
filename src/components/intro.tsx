"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import useSectionInview from '@/lib/hooks'


const Intro = () => {
  const {ref}=useSectionInview("Home",0.5)
  return (
    <section ref={ref} className=' mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] ' id='home'>
        <div className='flex items-center justify-center'>
            <div className="relative ">
            <motion.div
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{
                type:"tween",
                duration:0.2
            }}
            >
            <Image src={"/p.jpeg"} width={100} height={100} alt='' priority quality={"95"} className='object-cover w-[120px] h-[120px] border-[0.35rem] border-white rounded-full '/>
            </motion.div>
            <motion.span 
              initial={{opacity:0,scale:0}}
              animate={{opacity:1,scale:1}}
              transition={{
                type:"spring",
                stiffness:125,
                delay:0.1,
                duration:0.7
            }}
            className="text-4xl absolute bottom-0 right-0">👋</motion.span>
            </div>
        </div>
        <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello,I am Imene Prince.</span> I'm a{" "}
        <span className="font-bold">front-end developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay:0.1
      }}
      className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'>
        <Link href={"#contact"} className="bg-gray-900 px-7 py-3 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  gap-2 flex items-center cursor-pointer text-white rounded-full transition-all duration-300 group">
        <span className="font-normal">Contact me here</span>
        <FaArrowRightLong className='mt-1 opacity-70 group-hover:translate-x-1 transition'/>
        </Link>
        <a href='/imene prince software cv.pdf'  download className="bg-white border border-black/10 px-7 py-3 flex items-center gap-2 text-gray-900 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105    cursor-pointer transition-all duration-300 group">
           Download CV
           <HiDownload />
        </a>
      
        <a target='_blank' href='https://www.linkedin.com/in/prince-fejiro-2ba073163/recent-activity/all/'  download className="bg-white border border-black/10 p-4 text-[1.35rem] flex items-center text-gray-700 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105    cursor-pointer transition-all  hover:text-gray-900 duration-300 group">
           <CiLinkedin />
        </a>
        <a  target='_blank' href='https://github.com/princedev3' download className="bg-white p-4 text-[1.35rem] flex items-center text-gray-700 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105    cursor-pointer transition-all duration-300 hover:text-gray-900 group">
           <FaGithubSquare  />
        </a>
      </motion.div>
    </section>
  )
}

export default Intro