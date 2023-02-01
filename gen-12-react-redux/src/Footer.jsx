import { useSelector } from "react-redux"

export default function Footer () {
	const { name, age } = useSelector(state => state.user)

	return <>
		<hr />
		<h2>Ini Footer</h2>
		<h3>{name}</h3>
		<h3>{age}</h3>
	</>
}