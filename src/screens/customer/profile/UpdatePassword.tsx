import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { FC, useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import { MoreScreenProps } from '../../../types/navigation';
import CommonScreen from '../../../components/template/CommonScreen';
import CommonHeader from '../../../components/Headers/CommonHeader';
import { THEME } from '../../../constants';
import { TYPES } from '../../../types';
import { validateEightNumber } from '../../../utils/authValidation';
import { CommonBtn, CommonInput, CustomText } from '../../../components/common';

import userAppData from '../../../hooks/userAppData';
import { insertUser, fetchUser, updateUser } from '../../../constants/functions';

const UpdatePassword: FC<MoreScreenProps> = ({ navigation }: any): React.JSX.Element => {

  const { user, refresh, setRefresh } = userAppData();

  const [userinfo, setUserInfo] = useState<TYPES.IChangePassword>({} as TYPES.IChangePassword);
  const [errors, setErrors] = useState<TYPES.IChangePassword>({} as TYPES.IChangePassword);

  const handleChangeInfo = (field: string, value: string) => {
    setUserInfo(v => ({ ...v, [field]: value }));

    switch (field) {
      case 'currentPassword':
        if (!validateEightNumber(value)) {
          setErrors((info: any) => ({ ...info, currentPassword: "Current Password is invalid" }))
        } else {
          setErrors((info: any) => ({ ...info, currentPassword: "" }))
        }
        break;
      case 'password':
        if (!validateEightNumber(value)) {
          setErrors((info: any) => ({ ...info, password: "Password is invalid" }))
        } else {
          setErrors((info: any) => ({ ...info, password: "" }))
        }
        break;
      case 'confrimPassword':
        if (!validateEightNumber(value)) {
          setErrors((info: any) => ({ ...info, confirmPassword: "Confirm Password is invalid" }))
        } else {
          setErrors((info: any) => ({ ...info, confirmPassword: "" }))
        }
        break;
      default:
        break;
    }
  };

  const handleSaveChanges = async () => {
    // Implement the logic to save the updated profile details here
    console.log(user.password);
    if (user.password !== userinfo.currentPassword) {
      showMessage({
        message: 'Current Password incorrect!',
        type: 'warning',
        duration: 3000
      })
    } else {
      user.password = userinfo.password;
      await updateUser(user.email, user);
      showMessage({
        message: 'Changes Password successfully!',
        type: 'success',
        duration: 3000, // 3 seconds
      });
      setRefresh(!refresh);
      navigation.goBack();
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
              <CustomText title='Update Password' size='bodyLarge' weight='semibold' color='textPrimary' />
              <CustomText title='Kindly provide your current password to continue' size='bodySmall' weight='normal' color='textPrimary' />
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Current password</Text>
                <View style={styles.inputItem}>
                  <CommonInput
                    name='currentPassword'
                    type='password'
                    placeholder=''
                    value={userinfo.currentPassword ?? ''}
                    onChange={handleChangeInfo}
                  />
                  {errors.currentPassword &&
                    <CustomText
                      title={errors.currentPassword}
                      size='bodySmall'
                      weight='normal'
                      color='textPrimary'
                    />
                  }
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>New password</Text>
                <View style={styles.inputItem}>
                  <CommonInput
                    name='password'
                    type='password'
                    value={userinfo.password ?? ''}
                    onChange={handleChangeInfo}
                  />
                  {errors.password &&
                    <CustomText
                      title={errors.password}
                      size='bodySmall'
                      weight='normal'
                      color='textPrimary'
                    />
                  }
                </View>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Confrim new password</Text>
                <View style={styles.inputItem}>
                  <CommonInput
                    name='confirmPassword'
                    type='password'
                    value={userinfo.passwordConfirmation}
                    onChange={handleChangeInfo}
                  />
                  {errors.passwordConfirmation &&
                    <CustomText
                      title={errors.passwordConfirmation}
                      size='bodySmall'
                      weight='normal'
                      color='textPrimary'
                    />
                  }
                </View>
              </View>
            </View>

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
    marginLeft: '23%',
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
  visibilityIcon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -8 }],
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
  btnContainer: {
    marginHorizontal: 24,
    marginTop: 8
  },
  inputItem: {
    width: '100%',
    marginTop: 8,
  },
});

export default UpdatePassword;
