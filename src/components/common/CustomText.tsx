import React, { FC } from 'react';
import { Text } from 'react-native';
import { THEME } from '../../constants';

type Props = {
  color?:
    'textPrimary'
  | 'textSecondary'
  | 'textTertiary'
  | 'primaryBtnText'
  | 'secondaryBtnText'
  | 'iconActive'
  | 'activeElements'
  | 'white'
  | 'success'
  | 'disabledColor';
  weight?: 'normal' | 'semibold' | 'bold';
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'bodyLarge' | 'body' | 'bodySmall' | 'tag' | 'tiny';
  classes?: any[];
  title?: string;
}

const CustomText: FC<Props> = (props) => {
  const {
    color = 'textPrimary',
    weight = 'normal',
    size = 'body',
    classes = [],
    title
  } = props;

  return (
    <Text
      style={[
        ...classes,
        {
          color: THEME.COLORS[color],
          fontSize: THEME.FONT_SIZES[size],
          fontWeight: THEME.FONT_WEIGHT[weight],
        }
      ]}
    >
      {title}
    </Text>
  );
};

export default CustomText;
