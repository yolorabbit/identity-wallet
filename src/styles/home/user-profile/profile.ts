import { StyleSheet } from "react-native";
import { CONSTANTS, THEME } from "../../../constants";

const ProfileStyle = StyleSheet.create({
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
  },
  avatar: {
    position: 'relative',
    width: 96,
    height: 96,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginBottom: 60,
    borderRadius: THEME.BORDER_RADIUS.full,
  },
  avatarCircle: {
    position: 'absolute',
  },
  rowGap: {
    marginLeft: 9,
  }
})

export default ProfileStyle;
