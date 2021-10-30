import React, { FC } from 'react';
import { Button, Text, View, NativeBaseProvider } from 'native-base';
import { styles } from '../style';

export const HomeScreen: FC = (props: any) => {
	console.log(Object.keys(props))
	return (
		<NativeBaseProvider>
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app! Open up App.js to start working on your app!</Text>
				<Text>Hello World!</Text>
				<Button onPress={() => props.navigation.navigate('Details')} >
					<Text>Go to Details</Text>
				</Button>
			</View>
		</NativeBaseProvider>
	);
}
