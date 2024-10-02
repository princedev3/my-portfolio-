"use client"
import { links } from '@/lib/data'
import React, { createContext, useContext, useState } from 'react'

type activeType = typeof links[number]["name"]
type activeSection = {
  active:activeType
   setActive:(item:activeType)=>void,
   timeOfLastClick:number,
   setTimeOfLastClick:(item:number)=>void
}
export const ActiveSectionProvider = createContext<activeSection |null>(null)

export default function Activesectioncontext({children}:{children:React.ReactNode}){
const [active, setActive] = useState<activeType >("Home")
const [timeOfLastClick,setTimeOfLastClick]=useState(0)
    
  return (
    <ActiveSectionProvider.Provider value={{active,setActive,timeOfLastClick,setTimeOfLastClick}}>{children}</ActiveSectionProvider.Provider>
  )
}


export function useActiveContext(){
  const context = useContext(ActiveSectionProvider)

  if(context===undefined || context===null){
    throw new Error("use context must be defined")
  }
  return context
}