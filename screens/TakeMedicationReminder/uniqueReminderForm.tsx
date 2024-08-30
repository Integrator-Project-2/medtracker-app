import DateInput from "@/components/DateInput";
import TimeInput from "@/components/TimeInput";
import { theme } from "@/global/styles/theme";

export default function UniqueReminderForm() {
    return (
        <>
           <DateInput label='Start Date' width={316} borderColor={theme.colors.lightBlue}/>
           <TimeInput label="Start Time"  width={316} borderColor={theme.colors.lightBlue}/>
        </>
    )
}
