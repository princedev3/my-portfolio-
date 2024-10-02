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
    location: "Nigeria-team",
    description:
      "I worked as a front-end developer for Entobo Engineering.",
    icon: React.createElement(CgWorkAlt),
    date: "2024-ongoing",
  },
  {
    title: "Frontend Developer @Coderden bootcamp",
    location: "Nigeria-online-team",
    description:
      "I graduated Coderden bootcamp, and i have been working collaboratively with the team as a frontend developer for over a year now.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "React Developer",
    location: "Udemy",
    description:
      "React mastery class by Ernest Apedo",
    icon: React.createElement(FaReact),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "SilverFox  Resturant",
    description:
      "online purchase of burger. Nextjs app-router, mongodb and prisma orm. and it is mobile responsive",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma","App-router","Stripe-payment"],
    imageUrl: "/silverfox.png",
  },
  {
    
    title: "Car Catalogue",
    description:
      "car rent services where you can chose fancy cars base on fuel type, model, year of production and manufacturers.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: "/rmtdev.jpeg",
  },
  {
    title: "Home Commercials",
    description:
      "this app is made is nextjs and app router mainly for home service to capture customer in need of apartment -Welcome Home: Where Comfort Meets Style.",
    tags: ["React", "Next.js","Prisma","Stripe","Tailwind","app-router"],
    imageUrl: "/home.png",
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
  
  "MongoDB",
  "Redux",
  
  
  "Express",
  "PostgreSQL",
  
  
  "Framer Motion",
] as const;