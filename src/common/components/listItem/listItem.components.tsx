import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './listItem.style';
import CheckBox from '@react-native-community/checkbox';
import { getThemeColor } from '@theme/utils/theme.utils';
import { Task } from '@common/interface/task.interface';

interface ListItemProps extends Task {
  changeState: () => void;
}

const ListItem = ({ isDone, title, changeState }: ListItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={changeState}>
      <CheckBox
        tintColors={{
          true: getThemeColor('Primay'),
          false: getThemeColor('Primay'),
        }}
        onChange={changeState}
        value={isDone}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;
