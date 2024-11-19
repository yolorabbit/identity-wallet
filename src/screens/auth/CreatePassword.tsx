import React, { FC, useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';
import { AuthScreenProps } from '../../types/navigation';
import CommonScreen from '../../components/template/CommonScreen';
import CommonHeader from '../../components/Headers/CommonHeader';
import { CommonBtn, CommonInput, CustomModal, CustomText } from '../../components/common';
import { ICONS, THEME } from '../../constants';
import { TYPES } from '../../types';
import { validateEightNumber, validatePassword } from '../../utils/authValidation';
import CustomImage from '../../components/common/CustomImage';
import { IUser } from '../../types/type';
import userAppData from '../../hooks/userAppData';
import { insertUser, fetchUser, updateUser } from '../../constants/functions';

const transparent = 'rgba(0,0,0,0.5)';
const CreatePassword: FC<AuthScreenProps> = ({ navigation }): React.JSX.Element => {

  const [userinfo, setUserInfo] = useState<TYPES.ISignUp>({} as TYPES.ISignUp);
  const [errors, setErrors] = useState<TYPES.ISignUp>({} as TYPES.ISignUp);
  const [openModal, setOpenModal] = useState(false);
  const { user } = userAppData() as { user: IUser };

  const handleChangeInfo = (field: string, value: string) => {
    setUserInfo(v => ({ ...v, [field]: value }));

    switch (field) {
      case 'password':
        if (!validateEightNumber(value)) {
          setErrors((info: any) => ({ ...info, password: "Password is invalid" }))
        } else {
          setErrors((info: any) => ({ ...info, password: "" }))
        }
        break;
      case 'confirmPassword':
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

  const handleNext = async () => {
    // setOpenModal(true);
    user.password = userinfo.password;
    const userInfo = await insertUser(user);
    navigation.navigate('GenerateSeedPhrase');
  }

  const handleGotoLogin = () => {
    setOpenModal(false);
    navigation.navigate('Login');
  }


  function renderModal() {
    return (
      <CustomModal
        visible={openModal}
        // classes={[styles.container, ...containerClasses]}
        onClose={() => setOpenModal(false)}
      >
        <View style={styles.contentHeader}>
          <CustomImage
            source={ICONS.confirmEmailModalIcon}
            width={124}
            height={82}
          />
          <CustomText
            title='Just one last thing'
            size='bodyLarge'
            weight='bold'
            color='textPrimary'
          />
          <Text style={styles.modalPara}>
            For your security, we need to verify your email address before you can access your bookings. Please check your emails to continue.
          </Text>
        </View>
        <CommonBtn
          title='Resend Verification Email'
          kind='secondary'
          color='activeElements'
          weight='semibold'
          onPress={() => handleGotoLogin()}
        />
        <CommonBtn
          title='Go to Login'
          kind='primary'
          prefix={ICONS.arrowBackWhtieIcon}
          onPress={() => handleGotoLogin()}
        />
      </CustomModal>
    );
  }

  return (
    <CommonScreen styles={[styles.signupContainer]}>
      <CommonHeader />
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback>
          <View style={styles.body}>
            <View style={styles.txtContainer}>
              <CustomText
                title='UIWallet'
                size='h4'
                weight='semibold'
                color='textPrimary'
                classes={[{ marginBottom: 8 }]}
              />
              <CustomText
                title='Create Password'
                size='bodyLarge'
                weight='semibold'
                classes={[{ marginBottom: 4 }]}
                color='iconActive'
              />
              <CustomText
                title='Enter the password your want to use'
                size='body'
                weight='normal'
                color='textSecondary'
              />
            </View>
            <View>
              <View style={styles.formContainer}>
                {/* password */}
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Create password</Text>
                  <View style={styles.inputItem}>
                    <CommonInput
                      name='password'
                      type='password'
                      placeholder='Password'
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
                {/* confrim password */}
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Confrim password</Text>
                  <View style={styles.inputItem}>
                    <CommonInput
                      name='confirmPassword'
                      type='password'
                      placeholder='Confirm password'
                      value={userinfo.confirmPassword ?? ''}
                      onChange={handleChangeInfo}
                    />
                    {errors.confirmPassword &&
                      <CustomText
                        title={errors.confirmPassword}
                        size='bodySmall'
                        weight='normal'
                        color='textPrimary'
                      />
                    }
                  </View>
                </View>
                <CustomText
                  title='Password must contain at least 8 characters'
                  size='body'
                  weight='normal'
                  color='textSecondary'
                  classes={[{ marginBottom: 24 }]}
                />
                <CommonBtn
                  title='Signup'
                  kind= 'primary'
                  onPress={() => handleNext()}
                />
              </View>
            </View>
            {renderModal()}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </CommonScreen >
  );
};

const styles = StyleSheet.create({
  signupContainer: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 24,
  },
  body: {
    width: '100%',
    marginBottom: 100,
    display: 'flex',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F8FE',
  },
  scrollViewContent: {
    flexGrow: 1, // Allows content to scroll vertically
    paddingBottom: 20, // Add paddingBottom to avoid clipping the last item
  },
  headerContainer: {
    marginHorizontal: 24,
    flexDirection: 'column',
  },
  txtContainer: {
    marginTop: 0,
    marginBottom: 24,
  },
  heading: {
    color: '#000000',
    fontSize: 34,
    fontFamily: 'ScheherazadeNew-SemiBold',
  },
  formHeading: {
    color: '#FD1362',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
  },
  subHeading: {
    color: '#515151',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'OpenSans-Regular',
  },
  formContainer: {
    marginTop: 0,
    marginHorizontal: 0,
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 24,
  },
  label: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    marginBottom: 8,
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
  inputItem: {
    width: '100%',
  },
  inputIcon: {
    position: 'absolute', // Set absolute position
    right: 16, // Adjust as needed
    top: '50%', // Center vertically
    transform: [{ translateY: -8 }], // Adjust translateY based on icon size
  },
  visibilityIcon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -8 }],
  },
  forgotText: {
    color: '#515151',
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'right',
    marginTop: 8,
  },
  btnContainer: {
    marginTop: 20,
    marginHorizontal: 24,
  },
  bottomContainer: {
    marginHorizontal: 24,
    marginTop: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  loginTxt: {
    color: THEME.COLORS.activeElements,
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    top: 4,
  },
  signup: {
    color: THEME.COLORS.activeElements,
    fontSize: THEME.FONT_SIZES.body,
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#E9E9E9',
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 10,
    marginRight: 8,
    left: -24,
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
    color: THEME.COLORS.textSecondary,
  },
  checkboxGroup: {
    marginBottom: 24,
  },
  /// modal css ////
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
    marginBottom: 24,
    marginTop: 24,
    alignItems: 'center',
  },
  content: {
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  modalText: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
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
    marginBottom: 8,
  }
});

export default CreatePassword;
