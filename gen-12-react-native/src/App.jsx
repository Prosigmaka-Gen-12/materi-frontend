import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/Home'
import Detail from './pages/Detail'

const { Navigator, Screen } = createNativeStackNavigator()

export default function App () {
	return <NavigationContainer>
		<Navigator>
			<Screen name="Home" component={Home} />
			<Screen name="Detail" component={Detail} />
		</Navigator>
	</NavigationContainer>
}