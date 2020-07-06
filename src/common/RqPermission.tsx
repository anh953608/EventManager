import {Alert, Linking} from 'react-native';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Constants from '../utils/Constants';
const RqPermission = (callback: any) => {
  try {
    if (Constants.IS_OS) {
      request(PERMISSIONS.IOS.CAMERA).then(res => {
        switch (res) {
          case RESULTS.UNAVAILABLE:
            Alert.alert(
              'Camera unavailable',
              'The device does not support the camera',
            );
            callback();
            break;
          case RESULTS.DENIED:
            callback();
            break;
          case RESULTS.BLOCKED:
            notification(callback);
            callback();
            break;
        }
      });
      return;
    }
    request(PERMISSIONS.ANDROID.CAMERA).then(res => {
      switch (res) {
        case RESULTS.UNAVAILABLE:
          Alert.alert(
            'Camera unavailable',
            'The device does not support the camera',
          );
          callback();
          break;
        case RESULTS.DENIED:
          callback();
          break;
        case RESULTS.BLOCKED:
          notification(callback);
          break;
      }
    });
  } catch (err) {}
}
const notification = (callback: any) => {
  Alert.alert(
    'Camera access denied',
    'Please access the settings and provide camera access for this app!',
    [
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => {
          callback();
        },
      },
      {
        text: 'OK',
        onPress: () => {
          if (Constants.IS_OS) {
            Linking.openURL('app-settings:');
            return;
          }
          Linking.openSettings();
          callback();
        },
      },
    ],
  );
}
export default RqPermission;
