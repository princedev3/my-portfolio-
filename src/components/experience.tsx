"use client"
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './SectionHeading';
import { experiencesData } from '@/lib/data';
import useSectionInview from '@/lib/hooks';
import { ThemeNotNull } from '@/context/themeContext';

export default function Experience(){
    const {ref}=useSectionInview("Experience",0.5)
    const {theme} = ThemeNotNull()
  return (
    <div ref={ref} id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
        <div className="mb-10">
        <SectionHeading title='experience'/>
        </div>
        <VerticalTimeline lineColor=''>
            {       
            experiencesData.map((item,idx)=>(
                    <React.Fragment key={idx}>
                    <VerticalTimelineElement
                      contentStyle={{ 
                        visibility:"visible",
                        backgroundColor:theme ==="light"?"#f3f4f6":"rgba(255,255,255,0.05) ",
                        boxShadow:"none",
                        textAlign:'left',
                        border:"1px solid rgba(0,0,0,0.25) ",
                        padding:'1.3rem 2rem',
                         }}
                         contentArrowStyle={{
                            borderRight:theme==="light"?'0.4rem solid #9ca3af':"0.4rem solid rgba(255,255,255,0.5 ) ",
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            visibility:"visible",
                            background:theme==="light"?'white':" rgba(255,255,255,0.15 ) ",
                            fontSize:'1.5rem'
                        }}
                         >
                       <h3 className="font-semibold capitalize  ">{item.title} </h3>
                       <h3 className="font-normal !mt-0 ">{item.location} </h3>
                       <h3 className="font-normal !mt-1 ">{item.description} </h3>
                    </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </div>
  )
}