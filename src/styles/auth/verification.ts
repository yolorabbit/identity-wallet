import { StyleSheet } from "react-native";
import { THEME } from "../../constants";

const VerificationStyle = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 16,
  },
  subtitle: {
    color: THEME.COLORS.white,
    lineHeight: 24,
    marginBottom: 40,
  },
  email: {
    color: THEME.COLORS.green,
  },
  inputItem: {
    width: '100%',
    marginBottom: 20,
  },
  codeFieldRoot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  cell: {
    width: 60,
    height: 60,
    marginHorizontal: 12,
    lineHeight: 58,
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: THEME.COLORS.bgGray,
    borderRadius: THEME.BORDER_RADIUS.full,
    color: THEME.COLORS.black,
  },
  focusCell: {
    backgroundColor: 'white',
  },
  countText: {
    width: '100%',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  resend: {
    textDecorationLine: 'underline',
    marginTop: 50,
  }
})

export default VerificationStyle;
