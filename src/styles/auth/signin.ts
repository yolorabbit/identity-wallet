import { StyleSheet } from "react-native";
import { CONSTANTS } from "../../constants";

const SigninStyle = StyleSheet.create({
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
  forgotPassword: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
  },
  signin: {
    width: '100%',
    marginTop: 42,
  },
  signup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 56,
    marginTop: 30,
  },
  signupBtn: {
    marginLeft: 4,
  }
})

export default SigninStyle;
