import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styleRoot from "../../assets/style";
import utils from "../../utils";

const { height } = Dimensions.get("window");
const styleSheet = StyleSheet.create({
  qr_notice: {
    marginTop: 40,
    marginHorizontal: 10,
    flexDirection: "column",
  },
  qr_notice_title: {
    minHeight: 40,
    padding: 10,
    justifyContent: "center",
    backgroundColor: utils.Theme.COLORS.PRIMARY_B,
    borderRadius: 5,
    marginBottom: 15,
  },
  qr_notice_content: {
    backgroundColor: utils.Theme.COLORS.PRIMARY_B,
    minHeight: 300,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  qr_notice_text: {
    color: utils.Theme.COLORS.WHITE,
  },
});

interface Props {
  navigation: any;
  notice: any;
}
class NoticesDetails extends React.Component<Props> {
  date: string;
  constructor(props: Props) {
    super(props);
    this.date = utils.DataUtils.formatDateTime(this.props.notice.createdAt);
  }
  render() {
    return (
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={styleRoot.qr}>
        <SafeAreaView style={[styleRoot.qr_main]}>
        <View style={styleRoot.qr_header_screen}>
          <View style={[styleRoot.qr_fl1]}>
            <Text style={styleRoot.qr_title_screen}>おお知らせの詳細</Text>
          </View>
        </View>
        <View style={styleSheet.qr_notice}>
          <View style={styleSheet.qr_notice_title}>
            <Text style={styleRoot.qr_white_text}>
            { `${this.date} ${this.props.notice.title}`}
            </Text>
          </View>
          <View style={styleSheet.qr_notice_content}>
            <Text style={styleRoot.qr_white_text}>
            {this.props.notice.content}
            </Text>
          </View>
        </View>
      </SafeAreaView>
      </KeyboardAwareScrollView>
    );
  }
}
export default NoticesDetails;
