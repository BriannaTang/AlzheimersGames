import React, {Component} from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Letter from './Letter';

class Key extends Component {
  render() {
    const {letter,onPress, isLetterGuessed} = this.props;
    return(
      <TouchableOpacity 
        onPress={onPress} 
        style={styles.container}
      >
        <View>
          <Letter
            letter={isLetterGuessed ? ' ' : letter }
          />
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    minWidth: 30
  }
});



export default Key;
