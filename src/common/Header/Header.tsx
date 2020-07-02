import React from "react";
import { Header as HeaderElement, Icon, Button } from "react-native-elements";
import styleRoot from "../../assets/style";
import utils from "../../utils";
import { View, StyleSheet } from "react-native";

interface Props {
  screenDescription: any;
  title?: string;
  bgColor?: string;
  bgTitleColor?: string;
  backBtn?: true;
  headerStore?: any;
  onSetHeaderTitle?: any;
  navigation?: any;
}
const style = StyleSheet.create({
  qr_profile: {
    flexDirection: "row",
  },
  qr_user_name: {
    color: utils.Theme.COLORS.WHITE,
    fontSize: 16,
  },
  qr_heard: {
    backgroundColor: utils.Theme.COLORS.PRIMARY_B,
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 45,
    paddingTop: 0,
  },
});
class Header extends React.Component<Props> {
  state: {
    isShowBackBtn: boolean;
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      isShowBackBtn: false,
    };
  }
  UNSAFE_componentWillMount = () => {
    const { scene } = this.props.screenDescription;
    switch (scene.descriptor.options.headerTitle) {
      case utils.Constants.EVENTS_LIST:
      case utils.Constants.NOTICES_LIST:
        this.props.onSetHeaderTitle({
          header_title: scene.descriptor.options.headerTitle,
        });
        break;
      default:
        break;
    }
  };
  onGoBack() {
    const { navigation } = this.props.screenDescription;
    navigation.goBack();
  }
  goToProfile() {
    const { navigation } = this.props.screenDescription;
    navigation.navigate(utils.Constants.PROFILE_NAV)
  }

  onHandleMore() {}

  onHideDialog() {}

  renderBtnBack() {
    let result: JSX.Element | {};
    const { scene } = this.props.screenDescription;
    switch (scene.descriptor.options.headerTitle) {
      case utils.Constants.EVENTS_LIST:
      case utils.Constants.NOTICES_LIST:
        this.state.isShowBackBtn = false;
        break;
      case utils.Constants.NOTICES_DETAILS:
      case utils.Constants.QR_CODE_READING:
      case utils.Constants.EVENT_EDITING:
      case utils.Constants.EVENT_REGISTRATION:
      case utils.Constants.PROFILE:
        this.state.isShowBackBtn = true;
        break;
      default:
        this.state.isShowBackBtn = false;
        break;
    }

    result = this.state.isShowBackBtn ? (
      <Button
        titleStyle={styleRoot.v_color_default}
        containerStyle={[styleRoot.qr_btn_circle_back]}
        buttonStyle={[styleRoot.qr_btn_circle_back]}
        icon={{
          size: 30,
          name: "angle-left",
          type: "font-awesome",
          color: utils.Theme.COLORS.WHITE,
        }}
        onPress={() => {
          this.onGoBack();
        }}
      />
    ) : (
      {}
    );
    return result;
  }

  renderProfile() {
    return (
      <View style={style.qr_profile}>
        <Button
          title={this.props.headerStore.name}
          type="clear"
          icon={
            <Icon
              style={styleRoot.v_font__w700}
              name="user-circle"
              type="font-awesome"
              color="white"
            />
          }
          buttonStyle={{ width: 100 }}
          titleStyle={style.qr_user_name}
          onPress={() => this.goToProfile()}
        />
      </View>
    );
  }

  render() {
    return (
      <HeaderElement
        containerStyle={style.qr_heard}
        leftComponent={this.renderBtnBack()}
        rightComponent={this.renderProfile()}
        rightContainerStyle={{ flex: 1, width: 400 }}
      />
    );
  }
}

export default Header;
