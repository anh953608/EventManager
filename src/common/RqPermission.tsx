import {Alert, Linking} from 'react-native';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Constants from '../utils/Constants';
const RqPermission = () => {
  try {
    if (Constants.IS_OS) {
      request(PERMISSIONS.IOS.CAMERA).then(res => {
        switch (res) {
          case RESULTS.UNAVAILABLE:
            Alert.alert(
              'Camera unavailable',
              'The device does not support the camera',
            );
            break;
          case RESULTS.DENIED:
            break;
          case RESULTS.BLOCKED:
            notification();
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
          break;
        case RESULTS.DENIED:
          break;
        case RESULTS.BLOCKED:
          notification();
          break;
      }
    });
  } catch (err) {}
}
const notification = () => {
  Alert.alert(
    'Camera access denied',
    'Please access the settings and provide camera access for this app!',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          if (Constants.IS_OS) {
            Linking.openURL('app-settings:');
            return;
          }
          Linking.openSettings();
        },
      },
    ],
  );
}
export default RqPermission;
