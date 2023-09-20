import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenNames } from '@common/enum/screenName.enum';
import HomeScreen from '../home.screen';
import WeelyScreen from '@screens/weekly/weekly.screen';
import MounthlyScreen from '@screens/mouthly/mounthly.screen';
import { getThemeColor } from '@theme/utils/theme.utils';

const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName={ScreenNames.Home}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: getThemeColor('Secondary'),
        drawerActiveTintColor: getThemeColor('Primay'),
        drawerInactiveBackgroundColor: getThemeColor('BacgroundLight'),
      }}>
      <Drawer.Screen name={ScreenNames.Home} component={HomeScreen} />
      <Drawer.Screen name={ScreenNames.Weekly} component={WeelyScreen} />
      <Drawer.Screen name={ScreenNames.Monthly} component={MounthlyScreen} />
    </Drawer.Navigator>
  );
};

export default HomeStack;
