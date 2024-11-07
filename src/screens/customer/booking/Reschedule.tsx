import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import React, { FC, useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import { MoreScreenProps } from '../../../types/navigation';
import { ICONS, THEME } from '../../../constants';
import CommonScreen from '../../../components/template/CommonScreen';
import CommonHeader from '../../../components/Headers/CommonHeader';
import { CommonBtn, CustomText } from '../../../components/common';
import CustomImage from '../../../components/common/CustomImage';

const Reschedule: FC<MoreScreenProps> = ({ navigation }): React.JSX.Element => {

  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedTime, setSelectedTime] = useState('');

  const daysInMonth = [...Array(31).keys()].map(day => day + 1); // Array of days in January

  const handleDateSelect = (date: any) => {
    setSelectedDate(date);
    // You can perform any action upon selecting a date
  };

  const handleTimeSelect = (time: any) => {
    setSelectedTime(time);
    // You can perform any action upon selecting a time
  };

  const getMonthName = (monthIndex: any) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex];
  };

  const handleSaveChanges = () => {
    showMessage({
      message: 'Your schedule was updated successfully!',
      type: 'success',
      duration: 3000, // 3 seconds
    });
  };

  return (
    <CommonScreen styles={[styles.storeDetailContainer]}>
      <CommonHeader title='Reschedule Booking' classes={[styles.headerContainer]} />
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback>
          <View style={styles.body}>
            <View style={styles.dateContainer}>
              <CustomText title='Choose Date' size='body' weight='bold' color='textPrimary' />
              <View style={styles.contentContainer}>
                <Text style={styles.monthText}>{getMonthName(0)}</Text>

                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.datePicker}>
                  {daysInMonth.map((day, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.dateItem,
                        selectedDate === day && styles.selectedDateItem,
                      ]}
                      onPress={() => handleDateSelect(day)}>
                      <Text
                        style={[
                          styles.dateText,
                          selectedDate === day && styles.selectedDateText,
                        ]}>
                        {getDayOfWeek(day)}
                      </Text>
                      <Text
                        style={[
                          styles.dateText,
                          selectedDate === day && styles.selectedDateText,
                        ]}>
                        {day}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>

            <View style={[styles.dateContainer, { marginTop: 24 }]}>
              <CustomText title='Choose Time' size='body' weight='bold' color='textPrimary' />
              <View style={[styles.contentContainer, { height: 188 }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  {Array.from({ length: 12 }).map((_, index) => {
                    const hour = index + 9; // Start time from 09:00
                    const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
                    const time = `${formattedHour}:00`;
                    return (
                      <View style={{ width: '100%', display: 'flex', flexDirection: 'column' }} key={index}>
                        <TouchableOpacity
                          key={index}
                          style={[
                            selectedTime !== time && styles.timeItem,
                            selectedTime === time && styles.selectedTimeItem,
                          ]}
                          onPress={() => handleTimeSelect(time)}
                        >
                          <Text
                            style={[
                              selectedTime !== time && styles.timeText,
                              selectedTime === time && styles.selectedTimeText,
                            ]}>
                            {time}
                          </Text>
                          {selectedTime === time && (
                            <CustomImage source={ICONS.checkWhiteIcon} width={18} height={18} />
                          )}
                        </TouchableOpacity>
                        {index !== 11 && selectedTime !== time && <View style={styles.separator} />}
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </View>

            <View style={styles.btnContainer}>
              <CommonBtn
                title='Save Changes'
                kind='primary'
                onPress={handleSaveChanges}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <View style={styles.separator} />
    </CommonScreen >
  );
};

// Function to get the day of the week
const getDayOfWeek = (day: any) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const date = new Date(2024, 0, day); // Assuming the year is 2024 and month is January
  return days[date.getDay()];
};

const styles = StyleSheet.create({
  storeDetailContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  body: {
    width: '100%',
    display: 'flex',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F8FE',
  },
  headerContainer: {
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.black50,
  },
  headText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    marginLeft: '20%',
  },
  separator: {
    height: 1,
    backgroundColor: '#E9E9E9',
  },
  dateContainer: {
    marginHorizontal: 24,
    marginTop: 16,
  },
  contentContainer: {
    marginTop: 8,
    backgroundColor: '#FFF',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 16,
  },
  monthText: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  datePicker: {
    flexDirection: 'row',
    marginTop: 12,
  },
  dateItem: {
    paddingHorizontal: 16,
    width: 72,
    height: 60,
    justifyContent: 'center',
    paddingVertical: 12,
    marginRight: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  selectedDateItem: {
    backgroundColor: '#000',
  },
  dateText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
  },
  selectedDateText: {
    color: '#FFF',
  },
  heading: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
  },
  timeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 16,
  },
  selectedTimeItem: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 16,
  },
  timeText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
  },
  selectedTimeText: {
    color: '#FFF',
    fontSize: 16,
  },
  checkIcon: {
    marginRight: 10,
  },
  btnContainer: {
    marginTop: 30,
    marginHorizontal: 24,
  },
});

export default Reschedule;
