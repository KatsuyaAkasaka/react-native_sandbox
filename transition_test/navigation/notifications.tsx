import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { home } from '../screens/notifications/home';

const Stack = createStackNavigator()

// home画面の構成を作成
export const notificationNav: React.FC<any> = (props: any) => {
	return (
		<Stack.Navigator initialRouteName="Safe" screenOptions={{ headerShown: true }}>
			<Stack.Screen name="Safe" options={{ title: "セーフ" }} component={home} />
		</Stack.Navigator>
	)
};
