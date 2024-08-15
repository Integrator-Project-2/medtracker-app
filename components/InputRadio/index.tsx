import { InputContainer, InputRadioText } from "./styles";
import { RadioButton } from "react-native-paper";

interface InputRadioProps {
    text: string;
    selected: boolean;
    value: string;
    onPress: (value: string) => void;
}

export function InputRadio({ text, selected, value, onPress  }: InputRadioProps) {
    return (
        <InputContainer
            onPress={() => onPress(value)}
        >
            <InputRadioText>{text}</InputRadioText>

            <RadioButton
                value={value}
                status={ selected ? 'checked' : 'unchecked' }
                color="#4D80F9"
            />
        </InputContainer>
    )
}