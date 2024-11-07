import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { FC } from 'react';
import { Rating } from '@kolking/react-native-rating';
import Swiper from 'react-native-swiper';
import { ICONS, IMAGES, THEME } from '../../../constants';
import { MoreScreenProps } from '../../../types/navigation';
import { CustomText } from '../../../components/common';
import CustomImage from '../../../components/common/CustomImage';
import CommonScreen from '../../../components/template/CommonScreen';
import ToggleSwitch from '../../../components/common/ToggleSwitch';

const NailBooking: FC<MoreScreenProps> = ({ navigation }): React.JSX.Element => {
  const data = [
    {
      id: '1',
      title: 'Nailsbysam',
      images: [
        IMAGES.nail1,
        IMAGES.nail2,
        IMAGES.nail3,
        IMAGES.nail4,
        IMAGES.nail5,
        IMAGES.nail6,
        // Add more images as needed
      ],
      subText: '328B Kilburn High Road Brondesbury, London NW6 2QN',
      rating: 4.5,
      review: 7,
    },
    {
      id: '2',
      title: 'painted by tay',
      images: [
        IMAGES.nail1,
        IMAGES.nail2,
        IMAGES.nail3,
        IMAGES.nail4,
        IMAGES.nail5,
        IMAGES.nail6,
        // Add more images as needed
      ],
      review: 10,
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Swiper
          style={styles.swiper}
          showsButtons={false}
          dot={<View style={styles.dotStyle} />}
          activeDot={<View style={styles.activeDotStyle} />}
        >
          {item.images.map((image: any, index: number) => (
            <Image key={index} source={image} style={styles.itemImage} resizeMode="cover" />
          ))}
        </Swiper>
      </View>

      <View style={styles.bottomContainer}>
        <CustomText title={item.title} size='bodyLarge' weight='bold' color='textPrimary' />
        <CustomText title={item.subText} size='bodySmall' weight='normal' color='textSecondary' />
        {item.rating ? (
          <View style={styles.ratingContainer}>
            <Rating
              rating={item.rating}
              size={15}
              variant='stars-outline'
              baseColor={THEME.COLORS.warning400}
              fillColor={THEME.COLORS.warning400}
              disabled={true}
              spacing={8}
            />
            <CustomText title={`(${item.review} reviews)`} size='bodySmall' weight='normal' color='textTertiary' />
          </View>
        ) : (
          <Text>(No reviews)</Text>
        )}

        <TouchableOpacity
          style={styles.bookBtn}
        onPress={() => navigation.navigate('Store')}
        >
          <CustomText title='Book Now' size='body' weight='semibold' color='activeElements' />
          <CustomImage source={ICONS.arrowForwardActiveIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );


  return (
    <CommonScreen>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <CustomImage source={ICONS.headerBackIcon} />
            </TouchableOpacity>
            <Text style={styles.headText}>Book Nails New You</Text>
          </View>

          <TouchableOpacity
            style={styles.btnMap}
            onPress={() => {
              // navigation.navigate('Map');
            }}>
            {/* <MaterialIcons name="location-pin" size={24} color={'#FFFFFF'} /> */}
            <Text style={styles.btnText}>Show Map</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <TouchableWithoutFeedback>
            <View style={styles.feedbackContainer}>
              <View style={styles.searchContainer}>
                <CustomText title='Find a Nail Tech Near You' size='bodyLarge' weight='bold' color='textPrimary' classes={[{ marginBottom: 16 }]} />
                <View style={styles.inputWrapper}>
                  <CustomImage source={ICONS.locationOnIcon} />
                  <TextInput
                    placeholder="Enter your location"
                    style={styles.input}
                    placeholderTextColor={'#6E6E6E'}
                  />
                  <CustomImage source={ICONS.searchIcon} />
                </View>

                <View style={styles.toggleContainer}>
                  <Text style={styles.toggleText}>Display mobile nail technicians</Text>
                  <ToggleSwitch />
                </View>
              </View>

              <View style={styles.listContainer}>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={false}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </CommonScreen >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FE',
    marginTop: 30,
  },
  feedbackContainer: {
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: THEME.COLORS.black50,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  headText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
  },
  headerContent: {
    flexDirection: 'row',
    gap: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#E9E9E9',
    marginTop: 16,
  },
  btnMap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: '#FD1362',
    borderRadius: 12,
    gap: 4,
  },
  btnText: {
    color: '#FFF',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  searchContainer: {
    marginTop: 16,
    marginHorizontal: 24,
    backgroundColor: '#FFF',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  innerText: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    marginBottom: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginVertical: 5,
    position: 'relative',
    height: 56,
    backgroundColor: '#FFF',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  toggleText: {
    color: '#515151',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    width: 250,
  },
  itemContainer: {
    flexDirection: 'column',
    marginTop: 24,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
    elevation: 5,
  },
  swiper: {
    height: '100%',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  dotStyle: {
    backgroundColor: '#FFFFFF',
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 3,
    top: 20,
  },
  activeDotStyle: {
    backgroundColor: '#FD1362',
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 3,
    top: 20,
  },
  bottomContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  itemTitle: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
  },
  ratingContainer: {
    alignSelf: 'flex-start',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  itemPara: {
    color: '#515151',
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  bookBtn: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#F5F8FE',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 24,
  },
  buyText: {
    color: '#FD1362',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
  },
  listContainer: {
    marginHorizontal: 24,
    marginBottom: 30,
  },
  reviewText: {
    color: '#6E6E6E',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
});

export default NailBooking;