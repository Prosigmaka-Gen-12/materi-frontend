import { useContext } from 'react'
import { UserContext } from './UserProvider'

export default function Footer () {
	const { age, name } = useContext(UserContext)

	return <>
		<hr />
		<h2>ini footer</h2>
		<i>{age}</i>
		<marquee>{name}</marquee>
	</>
}