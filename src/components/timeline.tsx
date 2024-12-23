import React from "react";
// import { Badge } from "./ui/badge";

const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={`${className}`} {...props} />;
});
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`${className} group relative pb-8 pl-8 sm:pl-44`}
    {...props}
  />
));

TimelineItem.displayName = "TimelineItem";

const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`${className} mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-primary-foreground/95 after:bg-foreground group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[10rem] sm:after:left-0 sm:after:ml-[10rem]`}
    {...props}
  />
));

TimelineHeader.displayName = "TimelineHeader";

const TimelineTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={`${className} textxl font-bold text-primary`}
    {...props}
  />
));

TimelineTitle.displayName = "TimelineTitle";

const TimelineTime = ({ className, ...props }) => {
  return (
    <div
      className={`${className} min-w-[80px]  px-2 h-[26px] items-center text-sm overflow-hidden justify-center rounded-[10px] bg-slate-950 text-white   left-3 mb-3 inline-flex translate-y-0.5   font-semibold uppercase sm:absolute sm:mb-0 text `}
    >
      <p className=""> {props.children}</p>
    </div>
  );
};
TimelineTime.displayName = "TimelineTime";

const TimelineDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`${className}  text-muted-foreground`} {...props} />
));
TimelineDescription.displayName = "TimelineDescription";

export {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTitle,
  TimelineTime,
  TimelineDescription,
};
