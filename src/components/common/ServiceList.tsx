import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import CustomImage from './CustomImage';
import { ICONS } from '../../constants';

const ServiceList = ({ id, title, onPress }: any) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = () => {
    setExpandedId(expandedId === id ? null : id);
  };

  const cardData = [
    {
      id: 1,
      title: 'Acrylic Plain Gel Full set',
      time: '65 mins',
      amount: '£30.00',
      text1: '- No design, only full coverage colour',
      text2: '- Finishing with file, buff and cuticle oil.'
    },
    {
      id: 2,
      title: 'Acrylic Removal',
      time: '80 mins',
      amount: '£35.00',
      text1: 'Finishing with file, buff and cuticle oil.',
    },
    {
      id: 3,
      title: 'Acrylic Ombre Full set',
      time: '80 mins',
      amount: '£35.00',
      text1: 'Can choose any colour and can choose glitter ombre',
      text2: 'This does not include marble ombre- please select on other services'
    },
    {
      id: 4,
      title: 'Acrylic Nail art full set',
      time: '130 mins',
      amount: '£40.00',
      text1: 'Acrylics with some nail art can include simple mix & match, sparkles, flowers, swirls, animal print etc... DM for any questions',
    },
    {
      id: 5,
      title: 'Acrylic Abstract lines/Swirts Full set',
      time: '110 mins',
      amount: '£37.00',
      text1: 'Simple swirls and abstract lines.',
      text2: 'Can add different colours, stars, dots and hearts (DM for questions)',
    },
    {
      id: 6,
      title: 'Acrylic Extreme Nail Art full set',
      time: '130 mins',
      amount: '£40.00',
      text1: 'Must add inspo or recreation photo when booking this ',
      text2: 'Hand painted Nail art on full hand.',
    },
  ];

  return (
    <View>
      <TouchableOpacity onPress={toggleExpand}>
        <View style={styles.list}>
          <View style={styles.listContent}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.viewContainer}>
              <Text style={styles.viewText}>{expandedId === id ? 'Hide' : 'View'}</Text>
              <CustomImage source={expandedId === id ? ICONS.expandLessIcon : ICONS.expandMoreIcon} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {expandedId === id && (
        <View style={styles.expandedContent}>
          {cardData.map((card) => (
            <ProductCard key={card.id} title={card.title} time={card.time} amount={card.amount} text1={card.text1} text2={card.text2} onPress={onPress} />
          ))}
        </View>
      )}
      <FlashMessage position="top" />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  title: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
  },
  viewText: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
  },
  expandedContent: {
    marginTop: 8,
  },
});

export default ServiceList;
