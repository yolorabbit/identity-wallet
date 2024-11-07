import React, { FC, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { AuthScreenProps } from '../../types/navigation';
import CommonScreen from '../../components/template/CommonScreen';
import CommonHeader from '../../components/Headers/CommonHeader';

import { IKeypadValue } from '../../types/type';
import theme from '../../constants/theme';

import { SetStorage } from '../../utils/storage';

const keypadValues: IKeypadValue[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'del'];

const CreatePasscode: FC<AuthScreenProps> = ({ navigation }): React.JSX.Element => {
  const [passcode, setPasscode] = useState('');
  const [activeCircles, setActiveCircles] = useState([false, false, false, false, false, false]);

  const handlePress = async (value: IKeypadValue) => {
    if (passcode.length < 6) {
      const newPasscode = passcode + value;
      setPasscode(newPasscode);
      const newCircles = [...activeCircles];
      newCircles[passcode.length] = true;
      setActiveCircles(newCircles);

      if (newPasscode.length === 6) {
        console.log('Passcode completed: ', newPasscode);
        await SetStorage('ui-passcode', newPasscode);
        navigation.navigate("ReenterPasscode");
      }
    }
  };

  const handleDelete = () => {
    if (passcode.length > 0) {
      const newPasscode = passcode.slice(0, -1);
      setPasscode(newPasscode);
      const newCircles = [...activeCircles];
      newCircles[passcode.length - 1] = false;
      setActiveCircles(newCircles);
    }
  };

  return (
    <CommonScreen styles={[styles.container]}>
        <CommonHeader />
        <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Create Your Passcode</Text>
                <Text style={styles.subtitle}>
                    Create a passcode to secure your wallet and to continue the onboarding process
                </Text>

                <View style={styles.circleContainer}>
                    {activeCircles.map((active, index) => (
                    <View key={index} style={[styles.circle, active && styles.activeCircle]} />
                    ))}
                </View>
                
                <View style={styles.numberPadContainer}>
                  <View style={styles.numberPad}>
                      {keypadValues.map((item, index) => {
                      if (item === 'del') {
                          return (
                          <TouchableOpacity key={index} onPress={handleDelete} style={styles.key}>
                              <Text style={styles.number}>⌫</Text>
                          </TouchableOpacity>
                          );
                      } else {
                          return (
                          <TouchableOpacity
                              key={index}
                              onPress={() => handlePress(item)}
                              style={styles.key}
                          >
                              <Text style={styles.number}>{item}</Text>
                              <Text style={styles.letters}>{item && getLetters(item)}</Text>
                          </TouchableOpacity>
                          );
                      }
                      })}
                  </View>
                </View>
        </ScrollView>
    </CommonScreen>
  );
};

const getLetters = (num: string) => {
  const letters: { [key: string]: string} = {
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
    'del': ''
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
    marginBottom: 40,
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
});

export default CreatePasscode;
