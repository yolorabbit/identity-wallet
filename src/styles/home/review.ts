import { StyleSheet } from "react-native";
import { CONSTANTS, THEME } from "../../constants";

const DetailStyle = StyleSheet.create({
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
  section: {
    marginTop: 37,
    display: 'flex',
    flexDirection: 'column',
  },
  sectionLabel: {
    marginBottom: 10,
  },
  sectionMarginLeft: {
    marginLeft: 6,
  },
  clientGap: {
    marginRight: 28,
  },
  clientAvatar: {
    marginBottom: 8,
    borderRadius: THEME.BORDER_RADIUS.full,
  },
  clientSection: {
    overflow: 'scroll',
  }
})

export default DetailStyle;
