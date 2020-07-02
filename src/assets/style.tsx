import {Dimensions, StyleSheet} from 'react-native';
import utils from '../utils';

const {width, height} = Dimensions.get('window');
const styleRoot = StyleSheet.create({
  v_header_l_c_f: {
    width: '80%',
    marginBottom: 35,
    textAlign: 'center',
    color: utils.Theme.COLORS.DEFAULT,
  },
  v_content_l_c_f: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height - 25,
    backgroundColor: utils.Theme.COLORS.BGR,
  },
  v_text_input_l_c_f: {
    height: 50,
    width: '80%',
    minHeight: 30,
    marginBottom: 30,
    borderRadius: 5,
    backgroundColor: utils.Theme.COLORS.WHITE,
  },
  v_input_l_c_f: {
    borderBottomWidth: 0,
  },
  v_text_c_f: {
    fontSize: 15,
    fontWeight: '700',
    color: utils.Theme.COLORS.PRIMARY_B,
  },
  v_btn_l_c_f: {
    width: '80%',
    marginBottom: 20,
    borderRadius: 5,
  },
  v_btn_style: {
    backgroundColor: utils.Theme.COLORS.PRIMARY_B,
    borderRadius: 5,
    height: 50,
  },
  qr: {
    backgroundColor: utils.Theme.COLORS.BGR,
  },
  qr_main: {
    flexDirection: 'column',
    backgroundColor: utils.Theme.COLORS.BGR,
    alignItems: 'stretch',
    height: '100%',
  },
  qr_bgr_img: {
    opacity: 0.2,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  qr_container_center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qr_container: {
    flexDirection: 'row',
    height: 45,
    backgroundColor: utils.Theme.COLORS.WHITE,
  },
  v_font__w700: {
    fontWeight: '700',
  },
  qr_btn_circle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: utils.Theme.COLORS.TRANSPARENT,
  },
  qr_btn_circle_back: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: utils.Theme.COLORS.TRANSPARENT,
  },
  qr_btn_footer: {
    flex: 1,
    justifyContent: 'center',
  },
  qr_title_card: {
    textAlign: 'left',
    marginBottom: 5,
  },
  qr_text_input: {
    height: 40,
    minHeight: 30,
    marginBottom: 25,
  },
  qr_icon__right: {
    marginTop: 0,
    marginBottom: 0,
  },
  qr_container_input: {
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: utils.Theme.COLORS.PRIMARY_B,
    backgroundColor: utils.Theme.COLORS.WHITE,
  },
  qr_input: {
    fontSize: 13,
    marginLeft: 5,
  },
  qr_input_align_center: {
    textAlign: 'center',
  },
  qr_input_label: {
    fontSize: 13,
    fontWeight: '600',
  },
  qr_view_picker: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#6361612e',
    width: '100%',
    height: '100%',
  },
  qr_container_picker: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 5,
  },
  qr_card: {
    padding: 30,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#E6F7D1',
  },
  v_color_default: {
    color: utils.Theme.COLORS.DEFAULT,
  },
  qr_fZ16: {
    fontSize: 16,
  },
  qr_fZ13: {
    fontSize: 13,
  },
  qr_fZ14: {
    fontSize: 14,
  },
  qr_btn_container_cm: {
    height: 40,
  },
  qr_btn_cm: {
    backgroundColor: utils.Theme.COLORS.ORANGES,
    height: 40,
    borderRadius: 50,
  },
  qr_btn_cmPd: {
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  qr_icon: {
    fontSize: 20,
  },
  qr_back_left: {
    top: 30,
    position: 'absolute',
    left: 10,
  },
  qr_fl1: {
    flex: 1,
  },
  qr_fl2: {
    flex: 2,
  },
  qr_title_screen: {
    height: 40,
    textAlignVertical: 'center',
    fontSize: 18,
    color: utils.Theme.COLORS.DEFAULT,
    fontWeight: '700',
  },
  qr_header_screen: {
    flex: 1,
    minHeight: 60,
    maxHeight: 60,
    padding: 10,
    borderBottomWidth: 0.5,
    flexDirection: 'column',
    backgroundColor: utils.Theme.COLORS.WHITE,
    borderBottomColor: utils.Theme.COLORS.BGR,
  },
  qr_fl_center: {
    justifyContent: 'center',
  },
  qr_card_event: {
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    elevation: 1,
    marginBottom: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    borderColor: utils.Theme.COLORS.WHITE,
  },
  qr_card_search: {
    flex: 5,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#A3CFCD',
    margin: 10,
    shadowColor: 'black',
  },
  qr_card_content: {
    height: 30,
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    justifyContent: 'center',
    borderColor: utils.Theme.COLORS.MUTED,
    borderWidth: 1,
  },
  qr_lb_text: {
    height: 42,
    flex: 2,
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: utils.Theme.COLORS.PRIMARY_B,
    backgroundColor: utils.Theme.COLORS.PRIMARY_B,
    color: utils.Theme.COLORS.WHITE,
  },
  qr_lb_text_icon: {
    paddingLeft: 10,
    color: utils.Theme.COLORS.WHITE,
  },
  qr_lb_icon_input: {
    marginTop: 0,
    marginLeft: -10,
    marginBottom: 0,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    alignItems: 'flex-start',
    backgroundColor: utils.Theme.COLORS.PRIMARY_B,
  },
  qr_bgr__disable: {
    backgroundColor: utils.Theme.COLORS.INPUT,
    borderColor: utils.Theme.COLORS.INPUT_DISABLE,
  },
  qr_justifyContent__center: {
    justifyContent: 'space-between',
  },
  qr_flD_R: {
    flexDirection: 'row',
  },
  qr_flD_C: {
    flexDirection: 'column',
  },
  qr_alignItemC: {
    alignItems: 'center',
  },
  qr_white_text: {
    color: utils.Theme.COLORS.WHITE,
  },
  qr_pd__tb12: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  qr_mgr__l5: {
    marginLeft: 5,
  },
  qr_mgr__l10: {
    marginLeft: 10,
  },
  v_mgr__r10: {
    marginRight: 10,
  },
  qr_mgr__r5: {
    marginRight: 5,
  },
  qr_mgr_b3: {
    marginBottom: 3,
  },
  qr_mgr_b2: {
    marginBottom: 2,
  },
  qr_mgr_b5: {
    marginBottom: 5,
  },
  qr_mgr_b7: {
    marginBottom: 7,
  },
  v_mgr_b10: {
    marginBottom: 10,
  },
  v_mgr_t30: {
    marginTop: 30,
  },
  qr_mgr_t10: {
    marginTop: 10,
  },
  qr_mgr_t0: {
    marginTop: 0,
  },
  qr_mgr_b0: {
    marginBottom: 0,
  },
  qr_mgr_t5: {
    marginTop: 5,
  },
  v_mgr__al10: {
    marginLeft: -10,
  },
  qr_pd__l75: {
    paddingLeft: 75,
  },
  qr_pd__l105: {
    paddingLeft: 105,
  },
  qr_pd__10: {
    padding: 10,
  },
  qr_pd__t0: {
    paddingTop: 0,
  },
});
export default styleRoot;
