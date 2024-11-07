import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Rating } from '@kolking/react-native-rating';
import CustomImage from './CustomImage';
import { ICONS, THEME } from '../../constants';

const ReviewCard = ({ name, date, rating, comment }: any) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.userContainer}>
        <View style={styles.profileContainer}>
          <CustomImage source={ICONS.personFilledIcon} width={40} height={40} />
        </View>

        <View style={styles.profileInfoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.dateText}>{date}</Text>
          </View>

          <View style={styles.ratingContainer}>
            <Rating
              rating={rating}
              size={15}
              disabled={true}
              variant='stars-outline'
              baseColor={THEME.COLORS.warning400}
              fillColor={THEME.COLORS.warning400}
              spacing={8}
            />
          </View>
        </View>
      </View>
      <View style={styles.commentContainer}>
        <Text style={styles.textComment}>
          {comment}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingBottom: 16,
    paddingTop: 16,
    backgroundColor: '#FFF',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileContainer: {
    padding: 12,
    backgroundColor: '#F5F8FE',
    borderRadius: 100,
  },
  profileInfoContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  nameText: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
  },
  dateText: {
    color: '#1B1B1B',
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
  },
  ratingContainer: {
    marginTop: 8,
  },
  commentContainer: {
    marginTop: 16,
  },
  textComment: {
    color: '#515151',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    lineHeight: 18,
  },
});

export default ReviewCard;
