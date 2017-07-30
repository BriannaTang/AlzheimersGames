/**
 * Sample React Native
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import AgeScreen from './Screens/AgeScreen';
import ChooseGameScreen from './Screens/ChooseGameScreen';
import MathGame1 from './Screens/MathGame1';
import WordGame1 from './Screens/WordGame1';
import MathGame2 from './Screens/MathGame2';
import WordGame2 from './Screens/WordGame2';


export const Root = StackNavigator(
  {
    Age: { screen: MathGame2 },
    ChooseGame: { screen: ChooseGameScreen },
    MathGame1: { screen: MathGame1 },
    WordGame1: { screen: WordGame1 },
    MathGame2: { screen: AgeScreen },
    WordGame2: { screen: WordGame2 }
  },
  { headerMode: 'screen' }
);
