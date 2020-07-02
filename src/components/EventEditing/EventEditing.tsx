import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Card, Input, Text} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Picker from '../../common/Picker/Picker';
import styleRoot from '../../assets/style';
import utils from '../../utils';

const {height} = Dimensions.get('window');
const style = StyleSheet.create({
  qr_icon_plus_minus: {
    width: 40,
    height: 40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    borderRadius: 100,
  },
  qr_icon_minus: {
    backgroundColor: utils.Theme.COLORS.ORANGES,
  },
  qr_icon_plus: {
    backgroundColor: utils.Theme.COLORS.PRIMARY_B,
  },
  qr_input_aggregate: {
    width: 100,
    margin: 0,
    marginBottom: 7,
  },
  qr_view__hidden: {
    width: 40,
    height: 40,
  },
  qr_lb__w: {
    width: 80,
  },
});
interface Props {
  navigation: any;
  onHandleRegister: any;
  event_detail: any;
  event_state: any;
  onHandleUpdateEvent?: any;
}

class EventEditing extends React.Component<Props> {
  state: {
    is_disable: boolean;
    venue_name: string;
    no_qr_count: number;
    address: number;
    xxxxx1: string;
    xxxxx2: string;
    time: string;
  };
  address = [
    {
      id: 1,
      address: '東京都文京区本郷７丁目３−１',
    },
    {
      id: 2,
      address: '東京都文京区本郷７−３−１',
    },
    {
      id: 3,
      address: '東京都 八王子市東中野742-1',
    },
    {
      id: 4,
      address: '東京都 長崎県長崎市桜町2−22',
    },
    {
      id: 5,
      address: '東京都文京区本郷７−３−１ 大成ビール606号',
    },
    {
      id: 6,
      address: '〒160-0017東京都新宿区左門町21-2',
    },
    {
      id: 7,
      address: '〒106-0044東京都港区東麻布1-8-1 東麻布ISビル4F',
    },
    {
      id: 8,
      address: '〒106-0044東京都港区東麻布1-8-1-801',
    },
    {
      id: 9,
      address: '東京都中央区八重洲1-5-3',
    },
    {
      id: 10,
      address: '京都府京都市下京区烏丸通五条下ル大坂町384',
    },
  ];
  constructor(props: Props) {
    super(props);
    this.state = {
      is_disable: new Date(this.props.event_detail.time) < new Date(),
      ...this.props.event_detail,
    };
  }
  onRedirectQRCode() {
    this.props.navigation.navigate(utils.Constants.QR_CODE_READING);
  }
  onUpdateNoQRCode(type: number) {
    this.setState({
      ...this.state,
      no_qr_count:
        type === 0 ? this.state.no_qr_count - 1 : this.state.no_qr_count + 1,
    });
  }
  onUpdateData() {
    const dataPost = Object.assign(this.props.event_detail, this.state);
    delete dataPost.is_disable;
    this.props.onHandleUpdateEvent(dataPost);
  }
  renderAggregateAdd(isShowBtn: any, type: number) {
    return (
      <View style={[styleRoot.qr_flD_R, styleRoot.qr_mgr__l10]}>
        {isShowBtn ? (
          <Button
            containerStyle={[style.qr_icon_plus_minus]}
            buttonStyle={[style.qr_icon_plus_minus, style.qr_icon_minus]}
            icon={{
              size: 15,
              name: 'minus',
              type: 'font-awesome',
              color: '#FFFFFF',
            }}
            onPress={() => {
              this.onUpdateNoQRCode(0);
            }}
          />
        ) : (
          <View style={style.qr_view__hidden} />
        )}
        <Input
          disabled={true}
          textAlignVertical={'center'}
          containerStyle={[styleRoot.qr_text_input, style.qr_input_aggregate]}
          inputContainerStyle={[
            styleRoot.qr_container_input,
            styleRoot.qr_bgr__disable,
          ]}
          inputStyle={[
            styleRoot.qr_input,
            styleRoot.qr_input_align_center,
            styleRoot.qr_fZ16,
          ]}
          value={
            type === 0
              ? utils.DataUtils.cvNumberToString(
                  this.props.event_detail.qr_count,
                )
              : type === 1
              ? utils.DataUtils.cvNumberToString(this.state.no_qr_count)
              : utils.DataUtils.cvNumberToString(
                  this.state.no_qr_count + this.props.event_detail.qr_count,
                )
          }
        />
        {isShowBtn ? (
          <Button
            containerStyle={[style.qr_icon_plus_minus]}
            buttonStyle={[style.qr_icon_plus_minus, style.qr_icon_plus]}
            icon={{
              size: 15,
              name: 'plus',
              type: 'font-awesome',
              color: '#FFFFFF',
            }}
            onPress={() => {
              this.onUpdateNoQRCode(1);
            }}
          />
        ) : (
          <View style={style.qr_view__hidden} />
        )}
      </View>
    );
  }
  renderAggregateReadonly(value: string) {
    return (
      <View style={[styleRoot.qr_flD_R, styleRoot.qr_mgr__l10]}>
        <Input
          disabled={true}
          textAlignVertical={'center'}
          containerStyle={[styleRoot.qr_text_input, style.qr_input_aggregate]}
          inputContainerStyle={[
            styleRoot.qr_container_input,
            styleRoot.qr_bgr__disable,
          ]}
          value={value}
          inputStyle={[
            styleRoot.qr_input,
            styleRoot.qr_input_align_center,
            styleRoot.qr_fZ16,
          ]}
        />
      </View>
    );
  }
  render() {
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styleRoot.qr}>
        <SafeAreaView style={[styleRoot.qr_main]}>
          <Card
            containerStyle={[styleRoot.qr_card_event]}
            title={'イベント詳細'}
            titleStyle={styleRoot.qr_title_card}>
            <View>
              <Input
                disabled={this.state.is_disable}
                containerStyle={[styleRoot.qr_text_input, styleRoot.qr_mgr_b7]}
                inputContainerStyle={[
                  styleRoot.qr_container_input,
                  this.state.is_disable ? styleRoot.qr_bgr__disable : null,
                ]}
                value={this.state.venue_name}
                inputStyle={styleRoot.qr_input}
                leftIcon={<Text style={styleRoot.qr_lb_text_icon}>会場名</Text>}
                leftIconContainerStyle={[
                  style.qr_lb__w,
                  styleRoot.qr_lb_icon_input,
                ]}
                onChangeText={text => {
                  this.setState({
                    venue_name: text,
                  });
                }}
              />
              <Picker
                disable={this.state.is_disable}
                data={this.address}
                id={'id'}
                value={'address'}
                label={'都道府県'}
                selected_value={this.state.address}
                onValueChange={(item: any) => {
                  this.setState({...this.state, address: item['id']});
                }}
              />
              <Input
                disabled={this.state.is_disable}
                containerStyle={[styleRoot.qr_text_input, styleRoot.qr_mgr_b7]}
                inputContainerStyle={[
                  styleRoot.qr_container_input,
                  this.state.is_disable ? styleRoot.qr_bgr__disable : null,
                ]}
                inputStyle={styleRoot.qr_input}
                leftIcon={<Text style={styleRoot.qr_lb_text_icon}>日付</Text>}
                leftIconContainerStyle={[
                  style.qr_lb__w,
                  styleRoot.qr_lb_icon_input,
                ]}
                value={this.state.time}
                onChangeText={text => {
                  this.setState({time: text});
                }}
              />
              <Input
                disabled={this.state.is_disable}
                value={this.state.xxxxx1}
                containerStyle={[styleRoot.qr_text_input, styleRoot.qr_mgr_b7]}
                inputContainerStyle={[
                  styleRoot.qr_container_input,
                  this.state.is_disable ? styleRoot.qr_bgr__disable : null,
                ]}
                inputStyle={styleRoot.qr_input}
                leftIcon={<Text style={styleRoot.qr_lb_text_icon}>XXXXX</Text>}
                leftIconContainerStyle={[
                  style.qr_lb__w,
                  styleRoot.qr_lb_icon_input,
                ]}
                onChangeText={text => {
                  this.setState({xxxxx1: text});
                }}
              />
              <Input
                disabled={this.state.is_disable}
                value={this.state.xxxxx2}
                containerStyle={[styleRoot.qr_text_input, styleRoot.qr_mgr_b7]}
                inputContainerStyle={[
                  styleRoot.qr_container_input,
                  this.state.is_disable ? styleRoot.qr_bgr__disable : null,
                ]}
                inputStyle={styleRoot.qr_input}
                leftIcon={<Text style={styleRoot.qr_lb_text_icon}>XXXXX</Text>}
                leftIconContainerStyle={[
                  style.qr_lb__w,
                  styleRoot.qr_lb_icon_input,
                ]}
                onChangeText={text => {
                  this.setState({xxxxx2: text});
                }}
              />
              {this.state.is_disable ? null : (
                <Button
                  containerStyle={[styleRoot.qr_btn_cmPd, styleRoot.v_mgr_b10]}
                  buttonStyle={styleRoot.qr_btn_cm}
                  onPress={() => {
                    this.onRedirectQRCode();
                  }}
                  title="QRコード読み取る"
                />
              )}
            </View>
          </Card>
          <Card
            containerStyle={[styleRoot.qr_card_event]}
            title={'集計'}
            titleStyle={styleRoot.qr_title_card}>
            <View
              style={[
                styleRoot.qr_flD_C,
                styleRoot.qr_pd__10,
                styleRoot.qr_pd__t0,
              ]}>
              <View
                style={[
                  styleRoot.qr_flD_R,
                  styleRoot.qr_justifyContent__center,
                ]}>
                <Text style={[styleRoot.qr_lb_text]}>QR読み取った人数</Text>
                {this.state.is_disable
                  ? this.renderAggregateReadonly(
                      utils.DataUtils.cvNumberToString(
                        this.props.event_detail.qr_count,
                      ),
                    )
                  : this.renderAggregateAdd(false, 0)}
              </View>
              <View
                style={[
                  styleRoot.qr_flD_R,
                  styleRoot.qr_justifyContent__center,
                ]}>
                <Text style={styleRoot.qr_lb_text}>それ以外</Text>
                {this.state.is_disable
                  ? this.renderAggregateReadonly(
                      utils.DataUtils.cvNumberToString(
                        this.props.event_detail.no_qr_count,
                      ),
                    )
                  : this.renderAggregateAdd(true, 1)}
              </View>
              <View
                style={[
                  styleRoot.qr_flD_R,
                  styleRoot.qr_justifyContent__center,
                ]}>
                <Text style={styleRoot.qr_lb_text}>合計</Text>
                {this.state.is_disable
                  ? this.renderAggregateReadonly(
                      utils.DataUtils.cvNumberToString(
                        this.props.event_detail.qr_count +
                          this.props.event_detail.no_qr_count,
                      ),
                    )
                  : this.renderAggregateAdd(false, 2)}
              </View>
            </View>
            {this.state.is_disable ? null : (
              <Button
                containerStyle={[
                  styleRoot.qr_btn_cmPd,
                  styleRoot.v_mgr_b10,
                  styleRoot.qr_mgr_t0,
                ]}
                loading={this.props.event_state.is_loading}
                buttonStyle={styleRoot.qr_btn_cm}
                onPress={() => {
                  this.onUpdateData();
                }}
                title="完了"
              />
            )}
          </Card>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    );
  }
}
export default EventEditing;
