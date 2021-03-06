import React from "react";
import { Modal, StyleSheet, View, Text } from "react-native";

import utils from "../../utils"
const styles = StyleSheet.create({
  root_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: utils.Theme.COLORS.OP_WHITE,
  },
  modal_view:{
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: utils.Theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});

interface Props {
  mp_state: any;
  onHandleCloseEModal: any;
  onHandleCloseSModal: any;
}
class ESModalComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  renderModal(){
    let result: JSX.Element;
  }
  render() {
    return (
      <Modal animationType="fade" transparent={true} visible={this.props.mp_state.is_show}>
        <View style={styles.root_view}>
          <Text>{this.props.mp_state.message}</Text>
        </View>
      </Modal>
    );
  }
}
export default ESModalComponent;
