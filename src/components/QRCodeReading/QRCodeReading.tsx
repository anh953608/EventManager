import React from 'react';
import {View, StyleSheet, Dimensions, Text, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Button, Input} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styleRoot from '../../assets/style';
import utils from '../../utils';
import VToast from '../../common/Toast/Toast';
import Message from '../../common/Message';

const {width, height} = Dimensions.get('window');
const origin = {
  x: width / 10,
  y: 55 + (height - 165 - 55 - (width - width / 5)) / 2,
  width: width - width / 5,
  height: width - width / 5,
};
const arrOriginsView = [
  {
    x: origin.x,
    y: origin.y,
  },
  {
    x: origin.x + origin.width,
    y: origin.y,
  },
  {
    x: origin.x + origin.width,
    y: origin.y + origin.height,
  },
  {
    x: origin.x,
    y: origin.y + origin.height,
  },
];
const style = StyleSheet.create({
  qr_view_scanner: {
    width: width,
    backgroundColor: utils.Theme.COLORS.BGR,
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    height: 125,
  },
  qr_center: {
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },
  qr_lb__w: {
    width: 70,
  },
  qr_center_square: {
    position: 'absolute',
    zIndex: 1,
    height: height,
    width: width,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  rectangle: {
    borderLeftColor: 'rgba(0, 0, 0, .6)',
    borderRightColor: 'rgba(0, 0, 0, .6)',
    borderTopColor: 'rgba(0, 0, 0, .6)',
    borderBottomColor: 'rgba(0, 0, 0, .6)',
    borderLeftWidth: origin.x,
    borderRightWidth: origin.x,
    borderTopWidth: origin.y,
    borderBottomWidth: height,
  },
  rectangleColor: {
    height: origin.height,
    width: origin.width,
    backgroundColor: 'transparent',
  },
  topLeft: {
    width: 50,
    height: 50,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    position: 'absolute',
    left: -1,
    top: -1,
    borderLeftColor: 'white',
    borderTopColor: 'white',
  },
  topRight: {
    width: 50,
    height: 50,
    borderTopWidth: 1,
    borderRightWidth: 1,
    position: 'absolute',
    right: -1,
    top: -1,
    borderRightColor: 'white',
    borderTopColor: 'white',
  },
  bottomLeft: {
    width: 50,
    height: 50,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    position: 'absolute',
    left: -1,
    bottom: -1,
    borderLeftColor: 'white',
    borderBottomColor: 'white',
  },
  bottomRight: {
    width: 50,
    height: 50,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    position: 'absolute',
    right: -1,
    bottom: -1,
    borderRightColor: 'white',
    borderBottomColor: 'white',
  },
});
interface Props {
  navigation: any;
  event_detail?: any;
  event_state?: any;
  onHandleUpdateEvent?: any;
}
class QRCodeReading extends React.Component<Props> {
  state: {
    data_scanner: string;
    qr_count: number;
    data_qr: any;
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      data_scanner: '',
      ...this.props.event_detail,
    };
  }
  getOrigins = (ele: any) => {
    return [
      {
        x: ele.bounds.origin.x,
        y: ele.bounds.origin.y,
      },
      {
        x: ele.bounds.origin.x + ele.bounds.size.width,
        y: ele.bounds.origin.y,
      },
      {
        x: ele.bounds.origin.x + ele.bounds.size.width,
        y: ele.bounds.origin.y + ele.bounds.size.height,
      },
      {
        x: ele.bounds.origin.x,
        y: ele.bounds.origin.y + ele.bounds.size.height,
      },
    ];
  };
  barcodeRecognized = (e: any) => {
    let arrOrigins = [];
    for (const ele of e.barcodes) {
      if (ele.data !== this.state.data_scanner) {
        arrOrigins = this.getOrigins(ele);
        if (
          arrOrigins[0].x >= arrOriginsView[0].x &&
          arrOrigins[0].y >= arrOriginsView[0].y &&
          arrOrigins[1].x <= arrOriginsView[1].x &&
          arrOrigins[1].y >= arrOriginsView[1].y &&
          arrOrigins[2].x <= arrOriginsView[2].x &&
          arrOrigins[2].y <= arrOriginsView[2].y &&
          arrOrigins[3].x >= arrOriginsView[3].x &&
          arrOrigins[3].y <= arrOriginsView[3].y
        ) {
          this.setState({data_scanner: ele.data});
          break;
        }
      }
    }
  };
  onUpdateData() {
    const dataPost = Object.assign(this.props.event_detail, this.state);
    const check = dataPost['data_qr'].find((item: string) => {
      return item == this.state.data_scanner;
    });
    if (!check) {
      dataPost['qr_count'] = dataPost['qr_count'] + 1;
      dataPost['data_qr'].push(dataPost.data_scanner);
      delete dataPost.data_scanner;
      this.props.onHandleUpdateEvent(dataPost);
    } else {
      VToast.showToastBottom(Message.FE00005);
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={[styleRoot.qr_main, {height: height - 110}]}>
          <View style={style.qr_center}>
            <RNCamera
              style={{height: height, width: width}}
              flashMode={RNCamera.Constants.FlashMode.auto}
              barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
              onGoogleVisionBarcodesDetected={this.barcodeRecognized}>
              <View style={style.qr_center_square}>
                <View style={style.rectangle}>
                  <View style={style.rectangleColor} />
                  <View style={style.topLeft} />
                  <View style={style.topRight} />
                  <View style={style.bottomLeft} />
                  <View style={style.bottomRight} />
                </View>
              </View>
            </RNCamera>
          </View>
          <View
            style={[
              styleRoot.qr_flD_C,
              styleRoot.qr_pd__10,
              style.qr_view_scanner,
            ]}>
            <View style={[styleRoot.qr_flD_R, styleRoot.qr_mgr_t5]}>
              <Input
                containerStyle={[styleRoot.qr_text_input, styleRoot.qr_mgr_b5]}
                value={this.state.data_scanner}
                inputContainerStyle={[styleRoot.qr_container_input]}
                inputStyle={styleRoot.qr_input}
                onChangeText={e => {
                  this.setState({data_scanner: e});
                }}
                leftIcon={<Text style={styleRoot.qr_lb_text_icon}>会員ID</Text>}
                leftIconContainerStyle={[
                  style.qr_lb__w,
                  styleRoot.qr_lb_icon_input,
                ]}
              />
            </View>
            <Button
              loading={this.props.event_state.is_loading}
              containerStyle={[styleRoot.qr_btn_cmPd, styleRoot.v_mgr_b10]}
              buttonStyle={styleRoot.qr_btn_cm}
              onPress={() => {
                this.onUpdateData();
              }}
              title="完了"
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
export default QRCodeReading;
