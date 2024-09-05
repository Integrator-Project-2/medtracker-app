import React, { useState } from 'react';
import { View } from 'react-native';
import { LabelComponent } from '../Label';
import MenuComponent from '../MenuComponent';
import StyledButton from './styles';


interface SelectInputProps {
  label: string;
  labelColor?: string;
  options: { value: string, label: string }[];
  selectedValue?: string;
  width?: number;
  height?: number;
  borderColor?: string;
  borderRadius?: number;
  onChange?: (value: string) => void;

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
  onChange
}) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(
    selectedValue ? options.find(option => option.value === selectedValue)?.label || '' : ''
  );

  const showMenu = () => setVisible(true);
  const hideMenu = () => setVisible(false);

  const handleSelect = (value: string, label: string) => {
    setSelected(label);
    if (onChange) {
      onChange(value);
    }
    hideMenu();
  };

  const menuOptions = options.map(option => ({
    label: option.label,
    onPress: () => handleSelect(option.value, option.label),
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
            {selected || 'Select...'} {/* Mostra o label selecionado */}
          </StyledButton>
        }
      />
    </View>
  );
};
