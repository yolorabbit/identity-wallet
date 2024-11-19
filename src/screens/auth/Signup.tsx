import React, { FC, useEffect, useState } from 'react';
import { View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';
import { AuthScreenProps } from '../../types/navigation';
import CommonScreen from '../../components/template/CommonScreen';
import CommonHeader from '../../components/Headers/CommonHeader';
import { CommonBtn, CommonInput, CustomText } from '../../components/common';
import { ICONS, THEME } from '../../constants';
import { TYPES } from '../../types';
import { validateEmailAddress, validateMobilePhoneNumber, validateName } from '../../utils/authValidation';
import CustomImage from '../../components/common/CustomImage';
import userAppData from '../../hooks/userAppData';
import { IUser } from '../../types/type';

const Checkbox = ({ checked, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        {checked ? (
          <CustomImage source={ICONS.acitveCheckboxIcon} />
        ) : (
          <CustomImage source={ICONS.priorityOutlineIcon} />
        )}
      </View>
    </TouchableOpacity>
  );
};


const Signup: FC<any> = ({ navigation }): React.JSX.Element => {
  const { user } = userAppData() as { user: IUser };
  const [userinfo, setUserInfo] = useState<TYPES.ISignUp>({} as TYPES.ISignUp);
  const [errors, setErrors] = useState<TYPES.ISignUp>({} as TYPES.ISignUp);
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [showMobilePhone, setShowMobilePhone ] = useState(false);

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
          setErrors((info: any) => ({ ...info, mobileNumber: "Mobile Phone Number must contain at least 8 digits" }))
        } else {
          setErrors((info: any) => ({ ...info, mobileNumber: "" }))
        }
        break;

      default:
        break;
    }
  };

  const handleContinue = () => {
    user.email = userinfo.email;
    user.first_name = userinfo.firstName;
    user.last_name = userinfo.lastName;
    user.phone_number = showMobilePhone ? userinfo.mobileNumber : "";
    navigation.navigate("CreatePassword");
  };

  useEffect(() => {
  }, [])

  const toggleCheckboxNewsletter = () => setNewsletterChecked(!newsletterChecked);
  const toggleCheckboxTerms = () => setTermsChecked(!termsChecked);
  const toggleCheckboxShowPhone = () => setShowMobilePhone(!showMobilePhone);


  const handleGotoTermCondition = () => {
    navigation.navigate('Home', { screen: 'TermCondition' });
  }

  const handleGotoPrivacyPolicy = () => {
    navigation.navigate('Home', { screen: 'PrivacyPolicy' });
  }

  return (
    <CommonScreen styles={[styles.signupContainer]}>
      <CommonHeader />
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback>
          <View style={styles.body}>
            <View style={styles.txtContainer}>
              <CustomText
                title='Ultimate Identity Wallet'
                size='h4'
                weight='semibold'
                color='textPrimary'
                classes={[{ marginBottom: 8 }]}
              />
              <CustomText
                title='Signup'
                size='bodyLarge'
                weight='semibold'
                classes={[{ marginBottom: 4 }]}
                color='iconActive'
              />
              <CustomText
                title='Create your free account!'
                size='body'
                weight='normal'
                color='textSecondary'
              />
            </View>
            <View>
              <View style={styles.formContainer}>
                {/* First Name */}
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

                <View style={styles.checkboxContainer}>
                    <Checkbox
                      checked={showMobilePhone}
                      onPress={toggleCheckboxShowPhone}
                    />
                    <CustomText
                      title='Add mobile number'
                      size='bodySmall'
                      weight='normal'
                      color='textSecondary'
                      classes={[{ marginLeft: 8 }]}
                    />
                </View>
                
                {/* Mobile Number */}
                { showMobilePhone && <View style={styles.inputContainer}>
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
                }
                
                <View style={styles.checkboxGroup}>
                  {/* Checkbox 1 */}
                  <View style={styles.checkboxContainer}>
                    <Checkbox
                      checked={newsletterChecked}
                      onPress={toggleCheckboxNewsletter}
                    />
                    <CustomText
                      title='Yes, I want to receive the Ultimate Identity newsletter.'
                      size='bodySmall'
                      weight='normal'
                      color='textSecondary'
                      classes={[{ marginLeft: 8 }]}
                    />
                  </View>

                  {/* Checkbox 2 */}
                  <View style={styles.checkboxContainer}>
                    <Checkbox
                      checked={termsChecked}
                      onPress={toggleCheckboxTerms}
                    />
                    <Text style={styles.checkboxText}>
                      I agree to the{' '}
                      <TouchableOpacity onPress={() => handleGotoPrivacyPolicy()}>
                        <Text style={styles.loginTxt}>Terms & Conditions</Text>
                      </TouchableOpacity>{' '}
                      and{' '}
                      <TouchableOpacity onPress={() => handleGotoPrivacyPolicy()}>
                        <Text style={styles.loginTxt}>Privacy Policy</Text>
                      </TouchableOpacity>
                    </Text>
                  </View>
                </View>
                <CommonBtn
                  title='Continue'
                  kind= 'primary'
                  onPress={() => handleContinue()}
                />
                {/* Create Account Text */}
                <View style={styles.bottomContainer}>
                  <CustomText
                    title='Already have an account?'
                    size='body'
                    weight='normal'
                    color='textSecondary'
                  />
                  <TouchableOpacity
                    style={{ marginLeft: 5 }}
                    onPress={() => navigation.navigate('Login')}
                  >
                    <Text style={styles.signup}>Log In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
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
    marginBottom: 23,
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
    alignItems: 'center',
    height: 60,
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
});

export default Signup;
