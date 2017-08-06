import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Dimensions
} from 'react-native';

class BoardTile extends Component {
  render() {
    const { height, width } = Dimensions.get('window');
    const BoxSize = width * 0.25;
    const borderWidth = 1;
    const borderColor = 'black';
    const backgroundColor = 'white';
    return (
      <View style={{  height: BoxSize,
        width: BoxSize,
        borderWidth: borderWidth,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center' }}
      >
        {this.props.children}
      </View>
    )
  }
}
