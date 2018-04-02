import React, { Component } from 'react';

import {
  View,
  Animated,
  Text,
  StyleSheet
} from 'react-native';

export class Balloon extends Component {
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

  isDropArea = (gesture) => {
    // TODO (Bri): Remake this to work with this.state.pans (array)
    return gesture.moveY < 200;
  }

  render() {
    this.panResponders = [];
    for (let i = 0; i < 6; i++) {
      this.state.pans.push(
        new Animated.ValueXY()
      )
      this.panResponders.push(
        PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onPanResponderMove: Animated.event([null, {
            dx: this.state.pans[i].x,
            dy: this.state.pans[i].y
          }]),
          onPanResponderRelease: (e, gesture) => {
            if (this.isDropArea(gesture)) {
              console.log("running animation");
              Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: 1000
              }).start(() => {
                console.log("cycling");
                this.setState({
                  showDraggable: false
                })
              });
            }
            else {
              Animated.spring(
                this.state.pans[i],
                {
                  toValue: { x: 0, y: 0 },
                  friction: 20
                }).start();
            }
          }
        })
      )
    }

    return (
      <Animated.View
        {...this.panResponders[0].panHandlers}
        style={[this.state.pans[0].getLayout(), styles.circle, styles.dropZone]}
      >
        <Text>
          {this.state.rand / 2}
        </Text>
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
