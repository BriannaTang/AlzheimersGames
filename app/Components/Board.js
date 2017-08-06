import React, { Component } from 'react';
import { View } from 'react-native';
import Block from './Block'

class Board extends Component {
  constructor(props) {
    super(props);
    this.snakeInterval = null;
    this.foodInterval  = null;
    let tempArray = Array(144).fill({ type: 'empty', decay: 0 });
    tempArray[67] = { type: 'snake', decay: 3 };
    this.state = {
      globalDecay: 4,
      boardArray: tempArray,
      foods: 0,
      head: 67,
      word: 'potato',
      usedLetters: Array(6).fill(false),
    };

    this.addFood      = this.addFood.bind(this);
    this.updateSnake  = this.updateSnake.bind(this);
    this.checkAndMove = this.checkAndMove.bind(this);
    this.moveLeft     = this.moveLeft.bind(this);
    this.moveRight    = this.moveRight.bind(this);
    this.moveUp       = this.moveUp.bind(this);
    this.moveDown     = this.moveDown.bind(this);
    this.decayBoard   = this.decayBoard.bind(this);
  }

  componentDidMount() {
    this.snakeInterval = setInterval(this.updateSnake, 100);
    this.foodInterval  = setInterval(this.addFood, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.snakeInterval);
    clearInterval(this.foodInterval);
  }
  allLetersUsed = () => {
    let result = true;
    for(let i = 0; i < this.state.usedLetters.length; i++ )
    {
      if(!this.state.usedLetters[i])
      {
        result = false;
      }
    }
    console.log(result);
    return result;
  }

  addFood() {
    if(!this.allLetersUsed())
    {
      let label = '';
      while(label === '')
    {
      const index = Math.floor(Math.random() * this.state.word.length);
      if(!this.state.usedLetters[index])
      {
        tempLettersUsed = this.state.usedLetters.slice();
        tempLettersUsed[index] = true;
        this.setState({
          usedLetters : tempLettersUsed
        });
        label = this.state.word.charAt(index);
      }
    }
    let placed = false;
    while(!placed)
    {
      let location = Math.floor(Math.random() * 144);
      let tempArray = this.state.boardArray.slice();
      if (tempArray[location].type === 'empty')
      {
        tempArray[location] = { type: 'food', decay: 0, label: label  };
        this.setState({
          boardArray: tempArray,
          foods: this.state.foods + 1,
        });
        placed = true;
      }
    }}
  }

  updateSnake() {
    switch (this.props.direction) {
      case 'left':
        this.moveLeft();
        break;
      case 'right':
        this.moveRight();
        break;
      case 'up':
        this.moveUp();
        break;
      case 'down':
        this.moveDown();
        break;
    }
    this.decayBoard();
  }

  checkAndMove(location) {
    let tempArray = this.state.boardArray.slice();
    switch (this.state.boardArray[location].type) {
      case 'snake':
        this.props.loseGame();
        break;
      case 'food':
        tempArray[location] = { type: 'snake', decay: this.state.globalDecay };
        this.setState({
          globalDecay: this.state.globalDecay + 2,
          boardArray: tempArray,
          head: location,
          foods: this.state.foods - 1,
        });
        break;
      default:
        tempArray[location] = { type: 'snake', decay: this.state.globalDecay };
        this.setState({
          boardArray: tempArray,
          head: location,
        });
    }

  }

  moveLeft() {
    if (this.state.head % 9 === 0)
      this.checkAndMove(this.state.head + 8);
    else
      this.checkAndMove(this.state.head - 1);
  }

  moveRight() {
    if (this.state.head % 9 === 8)
      this.checkAndMove(this.state.head - 8);
    else
      this.checkAndMove(this.state.head + 1);
  }

  moveUp() {
    if (this.state.head < 9)
      this.checkAndMove(this.state.head + 135);
    else
      this.checkAndMove(this.state.head - 9);
  }

  moveDown() {
    if (this.state.head > 134)
      this.checkAndMove(this.state.head - 135);
    else
      this.checkAndMove(this.state.head + 9);
  }

  decayBoard() {
    let tempArray = this.state.boardArray.slice();
    for (let temp of tempArray)
    {
      if (temp.decay !== 0)
      {
        temp.decay = temp.decay - 1;
        if (temp.decay === 0)
          temp.type = 'empty';
      }
    }
    this.setState({
      boardArray: tempArray,
    })
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {this.state.boardArray.map((block, index) =>
          <Block key={index} size={this.props.blockSize} type={block.type} label={block.label}/>
        )}
      </View>
    );
  }
}

export default Board;
