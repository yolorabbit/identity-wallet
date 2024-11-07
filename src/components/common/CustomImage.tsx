import React, { FC } from 'react';
import { Image } from 'react-native';

type Props = {
  width?: number;
  height?: number;
  source: any;
  tintColor?: string;
  classes?: any[];
}

const CustomImage: FC<Props> = (props) => {
  const {
    width = 24,
    height = 24,
    source,
    tintColor = '',
    classes = []
  } = props;
  return (
    <Image
      tintColor={tintColor}
      source={source}
      style={[
        { width, height },
        ...classes,
      ]}
    />
  );
};

export default CustomImage;
