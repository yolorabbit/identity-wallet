import React, { FC } from 'react';
import BasicHeader from '../common/BasicHeader';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from '../common/CustomText';
import CustomImage from '../common/CustomImage';
import { ICONS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title?:
  'Nailsbysam'
  | 'Date and time'
  | 'Booking Summary'
  | 'Make Payment'
  | 'Reschedule Booking'
  | 'Booking Details'
  | 'FAQs'
  | 'About UIWallet'
  | 'Update Profile'
  classes?: any[];
  onEdit?: () => void;
}

const CommonHeader: FC<Props> = ({ title = '', classes = [], onEdit = () => { } }) => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  }

  return (
    <BasicHeader>
      <View style={[...classes, styles.container]}>
        <TouchableOpacity onPress={onBack}>
          <CustomImage source={ICONS.headerBackIcon} width={24} height={24} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          {title &&
            <CustomText
              size='body'
              weight='semibold'
              // classes={[styles.text]}
              title={title}
            />
          }
        </View>
        {title && <View style={{ width: 24, height: 24 }} />}
      </View>
    </BasicHeader>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    paddingTop: 9,
    paddingBottom: 9,
  },
  titleContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 18,
  }
});
