import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';

import { SafeAreaView } from 'react-native-safe-area-context';



export const home: React.FC = (props: any) => {
	return (
		< SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }} >
			<View style={styles.container}>
				<Text>hogehoge</Text>
			</View >
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
