import React from "react";
import { Dimensions, FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { ListItem, Text } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styleRoot from "../../assets/style";
import utils from "../../utils";

const { height } = Dimensions.get("window");
const style = StyleSheet.create({
  qr_notice__list: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    flex: 30,
  },
  qr_notice__item: {
    backgroundColor: utils.Theme.COLORS.WHITE,
  },
  qr_notice__title: {
    color: utils.Theme.COLORS.DEFAULT,
  },
});

const Item = ({ title }: any) => {
  return (
    <ListItem
      title={title}
      bottomDivider
      chevron
      contentContainerStyle={{}}
      titleStyle={style.qr_notice__title}
      containerStyle={style.qr_notice__item}
    />
  );
};

interface Props {
  navigation: any;
  onGetNotices: any;
  onGetNoticeDetail: any;
  notices_reducer: any;
}
class NoticesList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.onGetNotices();
  }
  _onPress(item: any) {
    this.props.onGetNoticeDetail(item);
    this.props.navigation.navigate(utils.Constants.NOTICES_DETAILS);
  }
  render() {
    return (
      <SafeAreaView style={[styleRoot.qr_main]}>
        <View style={styleRoot.qr_header_screen}>
          <View style={[styleRoot.qr_fl1]}>
            <Text style={styleRoot.qr_title_screen}>おお知らせ</Text>
          </View>
        </View>
        <View style={style.qr_notice__list}>
          <FlatList
            data={this.props.notices_reducer.data_notices}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                key={item["id"]}
                onPress={() => this._onPress(item)}
              >
                <Item title={item["title"]} />
              </TouchableWithoutFeedback>
            )}
          ></FlatList>
        </View>
      </SafeAreaView>
    );
  }
}
export default NoticesList;
