import { Link, Outlet } from "react-router-dom";

export default function Layout () {
	return <>
		<nav>
			<Link to="/">Home</Link> &nbsp; | &nbsp;
			<Link to="/about">About</Link> &nbsp; | &nbsp;
		</nav>
		<hr />
		<Outlet />
	</>
}