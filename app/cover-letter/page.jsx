"use client";

import AchievementDetails from "@/components/achievement-details/AchievementDetails";
import ExperienceDetails from "@/components/experience/ExperienceDetails";
import HowItWorks from "@/components/how-it-works";
import JobDetails from "@/components/job-details/JobDetails";
import PDFDocument from "@/components/pdf-document";
import PersonalDetails from "@/components/personal-details/PersonalDetails";
import SkillDetails from "@/components/skill-details/SkillDetails";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import useInformationSave from "@/hooks/useInformationSave";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Loader } from "lucide-react";
import React, { useRef, useState } from "react";

const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

const CoverLetter = () => {
  const [coverLetter, setCoverLetter] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    personalDet,
    achievementDet,
    experienceDet,
    jobDet,
    skillDet,
    handleRemoveExperience,
    handleSaveAchievements,
    handleSaveExperience,
    handleSaveJobDetails,
    handleSavePersonalDetails,
    handleSaveSkills,
  } = useInformationSave();

  const generateCoverLetter = async () => {
    setIsSubmitting(true);
    const response = await fetch("/api/cover-letter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobDetails: jobDet,
        experienceDetails: experienceDet,
        achievementDetails: achievementDet,
        skillDetails: skillDet,
        personalDetails: personalDet,
      }),
    });
    let coverLetterResponse = await response.json();
    if (response.status !== 201) {
      //setError(prediction.detail);
      toast({
        title: "Something went wrong. Please try again!",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    toast({ title: "Cover Letter generated successfully." });
    setIsSubmitting(false);
    setCoverLetter(coverLetterResponse);

    event({
      action: "generate-cover-letter",
      category: "cover-letter",
      label: "Cover Letter Generated",
      value: "Generate Cover Letter",
    });
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(coverLetter);

    toast({ title: "Cover Letter copied successfully" });

    event({
      action: "copy-cover-letter",
      category: "cover-letter",
      label: "Cover Letter Copied",
      value: "Copy Cover Letter",
    });
  };

  return (
    <>
      <HowItWorks />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-h-screen flex flex-col md:flex-row md:justify-between  text-white-1 gap-10">
          <div className="md:flex-1">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="Perosnal Details"
                className="p-2 bg-gradient-to-b from-violet-600/[.15] via-transparent rounded-md "
              >
                <AccordionTrigger className="p-2">
                  Personal Details
                </AccordionTrigger>
                <AccordionContent className="px-2 py-4">
                  <PersonalDetails
                    handleSavePersonalDetails={handleSavePersonalDetails}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="Job-Details"
                className="p-2 bg-gradient-to-b from-violet-600/[.15] via-transparent rounded-md"
              >
                <AccordionTrigger className="p-2">Job Details</AccordionTrigger>
                <AccordionContent className="px-2 py-4">
                  <JobDetails handleSaveJobDetails={handleSaveJobDetails} />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="Experience"
                className="p-2 bg-gradient-to-b from-violet-600/[.15] via-transparent rounded-md"
              >
                <AccordionTrigger className="p-2">Experience</AccordionTrigger>
                <AccordionContent className="px-2 py-4">
                  <ExperienceDetails
                    handleSaveExperience={handleSaveExperience}
                    handleRemoveExperience={handleRemoveExperience}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="Skills"
                className="p-2 bg-gradient-to-b from-violet-600/[.15] via-transparent rounded-md"
              >
                <AccordionTrigger className="p-2">Skills</AccordionTrigger>
                <AccordionContent className="px-2 py-4">
                  <SkillDetails handleSaveSkills={handleSaveSkills} />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="Achievements"
                className="p-2 bg-gradient-to-b from-violet-600/[.15] via-transparent rounded-md"
              >
                <AccordionTrigger className="p-2">
                  Achievements
                </AccordionTrigger>
                <AccordionContent className="px-2 py-4">
                  <AchievementDetails
                    handleSaveAchievements={handleSaveAchievements}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col gap-4 md:flex-1 m-0">
            <Textarea
              id="cover-letter"
              placeholder="Generated Cover Letter will come here..."
              className="p-2 bg-black-1 placeholder:text-gray-1 min-h-[200px]"
              value={coverLetter}
              onChange={(e) => {
                coverLetter ? setCoverLetter(e.target.value) : null;
              }}
            />
            <Button
              className="bg-blue-500 hover:bg-blue-800"
              onClick={generateCoverLetter}
            >
              {isSubmitting ? (
                <>
                  Generating
                  <Loader size={20} className="animate-spin ml-2" />
                </>
              ) : (
                "Generate Cover Letter"
              )}
            </Button>

            <div className="flex flex-row justify-between gap-4">
              {coverLetter && (
                <PDFDownloadLink
                  document={<PDFDocument coverLetter={coverLetter} />}
                  filename="coverletter"
                  className="flex-1"
                >
                  <Button
                    className="bg-blue-500 hover:bg-blue-800 w-full disabled:cursor-default"
                    disabled={!coverLetter || isSubmitting}
                  >
                    Download
                  </Button>
                </PDFDownloadLink>
              )}
              {coverLetter && (
                <Button
                  className="bg-blue-500 hover:bg-blue-800 flex-1 disabled:cursor-default"
                  disabled={!coverLetter || isSubmitting}
                  onClick={handleCopy}
                >
                  Copy
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverLetter;
