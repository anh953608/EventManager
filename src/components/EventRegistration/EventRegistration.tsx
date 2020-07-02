import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Card, Input, Text} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Picker from '../../common/Picker/Picker';
import DateTimePicker from '../../common/DatetimePicker/DateTimePicker';
import styleRoot from '../../assets/style';

const {height} = Dimensions.get('window');
const style = StyleSheet.create({
  qr_event_regis: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flex: 30,
  },
  qr_lb__w: {
    width: 80,
  },
});
interface Props {
  navigation: any;
  onHandleRegister: any;
  mp_state: any;
}
class EventRegistration extends React.Component<Props> {
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
  state: {
    address: string;
    time: string;
    xxxxx1: string;
    xxxxx2: string;
    venue_name: string;
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      address: '',
      time: '',
      xxxxx1: '',
      xxxxx2: '',
      venue_name: '',
    };
  }

  onSubmit() {
    this.props.onHandleRegister({
      address: this.state.address,
      time: this.state.time,
      xxxxx1: this.state.xxxxx1,
      xxxxx2: this.state.xxxxx2,
      venue_name: this.state.venue_name,
      data_qr: [],
      qr_count: 0,
      no_qr_count: 0,
    });
  }
  render() {
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styleRoot.qr}>
        <SafeAreaView style={[styleRoot.qr_main]}>
          <View style={styleRoot.qr_header_screen}>
            <View style={[styleRoot.qr_fl1]}>
              <Text style={styleRoot.qr_title_screen}>
                新しいイベント登録画面
              </Text>
            </View>
          </View>
          <View style={style.qr_event_regis}>
            <Card containerStyle={[styleRoot.qr_card_event]}>
              <View style={styleRoot.qr_mgr_t10}>
                <Input
                  containerStyle={[
                    styleRoot.qr_text_input,
                    styleRoot.qr_mgr_b7,
                  ]}
                  inputContainerStyle={[styleRoot.qr_container_input]}
                  inputStyle={styleRoot.qr_input}
                  leftIcon={
                    <Text style={styleRoot.qr_lb_text_icon}>会場名</Text>
                  }
                  leftIconContainerStyle={[
                    style.qr_lb__w,
                    styleRoot.qr_lb_icon_input,
                  ]}
                  onChangeText={text => {
                    this.setState({venue_name: text});
                  }}
                />
                <Picker
                  data={this.address}
                  id={'id'}
                  value={'address'}
                  label={'都道府県'}
                  selected_value={this.state.address}
                  onValueChange={(item: any) => {
                    this.setState({...this.state, address: item['id']});
                  }}
                />
                <DateTimePicker label={'日付'} />
                <Input
                  containerStyle={[
                    styleRoot.qr_text_input,
                    styleRoot.qr_mgr_b7,
                  ]}
                  inputContainerStyle={[styleRoot.qr_container_input]}
                  inputStyle={styleRoot.qr_input}
                  leftIcon={<Text style={styleRoot.qr_lb_text_icon}>日付</Text>}
                  leftIconContainerStyle={[
                    style.qr_lb__w,
                    styleRoot.qr_lb_icon_input,
                  ]}
                  onChangeText={text => {
                    this.setState({time: text});
                  }}
                />
                <Input
                  containerStyle={[
                    styleRoot.qr_text_input,
                    styleRoot.qr_mgr_b7,
                  ]}
                  inputContainerStyle={[styleRoot.qr_container_input]}
                  inputStyle={styleRoot.qr_input}
                  leftIcon={
                    <Text style={styleRoot.qr_lb_text_icon}>XXXXX</Text>
                  }
                  leftIconContainerStyle={[
                    style.qr_lb__w,
                    styleRoot.qr_lb_icon_input,
                  ]}
                  onChangeText={text => {
                    this.setState({xxxxx1: text});
                  }}
                />
                <Input
                  containerStyle={[
                    styleRoot.qr_text_input,
                    styleRoot.qr_mgr_b7,
                  ]}
                  inputContainerStyle={[styleRoot.qr_container_input]}
                  inputStyle={styleRoot.qr_input}
                  leftIcon={
                    <Text style={styleRoot.qr_lb_text_icon}>XXXXX</Text>
                  }
                  leftIconContainerStyle={[
                    style.qr_lb__w,
                    styleRoot.qr_lb_icon_input,
                  ]}
                  onChangeText={text => {
                    this.setState({xxxxx2: text});
                  }}
                />
                <Button
                  loading={this.props.mp_state.is_loading}
                  containerStyle={[styleRoot.qr_btn_cmPd, styleRoot.v_mgr_b10]}
                  buttonStyle={styleRoot.qr_btn_cm}
                  onPress={() => {
                    this.onSubmit();
                  }}
                  title="登録"
                />
              </View>
            </Card>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    );
  }
}
export default EventRegistration;
