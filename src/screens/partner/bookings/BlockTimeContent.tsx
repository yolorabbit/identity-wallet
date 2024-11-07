import React, { FC, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomImage from '../../../components/common/CustomImage';
import { ICONS, THEME } from '../../../constants';
// @ts-ignore
import TableCell from './TableCell';
import { CustomText } from '../../../components/common';


// Sample data for options
const options = ['Mabel', 'Jane', 'John', 'Alice', 'Bob']; // Add more names as needed

// Define constant for transparent color
const transparent = 'rgba(0,0,0,0.5)';

// Component for Radio Button
const RadioButton = ({ checked, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.radioButton} onPress={onPress}>
      <View style={checked ? styles.radioCheckedButtonInner : styles.radioButtonInner}>
        {checked && <View style={styles.radioButtonDot} />}
      </View>
    </TouchableOpacity>
  );
};

const BlockTimeContent: FC<any> = (): React.JSX.Element => {
  const [selectedIndex, setIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const [showActionContainer, setShowActionContainer] = useState(false);
  const navigation = useNavigation();

  const handleRadioPress = (index: number) => {
    setSelectedItem(index);
    setShowActionContainer(true);
  };

  const handleActionPress = () => {
    // Handle action button press here
  };

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
            <View style={styles.userContent}>
              <Text style={styles.modalUserText}>Select user</Text>
              <ScrollView showsVerticalScrollIndicator={false}>
                {options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.optionContainer}
                    onPress={() => setIndex(index)}
                  >
                    <RadioButton
                      checked={selectedIndex === index}
                      onPress={() => setIndex(index)}
                    />
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  function renderDeleteModal() {
    // Get the selected option data
    const selectedOption = options[selectedIndex];
    // Hardcoded row data
    const rowData = ['09:00 - 18:00', '20/01/2024', 'I want to rest', 'None'];

    return (
      <Modal visible={openDeleteModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.content}>
              <CustomImage source={ICONS.bookingDetailModalWarningIcon} width={110} height={73} />
              <Text style={styles.modalText}>Are you sure you want to delete this block time?</Text>

              {/* Display selected data */}
              <View style={styles.dataContainer}>
                <View style={styles.detailContainer}>
                  <Text style={styles.heading}>Reason</Text>
                  <Text style={styles.dataText}>{rowData[2]}</Text>
                </View>
                <View style={styles.detailContainer}>
                  <Text style={styles.heading}>Date & Time</Text>
                  <Text style={styles.dataText}>{rowData[0]} - {rowData[1]}</Text>
                </View>
                <View style={styles.detailContainer}>
                  <Text style={styles.heading}>Repeat</Text>
                  <Text style={styles.dataText}>{rowData[3]}</Text>
                </View>
              </View>

              <View style={styles.buttonContainer}>
                {/* <Button
                  title="Cancel"
                  onPress={() => setOpenDeleteModal(false)}
                  backgroundColor="#F5F8FE"
                  color="#fff"
                  textColor="#000"
                // style={styles.btn}
                />
                <Button
                  title="Delete"
                  onPress={() => {
                    setOpenDeleteModal(false);
                    showMessage({
                      message: "Blocked time deleted",
                      type: "danger",
                      duration: 3000, // 3 seconds
                    });
                  }}
                  backgroundColor="#FD1362"
                  color="#fff"
                  textColor="#fff"
                /> */}
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  const data = [
    {
      id: 1,
      blockedTime: {
        start: '09:00',
        end: '18:00'
      },
      startDate: '20/01/2024',
      reason: 'I want to rest',
      repeated: 'None',
      occurence: '1 occurence',
    },
    {
      id: 2,
      blockedTime: {
        start: '09:00',
        end: '18:00'
      },
      startDate: '20/01/2024',
      reason: 'I want to rest',
      repeated: 'None',
      occurence: '1 occurence',
    },
  ];

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {/* Dropdown */}
          <TouchableOpacity
            style={styles.input}
            onPress={() => setOpenModal(true)}
          >
            <View style={styles.textContainer}>
              <Text style={styles.innerText}>{options[selectedIndex]}</Text>
              <CustomImage source={ICONS.expandMoreIcon} width={24} height={24} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Modal */}
        {renderModal()}
        {renderDeleteModal()}

        {/* Table */}
        <ScrollView
          style={{ width: '100%', marginTop: 16 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.tableContainer}>
            <View style={styles.tableRow}>
              <TableCell data='Blocked Time' isHeader width={120} />
              <TableCell data='Start Date' isHeader width={84} />
              <TableCell data='Reason' isHeader width={90} />
              <TableCell data='Repeated' isHeader width={72} />
              <TableCell data='Occurence' isHeader width={100} />
            </View>
            {data.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableCheckCell}>
                  <RadioButton
                    checked={selectedItem === item.id}
                    onPress={() => handleRadioPress(item.id)}
                  />
                  <CustomText title={`${item.blockedTime.start} - ${item.blockedTime.end}`} size='tag' weight='normal' color='textSecondary' />
                </View>
                <TableCell data={item.startDate} width={84} />
                <TableCell data={item.reason} width={90} />
                <TableCell data={item.repeated} width={72} />
                <TableCell data={item.occurence} width={100} />
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Action Container */}
        {showActionContainer && (
          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.actionBtn} onPress={() => setOpenDeleteModal(true)}>
              <CustomImage source={ICONS.deleteIcon} width={24} height={24} />
            </TouchableOpacity>
            {/* @ts-ignore */}
            <TouchableOpacity style={styles.actionBtn} onPress={() => null}>
              {/* <TouchableOpacity style={styles.actionBtn} onPress={() => null}> */}
              <CustomImage source={ICONS.editSquareIcon} width={24} height={24} />
            </TouchableOpacity>
          </View>
        )}
        {/* Flash messages */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 8,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 12,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowIcon: {
    marginLeft: 8,
  },
  innerText: {
    color: '#6E6E6E',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: transparent,
  },
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
  content: {
    marginTop: 10,
    justifyContent: 'center',
    width: '100%',
  },
  modalText: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    marginTop: 8,
    textAlign: 'center',
    marginBottom: 16,
  },
  modalUserText: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    marginTop: 8,
    textAlign: 'left',
    marginBottom: 16,
    marginHorizontal: 1
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  optionText: {
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#1B1B1B',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  radioButtonInner: {
    width: 18,
    height: 18,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6E6E6E',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioCheckedButtonInner: {
    width: 18,
    height: 18,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: THEME.COLORS.activeElements,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FD1362',
  },
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

  head: {
    height: 40,
    width: 600,
    backgroundColor: '#f1f8ff',
  },
  headText: {
    fontSize: 12,
    color: '#1B1B1B',
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    margin: 6,
    paddingLeft: 10,
  },
  row: {
    height: 60,
    width: 600,
    backgroundColor: '#FFF',
  },
  text: {
    textAlign: 'center',
    margin: 6,
    fontSize: 12,
    color: '#515151',
    fontFamily: 'OpenSans-Regular',
    paddingLeft: 10,
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
    marginTop: 240
  },
  actionBtn: {
    backgroundColor: '#F5F8FE',
    height: 48,
    width: 48,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userContent: {
    marginTop: 10,
    // justifyContent: ,
    // alignItems: 'center',
    width: '100%',
  },
  modalPara: {
    color: '#515151',
    fontSize: 16,
    marginTop: 8,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
    width: '50%',
    alignItems: 'center',
    gap: 200,
  },
  dataContainer: {
    height: 196,
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    padding: 16,
    marginTop: 24,
  },
  heading: {
    color: '#515151',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  detailContainer: {
    marginBottom: 16,
  },
  dataText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold'
  },
  userModalContent: {
    alignItems: 'flex-start', // Align content to the left side
  },

  ///////////////// table /////////////////
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#E9E9E9',
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E9E9E9',
  },
  tableCheckCell: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
    borderRightWidth: 1,
    borderRightColor: '#E9E9E9',
  }
});

export default BlockTimeContent;
