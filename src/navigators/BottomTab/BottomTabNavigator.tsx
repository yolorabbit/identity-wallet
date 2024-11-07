import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ICONS, THEME } from '../../constants';
import { BottomTabScreens } from '../../types/navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Home from '../../screens/customer/home/Home';
import { CustomText } from '../../components/common';
import CustomImage from '../../components/common/CustomImage';
import Booking from '../../screens/customer/booking/Booking';
import Identity from '../../screens/customer/identity/Identity';
import UserSupport from '../../screens/customer/support/UserSupport';
import UserProfile from '../../screens/customer/profile/UserProfile';

const Tab = createBottomTabNavigator<BottomTabScreens>();

interface ITabsProps {
  navigation?: any;
}

const Tabs: React.FC<ITabsProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: [
          {
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 1,
            paddingHorizontal: 8,
          },
        ],
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={styles.active}
            >
              <CustomImage
                source={focused ? ICONS.homeActiveIcon : ICONS.homeIcon}
                width={24}
                height={24}
              />
              <CustomText
                title='Home'
                size='tag'
                classes={[{ marginTop: 8 }]}
                weight='normal'
                color={`${focused ? 'activeElements' : 'textTertiary'}`}
              />
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name='Identity'
        component={Identity}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={styles.active}
            >
              <CustomImage
                source={focused ? ICONS.credentialActiveIcon : ICONS.credentialIcon}
                width={24}
                height={24}
              />
              <CustomText
                title='Identity'
                size='tag'
                classes={[{ marginTop: 8 }]}
                weight='normal'
                color={`${focused ? 'activeElements' : 'textTertiary'}`}
              />
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name='Support'
        component={UserSupport}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={styles.active}
            >
              <CustomImage
                source={focused ? ICONS.contactSupportActiveIcon : ICONS.contactSupportIcon}
                width={24}
                height={24}
              />
              <CustomText
                title='Support'
                size='tag'
                classes={[{ marginTop: 8 }]}
                weight='normal'
                color={`${focused ? 'activeElements' : 'textTertiary'}`}
              />
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name='Profile'
        component={UserProfile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={styles.active}
            >
              <CustomImage
                source={focused ? ICONS.personActiveIcon : ICONS.personIcon}
                width={24}
                height={24}
              />
              <CustomText
                title='Profile'
                size='tag'
                classes={[{ marginTop: 8 }]}
                weight='normal'
                color={`${focused ? 'activeElements' : 'textTertiary'}`}
              />
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  active: {
    backgroundColor: THEME.COLORS.white,
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: THEME.BORDER_RADIUS.full,
  },
  icon: {
    width: 24,
    height: 24,
  }
});
