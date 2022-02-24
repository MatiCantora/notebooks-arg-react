import React from "react"
import logo from "./img/logoReact.svg"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
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
						<Link className="navbarLogo" to="/">
							<img src={logo} height="25" alt="MDB Logo" loading="lazy" />
						</Link>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link" to="/inicio">
									Inicio
								</Link>
							</li>
							<div class="dropdown">
								<Link to="/category/productos" className="dropbtn">
									Productos
								</Link>
								<div className="dropdown-content">
									<Link to="/category/notebook">Notebooks</Link>
									<Link to="/category/mouse">Mouses</Link>
									<Link to="/category/teclado">Teclados</Link>
								</div>
							</div>
							<li className="nav-item">
								<Link className="nav-link" to="/contacto">
									Contacto
								</Link>
							</li>
						</ul>
					</div>

					<Link to="/Cart">
						<CartWidget />
					</Link>
				</div>
			</nav>
		</>
	)
}

export default Navbar
