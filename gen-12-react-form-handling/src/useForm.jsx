import { useState } from 'react'

function useForm (defaultValue) { // hook / composable
	const [formInput, setFormInput] = useState(defaultValue)

	const handleInput = (type, value) => {
		// cara 1
		const copyFormInput = { ...formInput }
		copyFormInput[type] = value
		setFormInput(copyFormInput)

		// cara 2
		// setFormInput({ ...formInput, [type]: value })
	}

	return {
		formInput,
		handleInput
	}
}

export default useForm