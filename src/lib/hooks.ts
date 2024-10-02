"use client"
import { useActiveContext } from "@/context/activesectioncontext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { links } from "./data";

type activeType = typeof links[number]["name"]

export default function useSectionInview(setionName:activeType,threshold=0.75){

    const {ref,inView}= useInView({
        threshold
    })
    const{active,setActive,timeOfLastClick,setTimeOfLastClick}=  useActiveContext()

    useEffect(()=>{
        if(inView && Date.now()-timeOfLastClick>1000 ){
                 setActive(setionName)
        }
    },[ref,inView,timeOfLastClick,setTimeOfLastClick])

    return {
        ref,
    }
}