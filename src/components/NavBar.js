import React from "react"
import logo from "./img/logoReact.png"
import Cart from "./CartWidget"
import "../App.css"

const Navbar = () => {
	return (
		<div>
			<nav className="navbar">
				<img className="navbarLogo" src={logo} />
				<div>
					<a className="navbarButtons">Inicio</a>
					<a className="navbarButtons">Productos</a>
					<a className="navbarButtons">Contacto</a>
				</div>
				<Cart />
			</nav>
		</div>
	)
}

export default Navbar
