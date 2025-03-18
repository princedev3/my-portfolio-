"use client";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

type projectProps = (typeof projectsData)[number];

export default function ProjectSingular({
  title,
  description,
  tags,
  imageUrl,
  url,
}: projectProps) {
  return (
    <motion.div className="group hover:scale-105 transition-all duration-300 rounded-xl overflow-hidden w-full bg-gray-100 h-[380px]  hover:shadow-lg shadow-sm ">
      <section className="overflow-hidden relative transition">
        <Image
          src={imageUrl}
          alt="project"
          quality={95}
          width={300}
          height={200}
          className="object-cover  rounded-t-xl h-[180px] w-full"
        />
        <div className="px-1 flex flex-col h-full rounded-lg">
          <a
            href={url}
            target="_blank"
            className="cursor-pointer my-2 underline text-gray-700 hover:text-gray-900"
          >
            {title} Link{" "}
          </a>
          <ul className="flex flex-wrap gap-2  h-full sm:mt-auto">
            {tags.map((item, idx) => (
              <li
                key={idx}
                className="bg-black/[0.7] px-2 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
