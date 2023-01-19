function useForm () { // hook / composable
	const [formInput, setFormInput] = useState({
		email: 'b@mbang.com',
		birthDate: '2000-05-04',
		religion: 'islam',
		gender: 'l',
	})

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