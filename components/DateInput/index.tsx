import { useState } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import { StyledTextInput, IconWrapper } from "./styles";
import  DateTimePicker  from "@react-native-community/datetimepicker";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LabelComponent } from "../Label";


interface DateInputProps {
    label?: string;
    width: number;
    color?: string;
    labelColor?: string;
    borderColor?: string;
    value: Date;
    onChange: (date: Date) => void; 
}

interface DateInputProps {
    label?: string;
    value: Date;
    width: number;
    color?: string;
    labelColor?: string;
    borderColor?: string;
    onChange: (date: Date) => void; 
}

// DateInput.tsx
const DateInput: React.FC<DateInputProps> = ({
    label = "",
    value,
    width,
    color,
    labelColor,
    borderColor,
    onChange
}) => {
    const [show, setShow] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const showDatePicker = () => {
        setShow(true);
        setIsFocused(true);
    };

    const adjustDateToLocalTime = (date: Date): Date => {
        const localOffset = date.getTimezoneOffset() * 60000;
        const localDate = new Date(date.getTime() - localOffset);
        return localDate;
    };
    

    const handleDateChange = (event: any, selectedDate?: Date) => {
        if (selectedDate) {
            const localDate = adjustDateToLocalTime(selectedDate);
            console.log("Data ajustada para o horário local:", localDate);
            onChange(localDate);
        } else {
            onChange(new Date());
        }
        setShow(Platform.OS == 'ios');
        setIsFocused(false);
    };
    
    

    return (
        <View>
            <LabelComponent text={label} color={labelColor} />
            <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput
                    value={value ? value.toLocaleDateString() : ""} // Verifica se o value é válido
                    editable={false}
                    width={width}
                    isFocused={isFocused}
                    borderColor={borderColor}
                />
                <IconWrapper>
                    <Icon name="calendar-month-outline" size={20} color="#99A4D6" />
                </IconWrapper>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    value={value || new Date()}  // Usa um valor padrão se value for undefined
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}
        </View>
    );
};

export default DateInput;
