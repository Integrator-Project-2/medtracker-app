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
    lightPurpleWitOpacity: 'rgba(153, 164, 214, 0.14)',
    navy: '#354DB0',
    lightNavy: 'rgba(53, 77, 176, 0.14)',
    lightBlue: '#4D80F9',
    cardLightColor: '#F5F6FB',
    darkBlue: '#212C5B',
  },
};

export { colors, theme };
