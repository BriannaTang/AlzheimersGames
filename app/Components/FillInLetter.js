import React, {Component} from 'react';
import { View ,StyleSheet} from 'react-native';
import Letter from './Letter';
import Underscore from './Underscore';
class FillInLetter extends Component {
  render() {
    const {isLetterGuessed, letter} = this.props;
    return (
      <View style={styles.container}>
        <Letter letter={isLetterGuessed ? letter : ' '}/>
        <Underscore/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
  }
});
export default FillInLetter;
