import IntegerInput from "@/components/IntegerInput";
import { InputRadio } from "@/components/InputRadio";
import { Container } from "./styles";

interface DailyReminderFormProps {
    checkedValue: string;
    handlePress: (value: string) => void;
}

export default function DailyReminderForm({ checkedValue, handlePress }: DailyReminderFormProps) {
    return (
        <>
            <InputRadio
                text="Once Per Day"
                selected={checkedValue === 'oncePerDay'}
                value="oncePerDay"
                onPress={() => handlePress('oncePerDay')}
            />

            <InputRadio
                text="More Than Once Per Day"
                selected={checkedValue === 'moreThanOnePerDay'}
                value="moreThanOnePerDay"
                onPress={() => handlePress('moreThanOnePerDay')}
            />

            {checkedValue === 'moreThanOnePerDay' && (
                <Container>
                    <IntegerInput label='Times a day' width={148} fontSize={14}/>
                    <IntegerInput label='Hours Interval' width={148} fontSize={14}/>
                </Container>
                
            )}
        </>
    );
}
