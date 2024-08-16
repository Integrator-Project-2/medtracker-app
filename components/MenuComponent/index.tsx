import * as React from 'react';
import { Menu } from 'react-native-paper';
import { theme } from '@/global/styles/theme';

interface MenuOption {
  label: string;
  onPress: () => void;
}

interface MenuComponentProps {
  options: MenuOption[];
  visible: boolean;
  onDismiss: () => void;
  anchor: React.ReactNode;
}

const MenuComponent: React.FC<MenuComponentProps> = ({ options, visible, onDismiss, anchor }) => {
  return (
    <Menu
      visible={visible}
      onDismiss={onDismiss}
      theme={theme}
      contentStyle={{ backgroundColor: 'white' }}
      anchor={anchor} 
    >
      {options.map((option, index) => (
        <Menu.Item
          key={index}
          onPress={() => {
            option.onPress();
            onDismiss();
          }}
          title={option.label}
          titleStyle={{fontFamily: 'Poppins-Medium'}}
        />
      ))}
    </Menu>
  );
};

export default MenuComponent;
