import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/experience'
import Intro from '@/components/intro'
import Projects from '@/components/Projects'
import SectionDivider from '@/components/SectionDivider'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </main>
  )
}
//   scroll-smooth scroll-p-[20rem]