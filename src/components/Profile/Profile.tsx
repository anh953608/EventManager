import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage'
import styleRoot from '../../assets/style';
import utils from '../../utils';

const {height} = Dimensions.get('window');
const style = StyleSheet.create({
  qr_notice__list: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flex: 30,
  },
  qr_notice__item: {
    backgroundColor: utils.Theme.COLORS.WHITE,
  },
  qr_notice__title: {
    color: utils.Theme.COLORS.DEFAULT,
  },
});

interface Props {
  navigation: any;
  data_notices: any;
  onLogout: any;
}

const list = [
  {
    title: 'パスワードを変更する',
    icon: 'exchange',
    type: 'font-awesome',
  },
  {
    title: 'ログアウト',
    icon: 'power-off',
    type: 'font-awesome',
  },
];

class Profile extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  async onSelectItem(key: number) {
    switch (key) {
      case 0:
        break;
      case 1:
        await AsyncStorage.removeItem("session");
        this.props.onLogout();
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <SafeAreaView>
        {list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{name: item.icon, type: item.type}}
            bottomDivider
            onPress={e => {
              this.onSelectItem(i);
            }}
            chevron
          />
        ))}
      </SafeAreaView>
    );
  }
}

export default Profile;
