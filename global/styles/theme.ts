import { DefaultTheme } from 'react-native-paper';


const colors = {
  navy: '#354DB0',
  lightPurple: '#99A4D6',
  darkBlue: '#212C5B',
};

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.navy,
    onSurfaceVariant: colors.lightPurple,
    onSurface: colors.darkBlue,
    text: colors.darkBlue,
    background: '#FFF',
    underlineColor: 'transparent',
    white: '#ffff',
    lightPurple: '#99A4D6',
    navy: '#354DB0',
    lightBlue: '#4D80F9',
    cardLightColor: '#F5F6FB',
    darkBlue: '#212C5B',
  },
};

export { colors, theme };
