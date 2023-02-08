import { Text } from 'react-native'

export default function Detail ({ route }) {
	return <>
		<Text>Ini Detail</Text>
		<Text>{route.params.productID}</Text>
	</>
}