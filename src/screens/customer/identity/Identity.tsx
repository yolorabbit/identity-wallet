import React, { FC, useEffect, useState } from 'react';
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
import { CommonBtn } from '../../../components/common';
import { ICONS, IMAGES, THEME } from '../../../constants';
import CustomImage from '../../../components/common/CustomImage';
import userAppData from '../../../hooks/userAppData';
import { IInformation, IUser } from '../../../types/type';

type IIdentifier = {
  type: string;
  image: string;
}

const Identity: FC<BottomScreenProps> = ({ navigation }): React.JSX.Element => {
  const data = [
    { id: '1', title: 'Gel Manicure', image: IMAGES.item1 },
    { id: '2', title: 'Acrylic nails', image: IMAGES.item2 },
    { id: '3', title: 'Gel Nails', image: IMAGES.item3 },
    { id: '4', title: 'Pedicure', image: IMAGES.item4 },
    // Add more data items as needed
  ];

  const [identifiers, setIdentifiers] = useState<Array<IIdentifier>>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const { user, refresh } = userAppData();

  const handleAddIdentifier = () => {
    navigation.navigate("AddIdentifier");
  }

  useEffect(() => {
    if (user) {
      const information = JSON.parse(user.information!) as IInformation;
      console.log(information);
      if (information.education && information.education != '') {
        let educationItem = identifiers.filter((item) => item.type == 'Education');
        if (educationItem.length == 0) {
          identifiers.push({ type: 'Education', image: information.education });
        }
      }
      if (information.idcard && information.idcard != '') {
        let idCardItem = identifiers.filter((item) => item.type == 'ID Card');
        if (idCardItem.length == 0) {
          identifiers.push({ type: 'ID Card', image: information.idcard });
        }
      }
      if (information.passport && information.passport != '') {
        let passportItem = identifiers.filter((item) => item.type == 'Passport');
        if (passportItem.length == 0) {
          identifiers.push({ type: 'Passport', image: information.passport });
        }
      }
      setIsEmpty(identifiers.length == 0);
    }
  }, [user, refresh])

  const renderItem = ({ item }: { item: IIdentifier }) => (
    <View style={styles.itemContainer}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.itemImage}
        resizeMode="center">
        <View style={styles.bottomContainer}>
            <Text style={styles.itemTitle}>{item.type}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  const renderEmptyIdentifier = () => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.placeholderContainer}>
          <CustomImage source={IMAGES.cardplaceholder} width={350} height={350} />
          <CommonBtn
            title='Add an identifier'
            kind='primary'
            onPress={() => handleAddIdentifier()}
          />
        </View>
      </View>
    )
  }

  const renderIdentifiers = () => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.listContainer}>
          <View style={styles.identifierText}>
              <CustomText title='All identifiers' size='h4' weight='bold' color='textPrimary' />
          </View>
          <FlatList
            data={identifiers}
            renderItem={renderItem}
            scrollEnabled={false}
            keyExtractor={item => item.type}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    )
  }

  return (
    <CommonScreen styles={[styles.bodyContainer]}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <CustomText
            title='Identity'
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
            <TouchableOpacity onPress={handleAddIdentifier}>
              <CustomImage source={ICONS.addIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
          <TouchableWithoutFeedback>
            {
              isEmpty? renderEmptyIdentifier() : renderIdentifiers()
            }
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
    paddingHorizontal: 24,
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
    justifyContent: 'center',
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
  identifierText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  placeholderContainer: {
    display: 'flex',
    height: 600,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Identity;
