import Header from '@common/components/header/header.components';
import ListItem from '@common/components/listItem/listItem.components';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './home.style';
import { ScrollView } from 'react-native-gesture-handler';

function HomeScreen() {
  const [isToDo, setIsToDo] = useState(true);

  return (
    <View style={styles.container}>
      <Header isToDo={isToDo} setIsToDo={setIsToDo} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Diary</Text>
        <ScrollView style={styles.scrollViewContainer}>
          <ListItem isDone title="Barrer" changeState={() => { }} />
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;
