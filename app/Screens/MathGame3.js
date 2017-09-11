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
import BoardTile from '../Components/BoardTile';

export default class MathGame3 extends Component {

  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('Completed', { age: parseInt(this.state.text) });
  }

  render() {
    const { height, width } = Dimensions.get('window');
    const BoxSize = width * 0.25;
    return (

      <View style={{height: BoxSize * 4, width: BoxSize * 4, flexWrap: 'wrap', }}>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <Button title='Submit' onPress={this.handlePress}/>
      </View>

    )
  }
}
