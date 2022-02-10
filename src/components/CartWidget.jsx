import React from "react"
import "../App.css"

function click(e) {
	e.preventDefault()
	console.log("Compraste")
}

const Cart = () => {
	return (
		<button className="cart" onClick={click}>
			<i className="fa-solid fa-cart-shopping"></i>
		</button>
	)
}

export default Cart
