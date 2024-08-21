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
}

const DateInput: React.FC<DateInputProps> = ({ label = "", width, color, labelColor }) => {
    const [ date, setDate ] = useState<Date>(new Date())
    const [ show, setShow ] = useState<boolean>(false)
    const [isFocused, setIsFocused] = useState<boolean>(false)

    const showDatePicker = () => {
        setShow(true)
        setIsFocused(true)
    }

    const onChange = (event: any, selectedDate?:Date) => {
        const currentDate = selectedDate || date;
        // o seletor de data no ios é exibido como um modal que deve ser escondido apos a selecao, no android ja fecha automaticamente
        setShow(Platform.OS == 'ios');
        setDate(currentDate);
        setIsFocused(false)
    }

    return (
        <View>
            <LabelComponent
                text={label} 
                color={labelColor}
            />
            <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput  
                    value={date.toLocaleDateString()}
                    editable={false}
                    width={width}
                    isFocused={isFocused}
                />
                <IconWrapper>
                    <Icon name="calendar-month-outline" size={20} color="#99A4D6" />
                </IconWrapper>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChange}
                />
            )}
        </View>
    )
};

export default DateInput;