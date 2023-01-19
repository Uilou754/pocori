import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpeningScreen from './screens/OpeningScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import MyPageScreen from './screens/MyPageScreen';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				headerStyle: {
					backgroundColor: '#555',
				},
				headerTintColor: {},
				headerTitleStyle: {
					color: '#fff',
					fontSize: 14,
				},
			}}>
				<Stack.Screen name="Opening" component={OpeningScreen} />
				<Stack.Screen name="SignUp" component={SignUpScreen} />
				<Stack.Screen name="SignIn" component={SignInScreen} />
				<Stack.Screen name="MyPage" component={MyPageScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;