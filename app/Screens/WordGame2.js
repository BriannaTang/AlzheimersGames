
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
import Underscore from '../Components/Underscore';
import FillInWord from '../Components/FillInWord';
import Keyboard from '../Components/Keyboard';
/*
hangman
*/


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
      ],
      lettersGuessed: []
    };
    this.handleLetterGuessed = this.handleLetterGuessed.bind(this)
  }

  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('WordGame3', { age: parseInt(this.state.text) });
  }

  handleLetterGuessed(letter) {
    let lettersGuessed = this.state.lettersGuessed.slice();
    lettersGuessed.push(letter.toUpperCase());
    this.setState({lettersGuessed: lettersGuessed})
  }

  render() {
    const word = this.state.words[Math.floor((Math.random()*this.state.words.length))];
    const numLetters = word.length;
    const underscore = '_';
    return (
      <View style={styles.container}>
        <FillInWord word='hello' lettersGuessed={this.state.lettersGuessed}/>
        <Keyboard
          lettersGuessed={this.state.lettersGuessed}
          onLetterGuessed={this.handleLetterGuessed}
        />
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
