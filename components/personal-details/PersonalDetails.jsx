import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import useLocalStorage from "@/hooks/useLocalStorage";

const PersonalDetails = ({ handleSavePersonalDetails }) => {
  const [personalDetails, setpersonalDetails] = useState({
    name: "",
    mobileNumber: "",
    email: "",
  });

  const { getItem } = useLocalStorage();

  useEffect(() => {
    const personalDetailsFromLS = getItem("personalDetails");

    if (personalDetailsFromLS) {
      setpersonalDetails(personalDetailsFromLS);
    }
  }, [getItem]);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Name..."
            className="p-2 bg-black-1 placeholder:text-gray-1"
            onChange={(e) =>
              setpersonalDetails((prev) => ({ ...prev, name: e.target.value }))
            }
            value={personalDetails?.name}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="mobile-number">Mobile Number</Label>
          <Input
            type="tel"
            id="mobile-number"
            placeholder="XXXXXXXXX"
            className="p-2 bg-black-1 placeholder:text-gray-1"
            onChange={(e) =>
              setpersonalDetails((prev) => ({
                ...prev,
                mobileNumber: e.target.value,
              }))
            }
            value={personalDetails?.mobileNumber}
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="abc@google.com"
          className="p-2 bg-black-1 placeholder:text-gray-1"
          onChange={(e) =>
            setpersonalDetails((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          value={personalDetails?.email}
        />
      </div>
      <div className="text-right">
        <Button
          className="bg-blue-500 hover:bg-blue-800"
          onClick={() => handleSavePersonalDetails(personalDetails)}
        >
          Save
        </Button>
      </div>
    </section>
  );
};

export default PersonalDetails;
