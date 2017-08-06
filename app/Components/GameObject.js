import React, { Component } from 'react';
import {
  View
} from 'react-native';

export default class GameObject extends Component {
  constructor() {
    super();

    this.sessionId = null;
  }

  startGame(callback) {
    const requestBody = {
      action: "startGame"
    }
    this.fetchData(requestBody, (responseData) => {
      this.sessionId = responseData.sessionId
      if (callback) {
        callback(responseData)
      }
    })
  }

  giveMeAWord(callback) {
    const requestBody = {
      sessionId: this.sessionId,
      action: "nextWord"
    }
    this.fetchData(requestBody, callback)
  }

  makeAGuess(letter, callback) {
    const requestBody = {
      sessionId: this.sessionId,
      action: "guessWord",
      guess: letter
    }
    this.fetchData(requestBody, callback)
  }

  getYourResult(callback) {
    const requestBody = {
      sessionId: this.sessionId,
      action : "getResult"
    }
    this.fetchData(requestBody, callback)
  }

  submitYourResult(callback) {
    const requestBody = {
      sessionId: this.sessionId,
      action : "submitResult"
    }
    this.fetchData(requestBody, callback)
  }
  fetchData(requestBody, callback) {
    const requestUrl = 'https://something.com';
    // request
    fetch(requestUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then((response) => response.json())
    .then((responseData) => {
      if (callback) {
        callback(responseData);
      }
    })
  }
}

module.exports = GameObject;
