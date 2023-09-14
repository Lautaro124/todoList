import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from './interface/home.interface';
import { ScreenNames } from '@common/enum/screenName.interface';
import HomeScreen from '../home.screen';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenNames.Home}>
      <Stack.Screen name={ScreenNames.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
