import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import HealthChart from '../component/HealthChart';

const globalStyle = require('../styles/GlobalStyle');

const MyPageScreen = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <Text style={[ globalStyle.f_white, globalStyle.alignCenter ]}>体重の変遷です。</Text>
            <View style={ globalStyle.col }>
                <View style={[ globalStyle.col_inner, globalStyle.w50 ]}>
                    <View style={ styles.contents_frame }>
                        <Text style={[ globalStyle.f_white, globalStyle.alignCenter ]}>現在の身長</Text>
                        <Text style={[ globalStyle.f_white, globalStyle.f_32, globalStyle.alignCenter ]}>165
                            <Text style={[ globalStyle.f_white, globalStyle.f_22 ]}> cm</Text></Text>
                    </View>
                </View>
                <View style={[ globalStyle.col_inner, globalStyle.w50 ]}>
                    <View style={ styles.contents_frame }>
                        <Text style={[ globalStyle.f_white, globalStyle.alignCenter ]}>現在の体重</Text>
                        <Text style={[ globalStyle.f_white, globalStyle.f_32, globalStyle.alignCenter ]}>60
                            <Text style={[ globalStyle.f_white, globalStyle.f_22 ]}> kg</Text></Text>
                    </View>
                </View>
            </View>
            <View style={ globalStyle.col }>
                <View style={[ globalStyle.col_inner, globalStyle.w50 ]}>
                    <View style={ styles.contents_frame }>
                        <Text style={[ globalStyle.f_white, globalStyle.alignCenter ]}>BMI</Text>
                        <Text style={[ globalStyle.f_white, globalStyle.f_32, globalStyle.alignCenter ]}>21</Text>
                    </View>
                </View>
            </View>
            <View style={ globalStyle.col }>
                <View style={[ globalStyle.col_inner, globalStyle.w100 ]}>
                    <View style={ styles.contents_frame }>
                        <View style={ globalStyle.col }>
                            <View style={[ globalStyle.col_inner, globalStyle.w25 ]}>
                                <TouchableOpacity>
                                    <Text style={ styles.changeViewBtn }>1週間</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[ globalStyle.col_inner, globalStyle.w25 ]}>
                                <TouchableOpacity>
                                    <Text style={ styles.changeViewBtn }>1か月</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[ globalStyle.col_inner, globalStyle.w25 ]}>
                                <TouchableOpacity>
                                    <Text style={ styles.changeViewBtn }>3か月</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[ globalStyle.col_inner, globalStyle.w25 ]}>
                                <TouchableOpacity>
                                    <Text style={ styles.changeViewBtn }>1年</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <HealthChart />
                        <View style={{width: '100%'}}>
                            <TouchableOpacity
                                style={ styles.btn }
                                onPress={() => navigation.navigate('HealthInput')}>
                                <Text style={ globalStyle.f_white }>体重を入力</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default MyPageScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
    changeViewBtn: {
        paddingVertical: 5,
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        backgroundColor: '#68f',
        borderRadius: 8,
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
    contents_frame: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#555',
        borderRadius: 10,
    },
});

