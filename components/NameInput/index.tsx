import React from "react";
import { View } from "react-native";
import {  StyledNameInput } from "./style";
import { TextInput } from "react-native-paper";
import { LabelComponent } from "../Label";

interface NameInputProps {
    label: string;
    placeholder: string;
}

export const NameInput:React.FC<NameInputProps> = ({ label, placeholder }) => {
    const [text, setText] = React.useState('');
    const theme = {
      roundness: 10,
      colors: { 
          primary: '#354DB0', 
          underlineColor: 'transparent',
    }
  }
  
    return (
      <View>
        <LabelComponent text={label} />
        <StyledNameInput
          mode="outlined"
          placeholder={placeholder}
          value={text}
          onChangeText={setText}
          placeholderTextColor="#99A4D6"
          outlineColor="#99A4D6"
          theme={theme}
          width={316}
          textColor="#212C5B"
        />
      </View>
    );
  };
  