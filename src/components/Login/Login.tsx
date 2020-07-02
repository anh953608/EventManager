import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ImageBackground, View} from 'react-native';
import utils from '../../utils';
import styleRoot from '../../assets/style';
import Image from '../../utils/Images';
import {Input, Button, Text, Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const style = StyleSheet.create({
  v_icon_fingerprint: {
    width: 50,
    height: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 0,
    elevation: 2,
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    borderRadius: 100,
    backgroundColor: utils.Theme.COLORS.WHITE,
  },
});

interface Props {
  navigation: any;
  mp_state: any;
  onHandleLogin: any;
}
class Login extends Component<Props> {
  state: {
    username: string;
    password: string;
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onChangeTxt(text: any, type: any) {
    switch (type) {
      case 1:
        this.setState({username: text});
        break;
      case 2:
        this.setState({password: text});
        break;
      default:
        break;
    }
  }

  onLogin() {
    this.props.onHandleLogin({
      username: this.state.username,
      password: this.state.password,
    });
  }

  onRedirectForgotPass() {
    this.props.navigation.navigate(utils.Constants.FORGOT_PASS);
  }

  onRedirectChangePass() {
    this.props.navigation.navigate(utils.Constants.CHANGE_PASS);
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <ImageBackground source={Image.Bgr} style={styleRoot.v_image_bgr}>
          <SafeAreaView style={styleRoot.v_content_l_c_f}>
            <View style={styleRoot.v_header_l_c_f}>
              <Text style={styleRoot.v_text_header}>
                ログイン
              </Text>
            </View>
            <View style={styleRoot.v_body_l_c_f}>
              <Input
                containerStyle={styleRoot.v_text_input_l_c_f}
                inputContainerStyle={styleRoot.v_input_l_c_f}
                placeholder="ユーザID ( Email)"
                placeholderTextColor="gray"
                leftIcon={
                  <Icon
                    style={styleRoot.v_mgr__r10}
                    name="user"
                    size={24}
                    color="gray"
                    type="font-awesome"
                  />
                }
                onChangeText={(text) => this.onChangeTxt(text, 1)}
              />
              <Input
                containerStyle={styleRoot.v_text_input_l_c_f}
                inputContainerStyle={styleRoot.v_input_l_c_f}
                placeholder="パースワード"
                secureTextEntry={true}
                placeholderTextColor="gray"
                leftIcon={
                  <Icon
                    style={styleRoot.v_mgr__r10}
                    name="lock"
                    size={24}
                    color="gray"
                    type="font-awesome"
                  />
                }
                errorMessage={
                  this.props.mp_state.error
                    ? 'The account or password is incorrect'
                    : ''
                }
                errorStyle={styleRoot.v_mgr__al10}
                onChangeText={(text) => this.onChangeTxt(text, 2)}
              />
              <Button
                loading={this.props.mp_state.is_loading}
                containerStyle={styleRoot.v_btn_l_c_f}
                buttonStyle={[styleRoot.v_btn_style]}
                titleStyle={styleRoot.v_font__w700}
                title="ログイン"
                type="solid"
                onPress={() => {
                  this.onLogin();
                }}
              />
              <Button
                titleStyle={styleRoot.v_color_default}
                containerStyle={style.v_icon_fingerprint}
                buttonStyle={style.v_icon_fingerprint}
                icon={{
                  size: 40,
                  name: 'fingerprint',
                  type: 'MaterialIcons',
                  color: utils.Theme.COLORS.ORANGES,
                }}
                onPress={() => {}}
              />
              <Text
                style={[
                  styleRoot.v_text_c_f,
                  styleRoot.v_mgr_b10,
                  styleRoot.v_mgr_t30,
                ]}
                onPress={() => {
                  this.onRedirectForgotPass();
                }}>
                パスワードをお忘れの方
              </Text>
              <Text
                style={styleRoot.v_text_c_f}
                onPress={() => {
                  this.onRedirectChangePass();
                }}>
                パスワード変更
              </Text>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }
}

export default Login;
