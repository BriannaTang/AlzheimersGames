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
import MathImage1 from '../Resources/MathImage1.png';
import WordImage1 from '../Resources/WordImage1.png';


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
        <TouchableOpacity onPress={ () => {navigate('MathGame1Instructions')}}>
          <Image
            source={MathImage1}
            style={{ height: 120, width: 120 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => {navigate('WordGame1Instructions')}}>
          <Image
            source={WordImage1}
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
