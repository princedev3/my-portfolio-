"use client"
import React from 'react'
import { motion } from "framer-motion"
import {links} from "../lib/data"
import Link from 'next/link'
import {  useActiveContext } from '@/context/activesectioncontext'

const Header = () => {
  const {active, setActive,setTimeOfLastClick}= useActiveContext()
  return (
    <div className="relative z-[999]">
        <motion.div className='fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] border border-white shadow-lg border-opacity-40  bg-white bg-opacity-80 shadow-black/[0.03] rounded-none sm:rounded-full sm:top-6 w-full sm:w-[36rem] backdrop-blur-[0.5rem] sm:h-[3.25rem]'
       initial={{y:-100,opacity:0,x:"-50%"}}
       animate={{opacity:1,y:0 ,x:"-50%"}}
        ></motion.div>
        <div className="fixed flex top-[0.15rem] py-2 sm:py-0    sm:h-[initial]  sm:w-[33rem]   h-12  left-1/2 -translate-x-1/2 sm:top-[1.7rem] ">
           <ul className="flex flex-wrap gap-y-1 justify-center items-center text-[0.9rem] font-medium text-gray-500 sm:w-[initial]  sm:flex-nowrap sm:gap-5">
            {
               links.map(item=>(
                <motion.li 
                initial={{y:-100,opacity:0}}
                animate={{y:0,opacity:1}}
                key={item.name} className="h-3/4  flex items-center justify-center relative">
                 <Link onClick={()=>{setActive(item.name),setTimeOfLastClick(Date.now())}} className={`${active===item.name? "text-gray-950":""} w-full flex items-center justify-center px-3 py-3 hover:text-gray-900 transition`}  href={item.hash}>{item.name} </Link>
                  {active === item.name && <motion.span layoutId='active' transition={{type:"spring",stiffness:380,damping:30}} className="bg-gray-100 absolute inset-0 rounded-full -z-10"></motion.span> }
               </motion.li>
               ))
            }
           </ul>
        </div>
    </div>
  )
}

export default Header