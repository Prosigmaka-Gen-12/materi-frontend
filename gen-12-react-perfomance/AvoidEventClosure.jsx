export default function AvoidEventClosure () {
	const handleSomething = (arg1, arg2) => () => {
		console.log('your action')
		console.log(arg1)
		console.log(arg2)
	}

	return <>
		<button onClick={handleSomething('Hai', 'Bambang')}>
			test button
		</button>
	</>
}