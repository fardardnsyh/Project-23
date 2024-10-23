"use client";

import React, { useEffect, useState } from "react";
import SkillSelect from "../common/skill-select";
import { Label } from "../ui/label";
import { skillsData } from "@/constants";
import { Button } from "../ui/button";
import useLocalStorage from "@/hooks/useLocalStorage";

const SkillDetails = ({ handleSaveSkills }) => {
  const [skills, setSkills] = useState([]);

  const { getItem } = useLocalStorage();

  useEffect(() => {
    const skillsFromLS = getItem("skills");

    if (skillsFromLS) {
      setSkills(skillsFromLS);
    }
  }, [getItem]);

  //console.log(skills);
  return (
    <section className="flex flex-col gap-4">
      <div className="w-full flex flex-col gap-2">
        <Label htmlFor="skills">Skills</Label>
        <SkillSelect
          id="skills"
          defaultOptions={skillsData}
          placeholder="Select all the skills that you possess..."
          emptyIndicator={
            <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
              no results found.
            </p>
          }
          badgeClassName="bg-blue-500 hover:bg-blue-800 cursor-pointer"
          onChange={(skills) => setSkills(skills)}
          value={skills}
        />
      </div>
      <div className="text-right">
        <Button
          className="bg-blue-500 hover:bg-blue-800"
          onClick={() => handleSaveSkills(skills)}
        >
          Save
        </Button>
      </div>
    </section>
  );
};

export default SkillDetails;
