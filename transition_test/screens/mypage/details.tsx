import React from 'react';
import { Buttons } from '../../components/buttons';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';

import { CameraComponent } from '../../components/camera';

export const details: React.FC = (props: any) => {
	return (
		<View style={styles.container}>
			<CameraComponent {...props} />
			<Buttons.back {...props} title='back to mypage home' />
		</View >
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
