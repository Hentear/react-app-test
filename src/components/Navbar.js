import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="nav-wrapper red darken-3">
			<div className="container">
				<a className="logo">CS411 Home Page</a>
				<ul className ="right">
					<li><Link to="/home">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/example">Example</Link></li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;