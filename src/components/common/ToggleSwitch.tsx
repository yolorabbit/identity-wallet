import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive(previousState => !previousState);
  };

  return (
    <TouchableOpacity
      style={[
        styles.toggleContainer,
        isActive ? styles.activeContainer : styles.inactiveContainer,
      ]}
      onPress={toggleSwitch}
    >
      <View style={[styles.circle, isActive ? styles.activeCircle : styles.inactiveCircle]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    width: 40,
    height: 20,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 4,
  },
  activeContainer: {
    backgroundColor: '#FD1362',
  },
  inactiveContainer: {
    borderWidth: 3,
    borderColor: '#515151',
    backgroundColor: 'transparent',
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  activeCircle: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
  },
  inactiveCircle: {
    backgroundColor: '#515151',
    alignSelf: 'flex-start',
    right: 2
  },
});

export default ToggleSwitch;
