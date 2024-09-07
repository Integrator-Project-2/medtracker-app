import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import IntegerInput from "@/components/IntegerInput";
import { InputRadio } from "@/components/InputRadio";
import { Container } from "./styles";

export default function DailyReminderForm() {
    const { control, watch } = useFormContext();
    const frequency_per_day = watch("frequency_per_day");

    return (
        <>
            <Controller
                name="frequency_per_day"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <>
                        <InputRadio
                            text="Once Per Day"
                            selected={value === 1}
                            value="oncePerDay"
                            onPress={() => onChange(1)}
                        />
                        <InputRadio
                            text="More Than Once Per Day"
                            selected={value > 1}
                            value="moreThanOnePerDay"
                            onPress={() => onChange(2)}
                        />
                    </>
                )}
            />
            
            {frequency_per_day > 1 && (
                <Container>
                    <Controller
                        name="frequency_per_day"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <IntegerInput
                                label='Times a day'
                                width={148}
                                fontSize={14}
                                value={value}
                                onChange={(val) => onChange(val)}
                            />
                        )}
                    />
                    <Controller
                        name="frequency_hours"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <IntegerInput
                                label='Hours Interval'
                                width={148}
                                fontSize={14}
                                value={value}
                                onChange={(val) => onChange(val)}
                            />
                        )}
                    />
                </Container>
            )}
        </>
    );
}
