import { Text, TouchableOpacity } from 'react-native'

export default function Home({ navigation }) {
	return <>
		<Text>Ini Home</Text>
		<TouchableOpacity onPress={() => navigation.navigate('Detail', { productID: 5 })}>
			<Text>
				ke detail
			</Text>
		</TouchableOpacity>
	</>
}