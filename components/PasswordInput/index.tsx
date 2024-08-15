import { colors, theme } from '@/global/styles/theme';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { LabelComponent } from '../Label';
import { useState } from 'react';
import { StyledTextInput } from '@/global/styles/StyledTextInput';

interface PasswordInputProps {
  label: string;
  placeholder: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, placeholder }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View>
      <LabelComponent text={label} />
      <StyledTextInput
        secureTextEntry={!isPasswordVisible}
        right={
          <TextInput.Icon
            icon={isPasswordVisible ? "eye-off" : "eye"}
            onPress={togglePasswordVisibility}
            style={{ marginTop: 25 }} 
          />
        }
        theme={theme}
        mode="outlined"
        placeholder={placeholder}
        placeholderTextColor={colors.lightPurple}
        outlineColor={colors.lightPurple}
        textColor={colors.darkBlue}
        value={password}
        onChangeText={setPassword}
      />
    </View>
  );
};

export default PasswordInput;
