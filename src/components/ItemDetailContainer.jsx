import React, { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { prod } from "./Item"

const getItems = () => {
	const promesa = new Promise((resolve) => {
		resolve(prod)
	}, 2000)
}

export const ItemDetailContainer = () => {
	const [item, SetItem] = useState([])

	useEffect(() => {
		getItems().then((resolve) => SetItem(resolve))
	}, [])

	return <ItemDetail />
}
