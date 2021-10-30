import React, { FC } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { setName, deleteName } from './actions'
import { store } from './store'

export const Home: FC<any> = (props: any) => {
	return (
		<View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
			<Text style={{ marginTop: 100 }}>My name is {props.name}.</Text>
			<View style={{ flexDirection: 'row' }}>
				<Button
					onPress={props.deleteName}
					title="deleteName"
				/>
				<Button
					onPress={() => props.setName('カバヤ')}
					title="setName"
				/>
			</View>
			{/* ストアは、以下の様なJSONで記述されています。combine reducerのキーにuserを使ったのでuserプロパティの中に、stateが保存されます。 */}
			{/* stor のstateを取り出すにはgetStateメソッドを使います。JSON.stringifyで文字列へと変換しています。 */}
			<Text style={{ marginBottom: 100 }}>現在のstore: {JSON.stringify(store.getState())}</Text>
		</View>
	)
}

// storeが持っているstateをpropsに入れて子コンポーネントに渡す
const mapStateToProps = (state: any) => ({
	name: state.user.name
})

// dispatchを呼び出す関数をpropsに入れて子コンポーネントに渡す
const mapDispatchToProps = {
	// importしたactionCreatorを記述。
	setName,
	deleteName
}

// HomeのpropsにはmapStateToPropsとmapDispatchToPropsの２つが入る
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)
