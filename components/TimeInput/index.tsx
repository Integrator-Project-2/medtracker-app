import { useState } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LabelComponent } from "../Label";
import { IconWrapper, StyledTextInput } from "../DateInput/styles";

interface TimeInputProps {
    label?: string;
    width: number;
    color?: string;
    borderColor?: string;
    value: Date;  // Adiciona a prop value aqui
    onChange: (time: Date) => void;  // Adiciona a prop onChange
}

// TimeInput.tsx
const TimeInput: React.FC<TimeInputProps> = ({ label = "", width, color, borderColor, value, onChange }) => {
    const [show, setShow] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const showTimePicker = () => {
        setShow(true);
        setIsFocused(true);
    };

    const handleChange = (event: any, selectedTime?: Date) => {
        const currentTime = selectedTime || new Date();  // Usa um valor padrão se selectedTime for undefined
        setShow(Platform.OS === 'ios');
        onChange(currentTime);  // Chama o onChange com o tempo selecionado
        setIsFocused(false);
    };

    return (
        <View>
            <LabelComponent color={color} text={label} />
            <TouchableOpacity onPress={showTimePicker}>
                <StyledTextInput
                    value={value ? value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ""}  // Verifica se o value é válido
                    editable={false}
                    width={width}
                    isFocused={isFocused}
                    borderColor={borderColor}
                />
                <IconWrapper>
                    <Icon name="clock-outline" size={20} color="#99A4D6" />
                </IconWrapper>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    value={value || new Date()}  // Usa um valor padrão se value for undefined
                    mode="time"
                    display="default"
                    onChange={handleChange}
                />
            )}
        </View>
    );
};

export default TimeInput;
