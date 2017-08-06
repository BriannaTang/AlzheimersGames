import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions
} from 'react-native';

class TouchableBoardTile extends Component {
  
  render() {
    const { height, width } = Dimensions.get('window');
    const BoxSize = width * 0.25;
    const borderWidth = 1;
    const borderColor = 'black';
    const backgroundColor = 'white';
    return (
      <TouchableOpacity style={{  height: BoxSize,
        width: BoxSize,
        borderWidth: borderWidth,
        borderColor: borderColor,
        backgroundColor: this.state.correctBorders[i],
        justifyContent: 'center',
        alignItems: 'center' }}
        onPress={()=>this.checkSymbol(i)}
      >
        {this.props.children}
      </TouchableOpacity>
    )
  }
}
