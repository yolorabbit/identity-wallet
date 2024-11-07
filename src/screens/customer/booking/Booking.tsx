import { CommonBtn, CustomText } from "../../../components/common";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { FC, useState } from 'react';
import CustomImage from "../../../components/common/CustomImage";
import { ICONS, THEME } from "../../../constants";
import CommonScreen from "../../../components/template/CommonScreen";

const Booking: FC<any> = ({ navigation }): React.JSX.Element => {
  const [selectedTab, setSelectedTab] = useState('Bookings');

  const renderTab = (tabName: any) => {
    return (
      <TouchableOpacity
        key={tabName}
        style={[
          styles.tabItem,
          // selectedTab === tabName && styles.selectedTabItem,
        ]}
        onPress={() => setSelectedTab(tabName)}>
        <Text
          style={[
            selectedTab !== tabName && styles.tabText,
            selectedTab === tabName && styles.selectedTabText,
          ]}>
          {tabName}
        </Text>
        {selectedTab === tabName && <View style={styles.tabIndicator} />}
      </TouchableOpacity>
    );
  };

  const data = [
    {
      id: 1,
      image: ICONS.userAvatarIcon,
      date: 'Thursday, 17th January 2024',
      time: '09:15 - 11:55',
      type: 'Acrylic Extreme Nail Art Full set',
      amount: '£28.00',
      status: 'Paid',
      button: 'View Details',
    },
    {
      id: 2,
      image: ICONS.userAvatarIcon,
      date: 'Thursday, 17th January 2024',
      time: '09:15 - 11:55',
      type: 'Acrylic Extreme Nail Art Full set',
      amount: '£28.00',
      status: 'Paid',
      button: 'Cancelled',
    },
  ];

  const renderItem = ({ item }: any) => {
    // Define the text color based on the status
    let buttonTextColor = '#1D1D1D'; // Default text color
    if (item.button === 'Cancelled') {
      buttonTextColor = '#8D8D8D'; // Text color for Cancelled status
    }

    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <CustomImage source={ICONS.userAvatarIcon} width={80} height={80} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.dateText}>{item.date}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>

        <View style={styles.separator} />

        <Text style={styles.typeContainer}>
          Acrylic Extreme Nail Art Full set
        </Text>
        <View style={styles.separator} />

        <View style={styles.payContainer}>
          <Text style={styles.amountText}>Deposit: {item.amount}</Text>
          <CustomText
            title={item.status}
            size='bodySmall'
            weight='bold'
            color='success'
            classes={[{ textTransform: 'uppercase' }]}
          />
        </View>

        <View style={styles.btnContainer}>
          <CommonBtn
            title={item.button}
            kind='primaryOffWhite'
            color={item.button === 'Cancelled' ? 'disabledColor' : 'secondaryBtnText'}
            onPress={() => navigation.navigate('BookingDetails')}
          />
        </View>
      </View>
    );
  };

  return (
    <CommonScreen>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <CustomText
            title='My Bookings'
            size='bodyLarge'
            weight='semibold'
            color='textPrimary'
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomImage source={ICONS.notificationActiveIcon} />
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabBar}>
          {['Bookings', 'Favorites', 'Your Profile', 'Loyalty Points'].map(
            renderTab,
          )}
        </ScrollView>

        {/* FlatList moved here */}
        {selectedTab === 'Bookings' ? (
          data.length > 0 ? (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.flatListContainer}
            />
          ) : (
            <View style={styles.centeredContainer}>
              <CustomImage source={ICONS.emptyLogoIcon} width={216} height={180} />
              <Text style={styles.emptyText}>You have no upcoming bookings yet</Text>
              <TouchableOpacity style={styles.btnBook}>
                <Text style={styles.btnText}>Book Now</Text>
              </TouchableOpacity>
              <CommonBtn title='Book Now' kind='primary' onPress={() => null} />
            </View>
          )
        ) : null}
      </View>
    </CommonScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FE',
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
  headText: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
  },
  separator: {
    height: 1,
    backgroundColor: '#E9E9E9',
    marginTop: 16,
  },
  tabItem: {
    paddingHorizontal: 20,
    paddingVertical: 12,
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
  tabBar: {
    marginTop: 16,
    flexDirection: 'row',
  },
  tabIndicator: {
    marginTop: 8,
    height: 2,
    width: '100%',
    backgroundColor: '#FD1362',
  },
  itemContainer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginHorizontal: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  imageContainer: {
    borderRadius: 100,
    height: 80,
    width: 80,
    overflow: 'hidden',
  },
  images: {
    height: '100%',
    width: '100%',
  },
  textContainer: {
    marginTop: 16,
  },
  dateText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
  },
  timeText: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    marginTop: 12,
  },
  typeContainer: {
    color: '#FD1362',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    marginTop: 16,
  },
  payContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountText: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans=Regular',
  },
  statusText: {
    color: '#33CE6D',
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
    textTransform: 'uppercase',
  },
  btnContainer: {
    marginTop: 24,
  },
  flatListContainer: {
    marginTop: 24,
  },
  centeredContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: '70%',
  },
  emptyText: {
    color: '#1B1B1B',
    fontSize: 16,
    marginTop: 24,
  },
  btnBook: {
    marginTop: 22,
    backgroundColor: '#FD1362',
    borderRadius: 12,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
  },
});

export default Booking;