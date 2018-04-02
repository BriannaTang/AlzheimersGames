import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class Win extends Component {
    handlePress = () => {
        const { navigate } = this.props.navigation;
        navigate('WordGame2', { age: parseInt() });
    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>
                Guess the word before the hangman appears.
                 </Text>
                <Button title='Start Game' onPress={this.handlePress}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#72ff98',
    }
});