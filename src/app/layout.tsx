import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Activesectioncontext from '@/context/activesectioncontext'
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer'
import ChangeTheme from '@/components/ChangeTheme'
import ThemeContext from '@/context/themeContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
      <body className={`${inter.className}  bg-gray-50 text-gray-950 pt-24 sm:pt-28 !scroll-smooth scroll-py-[20rem] dark:bg-gray-500 dark:text-gray-50 dark:text-opacity-90 `}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10 dark:bg-[#946263] "></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] -z-10 xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      <Activesectioncontext>
        < ThemeContext>
        < Toaster/>
              <Header/>
              {children}
              < Footer/>
              <ChangeTheme/>
              </ThemeContext>
      </Activesectioncontext>
           
        </body>
    </html>
  )
}
