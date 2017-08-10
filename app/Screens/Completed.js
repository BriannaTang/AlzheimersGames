import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class Completed extends Component {
  constructor(props) {
    super(props);
    let timer = null;
    this.state = {
      text: 'Yay! You finished the games!',
      textColor: 'red'
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.handleColorChange, 100);
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleColorChange = () => {
    switch (this.state.textColor)
    {
      case 'red':
        this.setState({
          textColor: 'orange',
        });
        break;
      case 'orange':
        this.setState({
          textColor: 'yellow',
        });
        break;
      case 'yellow':
        this.setState({
          textColor: 'rgb(137,232,148)',
        });
        break;
      case 'rgb(137,232,148)':
        this.setState({
          textColor: 'blue',
        });
        break;
      case 'blue':
        this.setState({
          textColor: 'purple',
        });
        break;
      case 'purple':
        this.setState({
          textColor: 'pink',
        });
        break;
      case 'pink':
        this.setState({
          textColor: 'red',
        });
    }
  }

  render() {
    const textColor = this.state.textColor;
    return (
      <View style={styles.container} >
        <Text style={{fontSize: 50,textAlign: 'center', color: textColor}}>
          {this.state.text}
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#b888f7',
  }
});
