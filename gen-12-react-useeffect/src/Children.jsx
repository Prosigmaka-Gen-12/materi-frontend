import { useState, useEffect } from 'react'

function Children() {
	const [count, setCount] = useState(0)
	const [down, setDown] = useState(100)

	useEffect(() => {
		console.log('Aku log setiap count berubah')

		return () => {
			console.log('aku kapan jalannya?')
		}
	}, [count])

	useEffect(() => {
		console.log('Aku log setiap down berubah')

		return () => {
			console.log('aku jalan SEBELUM render berikutnya')
		}
	}, [down])

	useEffect(() => {
		console.log('Aku log di awal aja')

		return () => {
			console.log('aku log di paling akhir')
		}
	}, [])

	return <>
		<h2>yo</h2>
		<p onClick={() => setCount(count + 1)}>{count}</p>
		<p onClick={() => setDown(down - 1)}>{down}</p>
	</>
}

export default Children