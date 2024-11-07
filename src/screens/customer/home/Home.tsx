import React, { FC, useState, useEffect } from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import { BottomScreenProps } from '../../../types/navigation';
import CustomText from '../../../components/common/CustomText';
import CommonScreen from '../../../components/template/CommonScreen';
import { ICONS, IMAGES, THEME } from '../../../constants';
import CustomImage from '../../../components/common/CustomImage';
import { CommonBtn } from '../../../components/common';

const Home: FC<BottomScreenProps> = ({ navigation }): React.JSX.Element => {
  const data = [
    { id: '1', title: 'Gel Manicure', image: IMAGES.item1 },
    { id: '2', title: 'Acrylic nails', image: IMAGES.item2 },
    { id: '3', title: 'Gel Nails', image: IMAGES.item3 },
    { id: '4', title: 'Pedicure', image: IMAGES.item4 },
    // Add more data items as needed
  ];

  const handleAddService = () => {

  }

  const handleAddPublisher = () => {

  }

  const handleClaimBenefits = () => {

  }

  return (
    <CommonScreen styles={[styles.bodyContainer]}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <CustomText
            title={`Welcome`}
            size='bodyLarge'
            weight='semibold'
            color='textPrimary'
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomImage source={ICONS.notificationActiveIcon} />
          </View>
        </View>
        <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
          <TouchableWithoutFeedback>
            <View style={{marginHorizontal: 16}}>
              <View style={styles.contentContainer}>
                <CustomText title='Services allowed' size='body' weight='bold' />
                <View style={styles.typeContainer}>
                  <View style={styles.iconContainer}>
                    <CustomImage source={ICONS.arrowForwardIcon} width={18} height={18} />
                  </View>
                  <View>
                    <Text style={styles.typeText}>
                      Health Isurance
                    </Text>
                  </View>
                </View>

                <View style={styles.separator} />

                <View style={styles.typeContainer}>
                  <View style={styles.iconContainer}>
                    <CustomImage source={ICONS.arrowForwardIcon} width={18} height={18} />
                  </View>
                  <View>
                    <Text style={styles.typeText}>Car Isurance</Text>
                  </View>
                </View>
              </View>

              <View style={styles.contentContainer}>
                <CustomText title='Publishers Allowed' size='body' weight='bold' />
                <View style={styles.typeContainer}>
                  <View style={styles.iconContainer}>
                    <CustomImage source={ICONS.arrowForwardIcon} width={18} height={18} />
                  </View>
                  <View>
                    <Text style={styles.typeText}>
                      NYT
                    </Text>
                  </View>
                </View>

                <View style={styles.separator} />

                <View style={styles.typeContainer}>
                  <View style={styles.iconContainer}>
                    <CustomImage source={ICONS.arrowForwardIcon} width={18} height={18} />
                  </View>
                  <View>
                    <Text style={styles.typeText}>Washington Post</Text>
                  </View>
                </View>
              </View>

              <View style={styles.contentContainer}>
                <CustomText title='Benefits granted' size='body' weight='bold' />
                <View style={styles.typeContainer}>
                  <View style={styles.iconContainer}>
                    <CustomImage source={ICONS.arrowForwardIcon} width={18} height={18} />
                  </View>
                  <View>
                    <Text style={styles.typeText}>
                      Health Isuarance Discounts 2950 kj = 4%
                    </Text>
                  </View>
                </View>

                <View style={styles.separator} />

                <View style={styles.typeContainer}>
                  <View style={styles.iconContainer}>
                    <CustomImage source={ICONS.arrowForwardIcon} width={18} height={18} />
                  </View>
                  <View>
                    <Text style={styles.typeText}>Car Isurance Discounts 94% safe driving = 27%</Text>
                  </View>
                </View>

                <View style={styles.separator} />

                <View style={styles.typeContainer}>
                  <View style={styles.iconContainer}>
                    <CustomImage source={ICONS.arrowForwardIcon} width={18} height={18} />
                  </View>
                  <View>
                    <Text style={styles.typeText}>Publishers saved 38$ / mo on paid content access</Text>
                  </View>
                </View>
              </View>
              <View style={styles.bottomBtns}>
                <CommonBtn
                  title='Add Service'
                  kind='primary'
                  onPress={() => handleAddService()}
                />
                <CommonBtn
                  title='Add Publisher'
                  kind='primary'
                  onPress={() => handleAddPublisher()}
                  classes={[{marginTop: 16,}]}
                />
                <CommonBtn
                  title='Claim Benefits'
                  kind='primary'
                  onPress={() => handleClaimBenefits()}
                  classes={[{marginTop: 16,}]}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </CommonScreen>
  )
};


const styles = StyleSheet.create({
  bodyContainer: {
  },
  contentContainer: {
    marginHorizontal: 24,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFF',
    borderRadius: 16,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  },
  typeText: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  iconContainer: {
    backgroundColor: '#F5F8FE',
    padding: 5,
    borderRadius: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F8FE',
    marginTop: 44,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: THEME.COLORS.black50,
  },
  sectionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFF',
    marginTop: 16,
    borderRadius: 16,
  },
  headText: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
  },
  separator: {
    height: 1,
    backgroundColor: '#E9E9E9',
    marginTop: 16,
  },
  cardContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5,
    marginTop: 16,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  overlayText: {
    color: '#FFFFFF',
    fontSize: 24,
    marginBottom: 8,
    fontFamily: 'OpenSans-Bold',
  },
  overlaySubText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'OpenSans-Medium',
  },
  input: {
    flex: 1,
    fontSize: THEME.FONT_SIZES.tag,
    color: THEME.COLORS.black,
    paddingVertical: 0,
  },
  button: {
    backgroundColor: '#FD1362',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
  },
  bottomBtns: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    marginTop: 12
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  postCode: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 19,
    width: '60%',
    height: 56,
    color: 'red',
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  listContainer: {
    marginTop: 32,
    marginBottom: 30,
  },
  listHeading: {
    color: '#1B1B1B',
    fontSize: 24,
    fontFamily: 'OpenSans-bold',
  },
  itemContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    // elevation: 5,
    marginTop: 24,
    height: 293,
  },
  itemImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  itemTitle: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'semibold',
  },
  bookBtn: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#F5F8FE',
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
  },
  buyText: {
    color: '#FD1362',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
  },
});

export default Home;
