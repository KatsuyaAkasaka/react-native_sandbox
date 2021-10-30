import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { HomeScreen } from './home';
import { DetailsScreen } from './todo';

const RootStack = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
		},
		Details: {
			screen: DetailsScreen,
		},
	},
	{
		initialRouteName: 'Home',
	}
);

export const AppContainer = createAppContainer(RootStack);
