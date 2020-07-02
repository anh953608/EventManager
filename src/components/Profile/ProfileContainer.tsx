import { connect } from "react-redux";
import LoginActions from './../Login/LoginActions';
import Profile from "./Profile";

const loginActions = new LoginActions()
const mapStateToProps = (state: any) => {
  return {
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogout: () => {
      dispatch(loginActions.logout())
    },
    redirectChangePass: (data: any) => {
    },
  };
};
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer;
