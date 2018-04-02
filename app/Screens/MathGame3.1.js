import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import TouchableBoardTile from '../Components/TouchableBoardTile';


const randomIndex = (nums) => {
  return Math.floor(Math.random() * nums.length);
}
const recompute = (nums) => {
  const firstIndex = randomIndex(nums);
  const newNums = [
    ...nums.slice(0, firstIndex),
    ...nums.slice(firstIndex + 1),
  ];
  const secondIndex = randomIndex(newNums);

  const firstValue = nums[firstIndex];
  const secondValue = newNums[secondIndex];
  console.log(nums);
  console.log(firstIndex);
  console.log(secondIndex);
  return {
    num: firstValue + secondValue,
    firstValue: firstValue,
    secondValue: secondValue,
  };
}

const pluck = (array, ...values) => {
  const copy = array.slice();
  for(const value of values) {
    const i = copy.indexOf(value)
    copy.splice(i,1) 
  }
  return copy
}

export default class MathGame3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: Array.from({ length: 16 }, () => (Math.floor(Math.random() * (50 - 1)) + 1)),
      num: 0,
      freeNums: [],
      lastPressedTile: null,
      lastPressedValue: null,
      correctBorders: Array(16).fill('#2a7bc1'),
      firstIndex: null,
      secondIndex: null,
    };
    const recomputeResult = recompute(this.state.array);
    this.state.num = recomputeResult.num;
    this.state.firstValue = recomputeResult.firstValue;
    this.state.secondValue = recomputeResult.secondValue;
    this.state.freeNums = this.state.array.slice();
  }

  donePress = () => {
    const { navigate } = this.props.navigation;
    navigate('Completed', { completed: parseInt(this.state.text) });
  }
  

  pickFirstTile = (tileIndex) => {
    const value = this.state.array[tileIndex]
    this.setState({
      lastPressedValue: value,
      lastPressedTile: tileIndex
    })
  }

  matchTiles = (tileIndex) => {
    const value = this.state.array[tileIndex]
    if (this.state.lastPressedValue + value === this.state.num) {
      let tempBorders = this.state.correctBorders.slice();
      tempBorders[tileIndex] = 'green';
      tempBorders[this.state.lastPressedTile] = 'green';
      const freeNums =  pluck(this.state.freeNums, this.state.lastPressedValue, value);
      const recomputeResult = recompute(freeNums);
      
      this.setState({
        correctBorders: tempBorders,
        lastPressedTile: null,
        lastPressedValue: null,
        num: recomputeResult.num,
        firstValue: recomputeResult.firstValue,
        secondValue: recomputeResult.secondValue,
        freeNums: freeNums,
      });
    }
    else {
      let tempBorders = this.state.correctBorders.slice();
      tempBorders[tileIndex] = 'red';
      tempBorders[this.state.lastPressedTile] = 'red';
      this.setState({
        correctBorders: tempBorders,
        lastPressedTile: null,
        lastPressedValue: null
      });
    }
  }
  

  handlePress = (tileIndex) => {
    console.log('handlePress', tileIndex);
    if (this.state.correctBorders[tileIndex] === 'green') {
      return
    }
    if (!this.state.lastPressedValue) {
       this.pickFirstTile(tileIndex)
    } else {
      this.matchTiles(tileIndex)
    }
  }

  render() {
    const { height, width } = Dimensions.get('window');
    const BoxSize = width * 0.25;
    return (
      <View style={styles.container}>
        <Button title=' Submit ' onPress={this.donePress}/>
        <Text style={{ fontSize: 45, textAlign: 'center' }}>
          {this.state.num}
        </Text>
        <View style={{ height: BoxSize * 4, width: BoxSize * 4, flexWrap: 'wrap' }}>
          <TouchableBoardTile correctBorder={this.state.correctBorders[0]} onPress={() => this.handlePress(0)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }} >
              {this.state.array[0]}
            </Text>
          </TouchableBoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[1]} onPress={() => this.handlePress(1)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {this.state.array[1]}
            </Text>
          </TouchableBoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[2]} onPress={() => this.handlePress(2)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {this.state.array[2]}
            </Text>
          </TouchableBoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[3]} onPress={() => this.handlePress(3)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {this.state.array[3]}
            </Text>
          </TouchableBoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[4]} onPress={() => this.handlePress(4)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {this.state.array[4]}
            </Text>
          </TouchableBoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[5]} onPress={() => this.handlePress(5)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {this.state.array[5]}
            </Text>
          </TouchableBoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[6]} onPress={() => this.handlePress(6)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {this.state.array[6]}
            </Text>
          </TouchableBoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[7]} onPress={() => this.handlePress(7)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {this.state.array[7]}
            </Text>
          </TouchableBoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[8]} onPress={() => this.handlePress(8)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {this.state.array[8]}
            </Text>
          </TouchableBoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[9]} onPress={() => this.handlePress(9)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {this.state.array[9]}
            </Text>
          </TouchableBoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[10]} onPress={() => this.handlePress(10)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {this.state.array[10]}
            </Text>
          </TouchableBoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[11]} onPress={() => this.handlePress(11)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {this.state.array[11]}
            </Text>
          </TouchableBoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[12]} onPress={() => this.handlePress(12)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {this.state.array[12]}
            </Text>
          </TouchableBoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[13]} onPress={() => this.handlePress(13)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {this.state.array[13]}
            </Text>
          </TouchableBoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[14]} onPress={() => this.handlePress(14)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {this.state.array[14]}
            </Text>
          </TouchableBoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[15]} onPress={() => this.handlePress(15)}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              {this.state.array[15]}
            </Text>
          </TouchableBoardTile>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a7bc1',
  },
});