import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
  Platform,
  TouchableWithoutFeedback
} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Calendar } from 'react-native-calendars';
// import Timelinecalendar from './Calendar/Timelinecalendar';
import { useNavigation } from '@react-navigation/native';
import CustomImage from '../../../components/common/CustomImage';
import { ICONS, THEME } from '../../../constants';
import CalendarTimeline from './CalendarTimeline';
// import { CalendarOutline } from '../../../../assets/icons/customer-icon';
// import CalendarTimeline from './Calendar/CalendarTimeline';

// Define constant for transparent color
const transparent = 'rgba(0,0,0,0.5)';

// Component for Radio Button
const RadioButton = ({ title, checked, onPress }: any) => {
  return (
    <View style={styles.radioButton}>
      <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
        <View style={styles.radioButtonInner}>
          {checked && <View style={styles.radioButtonDot} />}
        </View>
        <Text style={styles.radioButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Main CalendarContent Component
const CalendarContent = () => {
  // State variables
  const [openModal, setOpenModal] = useState(false);
  const [selectedIndex, setIndex] = useState(0);
  const [openCalendarModal, setOpenCalendarModal] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState(0);
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  // Function to handle segment change
  const handleSegmentChange = (index: number) => {
    setSelectedSegmentIndex(index);
  };

  // Render function for the user selection modal
  function renderModal() {
    const modalHeight = 138 + options.length * 36;

    return (
      <Modal visible={openModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { height: modalHeight }]}>
            <TouchableOpacity
              style={styles.closeIconContainer}
              onPress={() => setOpenModal(false)}
            >
              <CustomImage source={ICONS.closeIcon} width={18} height={18} />
            </TouchableOpacity>
            <View style={styles.content}>
              <Text style={styles.modalText}>Select user</Text>
              {options.map((option, index) => (
                <RadioButton
                  key={index}
                  title={option}
                  checked={selectedIndex === index}
                  onPress={() => setIndex(index)}
                />
              ))}
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  // Render function for the calendar modal
  function renderCalendarModal() {
    const modalHeight = 500;

    return (
      <Modal
        visible={openCalendarModal}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent]}>
            <TouchableOpacity
              style={styles.closeIconContainer}
              onPress={() => setOpenCalendarModal(false)}
            >
              <CustomImage source={ICONS.closeIcon} width={18} height={18} />
            </TouchableOpacity>
            {/* <Calendar
              style={{ width: 311, marginTop: 45 }}
              onDayPress={day => handleDayPress(day.dateString)}
              markedDates={{
                [selectedStartDate]: { startingDay: true, color: '#FD1362' },
                [selectedEndDate]: { endingDay: true, color: '#FD1362' },
              }}
              markingType={'period'}
              maxDuration={7} // Restrict selection to maximum 7 days
            /> */}
            <View style={{ width: '100%', display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Calendar
                style={{ minWidth: '100%' }}
                onDayPress={day => {
                  setSelected(day.dateString);
                }}
                markedDates={{
                  [selected]: { selected: true, disableTouchEvent: true, selectedColor: '#FD1362' }
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  // Function to handle day press on the calendar
  const handleDayPress = (date: any) => {
    if (!selectedStartDate || selectedEndDate) {
      setSelectedStartDate(date);
      setSelectedEndDate('');
    } else if (Math.abs(new Date(selectedStartDate).valueOf() - new Date(date).valueOf()) / (1000 * 60 * 60 * 24) <= 6) {
      // Check if selected duration is less than or equal to 7 days
      setSelectedEndDate(date);
    }
  };

  // Function to render the selected date text
  const renderDateText = () => {
    if (selectedStartDate && selectedEndDate) {
      return `${formatDate(selectedStartDate)} - ${formatDate(
        selectedEndDate,
      )}`;
    } else if (selectedStartDate) {
      return formatDate(selectedStartDate);
    } else {
      return 'Jan 17 - Jan 23';
    }
  };

  // Function to format date string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  // Sample data for options
  const options = ['Mabel', 'Jane'];

  // Main render
  return (
    <TouchableWithoutFeedback>
      <View>
        {/* Input container */}
        <View style={styles.inputContainer}>
          {/* Dropdown */}
          <TouchableOpacity
            style={styles.input}
            onPress={() => setOpenModal(true)}>
            <View style={styles.textContainer}>
              <Text style={styles.innerText}>{options[selectedIndex]}</Text>
              <CustomImage source={ICONS.expandMoreIcon} width={18} height={18} />
            </View>
          </TouchableOpacity>

          {/* Calendar */}
          <TouchableOpacity
            style={styles.input}
            onPress={() => setOpenCalendarModal(true)}>
            <View style={styles.textContainer}>
              <Text style={styles.innerText}>{renderDateText()}</Text>
              <CustomImage source={ICONS.calendarClockIcon} width={18} height={18} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Render modals */}
        {renderModal()}
        {renderCalendarModal()}

        {/* Segment container */}
        <View style={styles.segmentContainer}>
          <View style={styles.backgroundContainer}>
            {/* Daily segment */}
            <TouchableOpacity
              style={[
                styles.segment,
                selectedSegmentIndex === 0 && styles.selectedSegment,
              ]}
              onPress={() => handleSegmentChange(0)}>
              <Text
                style={[
                  selectedSegmentIndex !== 1 && styles.segmentText,
                  selectedSegmentIndex === 0 && styles.selectedSegmentText,
                ]}>
                Weekly
              </Text>
            </TouchableOpacity>

            {/* Monthly segment */}
            <TouchableOpacity
              style={[
                styles.segment,
                selectedSegmentIndex === 1 && styles.selectedSegment,
              ]}
              onPress={() => handleSegmentChange(1)}>
              <Text
                style={[
                  selectedSegmentIndex !== 1 && styles.segmentText,
                  selectedSegmentIndex === 1 && styles.selectedSegmentText,
                ]}>
                Monthly
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <Timelinecalendar /> */}

        {/* Render Timeline if Daily segment is selected */}
        {selectedSegmentIndex === 0 && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 24 }}>
            {/* <Timelinecalendar /> */}
            <CalendarTimeline />
          </ScrollView>
        )}
        {selectedSegmentIndex === 1 && (
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#FFF',
              marginTop: 24,
              padding: 30,
              borderRadius: 24,
            }}>
            <View style={{ width: '100%', display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Calendar
                style={{ minWidth: '100%' }}
                onDayPress={day => {
                  setSelected(day.dateString);
                }}
                markedDates={{
                  [selected]: { selected: true, disableTouchEvent: true, selectedColor: '#FD1362' }
                }}
              />
            </View>
          </View>
        )}

        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.actionBtn}
          // onPress={() => navigation.navigate('Add')}
          >
            <CustomImage source={ICONS.calendarClockIcon} width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionBtn}
          // onPress={() => navigation.navigate('Note')}
          >
            <CustomImage source={ICONS.editNoteIcon} width={24} height={24} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// Styles
const styles = StyleSheet.create({
  // Input container styles
  inputContainer: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 8,
    justifyContent: 'space-between',
  },
  // Input styles
  input: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 12,
  },
  // Text container styles
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // Arrow icon styles
  arrowIcon: {
    marginLeft: 8,
  },
  // Inner text styles
  innerText: {
    color: '#6E6E6E',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
  },
  // Modal container styles
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: transparent,
  },
  // Modal content styles
  modalContent: {
    backgroundColor: '#FFF',
    padding: 24,
    borderRadius: 24,
    width: '95%',
    height: 438,
    marginBottom: 24,
    marginTop: 24,
    alignItems: 'center',
    position: 'relative',
  },
  // Content styles
  content: {
    marginTop: 10,
    justifyContent: 'center',
    width: '100%',
  },
  // Modal text styles
  modalText: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    marginTop: 8,
    textAlign: 'left',
    marginBottom: 16,
  },
  // Radio button styles
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  // Radio button container styles
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // Radio button inner styles
  radioButtonInner: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6E6E6E',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Radio button dot styles
  radioButtonDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FD1362',
  },
  // Radio button text styles
  radioButtonText: {
    color: '#515151',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
  },
  // Close icon container styles
  closeIconContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 9,
    zIndex: 1,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
  },
  // Calendar button styles
  calendarButton: {
    backgroundColor: '#FD1362',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
  },
  // Calendar button text styles
  calendarButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
  },
  // Segment container styles
  segmentContainer: {
    width: '100%',
    marginTop: 16,
  },
  // Background container styles
  backgroundContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
  },
  // Segment styles
  segment: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Selected segment styles
  selectedSegment: {
    backgroundColor: '#FD1362',
    borderRadius: 12,
    margin: 6,
  },
  // Segment text styles
  segmentText: {
    color: THEME.COLORS.textTertiary,
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
  },
  // Selected segment text styles
  selectedSegmentText: {
    color: '#FFF',
  },
  // Timeline styles
  timeline: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 128,
    height: 56,
    backgroundColor: '#FFF',
    padding: 8,
    alignItems: 'center',
    borderRadius: 100,
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 24,
    ...Platform.select({
      android: {
        marginBottom: 24,
      },
    }),
  },
  actionBtn: {
    backgroundColor: '#F5F8FE',
    height: 48,
    width: 48,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Export the component
export default CalendarContent;
