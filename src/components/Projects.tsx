"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectSingular from "./ProjectSingular";
import useSectionInview from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInview("Projects", 0.5);
  return (
    <div ref={ref} className="scroll-mt-28 mb-28 w-full" id="projects">
      <SectionHeading title="projects" />
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  gap-4 w-full">
        {projectsData.map((item, idx) => (
          <ProjectSingular key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
