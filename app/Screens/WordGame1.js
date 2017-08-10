import React, { Component } from 'react';
import { Text, View, Dimensions, Button } from 'react-native';

import GameWindow from '../Components/GameWindow';
import Controls from '../Components/Controls';

const {height, width} = Dimensions.get('window');
const gameHeight  = height * 0.65;
const gameWidth   = gameHeight * (9/16);



class WordGame1 extends Component {
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
    this.startGame      = this.startGame.bind(this);
    this.loseGame       = this.loseGame.bind(this);
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

  startGame() {
    this.setState({
      screen: 'running',

      direction: 'left',
    });
  }

  loseGame() {
    this.setState({
      screen: 'lost',
    });
  }

  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('WordGame2', { age: parseInt(this.state.text) });
  }

  render() {
    switch (this.state.screen) {
      case 'start':
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              backgroundColor: 'lightblue',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'black',
                fontSize: 100,
                textAlign: 'center',
              }}
            >
              Snake Game
            </Text>
            <Button
              onPress={this.startGame}
              title='Start!'
            />
          </View>
        );
        break;
      case 'running':
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#f9f159'
            }}
          >
            <Button title='Next Game' onPress={this.handlePress} />

            <GameWindow
              loseGame={this.loseGame}
              height={gameHeight}
              width={gameWidth}
              direction={this.state.direction}
            />
            <Controls
              width={width}
              left={this.setLeft}
              right={this.setRight}
              up={this.setUp}
              down={this.setDown}
            />
          </View>
        );
        break;
      case 'lost':
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              backgroundColor: 'lightcoral',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 100,
                textAlign: 'center',
              }}
            >
              You Lose!
            </Text>
            <Button
              onPress={this.startGame}
              title='New Game?'
            />
          </View>
        );
        break;
    }
  }
}

export default WordGame1;
