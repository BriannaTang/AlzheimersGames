import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';


export default class ChooseGameScreen extends Component {
  static navigationOptions = {
    title: 'Choose which game',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          math games:
        </Text>
        <TouchableOpacity onPress={ () => {navigate('MathGame1')}}>
            <Image
              source={{ uri: 'file:///Users/brianna/Desktop/Screen%20Shot%202017-07-22%20at%206.33.44%20PM.png'}}
              style={{ height: 120, width: 120 }}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => {navigate('WordGame1')}}>
          <Image
            source={{ uri: 'file:///Users/brianna/Desktop/Screen%20Shot%202017-07-22%20at%206.33.09%20PM.png' }}
            style={{ height: 120, width: 120 }}
          />
        </TouchableOpacity>
        <Text style={styles.instructions}>
          word games:
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f9c459',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 20,

  },
});
