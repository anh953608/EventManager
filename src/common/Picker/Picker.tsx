import React from 'react';
import {Button, Input, ListItem, Text} from 'react-native-elements';
import {
  View,
  Modal,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import utils from '../../utils';
import styleRoot from '../../assets/style';

const {height} = Dimensions.get('window');
const style = StyleSheet.create({
  qr_view_picker: {
    maxHeight: height / 2,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#ff000000',
  },
  qr_active: {
    backgroundColor: utils.Theme.COLORS.PRIMARY_B,
  },
  qr_color__active: {
    color: utils.Theme.COLORS.WHITE,
  },
});
interface Props {
  label?: string;
  width_label?: number;
  style?: any;
  onValueChange?: any;
  data: any;
  id: string;
  value: string;
  selected_value: any;
  disable?: boolean;
}
class Picker extends React.Component<Props> {
  state: {
    value: string;
    id: string;
    show_option: boolean;
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
      id: '0',
      show_option: false,
    };
    if (Array.isArray(this.props.data)) {
      this.state = {
        value: this.props.data[0][this.props.value] || '',
        id: this.props.data[0][this.props.id]
          ? this.props.data[0][this.props.id].toString()
          : '0',
        show_option: false,
      };
      if (this.props.selected_value) {
        const tmp = this.props.data.find(item => {
          return (item[this.props.id] || false) == this.props.selected_value;
        });
        if (tmp) {
          this.state = {
            value: tmp[this.props.value] || '',
            id: tmp[this.props.id] ? tmp[this.props.id].toString() : '0',
            show_option: false,
          };
        }
      }
    }
  }
  onPress(item: any, index: string) {
    if (this.state.id != (item[this.props.id] || index)) {
      this.setState({
        value: item[this.props.value],
        id: item[this.props.id] ? item[this.props.id].toString() : index,
      });
      if (this.props.onValueChange) {
        this.props.onValueChange.call(null, item);
      }
    }
    this.setState({show_option: false});
  }
  keyExtractor = (item: any, index: any) => index.toString();
  render() {
    return (
      <View>
        <View
          onStartShouldSetResponder={() => {
            if (Array.isArray(this.props.data) && !this.props.disable) {
              this.setState({show_option: true});
            }
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
              name: 'angle-down',
              color:
                (this.props.disable == true
                  ? utils.Theme.COLORS.INPUT_DISABLE
                  : utils.Theme.COLORS.DEFAULT)
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
            <View style={style.qr_view_picker}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.props.data}
                renderItem={({item, index}) => (
                  <ListItem
                    containerStyle={[
                      styleRoot.qr_pd__tb12,
                      this.state.id == (item[this.props.id].toString() || index)
                        ? style.qr_active
                        : null,
                    ]}
                    titleStyle={[
                      styleRoot.qr_fZ13,
                      this.state.id == (item[this.props.id].toString() || index)
                        ? style.qr_color__active
                        : null,
                    ]}
                    onPress={() => this.onPress(item, index.toString())}
                    key={item[this.props.id] || index}
                    title={item[this.props.value]}
                    bottomDivider
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
export default Picker;
