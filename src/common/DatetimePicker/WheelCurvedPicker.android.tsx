import React from 'react';
import PropTypes, { any } from 'prop-types';
import {ViewPropTypes , ColorPropType, requireNativeComponent} from 'react-native';

const defaultItemStyle = {color: 'white', fontSize: 26};
interface Props {
  data: any;
  textColor?: string;
  textSize?: number;
  itemStyle?: object;
  itemSpace?: number;
  onValueChange?: any;
  selectedValue?: any;
  selectedIndex?: number;
}
class WheelCurvedPicker extends React.Component<Props> {
  static Item: typeof Item;
  state: {
    items: any;
    textColor: string;
    textSize: number;
    selectedIndex: any;
  }
  constructor(props: Props) {
    super(props);
    this.state = this._stateFromProps(props);
  }

  static defaultProps = {
    itemStyle: {color: 'white', fontSize: 26},
    itemSpace: 20,
  };

  componentWillReceiveProps(props: any) {
    this.setState(this._stateFromProps(props));
  }

  _stateFromProps(props: any) {
    let selectedIndex = 0;
    const items: { value: any; label: any; }[] = [];
    React.Children.forEach(props.children, function(child, index) {
      if (child.props.value === props.selectedValue) {
        selectedIndex = index;
      }
      items.push({value: child.props.value, label: child.props.label});
    });

    let textSize = props.itemStyle.fontSize;
    let textColor = props.itemStyle.color;

    return {selectedIndex, items, textSize, textColor};
  }

  _onValueChange = (e: any) => {
    if (this.props.onValueChange) {
      this.props.onValueChange(e.nativeEvent.data);
    }
  };

  render() {
    return (
      <WheelCurvedPickerNative
        {...this.props}
        onValueChange={this._onValueChange}
        data={this.state.items}
        textColor={this.state.textColor}
        textSize={this.state.textSize}
        selectedIndex={parseInt(this.state.selectedIndex)}
      />
    );
  }
}
const WheelCurvedPickerNative = requireNativeComponent('WheelCurvedPicker');

interface PropsItem {
  value: any;
  label: string;
}
class Item extends React.Component<PropsItem> {
  constructor(props: PropsItem) {
    super(props);
  }
  render() {
    return null;
  }
}

WheelCurvedPicker.Item = Item;

export default WheelCurvedPicker;
