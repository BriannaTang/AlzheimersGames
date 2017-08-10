
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight
} from 'react-native';


export default class WordGame2 extends Component {
  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('WordGame3', { age: parseInt(this.state.text) });
  }
  render() {
    return (
      <Button title='Submit' onPress={this.handlePress}/>
    )
  }
}
