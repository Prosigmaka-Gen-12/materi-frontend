import { useState } from 'react'
import { ScrollView, View, Text, ActivityIndicator, Button } from 'react-native'

export default function App () {
	const [name, setName] = useState('Bambang')

	return <ScrollView style={styles.container}>
		<View style={styles.children1}>
			<Text style={styles.name}>{name}</Text>
		</View>

		<View style={styles.children2}>
			<ActivityIndicator color="purple" size="large" />
			<Button
				title='Test Hook State'
				onPress={() => setName('Siska')} />
		</View>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>
		<Text style={styles.name}>{name}</Text>

	</ScrollView>
}

const styles = {
	container: {
		flex: 1,
	},
	children1: {
		flex: 2,
		backgroundColor: 'khaki',
		alignItems: 'center'
	},
	children2: {
		flex: 1,
		backgroundColor: 'salmon'
	},
	name: {
		fontSize: 30,
		fontWeight: 700,
		color: 'purple'
	}
}