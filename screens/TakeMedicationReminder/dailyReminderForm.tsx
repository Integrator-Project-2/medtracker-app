import React from "react";
import { useFormContext } from "react-hook-form";
import IntegerInput from "@/components/IntegerInput";
import { InputRadio } from "@/components/InputRadio";
import { Container } from "./styles";

export default function DailyReminderForm() {
    const { watch, setValue, register } = useFormContext();
    const reminder_type = watch("reminder_type");
    const frequency_per_day = watch("frequency_per_day");

    return (
        <>
            <InputRadio
                text="Once Per Day"
                selected={frequency_per_day === 1}
                value="oncePerDay"
                onPress={() => setValue("frequency_per_day", 1)}
            />

            <InputRadio
                text="More Than Once Per Day"
                selected={frequency_per_day > 1}
                value="moreThanOnePerDay"
                onPress={() => setValue("frequency_per_day", 2)}
            />

            {frequency_per_day > 1 && (
                <Container>
                    <IntegerInput
                        label='Times a day'
                        width={148}
                        fontSize={14}
                        value={watch("frequency_per_day")}
                        onChange={(value) => setValue("frequency_per_day", value)}
                    />
                    <IntegerInput
                        label='Hours Interval'
                        width={148}
                        fontSize={14}
                        value={watch("frequency_hours")}
                        onChange={(value) => setValue("frequency_hours", value)}
                    />
                </Container>
            )}
        </>
    );
}
