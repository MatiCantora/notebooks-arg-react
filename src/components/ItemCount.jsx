import React, { useState } from "react"
import { useCartContext } from "../context/CartContext/CartContext"
import { useAppContext } from "../context/AppContext/AppContext"
import Swal from "sweetalert2"

export const ItemCount = ({ initial, product, onAdd }) => {
	const [cantidad, setCantidad] = useState(initial)

	const handleAdd = () => {
		if (cantidad < product.stock) {
			setCantidad(cantidad + 1)
		}
	}
	const handleRemove = () => {
		if (cantidad > initial) {
			setCantidad(cantidad - 1)
		}
	}
	//Context
	const { addToCart } = useCartContext()
	const { products } = useAppContext()

	function handleClick(id, cantidad) {
		const findProductInDB = products.find((prod) => prod.id === id)

		if (!findProductInDB) {
			new Swal({
				title: "Hubo un error en tus datos",
				text: "El producto no pudo ser añadido",
				icon: "error",
				button: "Ok",
			})
			return
		}
		addToCart(findProductInDB, cantidad)
		onAdd()
	}

	return (
		<>
			<div className="container">
				<div className="quantity mt-2">
					<button className="btn btn-block" onClick={handleRemove}>
						<i className="fas fa-minus"></i>
					</button>
					<label className="textoCant">{cantidad}</label>
					<button className="btn btn-block" onClick={handleAdd}>
						<i className="fas fa-plus"></i>
					</button>
				</div>

				<div className="agreg-carrito">
					<button
						className="btn bg-dark text-white btn-block btn-carrito"
						onClick={() => handleClick(product.id, cantidad)}
					>
						Agregar al Carrito
					</button>
				</div>
			</div>
		</>
	)
}
