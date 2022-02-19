import React, { useState, useEffect } from "react"
import { ItemDetail } from "./ItemDetail"
import { prod } from "./Item"

const getItems = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(prod)
		}, 2000)
	})
}

export const ItemDetailContainer = () => {
	const [item, SetItem] = useState([])

	useEffect(() => {
		getItems().then((resolve) => SetItem(resolve))
	}, [item])

	const itemFiltrado = item.filter((item) => item.price > 500)

	return (
		<>
			{itemFiltrado.map((itemDetail) => (
				<ItemDetail item={itemDetail} key={itemDetail.id} />
			))}
		</>
	)
}
