import React, {Component} from 'react';
import { Text, View,StyleSheet } from 'react-native';
import Key from './Key'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letters = alphabet.split('');

class Keyboard extends Component {
  render() {
    const { lettersGuessed, onLetterGuessed } = this.props;
    console.log(lettersGuessed)
    return(
      <View style={styles.container}>
        {letters.map((letter, index) =>
          <Key
            letter={letter}
            key={index}
            isLetterGuessed={lettersGuessed.includes(letter)}
            onPress={() => {
              onLetterGuessed(letter)
            }}
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
    flexWrap: 'wrap',
    width: 250,
    justifyContent: 'space-around',

  }
});

export default Keyboard;
