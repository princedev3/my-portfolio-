"use client"
import useSectionInview from '@/lib/hooks'
import React from 'react'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from "framer-motion"
import toast from 'react-hot-toast';


export default function Contact (){
    const {ref}=useSectionInview("Contact",0.5)

    async function handleSubmit(event:React.FormEvent) {
        event.preventDefault();
        const form = event.target as HTMLFormElement
        const formData = new FormData(form) 
        

        formData.append("access_key", process.env.NEXT_PUBLIC_EMAIl as string);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            toast.success("message sent")
            form.reset()
        }
    }

  return (
    <motion.div ref={ref} id='contact' className='mb-20 scroll-mt-28'
    initial={{
        opacity:0
    }}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    viewport={{once:true}}
    >
        <SectionHeading title='Contact'/>
        <p className='text-gray-700 text-center -mt-6 dark:text-white/80 '>Please contact me directly at <a className='underline' href="mailto:marvinprince232@gmail.com"  >marvinprince232@gmail.com</a> or through this form</p>
        <form   onSubmit={handleSubmit}  className='mt-10 flex flex-col dark:text-black'>
            <input name="email" required maxLength={50} type="email" className='h-14 rounded-lg border border-black/10  outline-black/20  px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-90 transition-all dark:outline-none' placeholder='Your Email' />
            <textarea   name="message" id="" className='h-52 my-3 rounded-lg border-black/10 resize-none outline-black/20 px-4 py-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-90 transition-all dark:outline-none' placeholder='Your Message' />
            <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[11rem] bg-gray-900 text-white rounded-full outline-none transition-all  focus:scale-105 hover:scale-105 active:scale-100 hover:bg-gray-950  dark:border dark:border-white/60'>send message <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 "/></button>
        </form>
    </motion.div>
  )
} 