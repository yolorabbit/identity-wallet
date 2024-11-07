import { StyleSheet } from "react-native";
import { CONSTANTS, THEME } from "../../../constants";

const EditProfileStyle = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 16,
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: CONSTANTS.windowHeight - 84,
  },
  avatar: {
    position: 'relative',
    width: 96,
    height: 96,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImg: {
    borderRadius: THEME.BORDER_RADIUS.full,
    marginTop: 36,
    marginBottom: 60,
  },
  camera: {
    position: 'absolute',
    right: 0,
    bottom: 60,
    // backgroundColor: THEME.COLORS.dark,
    borderRadius: THEME.BORDER_RADIUS.full,
    padding: 6,
  },
  update: {
    marginTop: 36,
  },
  modal: {
    padding: 32,
    width: 240,
    position: 'relative',
  },
  modalClose: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
})

export default EditProfileStyle;
