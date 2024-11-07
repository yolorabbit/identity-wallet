import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomText from './CustomText';
import { THEME } from '../../constants';

type Props = {
  title: string;
  color?: 'textPrimary' | 'textSecondary' | 'textTertiary' | 'primaryBtnText' | 'secondaryBtnText' | 'activeElements' | 'disabledColor';
  kind: 'primary' | 'secondary' | 'tertiary' | 'primaryOffWhite',
  disabled?: boolean;
  fontSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'bodyLarge' | 'body' | 'bodySmall' | 'tag' | 'tiny';
  classes?: any[];
  prefix?: any;
  suffix?: any;
  weight?: any;
  onPress: () => void;
}

const CommonBtnAnother: FC<Props> = (props) => {
  const {
    title,
    prefix,
    suffix,
    disabled = false,
    fontSize = 'body',
    kind,
    weight = 'normal',
    color = 'primaryBtnText',
    classes = [],
    onPress
  } = props;

  const btnStyles = () => {
    switch (kind) {
      case 'primary':
        return {
          backgroundColor: THEME.COLORS.primaryBtnBg,
          borderColor: THEME.COLORS.primaryBtnBg,
        };
      case 'secondary':
        return {
          backgroundColor: THEME.COLORS.secondaryBtnBg,
          borderColor: THEME.COLORS.secondaryBtnBg,
        };
      case 'tertiary':
        return {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        };
      case 'primaryOffWhite':
        return {
          backgroundColor: THEME.COLORS.offWhite,
          borderColor: THEME.COLORS.offWhite,
        };
      default:
        return '';
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        btnStyles(),
        ...classes,
      ]}
      disabled={disabled}
      onPress={() => onPress()}
    >
      <View style={styles.btnWrapper}>
        <View style={styles.btnLeft}>
          <View style={styles.prefixWrapper}>
            {prefix && <Image source={prefix} style={{ width: 18, height: 18 }} />}
          </View>
          <CustomText
            color={color}
            size={fontSize}
            weight={weight}
            title={title}
            classes={[{ marginLeft: 8, marginRight: 8 }]}
          />
        </View>
        {suffix && <Image source={suffix} style={{ width: 18, height: 18 }} />}
      </View>
    </TouchableOpacity>
  );
};

export default CommonBtnAnother;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 48,
    borderRadius: THEME.BORDER_RADIUS.small,
  },
  btnWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  prefixWrapper: {
    width: 28,
    height: 28,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.offWhite,
  },
});
