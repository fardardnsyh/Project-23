"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import useLocalStorage from "@/hooks/useLocalStorage";

const JobDetails = ({ handleSaveJobDetails }) => {
  const [jobDetails, setJobDetails] = useState({
    jobTitle: "",
    companyName: "",
    description: "",
  });

  const { getItem } = useLocalStorage();

  useEffect(() => {
    const jobDetailsFromLS = getItem("jobDetails");

    if (jobDetailsFromLS) {
      setJobDetails(jobDetailsFromLS);
    }
  }, [getItem]);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="job-title">Job Title</Label>
          <Input
            type="text"
            id="job-title"
            placeholder="Job Title..."
            className="p-2 bg-black-1 placeholder:text-gray-1"
            onChange={(e) =>
              setJobDetails((prev) => ({ ...prev, jobTitle: e.target.value }))
            }
            value={jobDetails?.jobTitle}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="company-name">Company Name</Label>
          <Input
            type="text"
            id="company-name"
            placeholder="Company Name..."
            className="p-2 bg-black-1 placeholder:text-gray-1"
            onChange={(e) =>
              setJobDetails((prev) => ({
                ...prev,
                companyName: e.target.value,
              }))
            }
            value={jobDetails?.companyName}
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <Label htmlFor="job-description">Job Description</Label>
        <Textarea
          id="job-description"
          placeholder="Job Description...."
          className="p-2 bg-black-1 placeholder:text-gray-1"
          onChange={(e) =>
            setJobDetails((prev) => ({ ...prev, description: e.target.value }))
          }
          value={jobDetails?.description}
        />
      </div>
      <div className="text-right">
        <Button
          className="bg-blue-500 hover:bg-blue-800"
          onClick={() => handleSaveJobDetails(jobDetails)}
        >
          Save
        </Button>
      </div>
    </section>
  );
};

export default JobDetails;
