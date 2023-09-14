import { BaseColors, ThemeColor } from '@theme/theme.colors';

export const getThemeColor = (color: ThemeColor) => {
  return BaseColors[color];
};
