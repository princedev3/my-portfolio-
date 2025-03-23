import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Entobo Engineering",
    location: "Remote",
    description: "I worked as a front-end developer for Entobo Engineering.",
    icon: React.createElement(CgWorkAlt),
    website: "https://entobo.com",
    date: "2024-ongoing",
  },
  {
    title: "Frontend Engineer – Goziri Insurance Brokerage-2023",
    location: "Remote",
    description:
      "As a Software Engineer at Goziri Insurance Brokerage, I collaborated with the team in the development of the UI and implementation of the functionality. I ensure adequate compliance with the culture of clean code.",
    icon: React.createElement(LuGraduationCap),
    website: "https://goziri.com",
    date: "2023",
  },
  {
    title: "Frontend Intern – Coderden Cohort -2023",
    location: "Remote",
    description:
      "Extensive experience in React, Next.js, and TypeScript. I worked on a variety of projects,eg landing page.",
    icon: React.createElement(FaReact),
    website: "https://www.linkedin.com/codersden/",
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "education",
    url: "https://education-hazel.vercel.app/",
    description:
      "online purchase of ticket. Nextjs app-router, postgres,next-auth and prisma orm. and it is mobile responsive",
    tags: [
      "React",
      "Next.js",
      "Postgres",
      "Tailwind",
      "shadecn",
      "Prisma",
      "App-router",
      "stripe",
      "next-auth",
    ],
    imageUrl: "/education.jpg",
  },
  {
    title: "Mini Market",
    url: "https://new-next-resturant.vercel.app",
    description:
      "online purchase of ticket. Nextjs app-router, postgres,next-auth and prisma orm. and it is mobile responsive",
    tags: [
      "React",
      "Next.js",
      "Postgres",
      "Tailwind",
      "shadecn",
      "Prisma",
      "App-router",
      "stripe",
      "next-auth",
    ],
    imageUrl: "/mini-market.jpg",
  },
  {
    title: "Blog",
    url: "https://my-blog-liard-mu-72.vercel.app/",
    description:
      "online purchase of ticket. Nextjs app-router, postgres,next-auth and prisma orm. and it is mobile responsive",
    tags: [
      "React",
      "Next.js",
      "Postgres",
      "Tailwind",
      "shadecn",
      "Prisma",
      "App-router",
      "next-auth",
    ],
    imageUrl: "/blog.jpg",
  },
  {
    title: "Ticketing app",
    url: "https://ticket-sale-delta.vercel.app/",
    description:
      "online purchase of ticket. Nextjs app-router, postgres,next-auth and prisma orm. and it is mobile responsive",
    tags: [
      "React",
      "Next.js",
      "Postgres",
      "Tailwind",
      "shadecn",
      "Prisma",
      "App-router",
      "Paystack",
      "pusher",
      "next-auth",
    ],
    imageUrl: "/ticket.png",
  },
  {
    title: "Transaction app",
    url: "https://new-transactions.vercel.app/",
    description:
      "online transaction record keeping. Nextjs app-router, postgres and prisma orm,next-auth login,email verification,forgot password feature. and it is mobile responsive",
    tags: [
      "React",
      "Next.js",
      "Postgres",
      "Tailwind",
      "shadecn",
      "Prisma",
      "App-router",
      "next-auth",
    ],
    imageUrl: "/Capture.PNG",
  },
  {
    title: "Car Catalogue",
    url: "https://cars-showcase-uf5p.vercel.app/",
    description:
      "car rent services where you can chose fancy cars base on fuel type, model, year of production and manufacturers.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "axios"],
    imageUrl: "/rmtdev.jpeg",
  },
  {
    title: "Dessert shop",
    url: "https://dessert-app-livid.vercel.app/",
    description:
      "this app is made is nextjs and app router mainly for dessert service to capture customer in need of delicious and tasty desserts, a place  Where taste Meets Style.",
    tags: ["React", "Next.js", "Stripe", "Tailwind"],
    imageUrl: "/dessert.png",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Tankstack-Query",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
