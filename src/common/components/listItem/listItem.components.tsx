import { Text, View } from 'react-native';
import React from 'react';
import styles from './listItem.style';
import CheckBox from '@react-native-community/checkbox';
import { getThemeColor } from '@theme/utils/theme.utils';

interface ListItemProps {
  title: string;
  isDone: boolean;
}

const ListItem = ({ isDone, title }: ListItemProps) => {
  return (
    <View style={styles.container}>
      <CheckBox
        tintColors={{
          true: getThemeColor('Primay'),
          false: getThemeColor('Primay'),
        }}
        value={isDone}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ListItem;
