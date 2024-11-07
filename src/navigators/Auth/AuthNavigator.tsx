import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { AuthScreens } from '../../types/navigation';
import Welcome from '../../screens/auth/Welcome';
import Onboarding from '../../screens/auth/Onboarding';
import Signup from '../../screens/auth/Signup';
import Login from '../../screens/auth/Login';
import CreatePassword from '../../screens/auth/CreatePassword';
import CreatePasscode from '../../screens/auth/CreatePasscode';
import ReenterPasscode from '../../screens/auth/ReenterPasscode';
import GenerateSeedPhrase from '../../screens/auth/GenerateSeedPhrase';
import ForgotPassword from '../../screens/auth/ForgotPassword';
import { HomeNavigator } from '../Home';
import BusinessDetails from '../../screens/auth/BusinessDetails';
import { PartnerHomeNavigator } from '../PartnerHome';

const AuthStack = createStackNavigator<AuthScreens>();

const AuthNavigator = () => {
  const navigation: any = useNavigation();

  useEffect(() => {
    navigation.navigate('Onboarding');
  }, []);

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <AuthStack.Screen name="Welcome" component={Welcome} /> */}
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="CreatePasscode" component={CreatePasscode} />
      <AuthStack.Screen name="ReenterPasscode" component={ReenterPasscode} />
      <AuthStack.Screen name="CreatePassword" component={CreatePassword} />
      <AuthStack.Screen name="GenerateSeedPhrase" component={GenerateSeedPhrase} />
      <AuthStack.Screen name='Home' component={HomeNavigator} />
      {/*<AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="BusinessDetails" component={BusinessDetails} />
      <AuthStack.Screen name='Bookings' component={PartnerHomeNavigator} /> */}
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
