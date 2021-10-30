import React, { FC } from 'react';
import { WarningOutlineIcon, FormControl, FlatList, Button, Text, View, NativeBaseProvider, Input, Box } from 'native-base';
import { styles } from '../style';

const Item: FC<{ id: number, text: string, states: { todos: any[], setTodos: any } }> = ({ id, text, states }) => {
	return (
		<View style={styles.item}>
			<Text style={styles.todocontent}>{text}</Text>
			<Button style={styles.tododelete} onPress={() => {
				states.setTodos(states.todos.filter(todo => todo.id !== id))
			}}>
				<Text>del</Text>
			</Button>
		</View>
	);
}

export const DetailsScreen: FC = (props: any) => {
	const [text, onChangeText] = React.useState<string>("");
	const [todos, setTodos] = React.useState<{ id: number, text: string }[]>([]);
	const [id, setID] = React.useState<number>(1);
	const [valid, setValid] = React.useState<boolean>(true);
	return (
		<NativeBaseProvider>
			<View style={styles.container}>
				<Box
					style={{ flex: 1, }}
				>
					<FormControl
						isInvalid={!valid}
						w={{
							base: "75%",
							md: "25%",
						}}
					>
						<Input
							style={{ height: 40, borderColor: 'gray' }}
							placeholder="input todo..."
							onChangeText={t => {
								setValid(true)
								onChangeText(t)
							}}
							value={text}
						/>
						<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
							todoは1文字以上入力してください
						</FormControl.ErrorMessage>
					</FormControl>
				</Box>
				<Button
					style={{
						flex: 1,
					}}
					onPress={() => {
						if (text.length < 1) {
							setValid(false)
							return
						}
						onChangeText("")
						setTodos([...todos, { id: id, text: text }])
						setID(id + 1)
					}}
				>
					<Text>registration</Text>
				</Button>
				<Box style={styles.list}>
					<FlatList
						data={todos}
						renderItem={({ item }) => <Item id={item.id} text={item.text} states={{ todos, setTodos }} />}
						keyExtractor={item => item.id}
					/>
				</Box>
				<Box style={{
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'flex-start'
				}}>
					<Button
						onPress={() => props.navigation.navigate('Home')}
					>
						<Text>back</Text>
					</Button>
				</Box>
			</View>
		</NativeBaseProvider >
	);
}
