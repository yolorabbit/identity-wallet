import { StyleSheet } from "react-native";
import { CONSTANTS, THEME } from "../../constants";

const DashboardStyle = StyleSheet.create({
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
  contentPaddingBottom: {
    paddingBottom: 120,
  },
  search: {
    // backgroundColor: THEME.COLORS.bgIconGray,
    borderRadius: THEME.BORDER_RADIUS.full,
    width: 46,
    height: 46,
    marginLeft: 40
  },
  body: {
    marginTop: 40,
    display: 'flex',
  },
  badge: {
    // backgroundColor: THEME.COLORS.bgIconGray,
    borderRadius: THEME.BORDER_RADIUS.full,
    width: 28,
    height: 28,
    marginLeft: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    // backgroundColor: THEME.COLORS.blackDark,
    marginTop: 10,
    borderRadius: THEME.BORDER_RADIUS.medium,
  },
  subsection: {
    // backgroundColor: THEME.COLORS.lightDark,
    borderRadius: THEME.BORDER_RADIUS.medium,
  },
  sectionContent: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  }
})

export default DashboardStyle;
