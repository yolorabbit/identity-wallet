import { StyleSheet } from "react-native";
import { THEME } from "../../../constants";

const AboutStyle = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 16,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 32,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    marginTop: 8,
  },
  sectionContent: {
    lineHeight: 20,
  },
})

export default AboutStyle;
