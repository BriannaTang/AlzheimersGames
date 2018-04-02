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
        navigate('MathGame2', { age: parseInt() });
    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>
                 To play, drag the balloons over to the other balloons and choose the operation that will make the answer in the center.
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
        backgroundColor: '#f9f159',
    }
});