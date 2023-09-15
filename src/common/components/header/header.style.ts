import { getThemeColor } from '@theme/utils/theme.utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    padding: 10,
    gap: 15,
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  selectedButton: {
    backgroundColor: getThemeColor('Primay'),
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  noSelectionButton: {
    backgroundColor: getThemeColor('Secondary'),
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  bottomContainer: {
    width: '100%',
    height: 50,
    backgroundColor: getThemeColor('Secondary'),
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
  },
  input: {
    width: '90%',
  },
  textSelectedButton: {
    color: getThemeColor('BacgroundLight'),
    fontSize: 17,
    fontWeight: '500',
  },
  textNoneSelectedButton: {
    color: getThemeColor('Primay'),
    fontSize: 17,
    fontWeight: '500',
  },
});

export default styles;
