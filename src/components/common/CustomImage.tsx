import React, { FC } from 'react';
import { Image } from 'react-native';

type Props = {
  width?: number;
  height?: number;
  source: any;
  tintColor?: string;
  classes?: any[];
  resizeMode?: any;
}

const CustomImage: FC<Props> = (props) => {
  const {
    width = 24,
    height = undefined,
    source,
    tintColor = '',
    classes = [],
    resizeMode = "contain",
  } = props;

  const imageStyle = height
    ? { width, height } 
    : { width }; 

  return (
    <Image
      tintColor={tintColor}
      source={source}
      resizeMode= {resizeMode} 
      style={[
        imageStyle,
        ...classes,
      ]}
    />
  );
};

export default CustomImage;
