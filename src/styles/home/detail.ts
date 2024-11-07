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
  propertyGap: {
    marginLeft: 14,
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
  },
  bottomGap: {
    marginBottom: 16,
  },
  actionBtn: {
    width: '45%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: THEME.BORDER_RADIUS.small,
    marginTop: 20,
    marginBottom: 24,
  }
})

export default DetailStyle;
