import * as React from 'react';
import { IconButton } from 'react-native-paper';
import MenuComponent from '../MenuComponent';


interface MenuOption {
  label: string;
  onPress: () => void;
}

interface MenuButtonProps {
  options: MenuOption[];
  iconColor?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ options, iconColor }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <>
      <MenuComponent
        options={options}
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <IconButton
            icon="dots-horizontal"
            iconColor={iconColor}
            onPress={openMenu}
          />
        }
      />
    </>
  );
};

export default MenuButton;
