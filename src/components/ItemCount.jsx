import React, { useState } from "react"
import { ButtonShop } from "./ButtonShop"

export const ItemCount = ({ initial, stock, onAdd, count }) => {
	const [cantidad, setCantidad] = useState(initial)
	const handleAdd = () => {
		if (cantidad < stock) {
			setCantidad(cantidad + 1)
		}
	}
	const handleRemove = () => {
		if (cantidad > initial) {
			setCantidad(cantidad - 1)
		}
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
							<ButtonShop onAdd={onAdd} count={count} cantidad={cantidad} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
