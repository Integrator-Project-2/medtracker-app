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
}

const TimeInput: React.FC<TimeInputProps> = ({ label = "", width, color, borderColor}) => {
    const [time, setTime] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const showTimePicker = () => {
        setShow(true);
        setIsFocused(true);
    };

    const onChange = (event: any, selectedTime?: Date) => {
        const currentTime = selectedTime || time;
        setShow(Platform.OS === 'ios');
        setTime(currentTime);
        setIsFocused(false);
    };

    return (
        <View>
            <LabelComponent color={color} text={label} />
            <TouchableOpacity onPress={showTimePicker}>
                <StyledTextInput
                    value={time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
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
                    value={time}
                    mode="time"
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default TimeInput;
