import React from 'react';
import { Buttons } from '../../components/buttons';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';

import { CameraComponent } from '../../components/camera';

export const home: React.FC = (props: any) => {
	return (
		<View style={styles.container}>
			<CameraComponent {...props} />
			<Buttons.toDetails {...props} title='go to top detail' />
		</View >
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
