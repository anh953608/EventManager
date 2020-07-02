import React from 'react';
import {StyleSheet, SafeAreaView, ImageBackground, View} from 'react-native';
import {Button, Text, Input, Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styleRoot from '../../assets/style';
import utils from '../../utils';
import Image from '../../utils/Images';

interface Props {
  navigation: any;
}

class ForgotPass extends React.Component<Props> {
  onRedirectLogin() {
    this.props.navigation.navigate(utils.Constants.LOGIN);
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <ImageBackground source={Image.Bgr} style={styleRoot.v_image_bgr}>
          <View style={styleRoot.v_back_left}>
            <Button
              titleStyle={styleRoot.v_color_default}
              containerStyle={[styleRoot.qr_btn_circle]}
              buttonStyle={[styleRoot.qr_btn_circle]}
              icon={{
                size: 30,
                name: 'angle-left',
                type: 'font-awesome',
                color: utils.Theme.COLORS.WHITE,
              }}
              onPress={() => {
                this.onRedirectLogin();
              }}
            />
            <Text style={styleRoot.v_back_title}>ログイン</Text>
          </View>
          <SafeAreaView style={styleRoot.v_content_l_c_f}>
            <View style={styleRoot.v_header_l_c_f}>
              <Text style={styleRoot.v_text_header}>
                パスワードをお忘れの方
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
                    style={styleRoot.v_font__w700}
                    name="envelope"
                    type="font-awesome"
                    size={24}
                    color="gray"
                  />
                }
              />
              <Button
                containerStyle={styleRoot.v_btn_l_c_f}
                buttonStyle={styleRoot.v_btn_style}
                title="送信"
                type="solid"
              />
            </View>
          </SafeAreaView>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }
}

export default ForgotPass;
