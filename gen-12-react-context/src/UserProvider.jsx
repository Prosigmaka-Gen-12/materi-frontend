import { createContext, useState } from "react"

export const UserContext = createContext()

export default function UserProvider ({ children }) {
	const [name, setName] = useState('Bambang')
	const [age, setAge] = useState(17)

	const changeIdentity = () => {
		setName('Laurent')
		setAge(32)
	}

	const shareValue = {
		changeIdentity,
		name,
		age,
		setName,
		setAge,
		contohKeyBiasa: 'Hai Bambang'
	}

	return <UserContext.Provider value={shareValue}>
		{children}
	</UserContext.Provider>
}