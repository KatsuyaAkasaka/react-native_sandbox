import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { home } from '../screens/home';

const Stack = createStackNavigator()

// home画面の構成を作成
export const topNav: React.FC<any> = (props: any) => {
	return (
		<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
			<Stack.Screen name="Home" options={{ title: "トップ" }} component={home} />
			<Stack.Screen name="Details" options={{ title: "トップ詳細" }} component={home} />
		</Stack.Navigator>
	)
};
