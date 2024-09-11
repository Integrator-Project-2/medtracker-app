import { DefaultTheme } from 'react-native-paper';


const colors = {
  navy: '#354DB0',
  lightPurple: '#99A4D6',
  darkBlue: '#212C5B',
  lightBlue: '#4D80F9',
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
    lightPurpleWithOpacity: 'rgba(153, 164, 214, 0.14)',
    lightBlueWithOpacity: 'rgb(232, 239, 254)',
    navy: '#354DB0',
    lightNavy: 'rgba(53, 77, 176, 0.14)',
    disabled: 'rgba(53, 77, 176, 0.5)',
    lightBlue: '#4D80F9',
    cardLightColor: '#F5F6FB',
    darkBlue: '#212C5B',
    surface: 'white',
    red: '#D30000'
  },
};

export { colors, theme };
