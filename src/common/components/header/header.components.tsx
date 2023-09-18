import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from './header.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getThemeColor } from '@theme/utils/theme.utils';
import { TaskType } from '@common/enum/taskType.enum';
import { Task } from '@common/interface/task.interface';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  taskType: TaskType;
  onAddTask: (task: Task) => void;
  isToDo: boolean;
  setIsToDo: (value: boolean) => void;
}

const Header = ({ onAddTask, isToDo, setIsToDo }: HeaderProps) => {
  const [taskTitle, setTaskTitle] = useState('');
  const navigation = useNavigation();

  const getTextStyleToselectedButton = (value: boolean) =>
    value ? styles.textSelectedButton : styles.textNoneSelectedButton;

  const getStyleToselectedButton = (value: boolean) =>
    value ? styles.selectedButton : styles.noSelectionButton;

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Icon
          name="menu"
          size={30}
          color={getThemeColor('Primay')}
          onPress={openDrawer}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => setIsToDo(true)}
            style={getStyleToselectedButton(isToDo)}>
            <Text style={getTextStyleToselectedButton(isToDo)}>To Do</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsToDo(false)}
            style={getStyleToselectedButton(!isToDo)}>
            <Text style={getTextStyleToselectedButton(!isToDo)}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TextInput
          placeholder="Agrega una tarea"
          style={styles.input}
          placeholderTextColor={getThemeColor('placeHolder')}
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <Icon
          name="add"
          size={25}
          color={getThemeColor('Primay')}
          onPress={() => {
            onAddTask({
              title: taskTitle,
              isDone: false,
            });
          }}
        />
      </View>
    </View>
  );
};

export default Header;
