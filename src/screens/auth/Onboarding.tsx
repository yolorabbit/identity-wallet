import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import CommonScreen from '../../components/template/CommonScreen';
import { ICONS, IMAGES, THEME } from '../../constants';
import { CommonBtn, CustomText } from '../../components/common';
// import Carousel from 'react-native-reanimated-carousel';
import { TYPES } from '../../types';
import CustomImage from '../../components/common/CustomImage';
import theme from '../../constants/theme';

const Onboarding = ({ navigation }: any): React.JSX.Element => {
  const onNext = (route: string) => {
    navigation.navigate(route);
  };

  const [title, setTitle] = useState<string>('Welcome to UIWallet');
  const [subTitle1, setSubTitle1] = useState<string>('Discover nail techs near you and');
  const [subTitle2, setSubTitle2] = useState<string>('choose your treatments');
  const width = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const renderItem = (index: number) => {
    if (index === 0) {
      return (
        <CustomImage source={IMAGES.intro} classes={[styles.carouselItem]} />
      )
    } else if (index === 1) {
      return (
        <CustomImage source={IMAGES.intro2} classes={[styles.carouselItem]} />
      )
    } else if (index === 2) {
      return (
        <CustomImage source={IMAGES.intro3} classes={[styles.carouselItem]} />
      );
    } else if (index === 3) {
      return (
        <CustomImage source={IMAGES.intro4} classes={[styles.carouselItem]} />
      );
    }

    return (
      <CustomImage source={IMAGES.intro1} classes={[styles.carouselItem]} />
    )
  };

  useEffect(() => {
    if (currentIndex === 0) {
      setTitle('Welcome to your UI Wallet');
      setSubTitle1('A digital identity wallet for Ad Tech');
      setSubTitle2('');
    } else if (currentIndex === 1) {
      setTitle('Self-Sovereign Identity (SSI)');
      setSubTitle1('Embrace SSI principles, store VC');
      setSubTitle2('and control your identity.');
    } else if (currentIndex === 2) {
      setTitle('Privacy & Security');
      setSubTitle1('Priority privacy and security with');
      setSubTitle2('Decentralized Identifiers and VC.');
    } else if (currentIndex === 3) {
      setTitle('Decentralize Your Digital Identity');
      setSubTitle1('Decentralized technology transfers');
      setSubTitle2('ownership and control to you.');
    }
  }, [currentIndex])

  return (
    <CommonScreen styles={[styles.bodyContainer]}>
      <View style={styles.container}>
        <View style={styles.bgContainer}>
          <View style={styles.carouselContainer}>
            {/* <Carousel
              loop
              width={width}
              height={500}
              autoPlay={false}
              data={[...new Array(1).keys()]}
              scrollAnimationDuration={4000}
              onSnapToItem={(index) => setCurrentIndex(index)}
              renderItem={({ index }) => renderItem(index)}
            /> */}
            <CustomImage source={IMAGES.intro} width={400} height={300}></CustomImage>
          </View>
          <View style={styles.bottom}>
            <View style={styles.bottomHeader}>
              <CustomText
                title={title}
                size='h4'
                weight='bold'
                color='textPrimary'
              />
              <View style={styles.subtitle}>
                <CustomText
                  title={subTitle1}
                  size='body'
                  weight='semibold'
                  color='textSecondary'
                />
                <CustomText
                  title={subTitle2}
                  size='body'
                  weight='semibold'
                  color='textSecondary'
                  classes={[styles.customText]}
                />
              </View>
              {/* <View style={styles.carouselIcons}>
                <CustomImage source={currentIndex === 0 ? ICONS.activeIcon : ICONS.emptyIcon} classes={[{width: 12, height: '100%'}]} />
                <CustomImage source={currentIndex === 1 ? ICONS.activeIcon : ICONS.emptyIcon} classes={[{width: 12, height: '100%'}]} />
                <CustomImage source={currentIndex === 2 ? ICONS.activeIcon : ICONS.emptyIcon} classes={[{width: 12, height: '100%'}]} />
                <CustomImage source={currentIndex === 3 ? ICONS.activeIcon : ICONS.emptyIcon} classes={[{width: 12, height: '100%'}]} />
              </View> */}
            </View>
            <View style={styles.bottomBtns}>
              <CommonBtn
                title='Signup'
                kind='primary'
                onPress={() => onNext('Signup')}
              />
              <CommonBtn
                title='Login'
                kind='secondary'
                color='secondaryBtnText'
                onPress={() => onNext('Login')}
                classes={[{marginTop: 16,}]}
              />
            </View>
          </View>
        </View>
      </View>
    </CommonScreen>
  )
};

const styles = StyleSheet.create({
  bodyContainer: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  bgContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EAEDF3',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  carouselIcons: {
    display: 'flex',
    flexDirection: 'row',
    width: 72,
    height: 12,
    marginTop: 8,
    justifyContent: 'space-between',
  },
  carouselContainer: {
    marginTop: 30,
    width: '90%',
    height: '75%',
    paddingLeft: 30,
    paddingRight: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  carouselItem: {
    width: '100%',
    height: '100%'
  },
  introImage: {
    width: '100%',
    height: 400
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
    position: 'absolute',
    bottom: 0,
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

export default Onboarding;