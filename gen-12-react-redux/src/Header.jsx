import { useSelector } from "react-redux"

export default function Header () {
	const user = useSelector((state) => state.user)

	return <>
		<h2>Ini Header</h2>
		<h3>{user.name}</h3>
		<hr />
	</>
}