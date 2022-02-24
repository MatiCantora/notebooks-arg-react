import React, { useEffect, useState } from "react"
import { Item, prod } from "./Item"
import { useParams } from "react-router-dom"
import { getItems } from "./getItems"

const ItemList = () => {
	const [item, setItem] = useState([])
	const { categoryId } = useParams()

	useEffect(() => {
		if (categoryId === undefined) {
			getItems().then((resolve) => setItem(resolve))
		} else {
			getItems().then((resolve) => setItem(resolve.filter((it) => it.category === categoryId)))
		}
	}, [categoryId])

	return (
		<div className="row">
			{item.map((prod) => (
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
