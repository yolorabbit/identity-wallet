import { StyleSheet } from "react-native";
import { CONSTANTS } from "../../constants";

const MoreStyle = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 16,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    height: CONSTANTS.windowHeight - 84,
  },
  
})

export default MoreStyle;
