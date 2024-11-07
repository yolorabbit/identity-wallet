import { FC } from "react";
import { CustomImage, CustomModal, CustomText } from ".";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ICONS, THEME } from "../../constants";
import CommonStyle from "../../styles/common";

interface Props {
  visible: boolean;
  title: string;
  containerClasses?: any[];
  children: any;
  onClose: () => void;
}

const BottomModal: FC<Props> = (props) => {
  const { visible, title, containerClasses = [], children, onClose } = props;

  return (
    <CustomModal
      visible={visible}
      classes={[styles.container, ...containerClasses]}
      onClose={() => onClose()}
    >
      <View style={styles.header}>
        <CustomText size="subtitle" weight="bold" title={title} />
        <TouchableOpacity onPress={() => onClose()}>
          <CustomImage source={ICONS.closeRound} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {children}
      </View>
    </CustomModal>
  )
}

export default BottomModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.bgGray,
    width: '100%',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: '50%',
    flex: 1,
    paddingTop: 30,
    paddingBottom: 32,
    paddingHorizontal: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 21,
  },
  content: {
    display: 'flex',
    flex: 1,
  },
});
