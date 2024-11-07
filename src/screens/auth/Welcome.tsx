import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import CommonScreen from '../../components/template/CommonScreen';
import { IMAGES, THEME } from '../../constants';
import { CommonBtn, CustomText } from '../../components/common';
import { TYPES } from '../../types';
import userAppData from '../../hooks/userAppData';

const Welcome = ({ navigation }: any): React.JSX.Element => {
  const { UpdateRole } = userAppData();
  const onNext = (role: TYPES.IRole) => {
    UpdateRole(role);
    if (role === 'partner') {
      navigation.navigate('Login')
    } else {
      navigation.navigate('Onboarding');
    }
  };

  return (
    <CommonScreen styles={[styles.bodyContainer]}>
      <View style={styles.container}>
        <ImageBackground
          source={IMAGES.Onboard}
          style={styles.bgStyle}
        >
          <View style={styles.bottom}>
            <View style={styles.bottomHeader}>
              <CustomText
                title='Welcome to UIWallet'
                size='h4'
                weight='bold'
                color='textPrimary'
              />
              <View style={styles.subtitle}>
                <CustomText
                  title='Your 24/7 online platform to find and'
                  size='body'
                  weight='semibold'
                  color='textSecondary'
                />
                <CustomText
                  title='book nail services and technicians.'
                  size='body'
                  weight='semibold'
                  color='textSecondary'
                  classes={[styles.customText]}
                />
              </View>
            </View>
            <View style={styles.bottomBtns}>
              <CommonBtn
                title='I am a Customer'
                kind='primary'
                classes={[{ marginBottom: 16 }]}
                onPress={() => onNext('customer')}
              />
              <CommonBtn
                title='I am a Partner'
                kind='secondary'
                color='secondaryBtnText'
                onPress={() => onNext('partner')}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </CommonScreen>
  )
};

const styles = StyleSheet.create({
  bodyContainer: {
    alignItems: 'center',
    width: '100%',
  },
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  header: {
    width: '100%',
    height: '100%',
  },
  bgStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottom: {
    width: '100%',
    height: '33%',
    backgroundColor: THEME.COLORS.backgroundPrimary,
    display: 'flex',
    alignItems: 'center',
    borderTopLeftRadius: THEME.BORDER_RADIUS.large,
    borderTopRightRadius: THEME.BORDER_RADIUS.large,
    padding: 24,
  },
  bottomHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 8,
  },
  bottomBtns: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  },
  customText: {
    textAlign: 'center',
  },
});

export default Welcome;