import { getThemeColor } from '@theme/utils/theme.utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    height: '85%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
  },
  scrollViewContainer: {
    paddingHorizontal: 10,
  },
  title: {
    color: getThemeColor('Primay'),
    fontSize: 20,
    fontWeight: '600',
  },
});

export default styles;
