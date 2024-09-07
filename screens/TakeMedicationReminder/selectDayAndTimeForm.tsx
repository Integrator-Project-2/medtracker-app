import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import DateInput from "@/components/DateInput";
import TimeInput from "@/components/TimeInput";
import { theme } from "@/global/styles/theme";

export default function SelectDayAndTimeForm() {
    const { control, watch } = useFormContext();

    return (
        <>
            <Controller
                name="day"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <DateInput
                        label='Start Date'
                        width={316}
                        borderColor={theme.colors.lightBlue}
                        value={value}
                        onChange={(date) => onChange(date)}
                    />
                )}
            />
            <Controller
                name="remind_time"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TimeInput
                        label="Start Time"
                        width={316}
                        borderColor={theme.colors.lightBlue}
                        value={value}
                        onChange={(time) => onChange(time)}
                    />
                )}
            />
        </>
    );
}
