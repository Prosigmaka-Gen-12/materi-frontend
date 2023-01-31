import { useContext } from 'react'
import { UserContext } from './UserProvider'

export default function Header () {
	const ContextDipakai = useContext(UserContext)

	return <>
		<h2>ini header</h2>
		<h3>{ContextDipakai.name}</h3>
		<button onClick={ContextDipakai.changeIdentity}>ganti identitas</button>
		<hr />
	</>
}