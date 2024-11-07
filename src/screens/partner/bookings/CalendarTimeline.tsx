import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import moment from 'moment';

const { width } = Dimensions.get('window');
const numColumns = 7;
const columnWidth = (width - 60) / numColumns; // 60 is for the time column

const CalendarTimeline = () => {
  const currentDay = moment();
  const days: any = [];
  for (let i = 0; i < 7; i++) {
    days.push(currentDay.clone().add(i, 'days'));
  }

  const times = [
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00',
  ];

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <View style={styles.timeColumn}></View>
          {days.map((day: any, index: number) => {
            const isToday = day.isSame(currentDay, 'day');
            return (
              <View
                style={[styles.headerCell, isToday && styles.currentDayCell]}
                key={index}
              >
                <View style={styles.dateBox}>
                  <Text style={[styles.headerText, isToday && styles.currentDayText]}>
                    {day.format('ddd')}
                  </Text>
                  <Text style={[styles.headerDate, isToday && styles.currentDayText]}>
                    {day.format('DD')}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        {times.map((time, timeIndex) => (
          <View style={styles.row} key={timeIndex}>
            <View style={styles.timeColumn}>
              <Text style={styles.timeText}>{time}</Text>
            </View>
            {days.map((day: any, dayIndex: number) => (
              <View style={styles.cell} key={dayIndex}></View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  headerRow: {
    flexDirection: 'row',
  },
  headerCell: {
    width: columnWidth,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#FFF',
  },
  currentDayCell: {
    backgroundColor: 'black',
  },
  dateBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: '#1B1B1B',
  },
  headerDate: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: '#1B1B1B',
  },
  currentDayText: {
    color: 'white',
  },
  row: {
    flexDirection: 'row',
  },
  timeColumn: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#FFF',
  },
  timeText: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: '#1B1B1B',
  },
  cell: {
    width: columnWidth,
    borderWidth: 1,
    borderColor: '#ddd',
    height: 50,
    backgroundColor: 'transparent',
  },
});

export default CalendarTimeline;
