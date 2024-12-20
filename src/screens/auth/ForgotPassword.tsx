import React, { FC, useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';
import { AuthScreenProps } from '../../types/navigation';
import CommonScreen from '../../components/template/CommonScreen';
import CommonHeader from '../../components/Headers/CommonHeader';
import { CommonBtn, CommonInput, CustomModal, CustomText } from '../../components/common';
import { ICONS, THEME } from '../../constants';
import { TYPES } from '../../types';
import { validateName } from '../../utils/authValidation';
import CustomImage from '../../components/common/CustomImage';

const ForgotPassword: FC<AuthScreenProps> = ({ navigation }): React.JSX.Element => {

  const [userinfo, setUserInfo] = useState<TYPES.ISignUp>({} as TYPES.ISignUp);
  const [errors, setErrors] = useState<TYPES.ISignUp>({} as TYPES.ISignUp);
  const [openModal, setOpenModal] = useState(false);

  const handleChangeInfo = (field: string, value: string) => {
    setUserInfo(v => ({ ...v, [field]: value }));

    switch (field) {
      case 'email':
        if (!validateName(value)) {
          setErrors((info: any) => ({ ...info, email: "Email is invalid" }))
        } else {
          setErrors((info: any) => ({ ...info, email: "" }))
        }
      default:
        break;
    }
  };

  const handleGotoLogin = () => {
    setOpenModal(false);
    navigation.navigate('Login');
  }

  
  const handleNext = () => {
    setOpenModal(true);
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
                title='Reset your password'
                size='bodyLarge'
                weight='semibold'
                classes={[{ marginBottom: 4 }]}
                color='iconActive'
              />
              <CustomText
                title={`Enter the email associated with your account and we'll send an email with instructions to reset your password.`}
                size='body'
                weight='normal'
                color='textSecondary'
              />
            </View>
            <View>
              <View style={styles.formContainer}>
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
                <CommonBtn
                  title='Reset Your Password'
                  kind='primary'
                onPress={() => handleNext()}
                />
              </View>
            </View>
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
                  title='Email has been sent!'
                  size='bodyLarge'
                  weight='bold'
                  color='textPrimary'
                />
                <Text style={styles.modalPara}>
                An email has been sent to you at example@gmail.com. Kindly check your junk if you didn’t get the email
                </Text>
              </View>
              <CommonBtn
                title='Back'
                kind='primary'
                prefix={ICONS.arrowBackWhtieIcon}
                onPress={() => handleGotoLogin()}
              />
            </CustomModal>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </CommonScreen >
  );
};

const styles = StyleSheet.create({
  forgotPasswordContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
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
  contentHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 24,
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
});

export default ForgotPassword;
