import React from "react"
import logo from "./logo.png"

let stylesBtn = {
	paddingTop: 10,
	paddingLeft: 30,
}

const Navbar = () => {
	return (
		<div>
			<div>
				<a>
					<img src={logo} />
				</a>
			</div>
			<nav>
				<a style={stylesBtn}>Inicio</a>
				<a style={stylesBtn}>Productos</a>
				<a style={stylesBtn}>Contacto</a>
			</nav>
		</div>
	)
}

export default Navbar
