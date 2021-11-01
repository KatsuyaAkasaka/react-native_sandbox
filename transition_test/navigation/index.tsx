import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { topNav } from './top';
import { mypageNav } from './mypage';

const Tab = createBottomTabNavigator();

// 全体の画面構成をここで作成してNavigationContainerで囲む
const nav: React.FC = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={{ headerShown: false }}>
				<Tab.Screen name="top" component={topNav} />
				<Tab.Screen name="mypage" component={mypageNav} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}
export default nav
