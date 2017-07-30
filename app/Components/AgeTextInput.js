import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class AgeTextInput extends Component {
  render() {
    return (
      <TextInput
        style={{height: 40, width: 125, borderColor: 'gray', borderWidth: 3, backgroundColor:'#FFF', textAlign: 'center'}}
        onChangeText={this.props.onChangeText}

        value={this.props.text}
        placeholder='Enter age here'
      />
    );
  }
}
