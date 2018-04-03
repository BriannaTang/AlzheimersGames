import React, { Component } from 'react';

import {
  View,
  Animated,
  Text,
  StyleSheet,
  PanResponder,
  TouchableOpacity
} from 'react-native';

export class Balloon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
      rand: Math.floor((Math.random() * (100 - 50)) + 50),
    };
  }

  componentWillMount () {
    // Add a listener for the delta value change
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);
    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropArea(gesture)) {
          Animated.timing(
            this.state.opacity,
            {
              toValue: 0,
              duration: 1000
            }
          ).start(() =>
            this.setState({
              showDraggable: false
            })
          );
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 5
          }).start();
        }
      }
    });
    // adjusting delta value
    this.state.pan.setValue({ x:0, y:0 });
  }

  isDropArea = (gesture) => {
    // TODO (Bri): Figure out how to check if the location is acceptable
    // The location should be another component. 
    // potential ideas: 
    /* - store positions in an array
     * - hard code the pixels and just check if that's acceptable
     */
    return gesture.moveY < 200;
  }

  render() {
    const panStyle = {
      ...this.props.style,
      transform: this.state.pan.getTranslateTransform(),
      opacity: this.state.opacity
    }
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[panStyle, styles[this.props.circleId]]}
      >
        <Text>{this.props.value}</Text>
      </Animated.View>
    );
  }
};

const styles = StyleSheet.create({
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
  }
});