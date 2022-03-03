import CartItem from "./CartItem"
import { useCartContext } from "../context/CartContext/CartContext"
import { Link } from "react-router-dom"

export const Cart = () => {
	const { cart, deleteCart } = useCartContext()

	return (
		<>
			<h1 className="d-flex justify-content-center mt-3">Cart</h1>

			{cart.length !== 0 && (
				<>
					{cart.map((product) => (
						<CartItem key={product.id} product={product} />
					))}
					<div className="d-flex justify-content-center align-items-center w-100">
						<button className="btn cartButton" onClick={deleteCart}>
							Limpiar Carrito
						</button>
						<Link className="btn cartButton" to="/">
							Seguir Comprando
						</Link>
					</div>
				</>
			)}
			{cart.length === 0 && <h2>No hay productos en el carrito</h2>}
		</>
	)
}
