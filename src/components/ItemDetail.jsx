import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getItems } from "./getItems"

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

	return (
		<>
			<div className="cardDetail mb-3">
				<div className="row no-gutters detailCenter">
					<div className="col-md-4">
						<img src={item.pictureUrl} className="card-img m-3" alt="..." />
					</div>
					<div className="col-md-8 mt-5 m-1">
						<div className="card-body">
							<h1 className="card-title detailCenter">{item.title}</h1>
							<p className="card-text text-muted mt-4">{item.longDescription}</p>
							<p className="card-text detailCenter">
								<span className="btn btn-success w-25 mt-3">${item.price}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemDetail
