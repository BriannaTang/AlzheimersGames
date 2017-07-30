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

export default class MathGame1 extends Component {
  constructor(props) {
    super(props);
    const rand =  Math.floor(Math.random() * (100-1)) + 1;
    this.state = {
      operationChoice: Array(4).fill(<View/>),
      arr:[ '➗','✖️', '^',  '√', '➕', '➖'],
      lastPressed: '',
      correctBorders: Array(4).fill('white'),
      rand : rand,

    };

  }

  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('MathGame2', { age: parseInt(this.state.text) });
  }


  checkSymbol=(i)=> {
    console.log(this.state.lastPressed);
    if(this.state.lastPressed === this.state.arr[i]) {
      let tempBorders = this.state.correctBorders.slice();
      tempBorders[i] = 'green';
      let tempOperations = this.state.operationChoice.slice();
      tempOperations[i] = <Text style={{fontSize: 50, textAlign: 'center', marginLeft: -20, backgroundColor: 'transparent'}} >  {this.state.arr[i]} </Text>;
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
    const { height, width } = Dimensions.get('window');
    const BoxSize = width * 0.25;
    const borderWidth = 1;
    const borderColor = 'black';
    const backgroundColor = 'white';
    let completed = true;
    for(const j=0; j < this.state.correctBorders.length; j++) {
      if('green' !== this.state.correctBorders[j]) {
        completed = false;
      }
    }
    const submitButton = completed ? <TextButton style={{fontSize: 20}} title='Submit' onPress={this.handlePress} /> : <View style={{height: 20}}/>;

    return (
      <View style={styles.container}>
        <View style={{height: BoxSize * 3, width: BoxSize * 3, flexWrap: 'wrap', }}>
          <View style={{height: BoxSize, width: BoxSize, borderWidth: borderWidth, borderColor: borderColor, backgroundColor: backgroundColor, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
              { Math.floor(Math.sqrt(this.state.rand)) * 2 }
            </Text>
          </View>
          <TouchableOpacity onPress={()=>this.checkSymbol(0)} style={{height: BoxSize, width: BoxSize, borderWidth: borderWidth, borderColor: borderColor, backgroundColor: this.state.correctBorders[0],justifyContent: 'center', alignItems: 'center'}}>
            {this.state.operationChoice[0]}
          </TouchableOpacity>
          <View style={{height: BoxSize, width: BoxSize, borderWidth: borderWidth, borderColor: borderColor, backgroundColor: backgroundColor, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
              { this.state.rand * 3 }
            </Text>
          </View>
          <TouchableOpacity onPress={()=>this.checkSymbol(1)} style={{height: BoxSize, width: BoxSize, borderWidth: borderWidth, borderColor: borderColor, backgroundColor: this.state.correctBorders[1],justifyContent: 'center', alignItems: 'center'}}>
            {this.state.operationChoice[1]}
          </TouchableOpacity>
          <View style={{height: BoxSize, width: BoxSize, borderWidth: borderWidth, borderColor: borderColor, backgroundColor: backgroundColor, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
              { this.state.rand }
            </Text>
          </View>
          <TouchableOpacity onPress={()=>this.checkSymbol(2)} style={{height: BoxSize, width: BoxSize, borderWidth: borderWidth, borderColor: borderColor, backgroundColor: this.state.correctBorders[2],justifyContent: 'center', alignItems: 'center'}}>
            {this.state.operationChoice[2]}
          </TouchableOpacity>
          <View style={{height: BoxSize, width: BoxSize, borderWidth: borderWidth, borderColor: borderColor, backgroundColor: backgroundColor, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
              { Math.floor(Math.sqrt(this.state.rand)) }
            </Text>
          </View>
          <TouchableOpacity onPress={()=>this.checkSymbol(3)} style={{height: BoxSize, width: BoxSize, borderWidth: borderWidth, borderColor: borderColor, backgroundColor: this.state.correctBorders[3],justifyContent: 'center', alignItems: 'center'}}>
            {this.state.operationChoice[3]}
          </TouchableOpacity>
          <View style={{height: BoxSize, width: BoxSize, borderWidth: borderWidth, borderColor: borderColor, backgroundColor: backgroundColor, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, textAlign: 'center'}}>
              { 2 }
            </Text>
          </View>
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
});
