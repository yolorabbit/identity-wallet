import React, { useState, FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { AuthScreenProps } from '../../types/navigation';
import CommonScreen from '../../components/template/CommonScreen';
import CommonHeader from '../../components/Headers/CommonHeader';
import { CommonBtn, CommonInput, CustomModal, CustomText } from '../../components/common';
import { ICONS, THEME } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ethers } from 'ethers';
import userAppData from '../../hooks/userAppData';
import { updateUser } from '../../constants/functions';

const GenerateSeedPhrase: FC<AuthScreenProps> = ({ navigation }): React.JSX.Element => {
  const [showSeed, setShowSeed] = useState(false);
  const { seedPhrase, setSeedPhrase, user } = userAppData();

  const handleGenerateSeed = async () => {
    const wallet = ethers.Wallet.createRandom();
    const mnemonic = wallet.mnemonic!.phrase;
    user.did = `did:key:${wallet.address}`;
    setSeedPhrase(mnemonic.split(' '));
    await AsyncStorage.setItem('seedPhrase', mnemonic);
  };

  const handleViewSeedPhrase = async () => {
    await handleGenerateSeed()
    setShowSeed(true);
  };

  const handleGenerate = async () => {
    user.information = '{}';
    await updateUser(user.email, user);
    navigation.navigate("Home");
  }

  // Generate seed phrase on initial render
  React.useEffect(() => {
    // ;
  }, []);

  return (
    <CommonScreen styles={[styles.screenContainer]}>
      <CommonHeader />
        <View style={styles.container}>
            <Text style={styles.title}>Generate recovery phrase</Text>
            <Text style={styles.description}>
                Think of your secret recovery phrase as a safety net for your identity. If you ever lose your phone or switch to a new wallet, this phrase will help you recover your identity.
            </Text>

            <View style={styles.seedContainer}>
                {/* Blur Overlay */}
                {!showSeed && (
                <View style={styles.blurOverlay}>
                    <Text style={styles.hiddenText}>
                    Press the ‘view’ button when you’re ready to see your seed phrase. Remember to make sure nobody is looking!
                    </Text>
                    {/* <TouchableOpacity style={styles.viewButton} onPress={handleViewSeedPhrase}>
                        <Text style={styles.viewButtonText}>View Seed Phrase</Text>
                    </TouchableOpacity>
                        */}
                    <CommonBtn
                        title='View Seed Phrase'
                        kind='primary'
                        onPress={() => handleViewSeedPhrase()}
                    />
                </View>
                )}

                {/* Seed Phrase Display */}
                <FlatList
                data={seedPhrase}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.seedWordContainer}>
                    <Text style={styles.seedWord}>{`${index + 1}. ${item}`}</Text>
                    </View>
                )}
                />
            </View>

            <Text style={styles.instructions}>
                It’s important to keep these words safe and sound! Store them in a secure location, like a password manager, and remember to never share them with anyone.
            </Text>
            
            <View style={styles.generateButton}>
                <CommonBtn
                    title='Generate'
                    kind={!showSeed? 'disabled': 'primary'}
                    disabled={!showSeed}
                    onPress={() => handleGenerate()}
                />
            </View>
        </View>
    </CommonScreen>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: THEME.COLORS.iconActive
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  seedContainer: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 20,
    height: 350,
    position: 'relative',
  },
  seedWordContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    alignItems: 'center',
  },
  seedWord: {
    color: '#333',
    fontSize: 16,
  },
  blurOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)', // Adjust the background color for additional opacity
  },
  hiddenText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  viewButton: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  viewButtonText: {
    color: '#333',
    fontSize: 16,
  },
  generateButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  },
  instructions: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  switchButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: '#333',
    borderWidth: 1,
    alignItems: 'center',
  },
  switchButtonText: {
    color: '#333',
    fontSize: 16,
  },
});

export default GenerateSeedPhrase;