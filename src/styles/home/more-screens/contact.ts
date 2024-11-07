import { StyleSheet } from "react-native";
import { THEME } from "../../../constants";

const ContactStyle = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 16,
  },
  content: {
    marginTop: 32,
    width: '100%',
    flex: 1,
    display: 'flex',
    position: 'relative',
  },
  inputItem: {
    marginBottom: 10,
  },
  sendBtn: {
    position: 'absolute',
    bottom: 63,
  },
  message: {
    backgroundColor: THEME.COLORS.bgGray,
    borderWidth: 0,
  }
})

export default ContactStyle;
