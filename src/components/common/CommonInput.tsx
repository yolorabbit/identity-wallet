import React, { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import BasicInput from './BasicInput';
import CustomImage from './CustomImage';
import { ICONS, THEME } from '../../constants';

type Props = {
  icon?: any,
  placeholder?: string;
  name?: string;
  value: string;
  classes?: any[];
  inputClasses?: any[];
  disable?: boolean;
  type?: string;
  onChange: (field: string, value: string) => void;
};

const CommonInput: FC<Props> = (props) => {
  const { icon = null, classes = [], type, inputClasses = [], disable = false, ...rest } = props;
  const [showPassowrd, setShowPassword] = useState(false);
  return (
    <View style={[styles.container, ...classes]}>
      <BasicInput {...rest} classes={inputClasses} showPassword={showPassowrd} disable={disable} type={type} />
      {type === 'password' && (
        <TouchableOpacity 
          style={styles.passwordICon}
          onPress={() => setShowPassword(!showPassowrd)}  
        >
          <CustomImage
            source={showPassowrd ? ICONS.eyeOnIcon : ICONS.eyeOffIcon}
            width={18}
            height={18}
          />
        </TouchableOpacity>
      )}
      {icon && <CustomImage source={icon} width={18} height={18} />}
    </View>
  );
};

export default CommonInput;


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DCDCDC',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 19,
    color: THEME.COLORS.black,
    backgroundColor: THEME.COLORS.white,
    borderRadius: THEME.BORDER_RADIUS.small,
    width: '100%',
    height: THEME.HEIGHT.medium,
  },
  passwordICon: {
    display: 'flex',
    alignItems: 'center',
  }
});
