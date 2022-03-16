import React from "react"
import "../App.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext/CartContext"

export const CartWidget = () => {
	const [cartClick, setCartClick] = useState(false)

	const { cart } = useCartContext()
	let itemsCartWidg = 0

	for (let i = 0; i < cart.length; i++) {
		const cant = cart[i].quantity

		itemsCartWidg = itemsCartWidg + cant
	}

	return (
		<>
			<div onClick={(e) => setCartClick(!cartClick)}>
				<Link to="/cart" className="cartWidget">
					<span className="cartCant">{itemsCartWidg}</span>
					<i className="fas fa-shopping-cart cart-style"></i>
				</Link>

				{cartClick ? (
					<div className="card-click">
						<Link to="/cart" className="btn bg-principal text-white"></Link>
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	)
}

export default CartWidget
