import React, { useState } from 'react';
import { View } from 'react-native';
import { LabelComponent } from '../Label';
import MenuComponent from '../MenuComponent';
import StyledButton from './styles';


interface SelectInputProps {
  label: string;
  labelColor?: string;
  options: string[];
  selectedValue?: string;
  width?: number;
  height?: number;
  borderColor?: string;
  borderRadius?: number;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  labelColor,
  options,
  selectedValue,
  width,
  height,
  borderColor,
  borderRadius,
}) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(selectedValue || '');

  const showMenu = () => setVisible(true);
  const hideMenu = () => setVisible(false);

  const handleSelect = (value: string) => {
    setSelected(value);
    hideMenu();
  };

  const menuOptions = options.map(option => ({
    label: option,
    onPress: () => handleSelect(option),
  }));

  return (
    <View>
      <LabelComponent
        text={label} 
        color={labelColor}
      />
      <MenuComponent
        options={menuOptions}
        visible={visible}
        onDismiss={hideMenu}
        anchor={
          <StyledButton
            mode="outlined"
            onPress={showMenu}
            width={width}
            height={height}
            borderColor={borderColor}
            borderRadius={borderRadius}
            isFocused={visible}
          >
            {selected || 'Select...'}
          </StyledButton>
        }
      />
    </View>
  );
};
