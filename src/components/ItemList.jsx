import React, { useEffect, useState } from "react"
import { Item } from "./Item"
import { useParams } from "react-router-dom"
import { getItems } from "./getItems"

export const ItemList = () => {
	const [products, setProducts] = useState([])
	const { categoryId } = useParams()

	useEffect(() => {
		if (categoryId === undefined) {
			getItems().then((resp) => setProducts(resp))
		} else {
			getItems().then((resp) => setProducts(resp.filter((it) => it.category === categoryId)))
		}
	}, [categoryId])

	return (
		<div className="row">
			{products.map((prod) => (
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

export default ItemList
