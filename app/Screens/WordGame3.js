import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Dimensions,
  Button
} from 'react-native';

export default class WordGame3 extends Component {
  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('Completed', { age: parseInt(this.state.text) });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Submit' onPress={this.handlePress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a7bc1',
  },
});
