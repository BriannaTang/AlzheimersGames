import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Underscore extends Component {
  render() {
    const underscore = '_';
    return(
      <View style={styles.container}/>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 5,
    backgroundColor: 'black',
  }
});


export default Underscore;
