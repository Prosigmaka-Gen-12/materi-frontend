import { Link, Outlet } from "react-router-dom";

export default function Layout () {
	return <>
		<Outlet />
		<hr />
		<nav>
			<Link to="/">Home</Link> &nbsp; | &nbsp;
			<Link to="/about">About</Link> &nbsp; | &nbsp;
			<Link to="/product/1">Product 1</Link> &nbsp; | &nbsp;
		</nav>
		<hr />
	</>
}