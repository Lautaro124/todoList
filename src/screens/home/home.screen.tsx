import ListItem from '@common/components/listItem/listItem.components';
import React from 'react';
import { Text, View } from 'react-native';

function HomeScreen() {
  return (
    <View>
      <Text>sdadG</Text>
      <ListItem isDone title="Barrer" />
      <ListItem isDone={false} title="Barrer" />
    </View>
  );
}

export default HomeScreen;
