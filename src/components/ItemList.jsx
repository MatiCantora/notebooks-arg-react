import React, { useEffect, useState } from "react"
import { Item, prod } from "./Item"
import { useParams } from "react-router-dom"
import { getItems } from "./getItems"

export const ItemList = () => {
	const [items, setItems] = useState([])
	const { categoryId } = useParams()

	// useEffect(() => {
	// 	if (categoryId === undefined) {
	// 		getItems().then((resolve) => setItems(resolve))
	// 	} else {
	// 		getItems().then((resolve) => setItems(resolve.filter((it) => it.category === categoryId)))
	// 	}
	// }, [categoryId])

	// console.log("Items 1", items)

	useEffect(() => {
		const promesa = new Promise((resolve) => {
			setTimeout(() => {
				resolve(prod)
			}, 2000)
		})
		promesa.then((resultado) => {
			setItems(resultado)
		})
	}, [setItems])

	console.log("Items List", items)

	return (
		<div className="row">
			{items.map((prod) => (
				<Item
					title={prod.title}
					description={prod.shortDescription}
					price={prod.price}
					img={prod.pictureUrl}
					key={prod.id}
					id={prod.id}
				/>
			))}
		</div>
	)
}
