import React from 'react';
import {Button, Input, ListItem, Text} from 'react-native-elements';
import {View, Modal, FlatList, StyleSheet, Dimensions} from 'react-native';
import utils from '../../utils';
import styleRoot from '../../assets/style';

const {height} = Dimensions.get('window');
const style = StyleSheet.create({
  v_view_datetime_picker: {
    height: height / 2,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
  v_active: {
    backgroundColor: utils.Theme.COLORS.PRIMARY_B,
  },
  v_color__active: {
    color: utils.Theme.COLORS.WHITE,
  },
});
interface Props {
  label?: string;
  width_label?: number;
  style?: any;
  onValueChange?: any;
  type?: string;
  minDate?: Date;
  maxDate?: Date;
  disable?: boolean;
}
class DateTimePicker extends React.Component<Props> {
  state: {
    value: string;
    id: string;
    show_option: boolean;
    years?: any;
    months?: any;
    dates?: any;
    hours?: any;
    minutes?: any;
    year?: number;
    month?: number;
    date?: number;
    hour?: number;
    minute?: number;
  };
  flatListRef: any;
  itemRef: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
      id: '0',
      show_option: false,
      years: [],
      months: [],
      dates: [],
      hours: [],
      minutes: [],
    };
    // setting  years;
    let tmp = [];
    for (let index = 1950; index < 7777; index++) {
      tmp.push(index);
    }
    this.state.years = tmp;

    tmp = [];
    for (let index = 1; index < 13; index++) {
      tmp.push(index);
    }
    this.state.months = tmp;

    tmp = [];
    for (let index = 1; index < 32; index++) {
      tmp.push(index);
    }
    this.state.dates = tmp;

    tmp = [];
    for (let index = 0; index < 24; index++) {
      tmp.push(index);
    }
    this.state.hours = tmp;

    tmp = [];
    for (let index = 0; index < 60; index++) {
      tmp.push(index);
    }
    this.state.minutes = tmp;
  }

  onChangeMonth() {
    this.getDatesByMonth();
  }
  onChangeYear() {
    this.getDatesByMonth();
  }
  checkLeapYear() {
    let {year} = this.state;
    year = year || 0;
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  }
  getDatesByMonth() {
    let {month, date} = this.state;
    date = date || 1;
    const dates = [];
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        for (let index = 1; index < 32; index++) {
          dates.push(index);
        }
        this.setState({dates: dates});
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        for (let index = 1; index < 31; index++) {
          dates.push(index);
        }
        this.setState({dates: dates});
        if (date > 30) {
          this.setState({date: 30});
        }
        break;
      case 2:
        if (this.checkLeapYear()) {
          for (let index = 1; index < 30; index++) {
            dates.push(index);
          }
          if (date > 29) {
            this.setState({date: 29});
          }
        } else {
          for (let index = 1; index < 29; index++) {
            dates.push(index);
          }
          if (date > 28) {
            this.setState({date: 28});
          }
        }
        this.setState({dates: dates});
        break;
    }
  }
  scrollToIndex = () => {
    let randomIndex = 10;
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
  }
  keyExtractor = (item: any, index: any) => index.toString();
  render() {
    return (
      <View>
        <View
          onStartShouldSetResponder={() => {
            this.setState({show_option: true});
            return false;
          }}>
          <Input
            disabled={this.props.disable == true}
            containerStyle={[styleRoot.qr_text_input, styleRoot.qr_mgr_b7]}
            inputContainerStyle={[
              styleRoot.qr_container_input,
              this.props.disable == true ? styleRoot.qr_bgr__disable : null,
            ]}
            inputStyle={styleRoot.qr_input}
            leftIcon={
              <Text style={styleRoot.qr_lb_text_icon}>{this.props.label}</Text>
            }
            leftIconContainerStyle={[
              styleRoot.qr_lb_icon_input,
              {width: this.props.width_label || 80},
            ]}
            value={this.state.value}
            editable={false}
            rightIcon={{
              type: 'font-awesome',
              name: 'calendar',
              color:
                this.props.disable == true
                  ? utils.Theme.COLORS.INPUT_DISABLE
                  : utils.Theme.COLORS.DEFAULT,
            }}
            rightIconContainerStyle={styleRoot.qr_icon__right}
          />
        </View>
        <Modal
          visible={this.state.show_option}
          transparent={true}
          animationType={'slide'}>
          <View
            style={styleRoot.qr_view_picker}
            onStartShouldSetResponder={() => {
              this.setState({show_option: false});
              return false;
            }}>
            <View style={style.v_view_datetime_picker}>
              <View
                style={{
                  position: 'absolute',
                  top: height / 4 - 40,
                  left: 0,
                  borderBottomWidth: 0.5,
                  borderTopWidth: 0.5,
                  width: '100%',
                  height: 44,
                }}
              />
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.years}
                ref={(ref) => { this.flatListRef = ref; }}
                onScroll = {(event) => { console.log(this.itemRef);
                }}
                renderItem={({item, index}) => (
                  <ListItem
                    ref={(ref) => { this.itemRef = ref}}
                    containerStyle={{paddingTop: 12, paddingBottom: 12, backgroundColor: '#ff000000'}}
                    underlayColor={'#ff000000'}
                    titleStyle={[styleRoot.qr_fZ14]}
                    key={index}
                    title={item}
                    onPress={event => {
                      console.log(event);
                    }}
                  />
                )}
              />
              <View style={{backgroundColor: '#fff'}}>
                <Button
                  containerStyle={[styleRoot.qr_btn_cmPd, styleRoot.v_mgr_b10]}
                  buttonStyle={styleRoot.qr_btn_cm}
                  onPress={() => this.setState({show_option: false})}
                  title="Cancel"
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default DateTimePicker;
