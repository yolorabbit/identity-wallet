import messaging from '@react-native-firebase/messaging';
import { GetStorage, SetStorage } from './storage';
import { CONSTANTS } from '../constants';
// import AsyncStorage from '@react-native - async - storage / async - storage';

export const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    console.log('authStatus', authStatus, enabled) // you can remove the console.log later
    if (enabled) {
        console.log(authStatus) // you can remove the console.log later
        await GetFCMToken();
    }
};
const GetFCMToken = async () => {
    let fcmtoken = GetStorage(CONSTANTS.FcmToken, 'string');
    if (!fcmtoken) {
        try {
            let fcmtoken = await messaging().getToken();
            console.log('fcmtoken: ', fcmtoken);
            if (fcmtoken) {
                await SetStorage(CONSTANTS.FcmToken, fcmtoken);
            }
        }
        catch (error) { console.log(error) }
    }
};

export const NotificationListener = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });
    messaging().getInitialNotification().then(remoteMessage => {
        if (remoteMessage) {
            console.log(
                'Notification caused app to open from quit state:',
                remoteMessage.notification,
            );
        }
    });
    messaging().onMessage(async remotemessage => {
        console.log('remote message', JSON.stringify(remotemessage));
    });
    messaging().onNotificationOpenedApp(remotemessage => {
        console.log('remote message', JSON.stringify(remotemessage));
    });
};