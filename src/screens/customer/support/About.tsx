import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { FC } from 'react';
import { MoreScreenProps } from '../../../types/navigation';
import CommonScreen from '../../../components/template/CommonScreen';
import CommonHeader from '../../../components/Headers/CommonHeader';
import { ICONS, IMAGES, THEME } from '../../../constants';
import CustomImage from '../../../components/common/CustomImage';
import { CustomText } from '../../../components/common';

const About: FC<MoreScreenProps> = ({ navigation }): React.JSX.Element => {

  return (
    <CommonScreen styles={[styles.storeDetailContainer]}>
      <CommonHeader title='About UIWallet' classes={[styles.headerContainer]} />
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback>
          <View style={styles.body}>
            <ScrollView>
              <View style={styles.imageContainer}>
                <CustomImage source={IMAGES.founder} classes={[{ width: '100%' }]} height={530} />
              </View>
              <Text style={styles.imgText}>Abisola Bright, the founder</Text>

              <View style={styles.storyContainer}>
                <CustomText title='About Us - Our Story' size='bodyLarge' weight='bold' color='activeElements' />
                <Text style={styles.paragraph}>
                  UIWallet is an online booking platform for nail services in the UK,
                  founded by nail technician Abi Bright in 2019.
                </Text>

                <Text style={[styles.paragraph, { marginTop: 24 }]}>
                  The aim of UIWallet is to make it easier to book nail treatments
                  online. We also strive to empower nail technicians by being able to
                  run their business, without the hassle of marketing or setting up a
                  website.
                </Text>

                <Text style={[styles.paragraph, { marginTop: 24 }]}>
                  Instead, UIWallet is a one stop shop for all things nails, whether
                  you’re looking to book in for a treatment or advertise your nail
                  services to clients in your local area.
                </Text>

                <Text style={[styles.paragraph, { marginTop: 24 }]}>
                  There is currently no other online booking system in the UK that
                  exists just for nails. Here at UIWallet, we want to share our
                  knowledge and expertise of the nail industry with clients so that
                  they receive the very best treatment versus booking through a
                  generic beauty platform.
                </Text>

                <Text style={[styles.paragraph, { marginTop: 24 }]}>
                  By the same token, we also want to make it easier for nail
                  technicians to find clients, without having to pay commission as is
                  the case with other platforms.
                </Text>

                <Text style={[styles.paragraph, { marginTop: 24 }]}>
                  As nail techs ourselves, we want to improve the experience for both
                  clients and fellow nail techs across the UK. platforms.
                </Text>

                <Text style={[styles.paragraph, { marginTop: 24 }]}>
                  Have any questions about UIWallet? Drop us a line at any time via
                  our contact form or social media pages.
                </Text>
              </View>

              <View style={styles.startupContainer}>
                <CustomImage source={IMAGES.microsoft} classes={[{ width: '100%', borderRadius: 16 }]} height={140} />
              </View>

              <View style={styles.storyContainer}>
                <CustomText title='Proud to Announce' size='bodyLarge' weight='bold' color='activeElements' />
                <Text style={styles.paragraph}>
                  As of 2023 UIWallet is part of the Microsoft for Startups
                  programme. This programme enables us to leverage Microsoft's
                  resources and expertise to better serve our customers and create an
                  amazing system for nail technicians. We are thrilled to partner with
                  Microsoft on this exciting journey!
                </Text>
              </View>

              <View style={styles.storyContainer}>
                <CustomText title='Seen On' size='bodyLarge' weight='bold' color='activeElements' />
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.logoContainer}>
                    <CustomImage source={ICONS.skyAndBeIcon} width={108} height={49} />
                    <CustomImage source={ICONS.startup100Icon} width={49} height={49} />
                    <CustomImage source={ICONS.bbcEssexIcon} width={49} height={49} />
                    <CustomImage source={ICONS.enterpriseNationIcon} width={163} height={49} />
                    <CustomImage source={ICONS.rebelIcon} width={91} height={49} />
                    <CustomImage source={ICONS.essexStartupsIcon} width={91} height={49} />
                  </View>
                </ScrollView>
              </View>

              <View style={styles.storyContainer}>
                <CustomText title='Our Mission' size='bodyLarge' weight='bold' color='activeElements' />
                <Text style={styles.paragraph}>
                  Our mission here at UIWallet is to add convenience and
                  comfortability to the way nail beauty services are delivered.
                </Text>

                <Text style={[styles.paragraph, { marginTop: 24 }]}>
                  We want our clients to feel empowered by connecting them to an
                  experience best tailored to them. We understand that getting a nail
                  care service goes beyond a physical sensation of bliss but has its
                  therapeutic benefits too.
                </Text>

                <Text style={[styles.paragraph, { marginTop: 24 }]}>
                  Therefore, we wanted to create a community whereby nail technicians
                  and their clients can connect with ease.
                </Text>
              </View>
            </ScrollView>
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
  imageContainer: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  image: {
    borderRadius: 16,
    overflow: 'hidden',
    width: '100%',
    alignSelf: 'center',
  },
  imgText: {
    color: '#515151',
    marginTop: 16,
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    marginHorizontal: 24,
  },
  storyContainer: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  heading: {
    color: '#FD1362',
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
  },
  paragraph: {
    color: '#515151',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    lineHeight: 24,
    marginTop: 8,
  },
  startupContainer: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  logoContainer: {
    marginHorizontal: 24,
    marginTop: 16,
    gap: 18,
    height: 49,
    flexDirection: 'row',
  },
});

export default About;
