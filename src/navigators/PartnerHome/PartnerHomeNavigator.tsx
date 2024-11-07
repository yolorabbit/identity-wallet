import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { PartnerMoreScreens } from "../../types/navigation";
import { PartnerBottomTabNavigator } from '../PartnerBottomTab';
// import EditTime from '../../screens/partner/bookings/EditTime';

const PartnerHomeStack = createStackNavigator<PartnerMoreScreens>();

const PartnerHomeNavigator = () => {
  return (
    <PartnerHomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PartnerHomeStack.Screen name="Bottom" component={PartnerBottomTabNavigator} />
      {/* <PartnerHomeStack.Screen name="Edit" component={EditTime} /> */}
    </PartnerHomeStack.Navigator>
  );
}

export default PartnerHomeNavigator;