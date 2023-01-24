import { useLoaderData } from "react-router-dom"

export async function productLoader (props) {
	return props.params.productId + ' - ' + props.params.bambang
}

export default function Product () {

	const idYgDiterima = useLoaderData()

	return <>
		<h1>ini halaman product</h1>
		<p>url yg dikirimkan adalah {idYgDiterima}</p>
	</>
}