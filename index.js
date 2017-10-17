/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Root } from './app/index.js';

export default class AlzheimersGames extends Component {
  render() {
    return (
      <Root/>
    );
  }
}


AppRegistry.registerComponent('AlzheimersGames', () => AlzheimersGames);
