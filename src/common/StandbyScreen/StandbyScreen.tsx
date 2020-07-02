import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-elements";
import utils from "../../utils";
const styles = StyleSheet.create({
  root_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: utils.Theme.COLORS.BGR,
  },
  modal_view: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: utils.Theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img_overlay: {
    width: 150,
    height: 150,
  },
});
class StandbyScreen extends React.Component {
  render() {
    return (
      <View style={styles.root_view}>
        <Image
          style={styles.img_overlay}
          source={utils.Images.Logo}
        ></Image>
      </View>
    );
  }
}
export default StandbyScreen;
