import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const globalStyle = require('../styles/GlobalStyle');

const SignInScreen = ({ navigation }) => {
    const [id, setID] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={ styles.container }>
            <View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={ styles.inputLabel }>ID</Text>
                    <TextInput
                        style={ styles.input }
                        onChangeText={ text => setID(text) }
                        value={ id }
                        placeholder="IDを入力してください" />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={ styles.inputLabel }>Password</Text>
                    <TextInput
                        style={ styles.input }
                        onChangeText={ text => setPassword(text) }
                        value={ password }
                        placeholder="Passwordを入力してください" />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
                    <Text style={ styles.submitButton }>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default SignInScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
    inputLabel: {
        color: '#fff',
        fontSize: 18,
    },
    input: {
        marginTop: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        color: '#fff',
        fontSize: 18,
        backgroundColor: '#555',
        borderBottomColor: '#333',
        borderBottomWidth: 1,
        borderRadius: 7,
    },
    submitButton: {
        marginTop: 5,
        padding: 10,
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#57f',
        borderRadius: 7,
    },
});