
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import AgeTextInput from '../Components/AgeTextInput';


export default class AgeScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('ChooseGame', { age: parseInt(this.state.text) });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the Neuron Cloud!
        </Text>
        <Text style={styles.instructions}>
          Enter your age below:
        </Text>
        <AgeTextInput
          text={this.state.text}
          onChangeText={(text) => {this.setState({text:text})}}
        />
        <Button title='Submit' onPress={this.handlePress}/>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#EF94D6',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 20,

  },
});
