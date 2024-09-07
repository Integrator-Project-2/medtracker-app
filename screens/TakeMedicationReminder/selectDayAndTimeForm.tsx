import React from "react";
import { useFormContext } from "react-hook-form";
import DateInput from "@/components/DateInput";
import TimeInput from "@/components/TimeInput";
import { theme } from "@/global/styles/theme";

export default function SelectDayAndTimeForm() {
    const { setValue, watch } = useFormContext();

    return (
        <>
            <DateInput
                label='Start Date'
                width={316}
                borderColor={theme.colors.lightBlue}
                value={watch("day")}
                onChange={(date) => setValue("day", date)}
            />
            <TimeInput
                label="Start Time"
                width={316}
                borderColor={theme.colors.lightBlue}
                value={watch("remind_time")}
                onChange={(time) => setValue("remind_time", time)}
            />
        </>
    );
}
