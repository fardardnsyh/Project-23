import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const HowItWorks = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        value="How it Works?"
        className="p-2 bg-gradient-to-b from-violet-600/[.15] via-transparent text-white-1"
      >
        <AccordionTrigger className="p-2 flex justify-center items-center text-xl md:text-2xl">
          How it Works?
        </AccordionTrigger>
        <AccordionContent className="px-2 py-4 border-b flex flex-col gap-4 md:px-8">
          <p className="bg-gradient-to-r from-blue-950 to-blue-200 p-2 rounded">
            1. Use the form on the left to provide your personal details, job
            details, work experience, skills, and achievements. Click on{" "}
            <span className="font-bold rounded p-1 bg-blue-500">Save</span> for
            each section to save the entered values
          </p>
          <p className="bg-gradient-to-r from-blue-950 to-blue-200 p-2 rounded">
            2. Once you&apos;ve completed all the sections, click the{" "}
            <span className="font-bold rounded p-1 bg-blue-500">
              Generate Cover Letter
            </span>{" "}
            button below.
          </p>
          <p className="bg-gradient-to-r from-blue-950 to-blue-200 p-2 rounded">
            3. Your personalized cover letter will be displayed on the right.
            You can download/copy the generated cover Letter for further review
            and customization
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default HowItWorks;
