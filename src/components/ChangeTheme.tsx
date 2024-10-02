"use client"
import { ThemeNotNull } from "../context/themeContext"
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const ChangeTheme = () => {
    const {theme,handleToggle} = ThemeNotNull()

  return (
    <button onClick={handleToggle}  className='fixed bottom-10 right-10 w-9 h-9 bg-white/60 flex items-center justify-center rounded-full p-2 hover:scale-110 transition-all active:scale-105'>
        {
           theme ==="light"? <MdOutlineWbSunny  size={30} className='text-black'/> :<FaMoon className='text-black'   size={20}/>
        }
    </button>
  )
}
export default ChangeTheme