import CartItem from "./CartItem"
import { useCartContext } from "../context/CartContext/CartContext"
import { Link } from "react-router-dom"
import { CartResume } from "./CartResume.jsx"

export const Cart = () => {
	const { cart, deleteCart } = useCartContext()

	let total = 0

	for (let i = 0; i < cart.length; i++) {
		const price = cart[i].price * cart[i].quantity

		total = total + price
	}

	return (
		<>
			<div className="container">
				<h1>Carrito</h1>
				<div className="row">
					<div className="col-md-8">
						{cart.length !== 0 && (
							<>
								{cart.map((product) => (
									<CartItem key={product.id} product={product} />
								))}
							</>
						)}
						{cart.length === 0 && (
							<>
								<h3>No hay productos en el carrito,</h3>
								<Link to="/" className="btn bg-principal text-white d-block w-50">
									Busquemos algunos <i className="fas fa-smile-wink fs-5"></i>
								</Link>
							</>
						)}
					</div>
					<div className="col-md-4">
						{cart.length !== 0 && (
							<>
								<div className="card cardCarrito">
									<h2>Resumen Carrito</h2>

									{cart.map((prod) => (
										<CartResume key={prod.id} prod={prod} />
									))}

									<h3>Total a pagar: ${total}</h3>

									<button className="btn btn-danger" onClick={deleteCart}>
										Limpiar Carrito
									</button>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
			)
		</>
	)
}
