import React, {Component} from 'react';
import { Text, StyleSheet } from 'react-native';
class Letter extends Component {
  render() {
    const {letter} = this.props;
    return (
      <Text style={styles.container}>
       {letter}
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    color: '#137431',
  }
});
export default Letter;
