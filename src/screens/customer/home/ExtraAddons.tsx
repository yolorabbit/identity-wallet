import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { FC } from 'react';
import CommonScreen from '../../../components/template/CommonScreen';
import CommonHeader from '../../../components/Headers/CommonHeader';
import { CommonBtn, CustomText } from '../../../components/common';
import CustomImage from '../../../components/common/CustomImage';
import { ICONS, THEME } from '../../../constants';
import { MoreScreenProps } from '../../../types/navigation';

const ExtraAddons: FC<MoreScreenProps> = ({ navigation }): React.JSX.Element => {

  // const [selectedImage, setSelectedImage] = useState(null);

  // const handleImagePicker = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then(image => {
  //     setSelectedImage(image);
  //   }).catch(error => {
  //     console.error('Error opening image picker:', error); // Add error handling
  //   });
  // };

  return (
    <CommonScreen styles={[styles.storeDetailContainer]}>
      <CommonHeader title='Date and time' classes={[styles.headerContainer]} />
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback>
          <View style={styles.body}>
            <View style={styles.dataContainer}>
              <View style={styles.innerHeader}>
                <CustomText title='Service' size='bodySmall' weight='bold' color='textPrimary' />
                <TouchableOpacity style={styles.editContainer}>
                  <CustomImage source={ICONS.editWhiteIcon} width={18} height={18} classes={[{ marginRight: 4, }]} />
                  <CustomText title='Edit' size='bodySmall' weight='normal' color='primaryBtnText' />
                </TouchableOpacity>
              </View>

              <Text style={styles.serviceType}>
                Acrylic Extreme Nail Art Full set
              </Text>

              <View style={styles.infoContainer}>
                <View style={styles.iconContainer}>
                  <CustomImage source={ICONS.scheduleIcon} width={18} height={18} />
                  <Text style={styles.infoText}>65 mins</Text>
                </View>

                <View style={styles.iconContainer}>
                  <CustomImage source={ICONS.sellIcon} width={18} height={18} />
                  <Text style={styles.infoText}>£30.00</Text>
                </View>
              </View>
            </View>

            <View style={styles.dataContainer}>
              <View style={styles.innerHeader}>
                <CustomText title='Date' size='bodySmall' weight='bold' color='textPrimary' />
                <TouchableOpacity style={styles.editContainer}>
                  <CustomImage source={ICONS.editWhiteIcon} width={18} height={18} classes={[{ marginRight: 4, }]} />
                  <CustomText title='Edit' size='bodySmall' weight='normal' color='primaryBtnText' />
                </TouchableOpacity>
              </View>

              <Text style={styles.serviceType}>
                Date & Time
              </Text>

              <View style={styles.infoContainer}>
                <CustomText title='Jan 17, 2024, 09:15 - 11:55' size='bodySmall' weight='semibold' color='textPrimary' />
              </View>
            </View>

            <View style={styles.uploadImgContainer}>
              <Text style={styles.sectionHeading}>Extras & Add-ons</Text>

              <View style={styles.uploadContainer}>
                <CustomImage source={ICONS.photoCameraIcon} width={48} height={48} />
                <Text style={styles.innerText}>
                  Got nail inspiration you'd like your nail tech to see? Upload now.
                </Text>
                {/* {selectedImage && (
                  <View style={styles.selectedImageContainer}>
                    <Image
                      source={{ uri: selectedImage.path }}
                      style={styles.selectedImage}
                    />
                    <Text style={styles.imageName}>{selectedImage.filename}</Text>
                  </View>
                )} */}
                <TouchableOpacity
                  style={styles.uploadBtn}
                // onPress={handleImagePicker}
                >
                  <CustomImage source={ICONS.addRedIcon} />
                  <Text style={styles.btnText}>Upload</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.textBoxContainer}>
              <Text style={styles.labelText}>
                Please enter any allergies or medical conditions that you want
                Nailsbyysam to know about.
              </Text>

              <TextInput
                style={styles.descInput}
                placeholder="I am allergic to.."
                multiline={true}
              />
            </View>

            <View style={styles.btnContainer}>
              <CommonBtn
                title='Next'
                kind='primary'
                suffix={ICONS.arrowForwardWhiteIcon}
                onPress={() => navigation.navigate('Summary')}
              />
            </View>
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
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    marginLeft: '24%',
  },
  separator: {
    height: 1,
    backgroundColor: '#E9E9E9',
    marginTop: 16,
  },
  dataContainer: {
    marginTop: 16,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 24,
  },
  innerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#1B1B1B',
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FD1362',
    borderRadius: 8,
    justifyContent: 'center',
    height: 26,
    width: 63,
  },
  editText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  serviceType: {
    color: '#1B1B1B',
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    marginTop: 8,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
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
  uploadImgContainer: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  sectionHeading: {
    color: '#1B1B1B',
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
  },
  uploadContainer: {
    backgroundColor: '#FFF',
    marginTop: 16,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  innerText: {
    color: '#515151',
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
    width: 250,
  },
  uploadBtn: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#F5F8FE',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  btnText: {
    color: '#FD1362',
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
  },
  textBoxContainer: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  labelText: {
    color: '#515151',
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
  descInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E9E9E9',
    paddingHorizontal: 16,
    borderRadius: 12,
    height: 128,
    paddingTop: 16,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    marginTop: 14,
  },
  btnContainer: {
    marginTop: 24,
    marginHorizontal: 24,
    ...Platform.select({
      android: {
        marginBottom: 24,
      },
    }),
  },
  timeText: {
    color: THEME.COLORS.textPrimary,
    fontWeight: 'semibold',
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
  },
  selectedImageContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  selectedImage: {
    width: 169,
    height: 109,
    borderRadius: 8,
  },
  imageName: {
    color: '#515151',
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
  },
});

export default ExtraAddons;
