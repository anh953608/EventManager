import Toast from 'react-native-tiny-toast';
import SrcImages from '../../../src/utils/Images';

export default class VToast {
  constructor() {}
  public static showToastSuccess(mess: string) {
    Toast.showSuccess(mess, {
      textStyle: {},
      imgSource: SrcImages.Success,
      imgStyle: {width: 50, height: 50},
      mask: true,
      maskStyle: {},
    });
  }
  public static showToastError(mess: string) {
    Toast.showSuccess(mess, {
      textStyle: {},
      imgSource: SrcImages.Error,
      imgStyle: {width: 50, height: 50},
      mask: true,
      maskStyle: {
        backgroundColor: 'red',
      },
    });
  }
  public static showToastBottom(mess: string) {
    Toast.show(mess, {
      textStyle: {},
      mask: true,
      maskStyle: {
        backgroundColor: 'red',
      },
    });
  }
}
