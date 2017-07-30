import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';



class TextButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: this.props.style.backgroundColor,
          padding: this.props.style.padding,
          paddingLeft: this.props.style.paddingLeft,
          paddingRight: this.props.style.paddingRight,
          margin: this.props.style.margin,
          borderWidth: this.props.style.borderWidth,
          borderColor: this.props.style.borderColor,
          borderRadius: this.props.style.borderRadius,
          height: this.props.style.height,
          width: this.props.style.width,
          shadowColor: this.props.style.shadowColor,
          shadowOpacity: this.props.style.shadowOpacity,
          shadowRadius: this.props.style.shadowRadius,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={this.props.onPress}
      >
        <Text
          style={{
            fontSize: this.props.style.fontSize,
            color: this.props.style.color,
          }}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default TextButton;
