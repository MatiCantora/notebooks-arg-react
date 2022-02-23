import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getItems } from "./getItems"

export const ItemDetailContainer = () => {
	const [item, setItem] = useState([])

	const { itemId } = useParams()

	useEffect(() => {
		if (itemId === undefined) {
			getItems().then((resolve) => setItem(resolve))
		} else {
			getItems().then((resolve) => setItem(resolve.filter((it) => it.id === itemId)))
		}
	}, [itemId])

	console.log(itemId)

	return (
		<>
			<div className="container mt-2">
				{item.map((itemDetail) => (
					<ItemDetail id={itemId} key={itemDetail.id} />
				))}
			</div>
		</>
	)
}
