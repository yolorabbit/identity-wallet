import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { FC } from 'react';
import { MoreScreenProps } from '../../../types/navigation';
import CommonScreen from '../../../components/template/CommonScreen';
import CommonHeader from '../../../components/Headers/CommonHeader';
import { CommonBtn, CustomText } from '../../../components/common';
import CustomImage from '../../../components/common/CustomImage';
import { ICONS, THEME } from '../../../constants';

const BookingSummary: FC<MoreScreenProps> = ({ navigation }): React.JSX.Element => {
  return (
    <CommonScreen styles={[styles.storeDetailContainer]}>
      <CommonHeader title='Booking Summary' classes={[styles.headerContainer]} />
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback>
          <View style={styles.body}>
            <View style={styles.dataContainer}>
              <View style={styles.shopContainer}>
                <View style={styles.imageContainer}>
                  <CustomImage source={ICONS.userAvatarIcon} width={80} height={80} />
                </View>

                <View style={styles.textContainer}>
                  <Text style={styles.shopName}>Nailbysam</Text>
                  <Text style={styles.shopAddress}>
                    328B Kilburn High Road Brondesbury, London, NW6 2QN
                  </Text>
                </View>
              </View>

              <View style={{ marginTop: 24 }}>
                <View style={styles.bookingInfoContainer}>
                  <CustomText title='Nail Technician' size='bodySmall' weight='normal' color='textSecondary' />
                  <CustomText title='Sam' size='bodySmall' weight='semibold' color='textPrimary' classes={[{ marginTop: 8 }]} />
                </View>

                <View style={styles.bookingInfoContainer}>
                  <CustomText title='Service' size='bodySmall' weight='normal' color='textSecondary' />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <CustomText title='Acrylic Extreme Nail Art Full set' size='bodySmall' weight='semibold' color='textPrimary' classes={[{ marginTop: 8 }]} />
                    <CustomText title='160mins' size='bodySmall' weight='semibold' color='textPrimary' classes={[{ marginTop: 8 }]} />
                  </View>
                </View>

                <View style={styles.bookingInfoContainer}>
                  <CustomText title='Date & Time' size='bodySmall' weight='normal' color='textSecondary' />
                  <CustomText title='Jan 17, 2024, 09:15 - 11:55' size='bodySmall' weight='semibold' color='textPrimary' classes={[{ marginTop: 8 }]} />
                </View>
              </View>

              <View style={styles.couponContainer}>
                <TextInput placeholder="Got a coupon code?" style={styles.input} />
                <TouchableOpacity style={styles.bookBtn}>
                  <Text style={styles.buyText}>APPLY</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.separator} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 16,
                }}>
                <CustomText title='Acrylic Extreme Nail Art Full set' size='bodySmall' weight='normal' color='textSecondary' />
                <CustomText title='£48.00' size='bodySmall' weight='normal' color='textSecondary' />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <CustomText title='Total' size='bodySmall' weight='semibold' color='textPrimary' classes={[{ marginTop: 8 }]} />
                <CustomText title='£48.00' size='bodySmall' weight='semibold' color='textPrimary' classes={[{ marginTop: 8 }]} />
              </View>

              <View style={styles.separator} />

              <View style={styles.appointmentContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.infoHeading}>Pay at the appointment</Text>
                  <Text style={styles.infoHeading}>£28.00</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <CustomText title='Deposit to Pay Now' size='bodySmall' weight='bold' color='textPrimary' />
                <CustomText title='£28.00' size='bodySmall' weight='bold' color='textPrimary' classes={[{ marginTop: 16 }]} />
              </View>

              <View style={styles.btnContainer}>
                <CommonBtn
                  title='Proceed to Payment'
                  kind='primary'
                  onPress={() => navigation.navigate('Payment')}
                />
              </View>
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
    marginLeft: '22%',
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
  shopContainer: {
    padding: 24,
    backgroundColor: '#F5F8FE',
    borderRadius: 16,
    alignItems: 'center',
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
    marginTop: 8,
    alignItems: 'center',
  },
  shopName: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
  },
  shopAddress: {
    color: '#515151',
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  bookingInfoContainer: {
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
    marginBottom: 16,
  },
  infoHeading: {
    color: '#515151',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  infoAnswer: {
    marginTop: 8,
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
  },
  couponContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#F5F8FE',
    borderWidth: 1,
    height: 46,
    display: 'flex',
    flex: 1,
    marginRight: 8,
    paddingHorizontal: 16,
    borderColor: '#E9E9E9',
    borderRadius: 8,
  },
  bookBtn: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 8,
    justifyContent: 'center',
    height: 46,
    width: 73,
    alignItems: 'center',
  },
  buyText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
  },
  appointmentContainer: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#FFE7EF',
    marginTop: 16,
  },
  btnContainer: {
    marginTop: 24,
  },
});

export default BookingSummary;
