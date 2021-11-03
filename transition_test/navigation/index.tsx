import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { topNav } from './top';
import { mypageNav } from './mypage';
import { notificationNav } from './notifications';
import { drawerNameObject, tabNameObject } from '../constants/navigation';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
// 全体の画面構成をここで作成してNavigationContainerで囲む
const tab: React.FC = () => {
	return <Tab.Navigator initialRouteName={tabNameObject.top} screenOptions={{ headerShown: false }} >
		<Tab.Screen name={tabNameObject.top} component={topNav} />
		<Tab.Screen name={tabNameObject.mypage} component={mypageNav} />
	</Tab.Navigator>
}
const nav: React.FC = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName={drawerNameObject.home} screenOptions={{ headerShown: false }}>
				<Drawer.Screen name={drawerNameObject.home} component={tab} />
				<Drawer.Screen name={drawerNameObject.notification} component={notificationNav} />
			</Drawer.Navigator>
		</NavigationContainer >
	)
}
export default nav
