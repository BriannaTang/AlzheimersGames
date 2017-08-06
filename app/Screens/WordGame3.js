import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import PackMan from '../Components/PackMan';
import Controls from '../Components/Controls'
/*
PackMan
*/
const {height, width} = Dimensions.get('window');

export default class WordGame3 extends Component {
  constructor() {
    super();
    this.state = {
      direction: 'left',
      screen: 'start',
    }
    this.setLeft        = this.setLeft.bind(this);
    this.setRight       = this.setRight.bind(this);
    this.setUp          = this.setUp.bind(this);
    this.setDown        = this.setDown.bind(this);
  }
  setLeft() {
    if (this.state.direction !== 'right')
    {
      this.setState({
        direction: 'left',
      })
    }
  }

  setRight() {
    if (this.state.direction !== 'left')
    {
      this.setState({
        direction: 'right',
      })
    }
  }

  setUp() {
    if (this.state.direction !== 'down')
    {
      this.setState({
        direction: 'up',
      })
    }
  }

  setDown() {
    if (this.state.direction !== 'up')
    {
      this.setState({
        direction: 'down',
      })
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <PackMan/>
        <Controls
          width={width}
          left={this.setLeft}
          right={this.setRight}
          up={this.setUp}
          down={this.setDown}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
