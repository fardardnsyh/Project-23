import React, { useEffect, useState } from "react";
import ExperienceSection from "./ExperienceSection";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import useLocalStorage from "@/hooks/useLocalStorage";

const ExperienceDetails = ({
  handleSaveExperience,
  handleRemoveExperience,
}) => {
  const [experiences, setExperiences] = useState([]);

  const { getItem } = useLocalStorage();

  useEffect(() => {
    const experienceDetailsFromLS = getItem("experienceDetails");

    if (!experienceDetailsFromLS || !experienceDetailsFromLS.length) {
      setExperiences([
        {
          designation: "",
          org: "",
          startDate: null,
          endDate: null,
          isCurrent: false,
          skills: [],
          description: "",
          id: crypto.randomUUID(),
        },
      ]);
    } else {
      setExperiences(experienceDetailsFromLS);
    }
  }, [getItem]);

  const removeExperience = (experienceId) => {
    setExperiences(experiences.filter((exp) => exp.id !== experienceId));

    toast({
      title: "Experience removed successfully.",
    });

    handleRemoveExperience(experienceId);
  };

  return (
    <div>
      {experiences.map((exp) => {
        return (
          <ExperienceSection
            key={exp.id}
            handleSaveExperience={handleSaveExperience}
            experienceDetails={exp}
            removeExperience={removeExperience}
          />
        );
      })}
      <Button
        className="bg-cyan-700 hover:bg-cyan-950 my-6"
        onClick={() =>
          setExperiences((prev) => [
            ...prev,
            {
              designation: "",
              org: "",
              startDate: null,
              endDate: null,
              isCurrent: false,
              skills: [],
              description: "",
              id: crypto.randomUUID(),
            },
          ])
        }
      >
        {" "}
        + Add Experience{" "}
      </Button>
    </div>
  );
};

export default ExperienceDetails;
