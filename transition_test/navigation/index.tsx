import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { topNav } from './top';
import { mypageNav } from './mypage';
import { notificationNav } from './notifications';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
// 全体の画面構成をここで作成してNavigationContainerで囲む
const tab: React.FC = () => {
	return <Tab.Navigator screenOptions={{ headerShown: false }} >
		<Tab.Screen name="top" component={topNav} />
		<Tab.Screen name="mypage" component={mypageNav} />
	</Tab.Navigator>
}
const nav: React.FC = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName='Notifications' screenOptions={{ headerShown: false }}>
				<Drawer.Screen name="Home" component={tab} />
				<Drawer.Screen name="Notifications" component={notificationNav} />
			</Drawer.Navigator>
		</NavigationContainer >
	)
}
export default nav
