import React from 'react';
import {
	StyleSheet,
	// View,
} from 'react-native';
import { Button, View } from 'native-base';

import { CameraComponent } from '../components/camera';

export const home: React.FC = (props: any) => {
	return (
		<View style={styles.container}>
			<CameraComponent {...props} />
			<Button onPress={() => props.navigation.navigate('Details')}>go to details</Button>
		</View >
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
