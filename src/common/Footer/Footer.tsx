import React from 'react';
import {View, StyleSheet, Dimensions, Keyboard, Animated} from 'react-native';
import {Button} from 'react-native-elements';
import utils from '../../utils';

const width = Dimensions.get('window').width;
const style = StyleSheet.create({
  qr_container: {
    flexDirection: 'row',
    height: 40,
    alignSelf: 'stretch',
    textAlign: 'center',
    width: width,
    backgroundColor: utils.Theme.COLORS.WHITE,
  },
  qr_btn_active: {
    backgroundColor: utils.Theme.COLORS.PRIMARY_B,
  },
  qr_btn_normal: {
    backgroundColor: utils.Theme.COLORS.WHITE,
  },
  qr_text_active: {
    color: utils.Theme.COLORS.WHITE,
  },
  qr_text_normal: {
    color: utils.Theme.COLORS.PRIMARY_B,
  },
  qr_btn_footer: {
    flex: 1,
    borderRadius: 0,
    elevation: 0,
    width: width / 2,
  },
  qr_title_btn_footer: {
    fontSize: 18,
    fontWeight: '600',
  },
  qr_container_footer: {
    borderRadius: 0,
    elevation: 0,
  },
});

interface Props {
  navigation: any;
  state: any;
  descriptors: any;
  footer: any;
  onSelectScreen: any;
}
class Footer extends React.Component<Props> {
  state: {
    show_footer: boolean;
    animation: any;
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      show_footer: true,
      animation: new Animated.Value(0)
    };
  }
  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }
  componentWillUnmount() {
    Keyboard.removeListener('keyboardDidShow', this.keyboardDidShow);
    Keyboard.removeListener('keyboardDidHide', this.keyboardDidHide);
  }
  keyboardDidShow() {
    this.setState({
      show_footer: false,
    });
  }
  keyboardDidHide() {
    this.setState({
      show_footer: true,
    });
  }
  renderLayout() {
    let result: JSX.Element[] = [];
    this.props.state.routes.map((route: any, index: any) => {
      const {options} = this.props.descriptors[route.key];
      const text = options.tabBarLabel;
      const isFocused = this.props.footer.index_screen === index;
      const onPress = () => {
        const event = this.props.navigation.emit({
          type: 'tabPress',
          target: route.key,
        });

        if (!isFocused && !event.defaultPrevented) {
          this.props.onSelectScreen(index);
          this.props.navigation.navigate(route.name);
          this.props.navigation.reset({
            index: index,
            routes: [{name: route.name}],
          });
        }
      };
      const onLongPress = () => {
        this.props.navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };
      if (text) {
        result.push(
          <Button
            key={index}
            title={text}
            type="clear"
            onLongPress={() => {
              onLongPress();
            }}
            onPress={() => {
              onPress();
            }}
            containerStyle={style.qr_container_footer}
            titleStyle={[
              style.qr_title_btn_footer,
              this.props.footer.index_screen === index
                ? style.qr_text_active
                : style.qr_text_normal,
            ]}
            buttonStyle={[
              style.qr_btn_footer,
              this.props.footer.index_screen === index
                ? style.qr_btn_active
                : style.qr_btn_normal,
            ]}
          />,
        );
      }
    });
    return result;
  }
  render() {
    return (
      <View
        style={[
          style.qr_container,
          !this.state.show_footer ? {display: "none"} : null,
        ]}>
        {this.renderLayout()}
      </View>
    );
  }
}
export default Footer;
