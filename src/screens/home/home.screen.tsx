import Header from '@common/components/header/header.components';
import ListItem from '@common/components/listItem/listItem.components';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

function HomeScreen() {
  const [isToDo, setIsToDo] = useState(true);

  return (
    <View>
      <Header isToDo={isToDo} setIsToDo={setIsToDo} />
      <Text>sdadG</Text>
      <ListItem isDone title="Barrer" />
      <ListItem isDone={false} title="Barrer" />
    </View>
  );
}

export default HomeScreen;
