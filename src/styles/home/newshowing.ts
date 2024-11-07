import { StyleSheet } from "react-native";
import { CONSTANTS, THEME } from "../../constants";

const NewShowingStyle = StyleSheet.create({
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
  bottom: {
    paddingBottom: 140,
  },
  formItem: {
    marginTop: 21,
    display: 'flex',
  },
  formLabel: {
    marginBottom: 6,
  },
  
  dropdown: {
    height: 50,
    // backgroundColor: THEME.COLORS.bgGray,
    borderRadius: THEME.BORDER_RADIUS.small,
    paddingLeft: 10,
    paddingRight: 12
  },
  placeholderStyle: {
    fontSize: 12,
    // color: THEME.COLORS.placeholderGray,
  },
  containerStyle: {
    // backgroundColor: THEME.COLORS.bgGray,
    borderRadius: THEME.BORDER_RADIUS.small,
    borderWidth: 0,
    marginBottom: 12,
    paddingBottom: 8
  },
  iconStyle: {
    width: 30,
    height: 30,
    color: THEME.COLORS.white,
  },
  itemContainerStyle: {
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  inputSearchStyle: {
    height: 34,
    fontSize: 12,
    paddingVertical: 0,
    borderRadius: THEME.BORDER_RADIUS.small,
    color: THEME.COLORS.white,
  },
  icon: {
    marginRight: 5,
  },
  selectedTextStyle: {
    fontSize: 12,
    color: THEME.COLORS.white,
  },
  selectedStyle: {
    borderRadius: 12,
    // backgroundColor: THEME.COLORS.bgGray,
    borderWidth: 0,
  },
  renderAvatar: {
    borderRadius: THEME.BORDER_RADIUS.full,
    marginRight: 8,
  },
  timeContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: -16,
    position: 'relative',
  },
  timeDash: {
    position: 'absolute',
    left: '50%',
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 10,
    // backgroundColor: THEME.COLORS.bgGray,
    paddingHorizontal: 12,
  },
  dateContainerIcon: {
    marginRight: 24,
  },
  divider: {
    height: 1,
    backgroundColor: '#363F49',
    marginTop: 22,
  },
  previewContainer: {
    position: 'relative',
    marginTop: 12,
    width: 100,
  },
  previewContainerImg: {
    borderRadius: 13,
  },
  previewClose: {
    position: 'absolute',
    right: 6,
    top: 6,
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: THEME.BORDER_RADIUS.full,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionBtn: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  removeBtn: {
    width: 117,
    height: 30,
    borderWidth: 1,
    // borderColor: THEME.COLORS.lightRed,
    borderRadius: THEME.BORDER_RADIUS.smaller,
    marginTop: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default NewShowingStyle;
