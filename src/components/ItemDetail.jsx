import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getItems } from "./getItems"
import { ItemCount } from "./ItemCount"
import { useCartContext } from "../context/CartContext/CartContext"
import { useAppContext } from "../context/AppContext/AppContext"

export const ItemDetail = () => {
	const [products, setProducts] = useState({})
	const { itemId } = useParams()

	useEffect(() => {
		if (itemId === undefined) {
			getItems().then((resp) => setProducts(resp))
		} else {
			getItems().then((resp) => setProducts(resp.filter((item) => item.id === itemId)))
			getItems().then((resp) => setProducts(resp[itemId]))
		}
	}, [itemId])
	const [count, setCount] = useState(0)

	//const { products, setProducts } = useAppContext();

	const onAdd = (cant) => {
		setCount(cant)
	}

	return (
		<>
			<div className="cardDetail mb-3 container">
				<div className="row ">
					<div className="col-md-4">
						<img src={products.pictureUrl} className="card-img m-3" alt="..." />
					</div>
					<div className="col-md-8 mt-5">
						<div className="card-body">
							<h1 className="card-title detailCenter">{products.title}</h1>
							<p className="card-text text-muted mt-4">{products.longDescription}</p>
							<p className="card-text detailCenter">
								<span id="show" className="btn btn-success w-25 mt-3">
									${products.price}
								</span>
							</p>
							<div className="itemCount">
								<ItemCount product={products} initial={1} onAdd={onAdd} count={count} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemDetail
