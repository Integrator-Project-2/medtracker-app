import * as React from 'react';
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
    text: colors.darkBlue,
    background: '#FFF',
    underlineColor: 'transparent',
  },
};

export { colors, theme };
