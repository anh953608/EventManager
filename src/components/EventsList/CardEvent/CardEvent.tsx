import React, {Component} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {Card, Text} from 'react-native-elements';
import styleRoot from '../../../assets/style';
import utils from '../../../utils';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
const style = StyleSheet.create({
  qr_text: {
    fontSize: 16,
  },
  qr_text_active: {
    color: utils.Theme.COLORS.WHITE,
  },
  qr_text_out: {
    color: utils.Theme.COLORS.DEFAULT,
  },
  qr_card_bgr_active: {
    backgroundColor: utils.Theme.COLORS.BGR_CARD_ACTIVE,
  },
  qr_card_bgr_out: {
    backgroundColor: utils.Theme.COLORS.BGR_CARD,
  },
  qr_card_active: {
    backgroundColor: utils.Theme.COLORS.SUCCESS,
    color: utils.Theme.COLORS.WHITE,
  },
  qr_card_out: {
    backgroundColor: utils.Theme.COLORS.BORDER,
    color: utils.Theme.COLORS.DEFAULT,
  },
});
interface Props {
  is_active: boolean;
  navigation?: any;
  data?: any;
  onSetDataDetails?: any;
}
class CardEvent extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  onRedirectEventEdit() {
    this.props.onSetDataDetails(this.props.data);
    this.props.navigation.navigate(utils.Constants.EVENT_DETAILS_MAIN);
  }
  render() {
    return (
      <View>
        <TouchableNativeFeedback
          onPress={() => {
            this.onRedirectEventEdit();
          }}>
          <Card
            containerStyle={[
              styleRoot.qr_card_event,
              this.props.is_active
                ? style.qr_card_bgr_active
                : style.qr_card_bgr_out,
            ]}>
            <View style={[styleRoot.qr_flD_R, styleRoot.qr_fl1]}>
              <View
                style={[
                  this.props.is_active
                    ? style.qr_card_active
                    : style.qr_card_out,
                  styleRoot.qr_fl2,
                  styleRoot.qr_card_content,
                ]}>
                <Text
                  style={[
                    style.qr_text,
                    this.props.is_active
                      ? style.qr_text_active
                      : style.qr_text_out,
                  ]}>
                  {utils.DataUtils.formatDateTime(this.props.data.time)}
                </Text>
              </View>
              <View
                style={[
                  this.props.is_active
                    ? style.qr_card_active
                    : style.qr_card_out,
                  styleRoot.qr_fl1,
                  styleRoot.qr_card_content,
                  styleRoot.qr_alignItemC,
                ]}>
                <Text
                  style={[
                    style.qr_text,
                    this.props.is_active
                      ? style.qr_text_active
                      : style.qr_text_out,
                  ]}>
                  {this.props.is_active ? 'オープン' : 'クローズ'}
                </Text>
              </View>
            </View>
            <View style={[styleRoot.qr_flD_R, styleRoot.qr_fl1]}>
              <View
                style={[
                  this.props.is_active
                    ? style.qr_card_active
                    : style.qr_card_out,
                  styleRoot.qr_fl1,
                  styleRoot.qr_card_content,
                ]}>
                <Text
                  numberOfLines={1}
                  style={[
                    style.qr_text,
                    this.props.is_active
                      ? style.qr_text_active
                      : style.qr_text_out,
                  ]}>
                  {this.props.data.venue_name}
                </Text>
              </View>
              <View
                style={[
                  this.props.is_active
                    ? style.qr_card_active
                    : style.qr_card_out,
                  styleRoot.qr_fl2,
                  styleRoot.qr_card_content,
                ]}>
                <Text
                  numberOfLines={1}
                  style={[
                    style.qr_text,
                    this.props.is_active
                      ? style.qr_text_active
                      : style.qr_text_out,
                  ]}>
                  {this.props.data.event_name}
                </Text>
              </View>
            </View>
          </Card>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default CardEvent;
