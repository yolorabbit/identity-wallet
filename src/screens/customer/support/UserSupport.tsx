import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { FC } from 'react';
import { MoreScreenProps } from '../../../types/navigation';
import CommonScreen from '../../../components/template/CommonScreen';
import { CommonBtn, CustomText } from '../../../components/common';
import CustomImage from '../../../components/common/CustomImage';
import { ICONS, THEME } from '../../../constants';

const UserSupport: FC<MoreScreenProps> = ({ navigation }): React.JSX.Element => {

  return (
    <CommonScreen>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <CustomText
              title='Support'
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

          <ScrollView>
            <View style={styles.contentContainer}>
              <CustomText title='Contact Us' size='body' weight='bold' />
              <View style={styles.typeContainer}>
                <View style={styles.iconContainer}>
                  <CustomImage source={ICONS.mailFillIcon} width={18} height={18} />
                </View>
                <View>
                  <Text style={styles.typeText}>
                    support@ultimateidentity.co
                  </Text>
                </View>
              </View>

              <View style={styles.separator} />

              <View style={styles.typeContainer}>
                <View style={styles.iconContainer}>
                  <CustomImage source={ICONS.callFillIcon} width={18} height={18} />
                </View>
                <View>
                  <Text style={styles.typeText}>+49 6912345678</Text>
                </View>
              </View>

              <View style={styles.separator} />

              <View style={styles.typeContainer}>
                <View style={styles.iconContainer}>
                  <CustomImage source={ICONS.locationOnFillIcon} width={18} height={18} />
                </View>
                <View>
                  <Text style={styles.typeText}>Sämannstr. 1e, Gräfelfing, Germany</Text>
                </View>
              </View>
            </View>

            <View style={styles.contentContainer}>
              <CustomText title='FAQs' size='body' weight='bold' />
              <View style={styles.faqContainer}>
                <CommonBtn
                  title='Some frequently asked questions'
                  kind='primaryOffWhite'
                  color='secondaryBtnText'
                  suffix={ICONS.arrowForwardIcon}
                  onPress={() => navigation.navigate('Faq')}
                />
              </View>
            </View>

            <View style={[styles.contentContainer, { backgroundColor: '#FDF8FF' }]}>
              <CustomText title='About UIWallet' size='body' weight='bold' />
              <Text style={styles.contentSubHead}>
                Ultimate Identity Wallet for Ad Tech industry powered on the EBSI blockchain.
              </Text>

              {/* <TouchableOpacity style={styles.btnBook} onPress={() => navigation.navigate('About')}>
                <Text style={styles.btnText}>Read More</Text>
                <CustomImage source={ICONS.arrowForwardActiveIcon} width={24} height={25} />
              </TouchableOpacity> */}
            </View>

            <View style={[styles.contentContainerBottom, { backgroundColor: '#FDF8FF' }]}>
              <CustomText title='Community' size='body' weight='bold' />
              <Text style={styles.contentSubHead}>
                Community and empowerment are values we keep close to our heart. We
                have a diverse and vibrant community of nail techs. Find us on:
              </Text>

              <View style={styles.socialContainer}>
                <View
                  style={[styles.iconContainer]}>
                  <CustomImage source={ICONS.facebookIcon} width={32} height={32} />
                </View>

                <View style={[styles.iconContainer]}>
                  <CustomImage source={ICONS.instagramIcon} width={32} height={32} />
                </View>

                <View style={[styles.iconContainer]}>
                  <CustomImage source={ICONS.youtubeIcon} width={32} height={32} />
                </View>

                <View style={[styles.iconContainer]}>
                  <CustomImage source={ICONS.linkedinIcon} width={32} height={32} />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </CommonScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
    flex: 1,
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
  contentContainer: {
    marginHorizontal: 24,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFF',
    borderRadius: 16,
  },
  contentContainerBottom: {
    marginHorizontal: 24,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFF',
    borderRadius: 16,
    marginBottom: 30,
  },
  contentHeading: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
  },
  innerContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    backgroundColor: '#F5F8FE',
    padding: 5,
    borderRadius: 100,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  },
  typeText: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  faqContainer: {
    backgroundColor: '#F5F8FE',
    borderWidth: 1,
    borderColor: '#E9E9E9',
    marginTop: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqText: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
  },
  contentSubHead: {
    color: '#515151',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    marginTop: 8,
  },
  btnBook: {
    marginTop: 9,
    backgroundColor: '#F5F8FE',
    borderRadius: 12,
    paddingHorizontal: 32,
    paddingVertical: 16,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 8,
    width: '50%',
  },
  btnText: {
    color: '#FD1362',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
  },
  socialContainer: {
    marginTop: 8,
    flexDirection: 'row',
    gap: 12,
  },
});

export default UserSupport;
