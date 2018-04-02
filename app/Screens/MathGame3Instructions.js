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
        navigate('MathGame3', { age: parseInt() });
    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>
                Click on 2 boxes that add up to the number on the top. Make all the boxes disappear to complete the game.
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
        backgroundColor: '#2a7bc1',
    }
});