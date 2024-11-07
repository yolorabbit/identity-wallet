import { StyleSheet } from "react-native";
import { CONSTANTS, THEME } from "../../constants";

const ShowingStyle = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    height: CONSTANTS.windowHeight - 84,
  },
  contentPadding: {
    paddingHorizontal: 16,
  },
  tabContent: {
    paddingTop: 20,
    paddingHorizontal: 16,
    flex: 1,
  },
  cardGap: {
    marginBottom: 24,
  },
  tab: {
    // backgroundColor: THEME.COLORS.dark,
  },
  tabItem: {
    width: CONSTANTS.windowWidth / 4,
    backgroundColor: 'transparent',
    height: 36,
    paddingHorizontal: 0,
    paddingTop: 0,
    marginBottom: 8,
    marginTop: -4,
  },
  tabIndicator: {
    // backgroundColor: THEME.COLORS.green,
    marginBottom: -4,
    borderBottomWidth: 4,
    // borderColor: THEME.COLORS.green,
    fontWeight: 'bold',
  },
  badge: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: THEME.COLORS.bgGray,
    width: 16,
    height: 16,
    borderRadius: THEME.BORDER_RADIUS.full,
    marginTop: 10,
  }
})

export default ShowingStyle;
