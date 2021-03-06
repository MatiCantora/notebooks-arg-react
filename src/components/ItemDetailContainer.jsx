import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"
import { useAppContext } from "../context/AppContext/AppContext"
import { getItem } from "../services/firebase"

export const ItemDetailContainer = () => {
	const { products } = useAppContext()

	const [productClicked, setProductClicked] = useState({})

	const { id } = useParams()

	useEffect(() => {
		getItem(id)
			.then((item) => setProductClicked({ ...item.data(), id: item.id }))
			.then(() => console.log(productClicked))
	}, [id, products])

	const [terminar, setTerminar] = useState(false)
	const onAdd = () => {
		setTerminar(true)
	}

	return (
		<div className="container mt-3">
			<ItemDetail product={productClicked} onAdd={onAdd} terminar={terminar} />
		</div>
	)
}
