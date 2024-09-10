import { View } from "react-native";
import { LabelComponent } from "../Label";
import { colors, theme } from "@/global/styles/theme";
import { StyledTextInput } from "@/global/styles/StyledTextInput";

interface CpfInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  width?: number;
}

const CpfInput: React.FC<CpfInputProps> = ({ label, placeholder, value, onChangeText, width }) => {
  return (
    <View>
      <LabelComponent text={label} />
      <StyledTextInput
        mode="outlined"
        placeholder={placeholder}
        value={value} 
        onChangeText={onChangeText} 
        placeholderTextColor={colors.lightPurple}
        outlineColor={colors.lightPurple}
        textColor={colors.darkBlue}
        keyboardType="numeric"
        width={width}
        theme={theme}
      />
    </View>
  );
};

export default CpfInput;
