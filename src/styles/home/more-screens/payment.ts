import { StyleSheet } from "react-native";
import { THEME } from "../../../constants";

const PaymentStyle = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 16,
  },
  subscriptionCard: {
    marginTop: 32,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: 12,
    borderRadius: THEME.BORDER_RADIUS.small,
    borderWidth: 1,
    borderColor: THEME.COLORS.green,
    marginBottom: 14,
  },
  formItem: {
    marginTop: 21,
    display: 'flex',
  },
  formLabel: {
    marginBottom: 6,
  },
  buyBtn: {
    marginTop: 52,
  },
})

export default PaymentStyle;
