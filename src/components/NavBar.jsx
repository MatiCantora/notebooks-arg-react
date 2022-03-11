import React from "react"
import logo from "./img/logoReact.svg"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import "../App.css"
import { useCartContext } from "../context/CartContext/CartContext"

const Navbar = () => {
	const { cart } = useCartContext()
	console.log(cart)

	cart.map((item) => console.log(item.quantity))

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
								<Link className="nav-link" to="/category/notebook">
									Notebooks
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/category/mouse">
									Mouses
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/category/teclado">
									Teclados
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contacto">
									Contacto
								</Link>
							</li>
						</ul>
					</div>

					{cart.length === 0 ? (
						<></>
					) : (
						// <Link to="/cart" className="cartWidget"><CartWidget/></Link>
						<CartWidget />
					)}
				</div>
			</nav>
		</>
	)
}

export default Navbar
