import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTitle,
  TimelineTime,
  TimelineDescription,
} from "./timeline";
import { experiencesData } from "@/lib/data";

const TimelineOverview = () => {
  return (
    <Timeline className="mx-auto max-w-2xl">
      {experiencesData.map((experience, index) => (
        <TimelineItem key={index}>
          <TimelineHeader>
            <TimelineTime>{experience.date}</TimelineTime>
            <TimelineTitle>{experience.title}</TimelineTitle>
          </TimelineHeader>
          <TimelineDescription>{experience.description}</TimelineDescription>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineOverview;
