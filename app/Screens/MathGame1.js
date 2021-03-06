import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import TextButton from '../Components/TextButton';
import BoardTile from '../Components/BoardTile';
import TouchableBoardTile from '../Components/TouchableBoardTile';
/*
 math game with 3x3 grid
*/
export default class MathGame1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operationChoice: Array(4).fill(<View/>),
      symbols:[ '➗','✖️', '^',  '√', '➕', '➖'],
      lastPressedSymbol: '',
      correctBorders: Array(4).fill('white'),
      rand : Math.floor(Math.random() * (13-1)) + 1,
      rands : Math.floor(Math.random() * (13-1)) + 1,
      random : Math.floor(Math.random() * (13-1)) + 1,
      randoms : Math.floor(Math.random() * (13-1)) + 1,
    };
  }

  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('WordGame1Instructions', { age: parseInt(this.state.text) });
  }


  checkSymbol=(tileIndex)=> {
    console.log(this.state.operationChoice);
    if(this.state.lastPressedSymbol === this.state.symbols[tileIndex]) {
      let tempBorders = this.state.correctBorders.slice();
      tempBorders[tileIndex] = 'green';
      let tempOperations = this.state.operationChoice.slice();
      tempOperations[tileIndex] = <Text style={styles.operation}>  {this.state.symbols[tileIndex]} </Text>;
      console.log('if return true');
      this.setState({
        correctBorders: tempBorders,
        operationChoice: tempOperations,
      });
    }
    else {
      let tempBorders = this.state.correctBorders.slice();
      tempBorders[tileIndex] = 'red';
      console.log('else return true');
      this.setState({
        correctBorders: tempBorders,
      });
    }
  }

  render() {
    let completed = true;
    for(const j=0; j < this.state.correctBorders.length; j++) {
      if('green' !== this.state.correctBorders[j]) {
        completed = false;
      }
    }
    console.log(this.state);
    const submitButton = completed ? <TextButton style={{fontSize: 20}} title='Submit' onPress={this.handlePress} /> : <View style={{height: 20}}/>;
    const { height, width } = Dimensions.get('window');
    const BoxSize = width * 0.25;
    return (
      <View style={styles.container}>
        <View style={{height: BoxSize * 3, width: BoxSize * 3, flexWrap: 'wrap', }}>
          <BoardTile>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
              { this.state.rand }
            </Text>
          </BoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[0]} onPress={()=>this.checkSymbol(0)}>
            { this.state.operationChoice[0] }
          </TouchableBoardTile>
          <BoardTile>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
              { this.state.rands }
            </Text>
          </BoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[1]} onPress={()=>this.checkSymbol(1)}>
            { this.state.operationChoice[1] }
          </TouchableBoardTile>
          <BoardTile>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
              { 24 }
            </Text>
          </BoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[2]} onPress={()=>this.checkSymbol(2)}>
            { this.state.operationChoice[2] }
          </TouchableBoardTile>
          <BoardTile>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
              { this.state.random }
            </Text>
          </BoardTile>
          <TouchableBoardTile correctBorder={this.state.correctBorders[3]} onPress={()=>this.checkSymbol(3)}>
            { this.state.operationChoice[3] }
          </TouchableBoardTile>
          <BoardTile>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
              { this.state.randoms }
            </Text>
          </BoardTile>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button onPress={()=> this.setState({lastPressedSymbol: '➕',})} title=' ➕ '/>
          <Button onPress={()=> this.setState({lastPressedSymbol: '➖',})} title=' ➖ '/>
          <Button onPress={()=> this.setState({lastPressedSymbol: '➗',})} title=' ➗ '/>
          <Button onPress={()=> this.setState({lastPressedSymbol: '✖️',})} title=' ✖️ '/>
          <Button onPress={()=> this.setState({lastPressedSymbol: '√',})} title=' √ '/>
          <Button onPress={()=> this.setState({lastPressedSymbol: '^',})} title=' ^ '/>

        </View>
        { submitButton }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F76D6D',
  },
  operation: {
    fontSize: 50,
    textAlign: 'center',
    marginLeft: -20,
    backgroundColor: 'transparent'
  }
});
