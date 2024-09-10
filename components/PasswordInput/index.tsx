import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { colors, theme } from '@/global/styles/theme';
import { TextInput } from 'react-native-paper';
import { LabelComponent } from '../Label';
import { StyledTextInput } from '@/global/styles/StyledTextInput';

interface PasswordInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    error?: string;  
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, placeholder, value, onChangeText, error }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prev => !prev);
    };

    return (
        <View>
            <LabelComponent text={label} />
            <StyledTextInput
                secureTextEntry={!isPasswordVisible}
                right={
                    <TextInput.Icon
                        icon={isPasswordVisible ? 'eye-off' : 'eye'}
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
                value={value}
                onChangeText={onChangeText}
                error={!!error} 
            />
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
        </View>
    );
};

export default PasswordInput;
