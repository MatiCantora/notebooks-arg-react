import React from "react"
import logo from "./img/logoReact.png"
import Cart from "./CartWidget"
import "../App.css"

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<img className="navbarLogo" src={logo} />
				<div>
					<a className="navbarButtons">Inicio</a>
					<a className="navbarButtons">Productos</a>
					<a className="navbarButtons">Contacto</a>
				</div>
				<div className="navbarCart">
					<Cart />
				</div>
			</nav>
		</>
	)
}

export default Navbar
