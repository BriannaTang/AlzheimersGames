import React, {Component} from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Letter from './Letter';

class Key extends Component {
  render() {
    const {letter,onPress, isLetterGuessed} = this.props;
    return(
      <TouchableOpacity onPress={onPress}>
        <View>
          <Letter
            letter={isLetterGuessed ? ' ' : letter }
          />
        </View>
      </TouchableOpacity>
    );
  }
}



export default Key;
