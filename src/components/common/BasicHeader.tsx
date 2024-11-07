import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  classes?: any[];
  children: React.JSX.Element | React.JSX.Element[];
}

const BasicHeader: FC<Props> = ({ classes = [], children }) => {
  return (
    <View style={[styles.container, ...classes]}>
      {children}
    </View>
  );
};

export default BasicHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 44,
  },
});
