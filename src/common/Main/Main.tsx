import React from 'react';
import {BackHandler, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Footer from '../Footer/FooterContainer';
import Header from '../Header/HeaderContainer';
import utils from '../../utils';
import Screen from '../../components/screen';
import StandbyScreen from '../StandbyScreen/StandbyScreen';
import RqPermission from '../RqPermission';

const STACK = createStackNavigator();
const FOOTER = createBottomTabNavigator();

const headerOption = (title: string) => {
  return {
    header: (prop: any) => <Header screenDescription={prop} />,
    headerTitle: title,
  };
};
const EventsList = (prop: any) => {
  return (
    <STACK.Navigator mode="card" headerMode="screen">
      <STACK.Screen
        options={headerOption(utils.Constants.EVENTS_LIST)}
        name={utils.Constants.EVENTS_LIST}
        component={Screen.EventsList}
      />
      <STACK.Screen
        options={headerOption(utils.Constants.EVENT_REGISTRATION)}
        name={utils.Constants.EVENT_REGISTRATION}
        component={Screen.EventRegistration}
      />
    </STACK.Navigator>
  );
};
const EventsEdit = (prop: any) => {
  return (
    <STACK.Navigator mode="card" headerMode="screen">
      <STACK.Screen
        options={headerOption(utils.Constants.EVENT_EDITING)}
        name={utils.Constants.EVENT_EDITING}
        component={Screen.EventEditing}
      />
      <STACK.Screen
        options={headerOption(utils.Constants.QR_CODE_READING)}
        name={utils.Constants.QR_CODE_READING}
        component={Screen.QRCodeReading}
      />
    </STACK.Navigator>
  );
};
const Events = (prop: any) => {
  return (
    <STACK.Navigator headerMode="none" mode="card">
      <STACK.Screen
        name={utils.Constants.EVENTS_LIST_MAIN}
        component={EventsList}
      />
      <STACK.Screen
        name={utils.Constants.EVENT_DETAILS_MAIN}
        component={EventsEdit}
      />
    </STACK.Navigator>
  );
};
const NoticesList = (prop: any) => {
  return (
    <STACK.Navigator mode="card" headerMode="screen">
      <STACK.Screen
        options={headerOption(utils.Constants.NOTICES_LIST)}
        name={utils.Constants.NOTICES_LIST}
        component={Screen.NoticesList}
      />
      <STACK.Screen
        options={headerOption(utils.Constants.NOTICES_DETAILS)}
        name={utils.Constants.NOTICES_DETAILS}
        component={Screen.NoticesDetails}
      />
    </STACK.Navigator>
  );
};

const Profile = (prop: any) => {
  return (
    <STACK.Navigator mode="card" headerMode="screen">
      <STACK.Screen
        options={headerOption(utils.Constants.PROFILE)}
        name={utils.Constants.PROFILE}
        component={Screen.Profile}
      />
    </STACK.Navigator>
  );
};
const FooterNav = (props: any) => {
  return (
    <FOOTER.Navigator tabBar={props => <Footer {...props} />}>
      <FOOTER.Screen
        name={utils.Constants.EVENTS}
        component={Events}
        options={{
          tabBarLabel: 'トップ',
        }}
      />
      <FOOTER.Screen
        name={utils.Constants.NOTICES}
        component={NoticesList}
        options={{
          tabBarLabel: 'お知らせ',
        }}
      />
      <FOOTER.Screen
        name={utils.Constants.PROFILE_NAV}
        component={Profile}
        options={{
          tabBarLabel: utils.Constants.PROFILE_NAV,
        }}
      />
    </FOOTER.Navigator>
  );
};
interface Props {
  data_login?: any;
  data_header?: any;
  data_main?: any;
  onLoginSuccess?: any;
  onCloseStandbyScreen?: any;
}
class Main extends React.Component<Props> {
  backHandler: any;
  constructor(props: any) {
    super(props);
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (!this.props || !this.props.data_login || !this.props.data_login.is_login) {
        BackHandler.exitApp();
        return true;
      }
      if (
        this.props.data_header.header_title === utils.Constants.EVENTS_LIST ||
        this.props.data_header.header_title === utils.Constants.NOTICES_LIST
      ) {
        Alert.alert('', 'Are you sure you want to exit the application ?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
      }
      return true;
    });
    this.loadApp();
  }

  async loadApp() {
    try {
      let session = await AsyncStorage.getItem(utils.Constants.SESSION);
      if (session) {
        session = JSON.parse(session);
        this.props.onLoginSuccess(session);
      }
      RqPermission(() => {
        this.props.onCloseStandbyScreen();
      });
    } catch (error) {}
  }

  render() {
    return (
      <NavigationContainer>
        {this.props.data_main.flag_standby ? (
          <StandbyScreen />
        ) : !this.props.data_login.is_login ? (
          <STACK.Navigator headerMode="none" mode="card">
            <STACK.Screen
              name={utils.Constants.LOGIN}
              component={Screen.Login}
            />
            <STACK.Screen
              name={utils.Constants.FORGOT_PASS}
              component={Screen.ForgotPass}
            />
            <STACK.Screen
              name={utils.Constants.CHANGE_PASS}
              component={Screen.ChangePass}
            />
          </STACK.Navigator>
        ) : (
          <STACK.Navigator headerMode="none" mode="card">
            <STACK.Screen
              name={utils.Constants.FOOTER_NAV}
              component={FooterNav}
            />
          </STACK.Navigator>
        )}
      </NavigationContainer>
    );
  }
}
export default Main;
