import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default {
  windowWidth,
  windowHeight,
  FcmToken: 'FcmToken',
  AccessToken: 'AccessToken',
  RefreshToken: 'RefreshToken',
  NotificationChannel: 'iShowingBuddy-channel'
};
