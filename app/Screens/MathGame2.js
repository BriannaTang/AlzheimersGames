import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  PanResponder,
  Animated,
  Dimensions
} from 'react-native';

import { Balloon } from '../Components/Balloon';
/*
ballon
*/
export default class MathGame2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pans: [],
      randomValues: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
      debug: false,
      opacity: new Animated.Value(1),
      rand: Math.floor((Math.random() * (100 - 50)) + 50),
    };
  }

  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('WordGame2Instructions', { age: parseInt(this.state.text) });
  }

  handleBalloon = (index) => {

  }

  render() {
    console.log(this.state.randomValues);
    return (
      <View style={styles.container} >
        <Balloon value={this.state.randomValues[0]} circleId='circle' />
        <Balloon value={this.state.randomValues[1]} circleId='circle2' />
        <Balloon value={this.state.randomValues[2]} circleId='circle3' />
        <Balloon value={this.state.randomValues[3]} circleId='circle4' />
        <Balloon value={this.state.randomValues[4]} circleId='circle5' />
        <Balloon value={this.state.randomValues[5]} circleId='circle6' />
        <View style={{ flexDirection: 'row' }}>
          <Button title=' ➕ ' onPress={() => { }} />
          <Button title=' ➖ ' onPress={() => { }} />
          <Button title=' ➗ ' onPress={() => { }} />
          <Button title=' ✖️ ' onPress={() => { }} />
        </View>
        < Button title=' Next Game ' onPress={this.handlePress} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f9f159'
  },
  cont: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-around',
  },
  conts: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'red'
  },
  circle2: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'orange'
  },
  circle3: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'yellow'
  },
  circle4: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'green'
  },
  circle5: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'blue'
  },
  circle6: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'purple'
  },
  dropZone: {
    width: 80,
    height: 80,
    borderRadius: 40,
  }
});