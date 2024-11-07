import React from 'react';
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

interface ILoadingProps {
  isFullScreen?: boolean;
}

const Loading: React.FC<ILoadingProps> = ({ isFullScreen }) => {
  return (
    <Spinner
      visible={true}
      overlayColor='rgba(0, 0, 0, 0.35)'
      textContent={'Loading...'}
      textStyle={styles.spinnerTextStyle}
    />
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color:'white'
  }
})

export default Loading;
