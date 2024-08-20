import { InputRadio } from "@/components/InputRadio";

interface ReminderTypeFormProps {
    checkedValue: string;
    handlePress: (value: string) => void;
}

export default function ReminderTypeForm({ checkedValue, handlePress }: ReminderTypeFormProps) {
    return (
        <>
            <InputRadio
                text="Unique Reminder"
                selected={checkedValue === 'uniqueReminder'}
                value="uniqueReminder"
                onPress={handlePress}
            />

            <InputRadio
                text="Daily Reminder"
                selected={checkedValue === 'dailyReminder'}
                value="dailyReminder"
                onPress={handlePress}
            />
        </>
    )
}
