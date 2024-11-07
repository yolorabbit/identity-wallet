import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './Auth';

export const navigationRef = React.createRef<any>();
import FlashMessage from "react-native-flash-message";

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthNavigator />
      <FlashMessage position='top' />
    </NavigationContainer>
  );
};

export default RootNavigator;
