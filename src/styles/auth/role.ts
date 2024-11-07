import { StyleSheet } from "react-native";
import { THEME } from "../../constants";

const RoleStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },

  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '58%',
  },
  logo: {
    marginBottom: 30
  },
  subtitle: {
    marginTop: 4,
  },

  bottom: {
    width: '100%',
    height: '42%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.bgGray,
    borderTopLeftRadius: THEME.BORDER_RADIUS.large,
    borderTopRightRadius: THEME.BORDER_RADIUS.large,
    paddingHorizontal: 16,
    paddingVertical: 23,
  },
  buttomTitle: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  }
})

export default RoleStyle;
