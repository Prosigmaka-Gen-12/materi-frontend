import { useContext } from 'react'
import { UserContext } from './UserProvider'

export default function Footer () {
	const ContextDipakai = useContext(UserContext)

	return <>
		<hr />
		<h2>ini footer</h2>
		<i>{ContextDipakai.age}</i>
	</>
}