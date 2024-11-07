import React, { FC, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { MoreScreenProps } from '../../../types/navigation';
import CommonScreen from '../../../components/template/CommonScreen';
import CommonHeader from '../../../components/Headers/CommonHeader';
import { CommonBtn } from '../../../components/common';
import theme from '../../../constants/theme';
import CustomImage from '../../../components/common/CustomImage';
import { IMAGES } from '../../../constants';
import { IImageKeys, IInformation, IUser } from '../../../types/type';
import { Picker } from '@react-native-picker/picker';
import { pinata } from '../../../constants/pinata';
import { useEBSI } from '../../../hooks/useEBSI';
import { IDIDDocument } from '../../../types/type';
import RNFS from 'react-native-fs';
import axios from 'axios';
import { PINATA_API_KEY, PINATA_API_SECRET } from '../../../constants/pinata';
import userAppData from '../../../hooks/userAppData';
import { updateUser } from '../../../constants/functions';

const AddIdentifier: FC<MoreScreenProps> = ({ navigation }): React.JSX.Element => {
  const [displayName, setDisplayName] = useState('passport');
  const [imageUri, setImageUri] = useState<string | null>(null);

  const { user, refresh, setRefresh } = userAppData();

  const handleCreateIdentifier = async () => {
    if (imageUri) {
      let information = JSON.parse(user.information!) as IInformation;
      if (displayName == 'passport') {
        information.passport = imageUri;
      }
      else if (displayName == 'idcard') {
        information.idcard = imageUri;
      }
      else if (displayName == 'education') {
        information.education = imageUri;
      }

      user.information = JSON.stringify(information);
      await updateUser(user.email, user);
      setRefresh(!refresh);
      navigation.goBack();
    }
  };

  const handleImageUpload = () => {
    launchImageLibrary(
      { mediaType: 'photo' },
      async (response) => {
        if (response.assets && response.assets.length > 0) {
          // setImageUri(response.assets[0].uri || null);
          if (response.assets[0].uri) {
            const uri = response.assets[0].uri;

            try {
              await uploadToPinata(uri);
            } catch (err) {
              console.log(err);
            }
          }
        }
      }
    )
  }

  const uploadToPinata = async (image_url: string) => {
    
    try {
      // Read the file from the URI
      // const filePath = image_url.replace('file://', '');
      const file = {
        uri: image_url,
        name: `${user.first_name}_${user.last_name}_${displayName}.jpg` || 'image.jpg', // Provide a default filename if necessary
        type: 'image/jpeg',
      };

      // Create FormData and append the file
      const formData = new FormData();
      formData.append('file', file);

      // Pinata endpoint for file upload
      const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

      // Upload to Pinata
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          pinata_api_key: PINATA_API_KEY,
          pinata_secret_api_key: PINATA_API_SECRET,
        },
      });

      if (response.status === 200) {
        const ipfsHash = response.data.IpfsHash;
        const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
        setImageUri(ipfsUrl);
      } else {
        console.log("Upload Failed", "Failed to upload image to IPFS.");
      }
    } catch (error) {
      console.error("IPFS upload error:", error);
      console.log("Upload Error", "An error occurred while uploading to IPFS.");
    }
  };

  const getImage = (theme: number, color: number) => {
    const index = `back${color}${theme}` as IImageKeys;
    return IMAGES[index];
  }

  return (
    <CommonScreen styles={[styles.container]}>
        <CommonHeader />
        <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
            <TouchableWithoutFeedback>
                <View style={{ width: '100%' }}>
                    <Text style={styles.title}>Add an identifier</Text>
                    <Text style={styles.label}>Display name</Text>
                    {/* <TextInput
                        style={styles.input}
                        placeholder="Create a name for this identifier"
                        value={displayName}
                        onChangeText={setDisplayName}
                    /> */}
                    <Picker selectedValue={displayName} onValueChange={(itemValue) => setDisplayName(itemValue)} style={styles.picker}>
                      <Picker.Item label='Passport' value="passport" />
                      <Picker.Item label="ID Card" value="idcard" />
                      <Picker.Item label="Education" value="education" />
                    </Picker>

                    <Text style={styles.label}>Upload Image</Text>
                    <TouchableOpacity onPress={handleImageUpload} style={styles.uploadButton}>
                        <Text style={styles.uploadButtonText}>Choose Image</Text>
                    </TouchableOpacity>
                    <View style={{ width: '100%', height: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                      {imageUri && (
                          <CustomImage
                              source={{ uri: imageUri }}
                              width={170}
                              height={170}
                          />
                      )}
                    </View>

                    {/* <Text style={styles.label}>AID type</Text>
                    <View style={styles.aidTypeContainer}>
                        <TouchableOpacity
                        style={[styles.aidTypeButton, selectedAIDType === 'Individual' && styles.activeButton]}
                        onPress={() => setSelectedAIDType('Individual')}
                        >
                        <Text style={styles.aidTypeText}>Individual</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[styles.aidTypeButton, selectedAIDType === 'Group' && styles.activeButton]}
                        onPress={() => setSelectedAIDType('Group')}
                        >
                        <Text style={styles.aidTypeText}>Group</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.aidTypeButton, { opacity: 0.5 }]} disabled>
                        <Text style={styles.aidTypeText}>Delegated</Text>
                        </TouchableOpacity>
                    </View> */}

                    <CommonBtn
                        title='Create Identifier'
                        kind='primary'
                        onPress={() => handleCreateIdentifier()}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    </CommonScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#FFF',
  },
  cancelText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: theme.COLORS.iconActive
  },
  label: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  aidTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  aidTypeButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    borderColor: '#000',
  },
  aidTypeText: {
    fontSize: 16,
    color: '#000',
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: '#000',
  },
  themeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  themeOption: {
    width: '48%',
    height: 80,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTheme: {
    borderColor: '#000',
    borderWidth: 2,
  },
  themeImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#A4C639', // Placeholder for card background
    borderRadius: 8,
  },
  createButton: {
    backgroundColor: '#DDD',
    borderRadius: 8,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  uploadButton: {
    backgroundColor: '#DDD',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#000',
  },
  createButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#f0f0f0'
  }
});

export default AddIdentifier;
