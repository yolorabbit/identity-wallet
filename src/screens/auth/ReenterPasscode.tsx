import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { GetStorage, SetStorage } from '../../utils/storage';
import { AuthScreenProps } from '../../types/navigation';
import CommonScreen from '../../components/template/CommonScreen';
import CommonHeader from '../../components/Headers/CommonHeader';

import { IKeypadValue } from '../../types/type';
import theme from '../../constants/theme';

const keypadValues: IKeypadValue[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'del'];

const ReenterPasscode: FC<AuthScreenProps> = ({ navigation }): React.JSX.Element => {
  const [reEnteredPasscode, setReEnteredPasscode] = useState<string>('');
  const [activeCircles, setActiveCircles] = useState<boolean[]>([false, false, false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);  // Track error message

  const handlePress = async (value: string) => {
    if (value === 'del') {
      handleDelete();
    } else if (reEnteredPasscode.length < 6) {
      const newPasscode = reEnteredPasscode + value;
      setReEnteredPasscode(newPasscode);
      const newCircles = [...activeCircles];
      newCircles[reEnteredPasscode.length] = true;
      setActiveCircles(newCircles);

      if (newPasscode.length === 6) {
        await verifyPasscode(newPasscode);  // Call verify function when re-entered passcode is complete
      }
    }
  };

  const handleDelete = () => {
    if (reEnteredPasscode.length > 0) {
      const newPasscode = reEnteredPasscode.slice(0, -1);
      setReEnteredPasscode(newPasscode);
      const newCircles = [...activeCircles];
      newCircles[reEnteredPasscode.length - 1] = false;
      setActiveCircles(newCircles);
    }
  };

  // Function to verify if the re-entered passcode matches the stored one
  const verifyPasscode = async (newPasscode: string) => {
    try {
      const storedPasscode = await GetStorage('ui-passcode', 'string');
      if (storedPasscode === newPasscode) {
        navigation.navigate('GenerateSeedPhrase');
        // Navigate to the next screen or perform further actions
      } else {
        setErrorMessage('Passcode didn’t match');
        resetPasscodeInput();
      }
    } catch (error) {
      console.error('Error verifying passcode', error);
    }
  };

  const resetPasscodeInput = () => {
    setReEnteredPasscode('');
    setActiveCircles([false, false, false, false, false, false]);
  };

  return (
    <CommonScreen styles={[styles.container]}>
        <CommonHeader />
        <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Re-enter your Passcode</Text>
            <Text style={styles.subtitle}>
                Create a passcode to secure your wallet and to continue the onboarding process
            </Text>

            <View style={styles.circleContainer}>
                {activeCircles.map((active, index) => (
                <View key={index} style={[styles.circle, active && styles.activeCircle]} />
                ))}
            </View>

            {/* Display error message if passcode didn't match */}
            {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

            <View style={styles.numberPadContainer}>
              <View style={styles.numberPad}>
                  {keypadValues.map((item, index) => (
                  <TouchableOpacity
                      key={index}
                      onPress={() => handlePress(item)}
                      style={styles.key}
                  >
                      <Text style={styles.number}>{item === 'del' ? '⌫' : item}</Text>
                      <Text style={styles.letters}>{item !== 'del' && getLetters(item)}</Text>
                  </TouchableOpacity>
                  ))}
              </View>
              <TouchableOpacity onPress={() => console.log('Forgot passcode pressed')}>
                  <Text style={styles.forgotText}>Can't remember?</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
    </CommonScreen>
  );
};

const getLetters = (num: string): string => {
  const letters: { [key: string]: string } = {
    '1': '',
    '2': 'ABC',
    '3': 'DEF',
    '4': 'GHI',
    '5': 'JKL',
    '6': 'MNO',
    '7': 'PQRS',
    '8': 'TUV',
    '9': 'WXYZ',
    '0': '',
  };
  return letters[num] || '';
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: theme.COLORS.iconActive
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 40,
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    marginHorizontal: 8,
  },
  activeCircle: {
    backgroundColor: '#000',
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  numberPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 400
  },
  numberPadContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  key: {
    width: '25%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ddd',
    borderRadius: 50,
  },
  number: {
    fontSize: 32,
    color: '#000',
  },
  letters: {
    fontSize: 12,
    color: '#777',
  },
  forgotText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ReenterPasscode;
