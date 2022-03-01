import React from "react"
import { Link } from "react-router-dom"

export const ButtonShop = ({ onAdd, count, cantidad }) => {
	return (
		<>
			<button className="btn bg-dark text-white btn-block btn-carrito " onClick={() => onAdd(cantidad)}>
				{count === 0 ? (
					"Agregar al Carrito"
				) : (
					<Link to={"/cart"} className="text-white">
						Terminar Compra
					</Link>
				)}
			</button>
		</>
	)
}
