"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { DatePicker } from "../common/date-picker";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import SillSelect from "../common/skill-select";
import { skillsData } from "@/constants";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";

const ExperienceSection = ({
  handleSaveExperience,
  experienceDetails,
  removeExperience,
}) => {
  const [experience, setExperience] = useState(experienceDetails);

  return (
    <section className="flex flex-col gap-4 border-b py-6">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="designation">Designation</Label>
          <Input
            type="text"
            id="designation"
            placeholder="Designation..."
            className="p-2 bg-black-1 placeholder:text-gray-1"
            onChange={(e) =>
              setExperience((prev) => ({
                ...prev,
                designation: e.target.value,
              }))
            }
            value={experience?.designation}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="organization">Organization</Label>
          <Input
            type="text"
            id="organization"
            placeholder="Organization..."
            className="p-2 bg-black-1 placeholder:text-gray-1 w-full"
            onChange={(e) =>
              setExperience((prev) => ({ ...prev, org: e.target.value }))
            }
            value={experience?.org}
          />
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="start-date">Start Date</Label>
          <DatePicker
            id="start-date"
            date={experience?.startDate}
            setDate={setExperience}
            isDisabled={false}
            startDate={experience?.startDate}
            endDate={experience?.endDate}
            type="startDate"
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="end-date">End Date</Label>
          <DatePicker
            id="end-date"
            date={experience?.endDate}
            setDate={setExperience}
            isDisabled={experience?.isCurrent}
            type="endDate"
            startDate={experience?.startDate}
            endDate={experience?.endDate}
          />

          <span className="flex items-center gap-2">
            <Checkbox
              id="current-job"
              onCheckedChange={(e) =>
                setExperience((prev) => ({
                  ...prev,
                  isCurrent: e,
                  endDate: e ? "Present" : prev.endDate,
                }))
              }
              checked={experience?.isCurrent}
            />
            <label
              htmlFor="current-job"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
            >
              Currently Working
            </label>
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <Label htmlFor="skills">Skills</Label>
        <SillSelect
          id="skills"
          defaultOptions={skillsData}
          placeholder="Select the skills applied in this position..."
          emptyIndicator={
            <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
              no results found.
            </p>
          }
          badgeClassName="bg-blue-500 hover:bg-blue-800 cursor-pointer"
          onChange={(skills) =>
            setExperience((prev) => ({
              ...prev,
              skills,
            }))
          }
          value={experience?.skills}
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <Label htmlFor="job-description">Job Description</Label>
        <Textarea
          id="job-description"
          placeholder="Describe your current role..."
          className="p-2 bg-black-1 placeholder:text-gray-1"
          value={experience?.description}
          onChange={(e) =>
            setExperience((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </div>
      <div className="flex justify-between">
        <Button
          className="bg-red-500 hover:bg-red-800"
          onClick={() => removeExperience(experienceDetails.id)}
        >
          <>
            <Trash size={20} className="mr-2" />
            Remove
          </>
        </Button>

        <Button
          className="bg-blue-500 hover:bg-blue-800"
          onClick={() =>
            handleSaveExperience({
              ...experience,
            })
          }
        >
          Save
        </Button>
      </div>
    </section>
  );
};

export default ExperienceSection;
