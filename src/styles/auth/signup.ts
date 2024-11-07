import { StyleSheet } from "react-native";
import { CONSTANTS } from "../../constants";

const SignupStyle = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 16,
  },
  body: {
    display: 'flex',
    justifyContent: 'space-between',
    height: CONSTANTS.windowHeight - 84,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginTop: 16,
    marginBottom: 40,
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  role: {
    marginLeft: 4,
  },
  inputItem: {
    width: '100%',
    marginBottom: 12,
  },
  signup: {
    width: '100%',
    marginTop: 32,
  },
  login: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 56,
    marginTop: 30,
  },
  loginBtn: {
    marginLeft: 4,
  }
})

export default SignupStyle;
