import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { MoreScreens } from "../../types/navigation";
import { BottomNavigater } from '../BottomTab';
import StoreDetail from '../../screens/customer/home/StoreDetail';
import BookingSummary from '../../screens/customer/home/BookingSummary';
import Payment from '../../screens/customer/home/Payment';
import NailBooking from '../../screens/customer/home/NailBooking';
import DateTime from '../../screens/customer/home/DateTime';
import ExtraAddons from '../../screens/customer/home/ExtraAddons';
import BookingDetails from '../../screens/customer/booking/BookingDetails';
import Reschedule from '../../screens/customer/booking/Reschedule';
import Faq from '../../screens/customer/support/Faq';
import About from '../../screens/customer/support/About';
import UpdateProfile from '../../screens/customer/profile/UpdateProfile';
import UpdatePassword from '../../screens/customer/profile/UpdatePassword';
import AddIdentifier from '../../screens/customer/identity/AddIdentifier';
import PartnerBottomNavigater from '../PartnerBottomTab/PartnerBottomTabNavigator';

const HomeStack = createStackNavigator<MoreScreens>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Bottom" component={BottomNavigater} />
      <HomeStack.Screen name="NailBooking" component={NailBooking} />
      <HomeStack.Screen name="Store" component={StoreDetail} />
      <HomeStack.Screen name="DateTime" component={DateTime} />
      <HomeStack.Screen name="Extra" component={ExtraAddons} />
      <HomeStack.Screen name="Summary" component={BookingSummary} />
      <HomeStack.Screen name="Payment" component={Payment} />
      <HomeStack.Screen name="BookingDetails" component={BookingDetails} />
      <HomeStack.Screen name="Reschedule" component={Reschedule} />
      <HomeStack.Screen name="Faq" component={Faq} />
      <HomeStack.Screen name="About" component={About} />
      <HomeStack.Screen name="UpdateProfile" component={UpdateProfile} />
      <HomeStack.Screen name="UpdatePassword" component={UpdatePassword} />
      <HomeStack.Screen name="PartnerBottom" component={PartnerBottomNavigater} />
      <HomeStack.Screen name='AddIdentifier' component={AddIdentifier} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;