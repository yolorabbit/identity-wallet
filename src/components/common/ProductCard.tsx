import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CustomImage from './CustomImage';
import { ICONS } from '../../constants';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
const ProductCard = ({ title, time, amount, text1, text2, onPress }: any) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleCheckboxPress = () => {
    setToggleCheckBox(!toggleCheckBox);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.innerBox}>
        <Checkbox checked={toggleCheckBox} onPress={handleCheckboxPress} />
        <Text style={styles.dayText}>{title}</Text>
      </View>

      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
          <CustomImage source={ICONS.photoCameraIcon} width={18} height={18} />
          <Text style={styles.infoText}>image</Text>
        </TouchableOpacity>
        <View style={styles.verticalSeparator} />
        <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
          <CustomImage source={ICONS.scheduleIcon} width={18} height={18} />
          <Text style={styles.infoText}>{time}</Text>
        </TouchableOpacity>
        <View style={styles.verticalSeparator} />
        <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
          <CustomImage source={ICONS.sellIcon} width={18} height={18} />
          <Text style={styles.infoText}>{amount}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.textSection}>
          <Text style={styles.innerText}>{text1}</Text>
          {text2 && <Text style={styles.innerText}>{text2}</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 16,
    marginTop: 16,
  },
  innerBox: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center'
  },
  dayText: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  infoText: {
    color: '#6E6E6E',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  verticalSeparator: {
    width: 1,
    height: '100%',
    backgroundColor: '#E9E9E9',
  },
  textContainer: {
    marginTop: 11,
    borderRadius: 8,
    height: 74,
    backgroundColor: '#F5F8FE',
    justifyContent: 'center',
    paddingHorizontal: 8,
    overflow: 'hidden',
  },
  textSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  innerText: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    width: 263,
  },
  checkboxContainer: {
    justifyContent: 'center',
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
});

export default ProductCard;
