import React from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Button, Card, Input, Text} from 'react-native-elements';
import Picker from '../../common/Picker/Picker';
import utils from '../../utils';
import styleRoot from '../../assets/style';
import CardEventContainer from './CardEvent/CardEventContainer';

const style = StyleSheet.create({
  qr_scroll_view: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flex: 30,
  },
  qr_container_search: {
    borderBottomWidth: 0.5,
    backgroundColor: utils.Theme.COLORS.WHITE,
    borderBottomColor: utils.Theme.COLORS.BGR,
  },
  qr_search: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
  },
  qr_icon_search: {
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
    backgroundColor: utils.Theme.COLORS.WHITE,
  },
  qr_lb__w: {
    width: 80,
  },
});
const {height} = Dimensions.get('window');

interface Props {
  navigation: any;
  onGetDataInit?: any;
  onGetDataDetails?: any;
  event_reducer?: any;
  search_reducer?: any;
}
class EventsList extends React.Component<Props> {
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
    is_show_search: boolean;
    search_obj: {
      venue_name: string;
      address: string;
      time: Date;
    };
  };
  constructor(props: Props) {
    super(props);
    this.props.onGetDataInit();
    this.state = {
      is_show_search: false,
      search_obj: {
        venue_name: '',
        address: '',
        time: new Date(),
      },
    };
  }

  onShowSearch() {
    this.setState({is_show_search: !this.state.is_show_search});
  }
  onRedirectToRes() {
    this.props.navigation.navigate(utils.Constants.EVENT_REGISTRATION);
  }

  onSearching() {}
  onHandlingScroll(event: any) {
    console.log(event.nativeEvent.contentOffset.y);
  }
  render() {
    return (
      <SafeAreaView style={[styleRoot.qr_main]}>
        <View style={styleRoot.qr_header_screen}>
          <View style={styleRoot.qr_flD_R}>
            <View style={[styleRoot.qr_fl1]}>
              <Text style={styleRoot.qr_title_screen}>イベント一覧</Text>
            </View>
            <Button
              containerStyle={styleRoot.qr_btn_container_cm}
              buttonStyle={styleRoot.qr_btn_cm}
              onPressOut={() => {
                this.onRedirectToRes();
              }}
              title="新しいイベント登録"
            />
            <Button
              titleStyle={styleRoot.v_color_default}
              containerStyle={[style.qr_icon_search, styleRoot.qr_mgr__l5]}
              buttonStyle={[style.qr_icon_search]}
              icon={{
                size: 15,
                name: this.state.is_show_search ? 'angle-up' : 'search',
                type: 'font-awesome',
                color: utils.Theme.COLORS.ORANGES,
              }}
              onPress={() => [this.onShowSearch()]}
            />
          </View>
        </View>
        {this.state.is_show_search ? (
          <View style={style.qr_container_search}>
            <Card containerStyle={[styleRoot.qr_card_event, {height: 150}]}>
              <View style={[styleRoot.qr_flD_C]}>
                <Input
                  containerStyle={[
                    styleRoot.qr_text_input,
                    styleRoot.qr_mgr_b7,
                  ]}
                  value={this.state.search_obj.venue_name}
                  onChangeText={e => {
                    this.setState({
                      search_obj: {...this.state.search_obj, venue_name: e},
                    });
                  }}
                  inputContainerStyle={styleRoot.qr_container_input}
                  inputStyle={styleRoot.qr_input}
                  leftIcon={
                    <Text style={styleRoot.qr_lb_text_icon}>会場名</Text>
                  }
                  leftIconContainerStyle={[
                    style.qr_lb__w,
                    styleRoot.qr_lb_icon_input,
                  ]}
                />
                <Picker
                  data={this.address}
                  id={'id'}
                  value={'address'}
                  label={'都道府県'}
                  selected_value={this.state.search_obj.address}
                  onValueChange={(item: any) => {
                    this.setState({
                      search_obj: {
                        ...this.state.search_obj,
                        address: item['id'],
                      },
                    });
                  }}
                />
                <View style={[styleRoot.qr_container_picker]}>
                  <View style={styleRoot.qr_flD_R}>
                    <Input
                      containerStyle={[
                        styleRoot.qr_text_input,
                        styleRoot.qr_mgr_b3,
                        styleRoot.qr_fl2,
                        styleRoot.v_mgr__al10,
                      ]}
                      inputContainerStyle={styleRoot.qr_container_input}
                      inputStyle={styleRoot.qr_input}
                      leftIcon={
                        <Text style={styleRoot.qr_lb_text_icon}>日付</Text>
                      }
                      leftIconContainerStyle={[
                        style.qr_lb__w,
                        styleRoot.qr_lb_icon_input,
                      ]}
                    />
                    <Button
                      loadingProps={{color: 'black'}}
                      loading={!this.props.search_reducer.is_searched}
                      titleStyle={styleRoot.v_color_default}
                      containerStyle={[
                        style.qr_icon_search,
                        styleRoot.qr_mgr__l5,
                      ]}
                      buttonStyle={[style.qr_icon_search]}
                      icon={{
                        size: 15,
                        name: 'search',
                        type: 'font-awesome',
                        color: utils.Theme.COLORS.ORANGES,
                      }}
                      onPress={() => this.onSearching()}
                    />
                  </View>
                </View>
              </View>
            </Card>
          </View>
        ) : null}
        <SafeAreaView style={[style.qr_scroll_view]}>
          <FlatList
            data={this.props.event_reducer.events}
            renderItem={({item}) => (
              <CardEventContainer
                data={item}
                is_active={new Date(item.time) >= new Date()}
                navigation={this.props.navigation}
              />
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

export default EventsList;
