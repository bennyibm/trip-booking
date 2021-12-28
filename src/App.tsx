/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainStakNavigation } from './navigations';

const theme = {
  ...DefaultTheme,
  colors: { 
    ...DefaultTheme.colors,
    border : "transparent"
  }
}


export default function App() {

  return (
    <NavigationContainer theme={theme}>
      <MainStakNavigation />
    </NavigationContainer>
  );
};

