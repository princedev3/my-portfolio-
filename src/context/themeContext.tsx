"use client"
import React, { createContext, useContext, useLayoutEffect, useState } from 'react'

export type themeProp = "light" | "dark"
type themeContextProp ={
    theme:themeProp ,
    setTheme:(item:themeProp)=>void
    handleToggle:()=>void
}
export const ThemeProvider = createContext<themeContextProp | null>(null)

export default function ThemeContext ({children}:{children:React.ReactNode}) {

    const[theme,setTheme]=useState<themeProp>("light")
    const handleToggle = ()=>{
        if(theme ==="light"){
            setTheme("dark")
            window.localStorage.setItem("theme","dark")
            document.documentElement.classList.add('dark')
        }else{
            setTheme("light")
            window.localStorage.setItem("theme","light")
            document.documentElement.classList.remove('dark')
        }
    }

    useLayoutEffect(()=>{
        const localTheme= window.localStorage.getItem("theme") as themeProp

        if(localTheme){
            setTheme(localTheme)
             if(localTheme === "dark"){
                document.documentElement.classList.add('dark')
             }
        }    
    },[])
  return (
    <ThemeProvider.Provider value={{handleToggle,theme,setTheme}}>{children}</ThemeProvider.Provider>
  )
}
export function ThemeNotNull(){
    const context = useContext(ThemeProvider)
    if(context===null){
        throw new Error("not avaliable")
    }
    return context
}