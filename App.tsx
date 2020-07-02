import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Image} from 'react-native';
import store from './src/configs/configs-redux';
import Screen from './src/common/CommonScreen';
import SrcImages from './src/utils/Images';
interface Props {}
export default class App extends Component<Props> {
  state = {
    isLoadingComplete: false,
  };
  qrImage = [
    SrcImages.Logo,
    SrcImages.Error,
    SrcImages.Success,
    SrcImages.Loading,
  ];
  componentDidMount() {
    this.loadResources();
  }
  cacheImages(images: any[]) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      }
    });
  }
  async loadResources() {
    await this.onCacheResourcesAsync();
    this.setState({isLoadingComplete: true});
  }

  async onCacheResourcesAsync() {
    return Promise.all(this.cacheImages(this.qrImage));
  }

  render() {
    return (
      <Provider store={store}>
        <Screen.Main />
      </Provider>
    );
  }
}
