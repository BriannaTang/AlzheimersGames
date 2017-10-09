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
/*
ballon
*/
export default class MathGame2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      showDraggable: true,
      dropZoneValues: null,
      pans: [],
      rand: Math.floor((Math.random() * (100 - 50)) + 50),
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
            if(this.isDropZone(gesture)){
              this.setState({
                showDraggable : false
              });
            }
            else{
              Animated.spring(
                this.state.pans[i],
                {toValue:{x:0,y:0}}
              ).start();
            }
          }
        })
      )
    }
  }
  isDropZone(gesture) {
    // TODO (Bri): Remake this to work with this.state.pans (array)
    for ( i = 0; i < this.state.pans.length; i++) {
      const dz = this.state.pans[i].getLayout();
      console.log(dz);
      continue;
      if (gesture.moveY > dz.y._value && gesture.moveY < dz.y._value + dz.height){
        return true
      }
    }
    return false
  }

  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('MathGame3', { age: parseInt(this.state.text) });
  }

  render() {
    return (
      <View style={styles.container} >
        <Animated.View
          {...this.panResponders[0].panHandlers}
          style={[this.state.pans[0].getLayout(), styles.circle]}>
          <Text>
            { this.state.rand / 2 }
          </Text>
        </Animated.View>
        <View style={styles.cont} >
          <Animated.View
            {...this.panResponders[1].panHandlers}
            style={[this.state.pans[1].getLayout(), styles.circle6]}>
            <Text>
              { this.state.rand * 0.25}
            </Text>
          </Animated.View>
          <Animated.View
            {...this.panResponders[2].panHandlers}
            style={[this.state.pans[2].getLayout(), styles.circle2]}>
            <Text>
              { 2 }
            </Text>
          </Animated.View>
        </View>
        <Text style={styles.container}>
          { this.state.rand }
        </Text>
        <View style={styles.conts} >
          <Animated.View
            {...this.panResponders[3].panHandlers}
            style={[this.state.pans[3].getLayout(), styles.circle5]}>
            <Text>
              { this.state.rand * 0.75}
            </Text>
          </Animated.View>
          <Animated.View
            {...this.panResponders[4].panHandlers}
            style={[this.state.pans[4].getLayout(), styles.circle3]}>
            <Text>
              { Math.round(this.state.rand * 1.6) }
            </Text>
          </Animated.View>
        </View>
        <View style={styles.container} >
          <Animated.View
            {...this.panResponders[5].panHandlers}
            style={[this.state.pans[5].getLayout(), styles.circle4]}>
            <Text>
              { Math.round(this.state.rand * 0.6) }
            </Text>
          </Animated.View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button title=' ➕ '/>
          <Button title=' ➖ '/>
          <Button title=' ➗ '/>
          <Button title=' ✖️ '/>
        </View>
        <Button title=' Next Game ' onPress={this.handlePress}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 40,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#72ff98'
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
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
