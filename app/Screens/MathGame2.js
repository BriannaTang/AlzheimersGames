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

export default class MathGame2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      pans: []
    };

    this.panResponders = [];
    for(let i = 0; i < 6; i++){
      this.state.pans.push(
        new Animated.ValueXY()
      )
      this.panResponders.push(
        PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onPanResponderMove: Animated.event([null,{
           dx: this.state.pans[i].x,
           dy: this.state.pans[i].y
          }]),
          onPanResponderRelease: (e, gesture) => {
            Animated.spring(
              this.state.pans[i],
              {toValue:{x:0,y:0}}
            ).start();
          }
        })
      )
    }

  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.dropZone}>
          <Animated.View
            {...this.panResponders[0].panHandlers}
            style={[this.state.pans[0].getLayout(), styles.circle]}>
          </Animated.View>
          <View style={styles.cont} >
            <Animated.View
              {...this.panResponders[1].panHandlers}
              style={[this.state.pans[1].getLayout(), styles.circle6]}>
            </Animated.View>
            <Animated.View
              {...this.panResponders[2].panHandlers}
              style={[this.state.pans[2].getLayout(), styles.circle2]}>
            </Animated.View>
          </View>
          <Text style={styles.container}>
            { Math.floor(Math.random() * (100 - 50 + 1)) + 50 }
          </Text>
          <View style={styles.conts} >
            <Animated.View
              {...this.panResponders[3].panHandlers}
              style={[this.state.pans[3].getLayout(), styles.circle5]}>
            </Animated.View>
            <Animated.View
              {...this.panResponders[4].panHandlers}
              style={[this.state.pans[4].getLayout(), styles.circle3]}>
            </Animated.View>
          </View>
          <View style={styles.container} >
            <Animated.View
              {...this.panResponders[5].panHandlers}
              style={[this.state.pans[5].getLayout(), styles.circle4]}>
            </Animated.View>
          </View>
        </View>
        {this.renderDraggable()}
      </View>
    )
  }
  renderDraggable() {
    return (
      <View style={styles.draggableContainer}/>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    fontSize: 40,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
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
});
