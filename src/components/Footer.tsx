import React from 'react'

export default function Footer () {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-white/80">
    <small className="mb-2 block text-xs ">
         &copy; 2023 marvin. made with <span className='text-red-500'>❤</span>
    </small>
    <p className="text-xs">
        <span className="font-semibold">About this website</span> built with React & Next.JS (App Router & Server ACtions),TypeSCript, Tailwind CSS, Framer Motion, React Email & web3forms, Vercel hoisting.
    </p>
</footer>
  )
}

