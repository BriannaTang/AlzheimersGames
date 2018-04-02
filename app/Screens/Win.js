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
        navigate('MathGame3Instructions', { age: parseInt() });
    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 100}}> You Won! </Text>
                <Button title='Next Game' onPress={this.handlePress}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#42C43B',
    }
});
