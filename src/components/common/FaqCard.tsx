import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomImage from './CustomImage';
import { ICONS } from '../../constants';
import CustomText from './CustomText';

const FaqCard = ({ title, description }: any)  => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <TouchableOpacity onPress={toggleDropdown}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <CustomImage source={isOpen ? ICONS.expandLessIcon : ICONS.expandMoreIcon} width={24} height={24} />
        </View>
        {isOpen && (
          <View style={styles.dropdown}>
            {/* Dropdown content here */}
            <Text>{description}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 16,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#1B1B1B',
    width: 271,
  },
  dropdown: {
    marginTop: 8,
    borderRadius: 8,
    // elevation: 2,
  },
});

export default FaqCard;