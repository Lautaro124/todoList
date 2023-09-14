import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from '@screens/home/navigation/home.navigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

export default App;
