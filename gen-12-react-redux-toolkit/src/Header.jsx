import { useSelector, useDispatch } from "react-redux"
import { change_title } from "./articleSlice"

export default function Header () {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user)
	const article = useSelector((state) => state.article)

	const handleClick = () => {
		dispatch(change_title('Bambang Melahirkan Anak Tetangga'))
	}

	return <>
		<h2>Ini Header</h2>
		<h3>{user.name}</h3>
		<h3>{article.title}</h3>
		<button onClick={handleClick}>change article title</button>
		<hr />
	</>
}