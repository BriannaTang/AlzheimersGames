import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image
} from 'react-native';
import Underscore from '../Components/Underscore';
import FillInWord from '../Components/FillInWord';
import Keyboard from '../Components/Keyboard';
import hangmanImage1 from '../Resources/HangmanImage1.png';
import hangmanImage2 from '../Resources/HangmanImage2.png';
import hangmanImage3 from '../Resources/HangmanImage3.png';
import hangmanImage4 from '../Resources/HangmanImage4.png';
import hangmanImage5 from '../Resources/HangmanImage5.png';
import hangmanImage6 from '../Resources/HangmanImage6.png';
import hangmanImage7 from '../Resources/HangmanImage7.png';
import hangmanImage8 from '../Resources/HangmanImage8.png';
import hangmanImage9 from '../Resources/HangmanImage9.png';
import hangmanImage10 from '../Resources/HangmanImage10.png';
import hangmanImage11 from '../Resources/HangmanImage11.png';
import hangmanImage12 from '../Resources/HangmanImage12.png';
import hangmanImage13 from '../Resources/HangmanImage13.png';


/*
hangman
*/

const hangmanImages = [
  hangmanImage1,
  hangmanImage2,
  hangmanImage3,
  hangmanImage4,
  hangmanImage5,
  hangmanImage6,
  hangmanImage7,
  hangmanImage8,
  hangmanImage9,
  hangmanImage10,
  hangmanImage11,
  hangmanImage12,
  hangmanImage13,
]

const words = [
  'copper',
  'explain',
  'branch',
  'unite',
  'neat',
  'human',
  'educated',
  'note',
  'payment',
  'embrace',
  'utopia',
  'nowadays',
  'achievement',
  'plot',
  'chickens',
  'national',
  'history',
  'retain',
  'California',
  'standard',
  'deoxyribose',
  'nucleic',
  'acid',
  'ribose',
  'methionine',
  'remember',
  'believer',
  'memory',
  'asparagus',
]

export default class WordGame2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: words[Math.floor((Math.random() * words.length))],
      lettersGuessed: []
    };
    this.handleLetterGuessed = this.handleLetterGuessed.bind(this)
  }

  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('Win', { age: parseInt(this.state.text) });
  }

  handleLetterGuessed(letter) {
    let lettersGuessed = this.state.lettersGuessed.slice();
    lettersGuessed.push(letter.toUpperCase());
    this.setState({lettersGuessed: lettersGuessed})
  }

  render() {
    const { word, lettersGuessed } = this.state;
    const numLetters = word.length;
    const underscore = '_';
    const correctWord = word.split('');
    const lettersCorrectGuessed = [];
    const lettersIncorrectGuessed =[];

    for(let i=0;i< lettersGuessed.length;i++ ) {
      const index = word.indexOf(lettersGuessed[i]);
      const letter = lettersGuessed[i].toLowerCase();
      if(word.indexOf(letter) !== -1) {
        lettersCorrectGuessed.push(letter);
      }
      else {
        lettersIncorrectGuessed.push(letter);
      }
    }

    console.log('guessed', this.state.lettersGuessed);
    console.log('correct', lettersCorrectGuessed);
    console.log('incorrect', lettersIncorrectGuessed);
    return (
      <View style={styles.container}>
        <Image
          source={hangmanImages[lettersIncorrectGuessed.length]}
        />
        <FillInWord word={word} lettersGuessed={this.state.lettersGuessed}/>
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
