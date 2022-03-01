import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getItems } from "./getItems"
import { ItemCount } from "./ItemCount"

const ItemDetail = () => {
	const [item, setItem] = useState({})
	const { itemId } = useParams()

	useEffect(() => {
		if (itemId === undefined) {
			getItems().then((resolve) => setItem(resolve))
		} else {
			getItems().then((resolve) => setItem(resolve[itemId]))
		}
	}, [itemId])
	// getItems(itemId).then((resolve) => setItem(resolve))},[itemId])

	const [count, setCount] = useState(0)

	const handleCount = (cant) => {
		setCount(cant)
		console.log(`Se almacenó ${cant} cantidad de ${item.title}`)
	}

	return (
		<>
			<div className="cardDetail mb-3 container">
				<div className="row ">
					<div className="col-md-4">
						<img src={item.pictureUrl} className="card-img m-3" alt="..." />
					</div>
					<div className="col-md-8 mt-5">
						<div className="card-body">
							<h1 className="card-title detailCenter">{item.title}</h1>
							<p className="card-text text-muted mt-4">{item.longDescription}</p>
							<p className="card-text detailCenter">
								<span id="show" className="btn btn-success w-25 mt-3">
									${item.price}
								</span>
							</p>
							<div className="itemCount">
								<ItemCount stock={item.stock} initial={1} onAdd={handleCount} count={count} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemDetail
