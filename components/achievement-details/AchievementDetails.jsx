"use client";

import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import useLocalStorage from "@/hooks/useLocalStorage";

const AchievementDetails = ({ handleSaveAchievements }) => {
  const [achievements, setAchievements] = useState("");

  const { getItem } = useLocalStorage();

  useEffect(() => {
    const achievementsFromLS = getItem("achievements");

    if (achievementsFromLS) {
      setAchievements(achievementsFromLS);
    }
  }, [getItem]);

  return (
    <section className="flex flex-col gap-4">
      <div className="w-full flex flex-col gap-2">
        <Label htmlFor="achievements">Achievements</Label>
        <Textarea
          id="achievements"
          placeholder="Mention your achievements. Mention each achievement in a separate line for better readability..."
          className="p-2 bg-black-1 placeholder:text-gray-1"
          value={achievements}
          onChange={(e) => setAchievements(e.target.value)}
        />
      </div>
      <div className="text-right">
        <Button
          className="bg-blue-500 hover:bg-blue-800"
          onClick={() => handleSaveAchievements(achievements)}
        >
          Save
        </Button>
      </div>
    </section>
  );
};

export default AchievementDetails;
