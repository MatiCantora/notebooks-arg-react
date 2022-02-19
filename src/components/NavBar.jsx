import React from "react"
import logo from "./img/logoReact.svg"
import Cart from "./CartWidget"
import "../App.css"

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-mdb-toggle="collapse"
						data-mdb-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<i className="fas fa-bars"></i>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<a className="navbarLogo" href="#">
							<img src={logo} height="25" alt="MDB Logo" loading="lazy" />
						</a>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link" href="#">
									Inicio
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Productos
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contacto
								</a>
							</li>
						</ul>
					</div>

					<div>
						<Cart />
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
