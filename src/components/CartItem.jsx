import React from "react"
import { useCartContext } from "../context/CartContext/CartContext"

export default function CartItem({ product }) {
	const { deleteFromCart } = useCartContext()

	return (
		<>
			<div className="col">
				<div className="card">
					<img src={product.pictureUrl} alt="Avatar" />
					<div className="container">
						<h3 className="text-justify mt-2">{product.title}</h3>
						<h6 className="m-1 text-muted">{product.shortDescription}</h6>

						<div className="d-flex flex-row align-items-center">
							<p className="btn btn-success w-75 m-1" to="/Cart">
								${product.price * product.quantity}
							</p>
							<button className="btn btn-danger w-75 m-1" onClick={() => deleteFromCart(product)}>
								Eliminar
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
