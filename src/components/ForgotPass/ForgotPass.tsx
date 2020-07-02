import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Button, Text, Input, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styleRoot from "../../assets/style";
import utils from "../../utils";

const style = StyleSheet.create({});
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
        <SafeAreaView style={styleRoot.v_content_l_c_f}>
          <Button
            titleStyle={styleRoot.v_color_default}
            containerStyle={[styleRoot.qr_btn_circle, styleRoot.qr_back_left]}
            buttonStyle={[styleRoot.qr_btn_circle]}
            icon={{
              size: 35,
              name: "angle-left",
              type: "font-awesome",
              color: utils.Theme.COLORS.DEFAULT,
            }}
            onPress={() => {
              this.onRedirectLogin();
            }}
          />
          <Text h4 style={styleRoot.v_header_l_c_f}>
            パスワードをお忘れの方
          </Text>
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
        </SafeAreaView>
      </KeyboardAwareScrollView>
    );
  }
}

export default ForgotPass;
