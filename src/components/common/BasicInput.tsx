import React, { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { THEME } from '../../constants';

type Props = {
  placeholder?: string;
  name?: string;
  value: string;
  classes?: any[];
  disable?: boolean;
  type?: string;
  showPassword?: boolean;
  onChange: (field: string, value: string) => void;
}

const BasicInput: FC<Props> = ({ placeholder, name = '', type, value, showPassword = false, classes = [], disable = false, onChange }) => {
  return (
    <TextInput
      placeholder={placeholder}
      readOnly={disable}
      value={value}
      secureTextEntry={type === 'password' && !showPassword ? true : false}
      style={[styles.container, ...classes]}
      placeholderTextColor='#888'
      onChangeText={(val: string) => onChange(name, val)}
    />
  );
};

export default BasicInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 24,
    flex: 1,
    fontSize: THEME.FONT_SIZES.bodySmall,
    color: THEME.COLORS.black,
    paddingVertical: 0,
  },
});
