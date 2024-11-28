import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';

const globalStyle = require('../styles/GlobalStyle');

const OpeningScreen = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.logo }>Pocori</Text>
            <View style={{width: '100%'}}>
                <TouchableOpacity
                    style={ styles.btn }
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={ globalStyle.f_white }>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.btn }
                    onPress={() => navigation.navigate('SignUp')}>
                    <Text style={ globalStyle.f_white }>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default OpeningScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
    logo: {
        color: '#fff',
        fontSize: 32,
        fontWeight: '500',
    },
    btn: {
        width: '100%',
        marginVertical: 5,
        paddingVertical: 20,
		alignItems: 'center',
		justifyContent: 'center',
        color: '#fff',
        fontSize: 18,
        backgroundColor: '#444',
        borderBottomColor: '#cc4',
        borderBottomWidth: 2,
    },
});

