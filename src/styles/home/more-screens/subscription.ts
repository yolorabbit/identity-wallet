import { StyleSheet } from "react-native";
import { THEME } from "../../../constants";

const SubscriptionStyle = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 16,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  subtitle: {
    lineHeight: 24,
    marginBottom: 34,
  },
  inputItem: {
    width: '100%',
    marginBottom: 15,
  },
  save: {
    marginTop: 16,
  },
  active: {
    backgroundColor: '#111',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,
    position: 'relative',
  },
  descriptionLabel: {
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 19,
  },
  plan: {
    position: 'relative',
    backgroundColor: '#414D5B',
    width: 97,
    height: 39,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25.5,
    zIndex: 10,
  },
  planLine: {
    backgroundColor: '#556373',
    width: 300,
    height: 1,
    position: 'absolute',
    top: 20,
  },
  subscriptionCard: {
    width: '100%',
    padding: 12,
    borderRadius: THEME.BORDER_RADIUS.small,
    borderWidth: 1,
    borderColor: THEME.COLORS.green,
    marginBottom: 14,
  },
  subscribeBtn: {
    borderRadius: THEME.BORDER_RADIUS.smaller,
    width: 85,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default SubscriptionStyle;
