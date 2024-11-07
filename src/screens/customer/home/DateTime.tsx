import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import React, { FC } from 'react';
import { useState } from 'react';
import { MoreScreenProps } from '../../../types/navigation';
import CommonScreen from '../../../components/template/CommonScreen';
import CommonHeader from '../../../components/Headers/CommonHeader';
import { CommonBtn, CustomText } from '../../../components/common';
import CustomImage from '../../../components/common/CustomImage';
import { ICONS, THEME } from '../../../constants';

const DateTime: FC<MoreScreenProps> = ({ navigation }): React.JSX.Element => {
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
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[monthIndex];
  };

  return (
    <CommonScreen styles={[styles.storeDetailContainer]}>
      <CommonHeader title='Date and time' classes={[styles.headerContainer]} />
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback>
          <View style={styles.body}>
            <ScrollView>
              <View style={styles.dataContainer}>
                <View style={styles.innerHeader}>
                  <CustomText title='Service' size='bodySmall' weight='bold' color='textPrimary' />
                  <TouchableOpacity style={styles.editContainer}>
                    <CustomImage source={ICONS.editWhiteIcon} width={18} height={18} classes={[{ marginRight: 4, }]} />
                    <CustomText title='Edit' size='bodySmall' weight='normal' color='primaryBtnText' />
                  </TouchableOpacity>
                </View>

                <Text style={styles.serviceType}>
                  Acrylic Extreme Nail Art Full set
                </Text>

                <View style={styles.infoContainer}>
                  <View style={styles.iconContainer}>
                    <CustomImage source={ICONS.scheduleIcon} width={18} height={18} />
                    <Text style={styles.infoText}>65 mins</Text>
                  </View>

                  <View style={styles.iconContainer}>
                    <CustomImage source={ICONS.sellIcon} width={18} height={18} />
                    <Text style={styles.infoText}>£30.00</Text>
                  </View>
                </View>
              </View>

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
                <View style={[styles.contentContainer, { height: 182 }]}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {Array.from({ length: 12 }).map((_, index) => {
                      const hour = index + 9; // Start time from 09:00
                      const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
                      const time = `${formattedHour}:00`;
                      return (
                        <View style={{ width: '100%', display: 'flex', flexDirection: 'column'}} key={index}>
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
                  title='Next'
                  kind='primary'
                  suffix={ICONS.arrowForwardWhiteIcon}
                  onPress={() => {navigation.navigate('Extra')}}
                />
              </View>
            </ScrollView>
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
  separator: {
    height: 1,
    backgroundColor: '#E9E9E9',
  },
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
    marginLeft: '28%',
  },
  dataContainer: {
    marginTop: 16,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 24,
  },
  innerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FD1362',
    borderRadius: 8,
    height: 26,
    width: 63,
  },
  editText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  serviceType: {
    color: '#1B1B1B',
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    marginTop: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  infoText: {
    color: '#6E6E6E',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
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

export default DateTime;
