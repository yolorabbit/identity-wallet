import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { FC } from 'react';
import CommonScreen from '../../../components/template/CommonScreen';
import { CustomText } from '../../../components/common';
import CustomImage from '../../../components/common/CustomImage';
import { ICONS, THEME } from '../../../constants';
import ToggleSwitch from '../../../components/common/ToggleSwitch';
import CommonBtnAnother from '../../../components/common/CommonBtnAnother';

import userAppData from '../../../hooks/userAppData';

const UserProfile: FC<any> = ({ navigation }): React.JSX.Element => {

  const { user, refresh } = userAppData();

  const fullName = `${user.first_name} ${user.last_name}`;

  const handleGotoTermPrivacy = () => {
    navigation.navigate('TermCondition');
  }

  const handleGotoPrivacyPolicy = () => {
    navigation.navigate('PrivacyPolicy');
  }

  return (
    <CommonScreen>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <CustomText
            title='Profile'
            size='bodyLarge'
            weight='semibold'
            color='textPrimary'
          />
        </View>
        <ScrollView>
          <View style={{ marginHorizontal: 16 }}>
            <View style={styles.profileInfoContainer}>
              <View style={styles.imageContainer}>
                <CustomText title={`${user.first_name != null ? user.first_name[0] : ""}${user.last_name != null ? user.last_name[0] : ""}`} size='h4' weight='semibold' color='white' />
              </View>
              <View style={styles.infoTextContainer}>
                <CustomText title={fullName} size='bodyLarge' weight='bold' color='textPrimary' />
                <CustomText title={user.email} size='bodySmall' weight='normal' color='textSecondary' />
                <CustomText title={user.phone_number} size='bodySmall' weight='normal' color='textSecondary' />
              </View>
            </View>

            <View style={styles.sectionContainer}>
              <CustomText title='Profile details' size='body' weight='bold' color='textPrimary' classes={[{ marginBottom: 16 }]} />
              <CommonBtnAnother
                kind='secondary'
                title='Update profile details'
                color='textPrimary'
                prefix={ICONS.personFilledIcon}
                suffix={ICONS.chevronRightIcon}
                onPress={() => navigation.navigate('UpdateProfile')}
              />
            </View>

            <View style={styles.sectionContainer}>
              <CustomText title='Security' size='body' weight='bold' color='textPrimary' classes={[{ marginBottom: 16 }]} />
              <CommonBtnAnother
                kind='secondary'
                fontSize='bodySmall'
                title='Update password'
                color='textPrimary'
                prefix={ICONS.lockFillIcon}
                suffix={ICONS.chevronRightIcon}
                onPress={() => navigation.navigate('UpdatePassword')}
              />
              <View style={styles.separator} />
              <View style={styles.innerContainer}>
                <View style={styles.typeContainer}>
                  <View style={styles.iconContainer}>
                    <CustomImage source={ICONS.notificationsFillIcon} width={18} height={18} />
                  </View>
                  <View>
                    <Text style={styles.typeText}>Notifications</Text>
                  </View>
                </View>
                <ToggleSwitch />
              </View>
              <View style={styles.separator} />
            </View>

            <View style={styles.sectionContainer}>
              <CustomText title='Legal' size='body' weight='bold' color='textPrimary' classes={[{ marginBottom: 16 }]} />
              <CommonBtnAnother
                kind='secondary'
                fontSize='bodySmall'
                title='Terms & Conditions'
                color='textPrimary'
                prefix={ICONS.assignmentFillIcon}
                suffix={ICONS.chevronRightIcon}
                onPress={() => handleGotoTermPrivacy()}
              />
              <View style={styles.separator} />
              <CommonBtnAnother
                kind='secondary'
                fontSize='bodySmall'
                title='Privacy policy'
                color='textPrimary'
                prefix={ICONS.descriptionFillIcon}
                suffix={ICONS.chevronRightIcon}
                onPress={() => handleGotoPrivacyPolicy()}
              />
              {/* <View style={styles.separator} /> */}
              {/* <CommonBtnAnother
                kind='secondary'
                fontSize='bodySmall'
                title='COVID-19 Policy'
                color='textPrimary'
                prefix={ICONS.contractFillIcon}
                suffix={ICONS.chevronRightIcon}
                onPress={() => null}
              /> */}
            </View>

            <View style={styles.sectionContainer}>
              <CustomText title='Others' size='body' weight='bold' color='textPrimary' classes={[{ marginBottom: 16 }]} />
              <CommonBtnAnother
                kind='secondary'
                fontSize='bodySmall'
                title='Go to partner app'
                color='textPrimary'
                prefix={ICONS.partnerExchangeIcon}
                suffix={ICONS.chevronRightIcon}
                onPress={() => null}
              />
              <View style={styles.separator} />

              <CommonBtnAnother
                kind='secondary'
                fontSize='bodySmall'
                title='Logout'
                color='textPrimary'
                prefix={ICONS.logoutIcon}
                suffix={ICONS.chevronRightIcon}
                onPress={() => null}
              />
            </View>

            <View style={styles.versionContainer}>
              <Text style={styles.versionText}>UIWallet</Text>
            </View>
          </View>
        </ScrollView>
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
    justifyContent: 'center',
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
    marginLeft: 36
  },
  profileInfoContainer: {
    backgroundColor: '#FFF',
    marginTop: 40,
    position: 'relative',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
  },
  imageContainer: {
    height: 48,
    width: 48,
    position: 'absolute',
    top: -24,
    backgroundColor: THEME.COLORS.activeElements,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    height: 65,
    width: 65,
    borderRadius: 100,
    alignSelf: 'center',
  },
  infoTextContainer: {
    alignItems: 'center',
  },
  nameText: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    marginBottom: 4,
  },
  emailText: {
    color: '#515151',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    marginBottom: 4,
  },
  contactText: {
    color: '#515151',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    marginBottom: 4,
  },
  sectionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFF',
    marginTop: 16,
    borderRadius: 16,
  },
  headingText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    flexDirection: 'row',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
  },
  iconContainer: {
    backgroundColor: '#F5F8FE',
    padding: 5,
    borderRadius: 100,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  typeText: {
    color: '#1B1B1B',
    fontSize: 14,
    marginLeft: 8,
    fontFamily: 'OpenSans-Regular',
  },
  versionContainer: {
    marginHorizontal: 24,
    marginTop: 22,
    marginBottom: 22,
    alignItems: 'center'
  },
  versionText: {
    color: '#6E6E6E',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular'
  },
});

export default UserProfile;
