import { StyleSheet } from "react-native";

const CommonStyle = StyleSheet.create({
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  center: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rowCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowStart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rowBetween: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  widthFull: {
    width: '100%',
  },
  bottom: {
    paddingBottom: 30,
  }
})

export default CommonStyle;
