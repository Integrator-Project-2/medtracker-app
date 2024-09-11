import * as React from 'react';
import { IconButton } from 'react-native-paper';
import MenuComponent from '../MenuComponent';
import { theme } from '@/global/styles/theme';

interface MenuOption {
  label: string;
  onPress: () => void;
}

interface MenuButtonProps {
  options: MenuOption[];
  iconColor?: string;
  style?: object; 
}

const MenuButton: React.FC<MenuButtonProps> = ({ options, iconColor = theme.colors.lightBlue, style }) => {
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
            style={style} // Passe a prop style aqui
          />
        }
      />
    </>
  );
};

export default MenuButton;
