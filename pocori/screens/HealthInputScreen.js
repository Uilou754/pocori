import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const globalStyle = require('../styles/GlobalStyle');

const HealthInputScreen = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [weight, setWeight] = useState(0);
    // 日付が入力済みか
    const [datePickerInput, setDatePickerInput] = useState(false);
    // DateTimePickerを表示するか否か
    const [datePickerShow, setDatePickerShow] = useState(false);

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>健康状態入力</Text>
            <View style={{ marginVertical: 10 }}>
                <Text style={ styles.inputLabel }>日付</Text>
                <TouchableOpacity
                    onPress={ setDatePickerShow(true) }>
                    { datePickerInput === 1 ? <Text>日付を入力する</Text>: <Text>{ date }</Text> }
                </TouchableOpacity>
                { /*datePickerShow &&
                    <DateTimePicker
                        mode="date"
                        display="spinner"
                        is24Hour={ true }
                        value={ date }
                        onChange={ (event, date) => {
                            setDate(date);
                            // 入力済み扱いにする
                            setDatePickerInput(true);
                            // DateTimePickerを非表示に
                            setDatePickerShow(false);
                        } }
                    />*/ }
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={ styles.inputLabel }>体重</Text>
                <TextInput
                    numeric
                    keyboradType='numeric'
                    style={ styles.input }
                    onChangeText={ text => setWeight(text) }
                    value={ weight }
                    placeholder="体重を入力してください" />
            </View>
            <View style={ globalStyle.col }>
                <View style={ globalStyle.col_inner }></View>
                <View style={ globalStyle.col_inner }></View>
            </View>
        </View>
    );
}
export default HealthInputScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
    title: {
        marginVertical: 10,
        color: '#fff',
        fontSize: 20,
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
    btn: {
        width: '100%',
        marginVertical: 1,
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

