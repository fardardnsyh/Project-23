import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { toast } from "@/components/ui/use-toast";

const useInformationSave = () => {
  const { setItem, removeItem } = useLocalStorage();
  const [userInfo, setUserInfo] = useState({
    jobDetails: null,
    personalDetails: null,
    experienceDetails: [],
    skills: null,
    achievements: null,
  });

  useEffect(() => {
    if (userInfo.personalDetails) {
      setItem("personalDetails", userInfo.personalDetails);
    } else {
      removeItem("personalDetails");
    }
  }, [userInfo.personalDetails, setItem, removeItem]);

  useEffect(() => {
    if (userInfo.jobDetails) {
      setItem("jobDetails", userInfo.jobDetails);
    } else {
      removeItem("jobDetails");
    }
  }, [userInfo.jobDetails, setItem, removeItem]);

  useEffect(() => {
    if (userInfo.experienceDetails.length) {
      setItem("experienceDetails", userInfo.experienceDetails);
    } else {
      removeItem("experienceDetails");
    }
  }, [userInfo.experienceDetails, setItem, removeItem]);

  useEffect(() => {
    if (userInfo.skills) {
      setItem("skills", userInfo.skills);
    } else {
      removeItem("skills");
    }
  }, [userInfo.skills, setItem, removeItem]);

  useEffect(() => {
    if (userInfo.achievements) {
      setItem("achievements", userInfo.achievements);
    } else {
      removeItem("achievements");
    }
  }, [userInfo.achievements, setItem, removeItem]);

  const handleSaveJobDetails = (job) => {
    setUserInfo((prev) => ({ ...prev, jobDetails: job }));

    toast({
      title: "Job Details Saved Successfully",
    });
  };

  const handleSavePersonalDetails = (personal) => {
    setUserInfo((prev) => ({ ...prev, personalDetails: personal }));

    toast({
      title: "Personal Details Saved Successfully",
    });
  };

  const handleSaveSkills = (skillDetails) => {
    setUserInfo((prev) => ({ ...prev, skills: skillDetails }));

    toast({
      title: "Skills Saved Successfully",
    });
  };

  const handleSaveAchievements = (achievementDetails) => {
    setUserInfo((prev) => ({ ...prev, achievements: achievementDetails }));

    toast({
      title: "Achievement Saved Successfully",
    });
  };

  const handleSaveExperience = (experience) => {
    if (
      userInfo.experienceDetails.findIndex(
        (exp) => exp.id === experience.id
      ) !== -1
    ) {
      const newExpData = userInfo.experienceDetails.map((exp) => {
        if (exp.id === experience.id) return experience;
        else return exp;
      });
      setUserInfo((prev) => ({ ...prev, experienceDetails: newExpData }));
    } else {
      setUserInfo((prev) => ({
        ...prev,
        experienceDetails: [...prev.experienceDetails, experience],
      }));
    }

    toast({
      title: "Experience Saved Successfully",
    });
  };

  const handleRemoveExperience = (experienceId) => {
    const newExpData = userInfo.experienceDetails.filter(
      (exp) => exp.id !== experienceId
    );
    console.log(newExpData);
    setUserInfo((prev) => ({ ...prev, experienceDetails: newExpData }));
  };

  return {
    jobDet: userInfo.jobDetails,
    personalDet: userInfo.personalDetails,
    experienceDet: userInfo.experienceDetails,
    skillDet: userInfo.skills,
    achievementDet: userInfo.achievements,
    handleSavePersonalDetails,
    handleSaveJobDetails,
    handleSaveExperience,
    handleRemoveExperience,
    handleSaveSkills,
    handleSaveAchievements,
  };
};

export default useInformationSave;
