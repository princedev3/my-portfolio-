"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import useSectionInview from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInview("About", 0.5);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.175,
      }}
      className="mb-28 max-w-[45rem] text-center scroll-mt-28"
      id="about"
    >
      <SectionHeading title="about me" />
      <div className="mb-3 text-lg leading-8">
        <p className="">
          {" "}
          I am a passionate and detail-oriented Frontend Developer with a strong
          foundation in building responsive
        </p>
        <p className="my-2">
          {" "}
          and I am proficient in using modern front-end technologies like React
        </p>
        <p className="">
          user-friendly web applications. With expertise in modern frameworks
          like React and Next.js, I strive to create seamless digital
          experiences that combine functionality with aesthetics. My commitment
          to clean, maintainable code and continuous learning ensures that I
          stay at the forefront of web development trends. I thrive in
          collaborative environments where I can contribute to impactful
          projects and help bring ideas to life through technology.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
