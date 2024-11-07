import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CommonScreen from '../../../components/template/CommonScreen';
import { CustomText } from '../../../components/common';
import { THEME } from '../../../constants';
import CalendarContent from './CalendarContent';
import PastBookingsContent from '../../customer/booking/PastBookingsContent';
import BlockTimeContent from './BlockTimeContent';


const Bookings: FC<any> = ({ navigation }): React.JSX.Element => {

  const [selectedTab, setSelectedTab] = useState('Calendar');

  const renderContent = () => {
    switch (selectedTab) {
      case 'Calendar':
        return <CalendarContent />;
      case 'Past Bookings':
        return <PastBookingsContent />;
      case 'Blocked Time':
        return <BlockTimeContent />;
      default:
        return null;
    }
  };

  const renderTab = (tabName: any) => {
    return (
      <TouchableOpacity
        style={[
          styles.tabItem,
          selectedTab === tabName && styles.selectedTabItem,
        ]}
        onPress={() => setSelectedTab(tabName)}>
        <Text
          style={[
            selectedTab !== tabName && styles.tabText,
            selectedTab === tabName && styles.selectedTabText,
          ]}>
          {tabName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <CommonScreen>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <CustomText
            title='Welcome back, Mabel'
            size='bodyLarge'
            weight='semibold'
            color='textPrimary'
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.contentHeader}>BOOKINGS</Text>

          {/* Horizontal Tab Bar */}
          <View style={styles.tabBar}>
            {renderTab('Calendar')}
            {renderTab('Past Bookings')}
            {renderTab('Blocked Time')}
          </View>
          {/* Pink Line Below Selected Tab */}
          <View
            style={[
              styles.tabIndicator,
              { transform: [{ translateX: selectedTab === 'Calendar' ? 0 : selectedTab === 'Past Bookings' ? 100 : 200 }] },
            ]}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
          {renderContent()}
        </ScrollView>
      </View>
    </CommonScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F8FE',
    flex: 1,
    marginTop: 44,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: THEME.COLORS.black50,
  },
  headerText: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
  },
  separator: {
    height: 1,
    backgroundColor: '#E9E9E9',
    marginTop: 16,
  },
  contentContainer: {
    marginHorizontal: 24,
    marginTop: 16,
  },
  contentHeader: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  tabItem: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  selectedTabItem: {
    borderBottomColor: '#FD1362',
    borderBottomWidth: 2,
  },
  tabText: {
    color: THEME.COLORS.textSecondary,
    fontSize: 16,
  },
  selectedTabText: {
    fontSize: 16,
    color: THEME.COLORS.textPrimary,
    fontWeight: 600,
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 2,
    backgroundColor: '#FD1362',
  },
});

export default Bookings;
