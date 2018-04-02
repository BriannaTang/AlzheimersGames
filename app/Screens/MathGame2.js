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
      opacity: new Animated.Value(1),
      rand: Math.floor((Math.random() * (100 - 50)) + 50),
    };

  }


  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('WordGame2Instructions', { age: parseInt(this.state.text) });
  }

  render() {
    return (
      <View style={styles.container} >
        <Animated.View
          {...this.panResponders[0].panHandlers}
          style={[this.state.pans[0].getLayout(), styles.circle, styles.dropZone]}>
          <Text>
            {this.state.rand / 2}
          </Text>
        </Animated.View>
        <View style={styles.cont} >
          <Animated.View
            {...this.panResponders[1].panHandlers}
            style={[this.state.pans[1].getLayout(), styles.circle6, styles.dropZone]}>
            <Text>
              {this.state.rand * 0.25}
            </Text>
          </Animated.View>
          <Animated.View
            {...this.panResponders[2].panHandlers}
            style={[this.state.pans[2].getLayout(), styles.circle2, styles.dropZone]}>
            <Text>
              {2}
            </Text>
          </Animated.View>
        </View>
        <Text style={styles.container}>
          {this.state.rand}
        </Text>
        <View style={styles.conts} >
          <Animated.View
            {...this.panResponders[3].panHandlers}
            style={[this.state.pans[3].getLayout(), styles.circle5, styles.dropZone]}>
            <Text>
              {this.state.rand * 0.75}
            </Text>
          </Animated.View>
          <Animated.View
            {...this.panResponders[4].panHandlers}
            style={[this.state.pans[4].getLayout(), styles.circle3, styles.dropZone]}>
            <Text>
              {Math.round(this.state.rand * 1.6)}
            </Text>
          </Animated.View>
        </View>
        <View style={styles.container} >
          <Animated.View
            {...this.panResponders[5].panHandlers}
            style={[this.state.pans[5].getLayout(), styles.circle4, styles.dropZone]}>
            <Text>
              {Math.round(this.state.rand * 0.6)}
            </Text>
          </Animated.View>
        </View>
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
