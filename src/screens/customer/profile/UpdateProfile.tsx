// UpdateProfile.js
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { FC, useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import CommonScreen from '../../../components/template/CommonScreen';
import CommonHeader from '../../../components/Headers/CommonHeader';
import { ICONS, THEME } from '../../../constants';
import { MoreScreenProps } from '../../../types/navigation';
import { CommonBtn, CommonInput, CustomText } from '../../../components/common';
import { TYPES } from '../../../types';
import { validateEmailAddress, validateMobilePhoneNumber, validateName } from '../../../utils/authValidation';

import userAppData from '../../../hooks/userAppData';
import { insertUser, fetchUser, updateUser } from '../../../constants/functions';

const UpdateProfile: FC<MoreScreenProps> = ({ route, navigation }: any): React.JSX.Element => {

  const { user, refresh, setRefresh } = userAppData();

  const [userinfo, setUserInfo] = useState<TYPES.ISignUp>({
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    mobileNumber: user.phone_number,
  } as TYPES.ISignUp);
  const [errors, setErrors] = useState<TYPES.ISignUp>({} as TYPES.ISignUp);

  const handleSaveChanges = async () => {
    // Implement the logic to save the updated profile details here
    user.email = userinfo.email;
    user.first_name = userinfo.firstName;
    user.last_name = userinfo.lastName;
    user.phone_number = userinfo.mobileNumber;

    await updateUser(user.email, user);
    showMessage({
      message: 'Changes updated successfully!',
      type: 'success',
      duration: 3000, // 3 seconds
    });
    setRefresh(!refresh);
    navigation.goBack();
  };

  const handleChangeInfo = (field: string, value: string) => {
    setUserInfo(v => ({ ...v, [field]: value }));

    switch (field) {
      case 'firstName':
        if (!validateName(value)) {
          setErrors((info: any) => ({ ...info, firstName: "First Name is invalid" }))
        } else {
          setErrors((info: any) => ({ ...info, firstName: "" }))
        }
        break;
      case 'lastName':
        if (!validateName(value)) {
          setErrors((info: any) => ({ ...info, lastName: "Last Name is invalid" }))
        } else {
          setErrors((info: any) => ({ ...info, lastName: "" }))
        }
        break;
      case 'email':
        if (!validateEmailAddress(value)) {
          setErrors((info: any) => ({ ...info, email: "Email is invalid" }))
        } else {
          setErrors((info: any) => ({ ...info, email: "" }))
        }
        break;
      case 'mobileNumber':
        if (!validateMobilePhoneNumber(value)) {
          setErrors((info: any) => ({ ...info, mobileNumber: "Mobile Phone Number must be 12 characters" }))
        } else {
          setErrors((info: any) => ({ ...info, mobileNumber: "" }))
        }
        break;

      default:
        break;
    }
  };

  return (
    <CommonScreen styles={[styles.storeDetailContainer]}>
      <CommonHeader title='Update Profile' classes={[styles.headerContainer]} />
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback>
          <View style={styles.body}>

            {/* Heading */}
            <View style={styles.mainTextContainer}>
              <CustomText title='Update Profile Details' size='bodyLarge' weight='semibold' color='textPrimary' />
              <CustomText title='Kindly update your profile details' size='bodySmall' weight='normal' color='textPrimary' />
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>First name</Text>
                <View style={styles.inputItem}>
                  <CommonInput
                    icon={ICONS.personIcon}
                    name='firstName'
                    placeholder='Enter name'
                    value={userinfo.firstName ?? ''}
                    onChange={handleChangeInfo}
                  />
                  {errors.firstName &&
                    <CustomText
                      title={errors.firstName}
                      size='bodySmall'
                      weight='normal'
                      color='textPrimary'
                    />
                  }
                </View>
              </View>

              {/* Last Name */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Last name</Text>
                <View style={styles.inputItem}>
                  <CommonInput
                    icon={ICONS.personIcon}
                    name='lastName'
                    placeholder='Enter name'
                    value={userinfo.lastName ?? ''}
                    onChange={handleChangeInfo}
                  />
                  {errors.lastName &&
                    <CustomText
                      title={errors.lastName}
                      size='bodySmall'
                      weight='normal'
                      color='textPrimary'
                    />
                  }
                </View>
              </View>
              {/* Email */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <View style={styles.inputItem}>
                  <CommonInput
                    icon={ICONS.mailOutlineIcon}
                    name='email'
                    placeholder='Enter email'
                    value={userinfo.email ?? ''}
                    onChange={handleChangeInfo}
                  />
                  {errors.email &&
                    <CustomText
                      title={errors.email}
                      size='bodySmall'
                      weight='normal'
                      color='textPrimary'
                    />
                  }
                </View>
              </View>

              {/* Mobile Number */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Mobile number</Text>
                <View style={styles.inputItem}>
                  <CommonInput
                    icon={ICONS.callIcon}
                    name='mobileNumber'
                    placeholder='Enter number'
                    value={userinfo.mobileNumber ?? ''}
                    onChange={handleChangeInfo}
                  />
                  {errors.mobileNumber &&
                    <CustomText
                      title={errors.mobileNumber}
                      size='bodySmall'
                      weight='normal'
                      color='textPrimary'
                    />
                  }
                </View>
              </View>
            </View>

            {/* Submit Button */}
            <View style={styles.btnContainer}>
              <CommonBtn 
                title='Save Changes'
                kind='primary'
                color='primaryBtnText'
                onPress={() => handleSaveChanges()}
              />
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
  mainTextContainer: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  mainText: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
  },
  mainSubText: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    marginTop: 5,
  },
  formContainer: {
    marginHorizontal: 24,
    marginTop: 24,
    flexDirection: 'column', // Changed from 'row' to 'column'
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 24,
  },
  label: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative', // Set relative position
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    marginTop: 8,
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
  inputIcon: {
    position: 'absolute', // Set absolute position
    right: 16, // Adjust as needed
    top: '50%', // Center vertically
    transform: [{ translateY: -8 }], // Adjust translateY based on icon size
  },
  btnContainer: {
    // marginTop: 20,
    marginHorizontal: 24,
  },
  inputItem: {
    width: '100%',
    marginTop: 8,
  },
});

export default UpdateProfile;
