"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({
  date,
  setDate,
  isDisabled,
  type,
  id,
  startDate,
  endDate,
}) {
  //console.log(date);
  return (
    <Popover>
      <PopoverTrigger asChild disabled={isDisabled}>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
          id={id}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date && date !== "Present" ? (
            format(date, "PPP")
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-black-1 text-white-1" side="top">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) =>
            setDate((prev) => ({ ...prev, [type]: selectedDate }))
          }
          initialFocus
          startDate={startDate}
          endDate={endDate}
          type={type}
        />
      </PopoverContent>
    </Popover>
  );
}
