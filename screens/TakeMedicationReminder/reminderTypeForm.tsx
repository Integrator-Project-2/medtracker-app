import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { InputRadio } from "@/components/InputRadio";

export default function ReminderTypeForm() {
    const { control, setValue, watch } = useFormContext();
    const reminder_type = watch("reminder_type");

    return (
        <>
            <Controller
                name="reminder_type"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <>
                        <InputRadio
                            text="Unique Reminder"
                            selected={value === 'unique reminder'}
                            value="unique reminder"
                            onPress={() => onChange('unique reminder')}
                        />
                        <InputRadio
                            text="Daily Reminder"
                            selected={value === 'daily reminder'}
                            value="daily reminder"
                            onPress={() => onChange('daily reminder')}
                        />
                    </>
                )}
            />
        </>
    );
}
