import { Platform } from "react-native";
class Constants {
    public static readonly EVENTS_LIST: string = 'EventsList';
    public static readonly EVENT_REGISTRATION: string = 'EventRegistration';
    public static readonly QR_CODE_READING: string = 'QRCodeReading';
    public static readonly EVENT_EDITING: string = 'EventEditing';
    public static readonly NOTICES_LIST: string = 'NoticesList';
    public static readonly NOTICES_DETAILS: string = 'NoticesDetails';
    public static readonly LOGIN: string = 'Login';
    public static readonly FORGOT_PASS: string = 'ForgotPass';
    public static readonly CHANGE_PASS: string = 'ChangePass';
    public static readonly EVENTS: string = 'Events';
    public static readonly NOTICES: string = 'Notices';
    public static readonly PROFILE_NAV: string = 'ProfileNav';
    public static readonly EVENTS_LIST_MAIN: string = 'EventsListMain';
    public static readonly EVENT_DETAILS_MAIN: string = 'EventDetailsMain';
    public static readonly FOOTER_NAV: string = 'FooterNav';
    public static readonly PROFILE: string = 'Profile';
    public static readonly IS_OS: boolean = Platform.OS == "ios" ? true: false;
}
export default Constants;
