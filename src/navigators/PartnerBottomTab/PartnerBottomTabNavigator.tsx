import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ICONS, THEME } from '../../constants';
import { PartnerBottomTabScreens } from '../../types/navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CustomText } from '../../components/common';
import CustomImage from '../../components/common/CustomImage';
import Bookings from '../../screens/partner/bookings/Bookings';

const Tab = createBottomTabNavigator<PartnerBottomTabScreens>();

interface ITabsProps {
  navigation?: any;
}

const PartnerBottomTabNavigator: React.FC<ITabsProps> = ({ navigation }) => {
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
        name='Bookings'
        component={Bookings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={styles.active}
            >
              <CustomImage
                source={focused ? ICONS.calendarClockActiveIcon : ICONS.calendarClockIcon}
                width={24}
                height={24}
              />
              <CustomText
                title='Bookings'
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
        name='Business'
        component={Bookings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={styles.active}
            >
              <CustomImage
                source={focused ? ICONS.addBusinessActiveIcon : ICONS.addBusinessIcon}
                width={24}
                height={24}
              />
              <CustomText
                title='Business'
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
        name='Services'
        component={Bookings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={styles.active}
            >
              <CustomImage
                source={focused ? ICONS.localMallActiveIcon : ICONS.localMallIcon}
                width={24}
                height={24}
              />
              <CustomText
                title='Services'
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
        name='Staff'
        component={Bookings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={styles.active}
            >
              <CustomImage
                source={focused ? ICONS.locationHomeActiveIcon : ICONS.locationHomeIcon}
                width={24}
                height={24}
              />
              <CustomText
                title='Staff'
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
        name='Account'
        component={Bookings}
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
                title='Account'
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

export default PartnerBottomTabNavigator;

const styles = StyleSheet.create({
  active: {
    backgroundColor: THEME.COLORS.white,
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
