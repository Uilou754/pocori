import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions, Text, TextInput, Button } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';

export default function App() {
	const [ health, setHealth ] = useState({
		isShowDatePicker: false,
		checkDate: new Date(),
		weight: 60.2,
		bmi: 20,
		fat_per: 30,
	});

	const [items, setItems] = useState([]);

	const data = {
		labels: [
			"1日", "", "", "", "5日", "", "",
			"", "9日", "", "", "", "13日", "",
			"", "", "17日", "", "", "", "21日",
			"", "", "", "25日", "", "", "",
			"29日", "", ""],
		datasets: [{
			data: [
				Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
				Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
				Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
				Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
				Math.random()*100, Math.random()*100, Math.random()*100
			]
		}]
	};

	function changeDate(event, selectedDate) {
		health.setHealth({
			isShowDatePicker: !health.isShowDatePicker,
			checkDate: selectedDate,
			weight: health.weight,
			bmi: health.bmi,
			fat_per: health.fat_per,
		});
	}

	// データベースの初期化
	const initializeDatabase = () => {
		// DBの作成先を出力
		console.log(FileSystem.documentDirectory + "SQLite/");
	
		// DBのオープン
		const db = SQLite.openDatabase("DB.db");
	
		db.transaction((tx) => {
			// テーブルを作る
			tx.executeSql(
				// 実行したいSQL文
				`CREATE TABLE IF NOT EXISTS players(`+
					`id integer primary key not null,`+
					`name text`+
				`);`,
				null,
				// 成功時のコールバック関数
				() => { console.log("CREATE TABLE Success"); },
				// 失敗時のコールバック関数
				() => { console.log("CREATE TABLE Fail");
					return true;	// ロールバックする場合はtrueを返す
				}
			);

			// テーブルにデータを代入する
			tx.executeSql(
				`INSERT INTO `+
					`players(id, name) `+
					`VALUES(?, ?);`,
				[1, "yamada"],
				// 成功時のコールバック関数
				() => { console.log("INSERT Success"); },
				// 失敗時のコールバック関数
				() => { console.log("INSERT Fail");
					return true;	// ロールバックする場合はtrueを返す
				}
			);

			// データを取得する
			tx.executeSql(
				`SELECT * FROM players;`,
				[],
				// 成功時のコールバック関数
				(_, resultSet) => {
					// Itemsにデータを代入
					setItems(resultSet);
				},
				// 失敗時のコールバック関数
				() => {
					console.log("SELECT Fail");
					return false;	// 何もしない
				}
			);
		},
		// 失敗時のコールバック関数
		() => { console.log("Method Fail"); },
		// 成功時のコールバック関数
		() => { console.log("Method Success"); });
	};

	const showData = () => {
		for (let i = 0; i < items.rows.length; i++) {
		  const id = items.rows.item(i).id;
		  const name = items.rows.item(i).name;
		  console.log(items?.rows);
		  console.log(`${id}:${name}`);
		}
	};
	
	const deleteData = () => {
		const db = SQLite.openDatabase("DB.db");
	
		db.transaction((tx) => {
			tx.executeSql(
				'delete from players;',
				null,
				// 成功時のコールバック関数
				() => { console.log("DELETE Success"); },
				// 失敗時のコールバック関数
				() => { console.log("DELETE Fail");
					return true; // ロールバックする場合はtrueを返す
				} 
			);
		},
		// 失敗時のコールバック関数
		() => { console.log("Method Fail"); },
		// 成功時のコールバック関数
		() => { console.log("Method Success"); });
	};

	return (
		<View style={ styles.container }>
			<View style={ base_style.col }>
				<View style={[ base_style.col_inner, base_style.w20 ]}>
					<Button
						title="<<"
						onPress={{}} />
				</View>
				<View style={[ base_style.col_inner, base_style.w60 ]}>
					<Text style={[ base_style.alignCenter, styles.caption ]}>○月</Text>
				</View>
				<View style={[ base_style.col_inner, base_style.w20 ]}>
					<Button
						title=">>"
						onPress={{}} />
				</View>
			</View>
			<Text>体重グラフ</Text>
			<LineChart
				data={ data }
				width={ Dimensions.get("window").width } // from react-native
				height={ 180 }
				yAxisSuffix="kg"
				yAxisInterval={ 1 } // optional, defaults to 1
				chartConfig={{
					backgroundColor: "#efefef",
					backgroundGradientFrom: "#efefff",
					backgroundGradientTo: "#ffefef",
					decimalPlaces: 2, // optional, defaults to 2dp
					color: (opacity = 1) => `rgba(60, 60, 80, ${opacity})`,
					labelColor: (opacity = 1) => `rgba(60, 60, 80, ${opacity})`,
					style: {
						borderRadius: 16
					},
					propsForDots: {
						r: "4",
						strokeWidth: "1",
						stroke: "#808080"
					}
				}}
				bezier
			/>
			<View style={ styles.inputArea }>
				<View style={base_style.col}>
					<View style={[ base_style.col_inner, base_style.w20 ]}>
						<Text style={ styles.caption }>確認日</Text>
					</View>
					<View style={[ base_style.col_inner, base_style.w50]}>
						<Text style={ styles.input }>
							{ health.checkDate.getFullYear() }/{ health.checkDate.getMonth()+1 }/{ health.checkDate.getDate() }
						</Text>
					</View>
					<View style={[ base_style.col_inner, base_style.w30 ]}>
						<Button
							title="日付入力"
							onPress={ () => setHealth({
								isShowDatePicker: !health.isShowDatePicker,
								checkDate: health.checkDate,
								weight: health.weight,
								bmi: health.bmi,
								fat_per: health.fat_per,
							}) } />
						{ health.isShowDatePicker ?
							<DateTimePicker
								mode="date"
								display="calendar"
								value={ health.checkDate }
								locale="ja-JA"
								onChange={ changeDate } /> : null }
					</View>
				</View>
				<View style={ base_style.col }>
					<View style={[ base_style.col_inner, base_style.w20 ]}>
						<Text style={ styles.caption }>体重</Text>
					</View>
					<View style={[ base_style.col_inner, base_style.w70 ]}>
						<TextInput
							style={ styles.input }
							onChangeText={ val => setHealth({
								isShowDatePicker: health.isShowDatePicker,
								checkDate: health.checkDate,
								weight: val,
								bmi: health.bmi,
								fat_per: health.fat_per,
							}) }
							value={ health.weight } />
					</View>
					<View style={[ base_style.col_inner, base_style.w10 ]}>
						<Text style={ styles.caption }>kg</Text>
					</View>
				</View>
				<View style={ base_style.col }>
					<View style={[ base_style.col_inner, base_style.w20 ]}>
						<Text style={ styles.caption }>BMI</Text>
					</View>
					<View style={[ base_style.col_inner, base_style.w80 ]}>
						<TextInput
							style={ styles.input }
							onChangeText={ val => setHealth({
								isShowDatePicker: health.isShowDatePicker,
								checkDate: health.checkDate,
								weight: health.weight,
								bmi: val,
								fat_per: health.fat_per,
							}) }
							value={ health.bmi } />
					</View>
				</View>
				<View style={ base_style.col }>
					<View style={[ base_style.col_inner, base_style.w20 ]}>
						<Text style={ styles.caption }>体脂肪率</Text>
					</View>
					<View style={[ base_style.col_inner, base_style.w70 ]}>
						<TextInput
							style={ styles.input }
							onChangeText={ val => setHealth({
								isShowDatePicker: health.isShowDatePicker,
								checkDate: health.checkDate,
								weight: health.weight,
								bmi: health.bmi,
								fat_per: val,
							}) }
							value={ health.far_per } />
					</View>
					<View style={[ base_style.col_inner, base_style.w10 ]}>
						<Text style={ styles.caption }>％</Text>
					</View>
				</View>
				<Button
					title="登録"
					onPress={ () => {
						initializeDatabase();
						showData();
					 } } />
				<Button
					title="削除"
					onPress={ () => {
						deleteData();
					} } />
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 25,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	inputArea: {
		marginHorizontal: 10,
		paddingVertical: 20,
		paddingHorizontal: 10,
		position: 'absolute',
		bottom: 0,
		backgroundColor: '#e8e8ef',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,

		/* Shadow */
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.5,
		shadowRadius: 10,
		elecation: 10,
	},
	caption: {
		height: 30,
		justifyContent: 'center',
		textAlignVertical: 'center',
		fontSize: 15,
		fontWeight: 'bold',
	},
	input: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		height: 30,
		justifyContent: 'center',
		fontSize: 15,
		borderWidth: 1,
		borderColor: '#606060',
		borderRadius: 5,
	},
});

const base_style = StyleSheet.create({
	col: {
		flexDirection: 'row',
		paddingVertical: 5,
		width: '100%',
	},
	col_inner: {
		paddingHorizontal: 5,
		boxSizing: 'borderBox',
	},
	w5:   { width: '5%' },
	w10:  { width: '10%' },
	w15:  { width: '15%' },
	w20:  { width: '20%' },
	w25:  { width: '25%' },
	w30:  { width: '30%' },
	w33:  { width: '33.3%' },
	w35:  { width: '35%' },
	w40:  { width: '40%' },
	w45:  { width: '45%' },
	w50:  { width: '50%' },
	w55:  { width: '55%' },
	w60:  { width: '60%' },
	w65:  { width: '65%' },
	w66:  { width: '66.6%' },
	w70:  { width: '70%' },
	w75:  { width: '75%' },
	w80:  { width: '80%' },
	w85:  { width: '85%' },
	w90:  { width: '90%' },
	w95:  { width: '95%' },
	w100: { width: '100%' },
	alignCenter: { textAlign: 'center' },
});