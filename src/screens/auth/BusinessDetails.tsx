import React, { FC, useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';
import { AuthScreenProps } from '../../types/navigation';
import CommonScreen from '../../components/template/CommonScreen';
import CommonHeader from '../../components/Headers/CommonHeader';
import { CommonBtn, CommonInput, CustomText } from '../../components/common';
import { ICONS, THEME } from '../../constants';
import { TYPES } from '../../types';
import { validateName } from '../../utils/authValidation';

const transparent = 'rgba(0,0,0,0.5)';
const BusinessDetails: FC<AuthScreenProps> = ({ navigation }): React.JSX.Element => {

  const [userinfo, setUserInfo] = useState<TYPES.ISignUp>({} as TYPES.ISignUp);
  const [errors, setErrors] = useState<TYPES.ISignUp>({} as TYPES.ISignUp);

  const handleChangeInfo = (field: string, value: string) => {
    setUserInfo(v => ({ ...v, [field]: value }));

    switch (field) {
      case 'businessName':
        if (!validateName(value)) {
          setErrors((info: any) => ({ ...info, businessName: "Business Name is invalid" }))
        } else {
          setErrors((info: any) => ({ ...info, businessName: "" }))
        }
        break;
      case 'businessAddress':
        if (!validateName(value)) {
          setErrors((info: any) => ({ ...info, businessAddress: "Business Address is invalid" }))
        } else {
          setErrors((info: any) => ({ ...info, businessAddress: "" }))
        }
        break;
      default:
        break;
    }
  };

  const handleNext = () => {
    navigation.navigate('CreatePassword');
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
                title='Business details'
                size='bodyLarge'
                weight='semibold'
                classes={[{ marginBottom: 4 }]}
                color='iconActive'
              />
              <CustomText
                title='Kindly enter your business details below.'
                size='body'
                weight='normal'
                color='textSecondary'
              />
            </View>
            <View>
              <View style={styles.formContainer}>
                {/* business name */}
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Business name</Text>
                  <View style={styles.inputItem}>
                    <CommonInput
                      name='businessName'
                      placeholder='Enter business name'
                      value={userinfo.businessName ?? ''}
                      icon={ICONS.globeIcon}
                      onChange={handleChangeInfo}
                    />
                    {errors.businessName &&
                      <CustomText
                        title={errors.businessName}
                        size='bodySmall'
                        weight='normal'
                        color='textPrimary'
                      />
                    }
                  </View>
                </View>
                {/* place of business */}
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Place of business</Text>
                  <View style={styles.inputItem}>
                    <CommonInput
                      name='businessAddress'
                      placeholder='Enter business address'
                      value={userinfo.businessAddress ?? ''}
                      onChange={handleChangeInfo}
                      icon={ICONS.locationOnIcon}
                    />
                    {errors.businessAddress &&
                      <CustomText
                        title={errors.businessAddress}
                        size='bodySmall'
                        weight='normal'
                        color='textPrimary'
                      />
                    }
                  </View>
                </View>
                <CommonBtn
                  title='Continue'
                  kind='primary'
                  onPress={() => handleNext()}
                />
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

export default BusinessDetails;
