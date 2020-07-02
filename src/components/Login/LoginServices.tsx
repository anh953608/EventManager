import Api from '../../configs/configs-api';
import PathApi from '../../utils/PathApi';

const dataUser = [
  {
    id: '1',
    createdAt: '2020-05-31T08:35:56.440Z',
    name: 'Reva',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/haruintesettden/128.jpg',
    access_token: '1GFW03YQU3AH8AD1FRADK3UMGVEAK',
    refresh_token: '1SOSZVBE9BKF0NW2RGDPGIGODQF8DJ7Y',
    username: 'anhnq1',
    password: '123456',
  },
  {
    id: '2',
    createdAt: '2020-05-30T16:31:23.389Z',
    name: 'Sage',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jffgrdnr/128.jpg',
    access_token: '340QZUTRAW9EM2QBQ2KOHW3COJ5P',
    refresh_token: '1DZIHE2IDKFEI63R99TCUYD9B0B1E42F',
    username: 'phuoclh',
    password: '123456',
  },
  {
    id: '3',
    createdAt: '2020-05-30T23:55:04.110Z',
    name: 'Jerad',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/embrcecreations/128.jpg',
    access_token: '39H650XRIOM3F2JNWNYSL5ZZQDPR',
    refresh_token: '30SUS4J0IVYA3BGSVKTQ83U8OQPZAI09',
    username: 'hoahd',
    password: '123456',
  },
  {
    id: '4',
    createdAt: '2020-05-30T23:07:23.346Z',
    name: 'Rosamond',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/aroon_sharma/128.jpg',
    access_token: '395DCTM460JSFHCKMU05AUSTW23CDZO05U',
    refresh_token: '11R6SLNQTJF1POTVRB215G9P8G7',
    username: 'Javon87',
    password: '3hdSYR6Pc_l87Bb',
  },
  {
    id: '5',
    createdAt: '2020-05-31T05:42:28.964Z',
    name: 'Viviane',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ssbb_me/128.jpg',
    access_token: '1SSAYFXZU3ILVP64BP8R243NVN3W0CI',
    refresh_token: '1JZ1V1XSRMZ9WQP1HIB60LH4N4NA7X',
    username: 'Ian34',
    password: 'Y5ZIc9N9ABACuPQ',
  },
  {
    id: '6',
    createdAt: '2020-05-30T17:11:51.940Z',
    name: 'Lupe',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/constantx/128.jpg',
    access_token: '1GPH0SXYKMWZ3S4TPV7XWH8GHD4XQAUG',
    refresh_token: '116HKHYC9CQCBPV1NQTJTMOP5FF6MFLD',
    username: 'Amber_Morar',
    password: 'Ex0d4rFyCGlm9dH',
  },
  {
    id: '7',
    createdAt: '2020-05-31T07:16:09.861Z',
    name: 'Hulda',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kosmar/128.jpg',
    access_token: '1UUNENPW9867WV7TLAFOHD5CY24I',
    refresh_token: '1SXBEBDMYRGDEAIL7K9TKOUSSZLJ3T5D',
    username: 'Rudy_Watsica81',
    password: 'qsFdMq2LctpGbEI',
  },
  {
    id: '8',
    createdAt: '2020-05-31T00:05:22.821Z',
    name: 'Janae',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ceekaytweet/128.jpg',
    access_token: '1EKYKVV3AWCMC4U5T1JF4L3S6B3N9NN',
    refresh_token: '3V153Y92SNANGXICDY9N0H1EE9I',
    username: 'Troy23',
    password: 'idnZzVJOfXEq73y',
  },
  {
    id: '9',
    createdAt: '2020-05-30T17:33:06.442Z',
    name: 'Lesley',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/lmjabreu/128.jpg',
    access_token: '34DOIB53T2MOPLR1O90IK7OHTIW4OL',
    refresh_token: '166S0EABB7USMKQ64W3DBTAAZBW',
    username: 'Araceli.Prosacco97',
    password: 'ukOFTmsnGT8QZim',
  },
  {
    id: '10',
    createdAt: '2020-05-31T09:17:31.459Z',
    name: 'Noe',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vonachoo/128.jpg',
    access_token: '1X164Z4R1VLTJK6TNE5BXU2GLT70',
    refresh_token: '1OT7FGO43L1IYYDU9QKPH5V16XDK',
    username: 'Alia56',
    password: '1LBMu3e0MCLn1b_',
  },
  {
    id: '11',
    createdAt: '2020-05-30T17:29:39.198Z',
    name: 'Vernie',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/toddrew/128.jpg',
    access_token: '130BNFFW9YXPRS4QFF77TFL2YXMA',
    refresh_token: '35WZ5XXA4FPHRSXAAEJW3YUIWULO2D5G0I',
    username: 'Jo51',
    password: 'GCvp1AwiVjDTCVm',
  },
  {
    id: '12',
    createdAt: '2020-05-30T15:34:21.607Z',
    name: 'Vladimir',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/_victa/128.jpg',
    access_token: '1RWAVYHJ11E7FMSZUD77UD12KY6KJ1X',
    refresh_token: '1PFVW9OYOONBPXMV4R3Q6IT6TZ8663UXZB',
    username: 'Chase.Olson',
    password: 'akJMVZdbgQaJKcL',
  },
  {
    id: '13',
    createdAt: '2020-05-30T23:36:48.991Z',
    name: 'Laurine',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/robinlayfield/128.jpg',
    access_token: '3L5RLNJDKQFLTYT7UZ9PA687VVYQO01P40',
    refresh_token: '3DPUU0O36Q55NATTI4FB7XR4PGGU5H51V',
    username: 'Johanna25',
    password: 'PjI1CQtbmhKWPEr',
  },
  {
    id: '14',
    createdAt: '2020-05-31T05:31:43.220Z',
    name: 'Donnell',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/seyedhossein1/128.jpg',
    access_token: '32D8OHF6K3P9YZ36A0BB0YE6E4T',
    refresh_token: '1LJUIY0SQBXGZR8MOG8FO9DB7G1KBAY',
    username: 'Cristopher75',
    password: 'V4ADlIL3Z2yxDDQ',
  },
  {
    id: '15',
    createdAt: '2020-05-30T16:11:29.803Z',
    name: 'Laurie',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/enricocicconi/128.jpg',
    access_token: '1LE6TM2KHB6JUU3G0F70CALRBRX',
    refresh_token: '3KKF6G3UHIILPQ5O5PY38ZQY7JE1ZEXU',
    username: 'Tracey.Kilback0',
    password: '39Wdpf_eUA7FByV',
  },
  {
    id: '16',
    createdAt: '2020-05-30T16:00:12.408Z',
    name: 'Garrett',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jervo/128.jpg',
    access_token: '36ULYAVJYN6SMXUNNXMPORYHAC1QWSV',
    refresh_token: '140GZGP7MNA6QKU609ACX4XYAF1CT0K',
    username: 'Kailyn.Brekke',
    password: 'NV7k_d4L_Du44MX',
  },
  {
    id: '17',
    createdAt: '2020-05-31T05:03:11.221Z',
    name: 'Franz',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/yehudab/128.jpg',
    access_token: '3FFQGKFWI68IXL8ABZNEQBLD6D5B8AYJ',
    refresh_token: '1DV7NI1BTJD8TVK0QYASF4KU0AXUGKS',
    username: 'Ruby48',
    password: '0KcLmHUScLt5vHo',
  },
  {
    id: '18',
    createdAt: '2020-05-30T18:40:50.944Z',
    name: 'Tillman',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg',
    access_token: '3AJJAZ27LHVPDRRO4X1JC6IIH3C',
    refresh_token: '33RBPAFIUPKN2S8GDD039EUYLKP',
    username: 'Mellie.Gleichner',
    password: 'UDVp2ZbWxsOSj60',
  },
  {
    id: '19',
    createdAt: '2020-05-31T09:59:32.303Z',
    name: 'Vada',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/enricocicconi/128.jpg',
    access_token: '3G7OO6NM6GBBEUN7PLJ9DCP1O0FHN4RYW',
    refresh_token: '3SFNY4DLDM739KHCRRK61PSWP497WC',
    username: 'Claudie.Harvey',
    password: '5JppwOhBt8qnhFa',
  },
  {
    id: '20',
    createdAt: '2020-05-30T17:40:58.606Z',
    name: 'Herman',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ponchomendivil/128.jpg',
    access_token: '1YCKUEMWXPJDMDSCZQXD9SVW8JM1VIU',
    refresh_token: '33TO286Q6RI5MEQRVRXCZ7T2CIFTAL',
    username: 'Felicia.Fadel',
    password: '5PUA5DpF6gmRrKU',
  },
];
class LoginServices {
  login(username: any, password: any) {
    const data = dataUser.find(item => {
      return item.username == username && item.password == password;
    });
    return data;
    // return Api.get(PathApi.USER.concat('/1')).then((res: any) => {
    //   return res.data;
    // });
    // return Api.post(PathApi.AUTH_TOKEN, qs.stringify(data)).then((res: any) => {
    //     console.log(res);
    //     return res.data;
    // });
  }
}

export default LoginServices;
