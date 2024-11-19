import React, { FC, useState } from 'react';
import { View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';
import CommonScreen from '../../components/template/CommonScreen';
import CommonHeader from '../../components/Headers/CommonHeader';
import { CommonBtn, CommonInput, CustomText } from '../../components/common';
import { ICONS, THEME } from '../../constants';
import { TYPES } from '../../types';
import { validateEightNumber, validateEmailAddress } from '../../utils/authValidation';
import userAppData from '../../hooks/userAppData';
import { fetchUser } from '../../constants/functions';
import { IUser } from '../../types/type';

const Login: FC<any> = ({ navigation }): React.JSX.Element => {
  const { user } = userAppData() as { user: IUser };
  const [isLoading, setLoading] = useState<boolean>(false);
  const [userinfo, setUserInfo] = useState<TYPES.ISignUp>({} as TYPES.ISignUp);
  const [errors, setErrors] = useState<TYPES.ISignUp>({} as TYPES.ISignUp);

  const onNext = async () => {
    setErrors((info: any) => ({ ...info, email: "" }));
    setErrors((info: any) => ({ ...info, password: "" }));
    setLoading(true);
    const data = await fetchUser(userinfo.email);
    if (data) {
      if (data.password == userinfo.password) {
        user.email = data.email;
        user.did = data.did;
        user.first_name = data.first_name;
        user.last_name = data.last_name;
        user.information = data.information;
        user.phone_number = data.phone_number;
        user.password = data.password;
        navigation.navigate("Home");
      } else {
        setErrors((info: any) => ({ ...info, password: "Password Incorrect!" }))
      }
    } else {
      setErrors((info: any) => ({ ...info, email: "Email Incorrect!" }))
    }
    setLoading(false);
  }
  const handleChangeInfo = (field: string, value: string) => {
    setUserInfo(v => ({ ...v, [field]: value }));
    switch (field) {
      case 'email':
        if (!validateEmailAddress(value)) {
          setErrors((info: any) => ({ ...info, email: "Email is invalid" }))
        } else {
          setErrors((info: any) => ({ ...info, email: "" }))
        }
        break;
      case 'password':
        if (!validateEightNumber(value)) {
          setErrors((info: any) => ({ ...info, password: "Password is invalid" }))
        } else {
          setErrors((info: any) => ({ ...info, password: "" }))
        }
        break;
      default:
        break;
    }
  };

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
                title='Login'
                size='bodyLarge'
                weight='semibold'
                classes={[{ marginBottom: 4 }]}
                color='iconActive'
              />
              <CustomText
                title='Book your next appointment!'
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
                {/* passowrd */}
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Password</Text>
                  <View style={styles.inputItem}>
                    <CommonInput
                      name='password'
                      type='password'
                      placeholder='Enter password'
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
                <View style={styles.forgotPasswordContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <CustomText
                      title='Forgot Password?'
                      size='body'
                      weight='bold'
                      color='textSecondary'
                    />
                  </TouchableOpacity>
                </View>
                <CommonBtn
                  title='Login'
                  isLoading = {isLoading}
                  kind= "primary"
                  onPress={() => onNext()}
                />
                {/* Create Account Text */}
                <View style={styles.bottomContainer}>
                  <CustomText
                    title={`Don't have an account?`}
                    size='body'
                    weight='normal'
                    color='textSecondary'
                  />
                  <TouchableOpacity
                    style={{ marginLeft: 5 }}
                    onPress={() => navigation.navigate('Signup')}
                  >
                    <Text style={styles.signup}>Sign Up</Text>
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
});

export default Login;
