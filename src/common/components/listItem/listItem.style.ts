import { getThemeColor } from '@theme/utils/theme.utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: getThemeColor('Secondary'),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    color: getThemeColor('Primay'),
  },
  check: {
    color: getThemeColor('Primay'),
  },
});

export default styles;
