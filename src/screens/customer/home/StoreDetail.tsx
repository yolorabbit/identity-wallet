import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import React, { FC } from 'react';
import { Rating } from '@kolking/react-native-rating';
import { useState } from 'react';
import { MoreScreenProps } from '../../../types/navigation';
import CustomImage from '../../../components/common/CustomImage';
import { ICONS, IMAGES, THEME } from '../../../constants';
import ServiceList from '../../../components/common/ServiceList';
import ReviewCard from '../../../components/common/ReviewCard';
import { CommonBtn, CustomText } from '../../../components/common';
import CommonScreen from '../../../components/template/CommonScreen';
import CommonHeader from '../../../components/Headers/CommonHeader';
import Swiper from 'react-native-swiper';

// Define constant for transparent color
const transparent = 'rgba(0,0,0,0.5)';

const Checkbox = ({ checked, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginRight: 8 }}>
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


const StoreDetail: FC<MoreScreenProps> = ({ navigation }): React.JSX.Element => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const ImageData = [
    {
      id: '1',
      images: [
        IMAGES.nail1,
        IMAGES.nail2,
        IMAGES.nail3,
        IMAGES.nail4,
        IMAGES.nail5,
        IMAGES.nail6,
        // Add more images as needed
      ],
    },
  ];
  const data = [
    {
      id: '1',
      day: 'Monday',
      time: '09:00 - 20:00',
    },
    {
      id: '2',
      day: 'Tuesday',
      time: '09:00 - 20:00',
    },
    {
      id: '3',
      day: 'Wednesday',
      time: '09:00 - 20:00',
    },
    {
      id: '4',
      day: 'Thursday',
      time: '09:00 - 20:00',
    },
    {
      id: '5',
      day: 'Friday',
      time: '09:00 - 20:00',
    },
    {
      id: '6',
      day: 'Saturday',
      time: '09:00 - 20:00',
    },
    {
      id: '7',
      day: 'Sunday',
      time: 'Closed',
    },
  ];

  const listData = [
    {
      id: 1,
      title: 'Acrylics',
    },
    {
      id: 2,
      title: 'Acrylic Infill',
    },
    {
      id: 3,
      title: 'BIAB -Builder gel in a bottle',
    },
    {
      id: 4,
      title: 'BIAB Infill',
    },
    {
      id: 5,
      title: 'Gel UI Wallet HANDS',
    },
    {
      id: 6,
      title: 'Toes/Feet',
    },
    {
      id: 7,
      title: '£80 NAIL & LASH DEAL',
    },
    {
      id: 8,
      title: 'MANI/PEDI NO colour',
    },
    {
      id: 9,
      title: 'ADD ONS',
    },
  ];


  const commentData = [
    {
      id: 1,
      name: 'Analiese',
      date: 'December 8, 2023',
      rating: 5,
      comment:
        'Sam never misses with any of my sets always open to new ideas. She’s very professional and provides the perfect space. She takes care in all her work down to the prep of your nails. Cleanest nail tech I’ve been to',
    },
    {
      id: 2,
      name: 'abi',
      date: 'December 15, 2023',
      rating: 5,
      comment:
        "Sam is such a talented nail technician! My nails came out even better than the inspo image. She's such a lovely girl and would '10/10' recommend!",
    },
    {
      id: 3,
      name: 'Alice',
      date: 'December 19, 2023',
      rating: 5,
      comment:
        'The cutest birthday nails I’ve ever had!! Will deffo be coming again xxx',
    },
    {
      id: 4,
      name: 'Veronica',
      date: 'December 19, 2023',
      rating: 5,
      comment:
        'Sam is amazing! She did such a good job on my nails, working with me to find all the things I like. She’s the only nail tech I go to because she just gets it right every time. Super detail oriented and the best customer service ! Definitely recommend.',
    },
    {
      id: 5,
      name: 'Yusra',
      date: 'January 1, 2024',
      rating: 5,
      comment:
        'Sam’s sets are always perfect, she never misses and her recreations are even better than the original. The quality and retention on her acrylics are unbelievable. I can’t recommend her enough!',
    },
  ];

  function renderDeleteModal() {

    return (
      <Modal visible={openDeleteModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.content}>
              <Text style={styles.modalTextHeading}>Photo of the Service</Text>
              <Text style={styles.modalText}>
                Acrylic Abstract lines / Swirls Full set
              </Text>

              <View style={styles.imageCollage}>
                <CustomImage source={IMAGES.collag} width={350} height={293} />
              </View>
              <View style={styles.buttonContainer}>
                <CommonBtn title='Close' kind='secondary' color='activeElements' onPress={() => setOpenDeleteModal(false)} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  const handleServicePress = () => {
    setOpenDeleteModal(true)
  };

  const ratingData = [1, 2, 3, 4, 5];


  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainerSwiper}>
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
    </View>
  );

  const renderItemHours = ({ item }: any) => {
    return (
      <View style={styles.listContainer}>
        <View style={styles.list}>
          <Text style={styles.dayText}>{item.day}</Text>
          <Text style={styles.dayText}>{item.time}</Text>
        </View>
      </View>
    );
  };


  return (
    <CommonScreen styles={[styles.storeDetailContainer]}>
      <CommonHeader title='Nailsbysam' classes={[styles.headerContainer]} />
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback>
          <View style={styles.body}>
            <View style={styles.shopContainer}>
              <View style={styles.imageContainer}>
                <CustomImage source={ICONS.userAvatarIcon} width={80} height={80} />
              </View>

              <View style={styles.textContainer}>
                <CustomText title='Nailbysam' size='bodyLarge' weight='bold' color='textPrimary' />
                <CustomText
                  title='328B Kilburn High Road Brondesbury,'
                  size='bodySmall'
                  weight='normal'
                  color='textSecondary'
                />
                <CustomText
                  title='London, NW6 2QN'
                  size='bodySmall'
                  weight='normal'
                  color='textSecondary'
                />
              </View>

              <View style={[styles.separator, { width: '100%' }]} />

              <View style={styles.ratingContainer}>
                <Rating
                  rating={5}
                  size={15}
                  disabled={true}
                  variant='stars-outline'
                  baseColor={THEME.COLORS.warning400}
                  fillColor={THEME.COLORS.warning400}
                  spacing={8}
                />
                <Text style={styles.reviewText}>(7 Reviews)</Text>
              </View>
            </View>
            <View style={styles.listContainer}>
              <FlatList
                data={ImageData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
              />
            </View>
            <View style={styles.hoursContainer}>
              <CustomText title='Opening Hours:' size='bodyLarge' weight='bold' color='textPrimary' />
              <FlatList
                data={data}
                renderItem={renderItemHours}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
              />
              <View style={styles.btnContainer}>
                <CommonBtn
                  title='Book Now'
                  kind='primary'
                  suffix={ICONS.arrowForwardWhiteIcon}
                  onPress={() => navigation.navigate('DateTime')}
                />
              </View>
            </View>

            <View style={styles.hoursContainer}>
              <CustomText title='About Nailsbyysam' size='bodyLarge' weight='bold' color='textPrimary' />
              <CustomText title='KILBURN HIGH ROAD | QUALIFIED| INSURED' size='body' weight='normal' color='textPrimary' classes={[{ marginTop: 16 }]} />
              <CustomText title='@_nailsbyysam INSTAGRAM | Based in SlyStudios salon.' size='body' weight='normal' color='textPrimary' />
            </View>
            <View style={styles.hoursContainer}>
              <CustomText title='Services' size='bodyLarge' weight='bold' color='textPrimary' />
              <CustomText title='KILBURN HIGH ROAD | QUALIFIED| INSURED' size='body' weight='normal' color='textPrimary' classes={[{ marginTop: 16 }]} />
              <CustomText title='@_nailsbyysam INSTAGRAM | Based in SlyStudios salon.' size='body' weight='normal' color='textPrimary' />
            </View>

            <View style={styles.hoursContainer}>
              <CustomText title='Services' size='bodyLarge' weight='bold' color='textPrimary' />
              <View>
                {listData.map((list, index) => (
                  <ServiceList key={index} title={list.title} onPress={handleServicePress} />
                ))}
              </View>

              <View style={styles.btnContainer}>
                <CommonBtn
                  title='Book Now'
                  kind='primary'
                  suffix={ICONS.arrowForwardWhiteIcon}
                  onPress={() => navigation.navigate('DateTime')}
                />
              </View>
            </View>

            <View style={styles.hoursContainer}>
              <CustomText title='Customer Reviews' size='bodyLarge' weight='bold' color='textPrimary' />
              <View style={styles.ratingSection}>
                <Rating
                  rating={5}
                  size={15}
                  disabled={true}
                  variant='stars-outline'
                  baseColor={THEME.COLORS.warning400}
                  fillColor={THEME.COLORS.warning400}
                  spacing={8}
                />
                <Text style={styles.ratingText}>5 out of 5</Text>
              </View>

              <Text style={styles.filterText}>Filter by rating</Text>
              {ratingData.map((item, index) => (
                <View style={styles.innerBox} key={index}>
                  <Checkbox
                    checked={toggleCheckBox}
                    onPress={(isChecked: any) => setToggleCheckBox(isChecked)}
                  />
                  <Rating
                    rating={item}
                    size={15}
                    disabled={true}
                    variant='stars-outline'
                    baseColor={THEME.COLORS.warning400}
                    fillColor={THEME.COLORS.warning400}
                    spacing={8}
                  />
                </View>
              ))}
              <View style={styles.separator} />

              <View>
                {commentData.map((commentlist, index) => (
                  <View key={commentlist.id}>
                    <ReviewCard
                      name={commentlist.name}
                      date={commentlist.date}
                      rating={commentlist.rating}
                      comment={commentlist.comment}
                    />
                    {index !== commentData.length - 1 && <View style={[styles.ReviewCardSeparator, { width: '100%' }]} />}
                  </View>
                ))}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      {renderDeleteModal()}
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
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerContainer: {
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.black50,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F8FE',
    marginTop: 30,
  },
  headText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    marginLeft: '30%',
  },
  separator: {
    height: 1,
    backgroundColor: '#E9E9E9',
    marginTop: 8,
  },
  ReviewCardSeparator: {
    height: 1,
    backgroundColor: '#E9E9E9',
  },
  shopContainer: {
    padding: 24,
    backgroundColor: '#FFF',
    borderRadius: 16,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center'
  },
  imageContainerSwiper: {
    width: '100%',
    height: 300,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5,
  },
  images: {
    height: '100%',
    width: '100%',
  },
  textContainer: {
    marginTop: 8,
    alignItems: 'center',
  },
  shopName: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
  },
  shopAddress: {
    color: '#515151',
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 8,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  reviewText: {
    color: '#6E6E6E',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    marginTop: 4,
  },
  imageSlider: {
    marginTop: 22,
    height: 293,
    width: 343,
    borderRadius: 16,
    marginHorizontal: 24,
    overflow: 'hidden',
  },
  hoursContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFF',
    borderRadius: 16,
    width: '100%',
  },
  listContainer: {
    marginTop: 18,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 16, // Add horizontal padding to space items evenly
  },
  dayText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
  },
  containerHeading: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
  },
  btnContainer: {
    marginTop: 24,
  },
  ratingSection: {
    padding: 16,
    backgroundColor: '#F5F8FE',
    borderRadius: 12,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
  },
  filterText: {
    color: '#1B1B1B',
    marginTop: 16,
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
  },
  innerBox: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#6E6E6E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: '#FFFFFF', // Default background color for unselected state
  },
  checkboxChecked: {
    backgroundColor: '#FD1362', // Pink background when selected
    borderColor: '#FD1362', // Match border color with background
  },
  checkboxText: {
    fontSize: 16,
    color: '#1B1B1B',
    fontFamily: 'OpenSans-Regular',
  },
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
    height: 'auto',
    marginBottom: 24,
    marginTop: 24,
    alignItems: 'center',
    position: 'relative',
  },
  content: {
    marginTop: 10,
    alignItems: 'flex-start',
    width: '100%',
  },
  modalTextHeading: {
    color: '#1B1B1B',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold'
  },
  modalText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    marginTop: 8,
    textAlign: 'left',
  },

  userModalContent: {
    alignItems: 'flex-start', // Align content to the left side
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
    width: '100%',
    alignItems: 'center',
    gap: 200,
  },
  imageCollage: {
    borderRadius: 16,
    height: 293,
    width: '100%',
    backgroundColor: '#FD1362',
    marginTop: 19,
    overflow: 'hidden'
  },
  itemContainer: {
    flexDirection: 'column',
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
});

export default StoreDetail;


