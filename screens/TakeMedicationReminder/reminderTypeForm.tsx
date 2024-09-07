import React from "react";
import { useFormContext } from "react-hook-form";
import { InputRadio } from "@/components/InputRadio";

export default function ReminderTypeForm() {
    const { watch, setValue } = useFormContext();
    const reminder_type = watch("reminder_type");

    return (
        <>
            <InputRadio
                text="Unique Reminder"
                selected={reminder_type === 'unique reminder'}
                value="unique reminder"
                onPress={() => setValue("reminder_type", 'unique reminder')}
            />

            <InputRadio
                text="Daily Reminder"
                selected={reminder_type === 'daily reminder'}
                value="daily reminder"
                onPress={() => setValue("reminder_type", 'daily reminder')}
            />
        </>
    );
}
