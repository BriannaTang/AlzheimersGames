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
      lastPressed: '',
      correctBorders: Array(4).fill('white'),
      rand : Math.floor(Math.random() * (100-1)) + 1,


    };

  }

  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('MathGame2', { age: parseInt(this.state.text) });
  }


  checkSymbol=(i)=> {
    if(this.state.lastPressed === this.state.symbols[i]) {
      let tempBorders = this.state.correctBorders.slice();
      tempBorders[i] = 'green';
      let tempOperations = this.state.operationChoice.slice();
      tempOperations[i] = <Text style={styles.operation} >  {this.state.symbols[i]} </Text>;
      this.setState({
        correctBorders: tempBorders,
        operationChoice: tempOperations,
      });
    }
    else {
      let tempBorders = this.state.correctBorders.slice();
      tempBorders[i] = 'red';
      this.setState({
        correctBorders: tempBorders,
      });
    }
  }

  render() {
    console.log(this.state.rand);
    let completed = true;
    for(const j=0; j < this.state.correctBorders.length; j++) {
      if('green' !== this.state.correctBorders[j]) {
        completed = false;
      }
    }
    const submitButton = completed ? <TextButton style={{fontSize: 20}} title='Submit' onPress={this.handlePress} /> : <View style={{height: 20}}/>;
    const { height, width } = Dimensions.get('window');
    const BoxSize = width * 0.25;
    return (
      <View style={styles.container}>
        <View style={{height: BoxSize * 3, width: BoxSize * 3, flexWrap: 'wrap', }}>
          <BoardTile>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
              { Math.floor(Math.sqrt(this.state.rand)) * 2 }
            </Text>
          </BoardTile>
          <TouchableBoardTile>
            { this.state.operationChoice[0] }
          </TouchableBoardTile>
          <BoardTile>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
              { this.state.rand * 3 }
            </Text>
          </BoardTile>
          <TouchableBoardTile>
            { this.state.operationChoice[1] }
          </TouchableBoardTile>
          <BoardTile>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
              { this.state.rand }
            </Text>
          </BoardTile>
          <TouchableBoardTile>
            { this.state.operationChoice[2] }
          </TouchableBoardTile>
          <BoardTile>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
              { Math.floor(Math.sqrt(this.state.rand)) }
            </Text>
          </BoardTile>
          <TouchableBoardTile>
            { this.state.operationChoice[3] }
          </TouchableBoardTile>
          <BoardTile>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
              { 2 }
            </Text>
          </BoardTile>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button onPress={()=> this.setState({lastPressed: '➕',})} title=' ➕ '/>
          <Button onPress={()=> this.setState({lastPressed: '➖',})} title=' ➖ '/>
          <Button onPress={()=> this.setState({lastPressed: '➗',})} title=' ➗ '/>
          <Button onPress={()=> this.setState({lastPressed: '✖️',})} title=' ✖️ '/>
          <Button onPress={()=> this.setState({lastPressed: '√',})} title=' √ '/>
          <Button onPress={()=> this.setState({lastPressed: '^',})} title=' ^ '/>

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
    backgroundColor: '#f9f159',
  },
  operation: {
    fontSize: 50,
    textAlign: 'center',
    marginLeft: -20,
    backgroundColor: 'transparent'
  }
});
