import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext/CartContext"
import { useAppContext } from "../context/AppContext/AppContext"

export const ItemCount = ({ initial, product, onAdd, count }) => {
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
			console.log("NO SE PUDO AGREGAR AL CARRITO!!")
			return
		}

		addToCart(findProductInDB, cantidad)
		onAdd()
	}

	const [show, setShow] = useState(true)

	return (
		<>
			<div className="container">
				<button className="btn bg-dark text-white " onClick={() => setShow((s) => !s)}>
					Comprar
				</button>
				<div>
					<div style={{ display: show ? "none" : "block" }}>
						<div className="quantity mt-2">
							<button onClick={handleRemove} className="btn" type="button">
								-
							</button>
							<label className="textoCant">{cantidad}</label>
							<button onClick={handleAdd} className="btn" type="button">
								+
							</button>
						</div>
						<div>
							<button
								className="btn bg-dark text-white btn-block btn-carrito "
								onClick={() => handleClick(product.id, cantidad)}
							>
								{count === 0 ? (
									"Agregar al Carrito"
								) : (
									<Link to={"/cart"} className="text-white">
										Terminar Compra
									</Link>
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
