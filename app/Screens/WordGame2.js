
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
  constructor(props) {
    super(props);
    this.state = {
      words: [
        'copper',
        'explain',
        'branch',
        'unite',
        'neat',
        'human',
        'educated',
        'note',
        'payment'
      ]
    };
  }

  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('WordGame3', { age: parseInt(this.state.text) });
  }
  render() {
    const word = Math.floor((Math.random()*this.state.words.length));
    return (
      <View style={styles.container}>
        <Text>
          {word}
        </Text>

        <Button title='Submit' onPress={this.handlePress}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#72ff98',
  }
});
