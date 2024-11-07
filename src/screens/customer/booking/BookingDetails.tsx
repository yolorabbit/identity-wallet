import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { FC } from 'react';
import { useState } from 'react';
import { MoreScreenProps } from '../../../types/navigation';
import CommonScreen from '../../../components/template/CommonScreen';
import CommonHeader from '../../../components/Headers/CommonHeader';
import { ICONS, THEME } from '../../../constants';
import { CommonBtn, CustomModal, CustomText } from '../../../components/common';
import CustomImage from '../../../components/common/CustomImage';

// Define constant for transparent color
const transparent = 'rgba(0,0,0,0.5)';

const BookingDetails: FC<MoreScreenProps> = ({ navigation }): React.JSX.Element => {

  const [openCancelModal, setOpenCancelModal] = useState(false);

  function renderCancelModal() {
    return (
      <CustomModal
        visible={openCancelModal}
        // classes={[styles.container, ...containerClasses]}
        onClose={() => setOpenCancelModal(false)}
      >
        <View style={styles.contentHeader}>
          <CustomImage
            source={ICONS.bookingDetailModalWarningIcon}
            width={110}
            height={73}
          />
          <CustomText
            title='Are you sure you want to cancel your appointment?'
            size='bodyLarge'
            weight='bold'
            color='textPrimary'
            classes={[{ textAlign: 'center' }]}
          />
          <Text style={styles.modalPara}>
            Kindly note that your deposit of
            £28 is not refundable.
          </Text>
        </View>
        <CommonBtn
          title='Cancel Appointment'
          kind='primary'
          onPress={() => navigation.navigate('Payment')}
        />
        <CommonBtn
          title={`Don't Cancel`}
          kind='primaryOffWhite'
          color='secondaryBtnText'
          weight='semibold'
          classes={[{ marginTop: 24 }]}
          onPress={() => setOpenCancelModal(false)}
        />
      </CustomModal>
    );
  }

  return (
    <CommonScreen styles={[styles.storeDetailContainer]}>
      <CommonHeader title='Booking Details' classes={[styles.headerContainer]} />
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback>
          <View style={styles.body}>
            <View style={styles.detailContainer}>
              <View style={styles.imageContainer}>
                <CustomImage source={ICONS.userAvatarIcon} width={80} height={80} />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.dateText}>Thursday, 17th January 2024</Text>
                <Text style={styles.timeText}>09:15 - 11:55</Text>
              </View>

              <View style={styles.separator} />

              <Text style={styles.typeContainer}>
                Acrylic Extreme Nail Art Full set
              </Text>
              <View style={styles.separator} />

              <View style={styles.addressContainer}>
                <Text style={styles.amountText}>With Sam from Nailbysam at:</Text>
                <Text style={styles.addressText}>328B Kilburn High Road Brondesbury, London, NW6 2QN</Text>
              </View>

              <View style={styles.separator} />

              <View style={styles.payContainer}>
                <Text style={styles.amountText}>Price: £48.00</Text>
                <Text style={styles.amountText}>£48.00</Text>
              </View>

              <View style={styles.payContainer}>
                <Text style={styles.amountText}>Deposit: £28.00</Text>
                <CustomText
                  title='PAID'
                  size='bodySmall'
                  weight='bold'
                  color='success'
                  classes={[{ textTransform: 'uppercase' }]}
                />
              </View>

              <View style={styles.btnContainer}>
                <CommonBtn
                  title='Reschedule Appointment'
                  kind='primary'
                  onPress={() => navigation.navigate('Reschedule')}
                />
                <CommonBtn
                  title='Cancel Appointment'
                  kind='primaryOffWhite'
                  color='secondaryBtnText'
                  classes={[{ marginTop: 24 }]}
                  onPress={() => setOpenCancelModal(true)}
                />
              </View>
            </View>

            {renderCancelModal()}
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
  detailContainer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginHorizontal: 16,
    borderRadius: 16,
    marginTop: 16,
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
    height: 438,
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
    marginBottom: 16,
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
  addressContainer: {
    flexDirection: 'column',
    marginTop: 16,
  },
  addressText: {
    color: '#515151',
    fontSize: 14,
    fontFamily: 'OpenSans=Regular',
    lineHeight: 18,
    marginTop: 8,
  },
  modalPara: {
    color: '#515151',
    fontSize: 16,
    marginTop: 8,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
  },
  contentHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 24,
  }
});

export default BookingDetails;
