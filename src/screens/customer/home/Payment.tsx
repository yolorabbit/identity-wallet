import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { FC, useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { MoreScreenProps } from '../../../types/navigation';
import CommonScreen from '../../../components/template/CommonScreen';
import CommonHeader from '../../../components/Headers/CommonHeader';
import { ICONS, THEME } from '../../../constants';
import { CommonBtn, CustomModal, CustomText } from '../../../components/common';
import CustomImage from '../../../components/common/CustomImage';

// Define constant for transparent color
const transparent = 'rgba(0,0,0,0.5)';

const Payment: FC<MoreScreenProps> = ({ navigation }): React.JSX.Element => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCvc] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  const handleGotoHome = () => {
    setOpenPaymentModal(false);
    navigation.navigate('Bottom');
  }


  function renderPaymentModal() {
    return (
      <CustomModal
        visible={openPaymentModal}
        // classes={[styles.container, ...containerClasses]}
        onClose={() => setOpenPaymentModal(false)}
      >
        <View style={styles.contentHeader}>
          <CustomImage
            source={ICONS.paymentModalLogoIcon}
            width={99}
            height={82}
          />
          <CustomText
            title='Payment Successful!'
            size='bodyLarge'
            weight='bold'
            color='textPrimary'
            classes={[{ marginTop: 8 }]}
          />
          <Text style={styles.modalPara}>
            You have successfully booked your appointment. You will get an email notification shortly.
          </Text>
        </View>
        <CommonBtn
          title='Back to Home'
          kind='primary'
          prefix={ICONS.arrowBackWhtieIcon}
          onPress={() => handleGotoHome()}
          classes={[{ marginTop: 24 }]}
        />
      </CustomModal>
    );
  }

  const countries = [
    { label: 'USA', value: 'usa' },
    { label: 'Canada', value: 'canada' },
    { label: 'UK', value: 'uk' },
    // Add more countries as needed
  ];

  const handleCountryChange = (item: any) => {
    setSelectedCountry(item.value);
  };

  const formatCardNumber = (input: any) => {
    // Remove non-digit characters
    const cleanedInput = input.replace(/\D/g, '');

    // Format the input in groups of four digits
    const formattedInput = cleanedInput.replace(/(.{4})/g, '$1 ');

    // Update state
    setCardNumber(formattedInput.trim());
  };

  const formatExpiration = (input: any) => {
    // Remove non-digit characters
    const cleanedInput = input.replace(/\D/g, '');

    // Format the input as MM/YY
    let formattedInput = cleanedInput;
    if (cleanedInput.length > 2) {
      formattedInput = `${cleanedInput.slice(0, 2)}/${cleanedInput.slice(2, 4)}`;
    }

    // Update state
    setExpiration(formattedInput);
  };

  const formatCvc = (input: any) => {
    // Remove non-digit characters and limit to 3 digits
    const cleanedInput = input.replace(/\D/g, '').slice(0, 3);

    // Update state
    setCvc(cleanedInput);
  };

  return (
    <CommonScreen styles={[styles.storeDetailContainer]}>
      <CommonHeader title='Make Payment' classes={[styles.headerContainer]} />
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback>
          <View style={styles.body}>
            <View style={styles.dataContainer}>
              <View style={styles.informationContainer}>
                <CustomText
                  title='By clicking "Make Payment" you agree that you are paying a
                  non-refundable £20.00 deposit. You will need to pay the
                  outstanding amount directly to the nail technician on the day of
                  the booking.'
                  size='bodySmall'
                  weight='semibold'
                  color='textPrimary'
                />
              </View>
              <CustomText title='Card details' size='bodyLarge' weight='semibold' color='textPrimary' classes={[{ marginTop: 24 }]} />
              <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                  <CustomText title='Card number' size='bodySmall' weight='normal' color='textPrimary' />
                  <View style={styles.inputWrapper}>
                    <TextInput
                      placeholder="1234 1234 1234 1234"
                      keyboardType="numeric"
                      value={cardNumber}
                      onChangeText={formatCardNumber}
                      style={styles.input}
                      placeholderTextColor={'#6E6E6E'}
                    />
                    <CustomImage source={ICONS.creditCardIcon} width={18} height={18} />
                  </View>
                </View>

                <View style={styles.cardInfo}>
                  <View style={styles.cardInfoItem}>
                    <CustomText title='Expiration' size='bodySmall' weight='normal' color='textPrimary' />
                    <View style={styles.inputWrapper}>
                      <TextInput
                        placeholder="MM/YY"
                        keyboardType="numeric"
                        value={expiration}
                        onChangeText={formatExpiration}
                        style={[styles.input, { width: 147 }]}
                        placeholderTextColor={'#6E6E6E'}
                      />
                    </View>
                  </View>
                  <View style={styles.cardInfoItem}>
                    <CustomText title='CVC' size='bodySmall' weight='normal' color='textPrimary' />
                    <View style={styles.inputWrapper}>
                      <TextInput
                        placeholder="CVC"
                        keyboardType="numeric"
                        value={cvc}
                        onChangeText={formatCvc}
                        style={[styles.input, { width: 147 }]}
                        placeholderTextColor={'#6E6E6E'}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Country</Text>
                <Dropdown
                  style={[styles.input, { padding: 10, paddingHorizontal: 16, borderWidth: 1, borderColor: '#E9E9E9', borderRadius: 16 }]}
                  placeholder="Select Country"
                  value={selectedCountry}
                  data={countries}
                  labelField="label"
                  valueField="value"
                  onChange={handleCountryChange}
                  placeholderStyle={{ color: '#6E6E6E' }}
                  selectedTextStyle={{ color: '#1B1B1B' }}
                  inputSearchStyle={{ color: '#1B1B1B' }}
                  containerStyle={styles.dropdown}
                />
              </View>

              <Text style={styles.cardPermissionText}>
                By providing your card information, you allow Nailsbyysam to charge
                your card for future payments in accordance with their terms
              </Text>

              <View style={styles.btnContainer}>
                <CommonBtn
                  title='Make Payment'
                  kind='primary'
                  onPress={() => setOpenPaymentModal(true)}
                />
              </View>
              {renderPaymentModal()}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <View style={styles.separator} />
    </CommonScreen >
  );
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
    marginLeft: '25%',
  },
  separator: {
    height: 1,
    backgroundColor: '#E9E9E9',
    marginTop: 16,
  },
  dataContainer: {
    marginTop: 16,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
  },
  informationContainer: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#FFE7EF',
  },
  infoText: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    lineHeight: 20,
  },
  sectionText: {
    marginTop: 24,
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
  },
  formContainer: {
    marginTop: 24,
    flexDirection: 'column',
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 16,
  },
  label: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 12,
    height: 56,
    paddingHorizontal: 16,
    width: '100%',
    marginTop: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
  inputIcon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -8 }],
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 16,
    width: '100%',
  },
  cardInfoItem: {
    width: '48%',
  },
  dropdown: {
    marginTop: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E9E9E9',
  },
  cardPermissionText: {
    color: '#515151',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'OpenSans-Regular',
  },
  btnContainer: {
    marginTop: 24,
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
    height: 346,
    marginBottom: 24,
    marginTop: 24,
    alignSelf: 'center',
  },
  content: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  modalText: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    marginTop: 8,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 16,
    width: '100%',
    alignItems: 'center',
  },
  modalSubText: {
    color: '#515151',
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    marginBottom: 24,
  },
  contentHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 8,
  },
  modalPara: {
    color: '#515151',
    fontSize: 16,
    marginTop: 8,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
  },
});

export default Payment;
