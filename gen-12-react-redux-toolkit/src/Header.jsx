import { useSelector, useDispatch } from "react-redux"
import { change_body_and_author, change_title } from "./articleSlice"

export default function Header () {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user)
	const article = useSelector((state) => state.article)

	const handleClick = () => {
		dispatch(change_title('Bambang Melahirkan Anak Tetangga'))
	}

	const handleBody = () => {
		dispatch(change_body_and_author({
			body: 'Anim deserunt dolore sunt reprehenderit pariatur ea quis dolore consequat ea reprehenderit veniam id. Ipsum ullamco tempor cupidatat do ullamco amet sint tempor non commodo aliqua ex velit. Dolore est ipsum eu est minim aliqua id minim exercitation anim eu occaecat. Ut ad deserunt duis eiusmod magna laboris.',
			author: 'Bambang Suyatno'
		}))
	}

	return <>
		<h2>Ini Header</h2>
		<h3>{user.name}</h3>
		<h3>{article.title}</h3>
		<p>{article.body}</p>
		<p>{article.author}</p>
		<button onClick={handleClick}>change article title</button>
		<button onClick={handleBody}>change article body & author</button>
		<hr />
	</>
}