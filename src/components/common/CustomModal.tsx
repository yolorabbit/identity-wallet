import React, { FC } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
// import { BlurView } from "@react-native-community/blur";
import { THEME } from '../../constants';

type Props = {
  visible: boolean;
  classes?: any[];
  children: React.JSX.Element | React.JSX.Element[] | any;
  onClose: () => void;
}

const CustomModal: FC<Props> = (props) => {
  const {
    visible,
    classes = [],
    children,
    onClose
  } = props;

  return (
    <Modal
      visible={visible}
      animationType='slide'
      transparent={true}
      onRequestClose={() => onClose()}
      statusBarTranslucent={true}
    >
      < View style={styles.modalContainer} >
        <View style={styles.modalContent}>
          <View style={styles.content}>
            {children}
          </View>
        </View>
      </View >
    </Modal >
  )
}

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 24,
    borderRadius: 24,
    width: '95%',
    marginBottom: 24,
    marginTop: 24,
    alignItems: 'center',
  },
});


//   {/* <View style={styles.container}>
//     {/* <BlurView
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0,
//       }}
//       blurType="light"
//       blurAmount={5}
//       reducedTransparencyFallbackColor="white"
//     /> */}
//     <View style={[styles.content, ...classes]}>
//     {children}
//   </View>
// </View> * /}