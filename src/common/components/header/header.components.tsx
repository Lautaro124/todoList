import { View, Text, TextInput } from 'react-native';
import React from 'react';
import styles from './header.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface HeaderProps {
  isToDo: boolean;
  setIsToDo: (value: boolean) => void;
}

const Header = ({ isToDo, setIsToDo }: HeaderProps) => {
  const getTextStyleToselectedButton = (value: boolean) =>
    value ? styles.textSelectedButton : styles.textNoneSelectedButton;

  const getStyleToselectedButton = (value: boolean) =>
    value ? styles.selectedButton : styles.noSelectionButton;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Icon name="menu" size={25} />
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
        <Icon name="add" size={25} />
        <TextInput placeholder="Agrega una tarea" style={styles.input} />
      </View>
    </View>
  );
};

export default Header;
