import React, {Component} from 'react';
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
import FillInLetter from './FillInLetter';

class FillInWord extends Component {
  render() {
    const {word, lettersGuessed} = this.props;
    const letters = word.split('');
    return (
      <View style={styles.container}>
        {letters.map((letter, index) =>
          <FillInLetter
            isLetterGuessed={lettersGuessed.includes(letter.toUpperCase())}
            letter={letter}
            key={index}
          />
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});


export default FillInWord;
