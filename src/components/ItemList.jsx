import React, { useEffect, useState } from "react"
import { Item } from "./Item"

const prod = [
	{
		id: "1",
		title: "React 1",
		description: "Programa con React",
		price: "150",
		pictureUrl: "https://picsum.photos/id/7/200/300",
	},
	{
		id: "2",
		title: "React 2",
		description: "Programa con React",
		price: "180",
		pictureUrl: "https://picsum.photos/id/8/200/300",
	},
	{
		id: "3",
		title: "React 3",
		description: "Programa con React",
		price: "130",
		pictureUrl: "https://picsum.photos/id/10/200/300",
	},
]

export const ItemList = () => {
	const [items, setItems] = useState([])

	useEffect(() => {
		setTimeout(() => {
			setItems(prod)
		}, 2000)
	}, [])

	// useEffect(() => {
	// 	const promesa = new Promise((resolve, reject) => {
	// 		setTimeout(() => {
	// 			resolve(prod)
	// 		}, 2000)
	// 	})
	// 	promesa.then((resultado) => {
	// 		console.log("resultado", resultado)
	// 		setItems(resultado)
	// 	})
	// })
	// console.log("items", items)

	return (
		<div className="row ">
			{items.map((prod) => (
				<Item title={prod.title} price={prod.price} img={prod.pictureUrl} key={prod.id} />
			))}
		</div>
	)
}
