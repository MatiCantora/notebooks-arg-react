import React, { useEffect, useState } from "react"
import { Item, prod } from "./Item"

export const ItemList = () => {
	const [items, setItems] = useState([])

	useEffect(() => {
		const promesa = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(prod)
			}, 2000)
		})
		promesa.then((resultado) => {
			console.log("resultado", resultado)
			setItems(resultado)
		})
	})

	return (
		<div className="row">
			{items.map((prod) => (
				<Item
					title={prod.title}
					description={prod.description}
					price={prod.price}
					img={prod.pictureUrl}
					key={prod.id}
				/>
			))}
		</div>
	)
}
