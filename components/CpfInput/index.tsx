import { View } from "react-native";
import { StyledCpfInput } from "./styles";
import { LabelComponent } from "../Label";
import { colors, theme } from "@/global/styles/theme";
import { useState } from "react";

interface CpfInputProps {
    label: string;
    placeholder: string;
    width?: number;
}

const CpfInput: React.FC<CpfInputProps> = ({ label, placeholder, width }) => {
    const [cpf, setCpf] = useState('');

    return (
        <View>
            <LabelComponent text={label} />
            <StyledCpfInput
                mode="outlined"
                placeholder={placeholder}
                value={cpf}
                onChangeText={setCpf}
                placeholderTextColor={colors.lightPurple}
                outlineColor={colors.lightPurple}
                textColor={colors.darkBlue}
                keyboardType="numeric"
                width={width}
                theme={theme}
            />
        </View>
    )
}

export default CpfInput;