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

	console.log("Item Detail", item)

	return (
		<>
			<div className="card mb-3" style={{ width: "500px" }}>
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={item.pictureUrl} className="card-img" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{item.title}</h5>
							<p className="card-text">
								Descripción: <br />
								{item.longDescription}
							</p>
							<p className="card-text">
								<small className="text-muted">${item.price}</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemDetail
