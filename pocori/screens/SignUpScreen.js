import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const globalStyle = require('../styles/GlobalStyle');

const SignUpScreen = ({ navigation }) => {
    const [reason, setReason] = useState();
    const [height, setHeight] = useState(165);
    const [weight, setWeight] = useState(58);

    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>現在のあなたの状態を教えてください。</Text>

            <View style={{ marginVertical: 10 }}>
                <Text style={ styles.text }>あなたが体重を管理したい理由</Text>
                <Picker
                    style={ styles.input }
                    selectedValue={ reason }
                    onValueChange={ (itemValue, itemIndex) => setReason(itemValue) }>
                    <Picker.Item label="健康のため" value="1"/>
                    <Picker.Item label="スタイル維持のため" value="2"/>
                    <Picker.Item label="水着を着るため" value="3"/>
                    <Picker.Item label="スポーツのため" value="4"/>
                </Picker>
            </View>

            <View style={{ marginVertical: 10 }}>
                <Text style={ styles.text }>現在のあなたの身長を入力してください。</Text>
                <TextInput
                    style={ styles.input }
                    onChangeText={ text => setHeight(text) }
                    value={ height }
                    placeholder="身長を入力してください" />
            </View>

            <View style={{ marginVertical: 10 }}>
                <Text style={ styles.text }>現在のあなたの体重を入力してください。</Text>
                <TextInput
                    style={ styles.input }
                    onChangeText={ text => setWeight(text) }
                    value={ weight }
                    placeholder="体重を入力してください" />
            </View>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Opening');
            }}>
                <Text style={ styles.submitButton }>登録</Text>
            </TouchableOpacity>
        </View>
    );
}
export default SignUpScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
        padding: 10,
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: '#333',
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
    text: {
        color: '#fff',
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