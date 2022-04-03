import React from "react"
import { ItemCount } from "./ItemCount"
import { Link } from "react-router-dom"

export const ItemDetail = ({ product, terminar, onAdd }) => {
	return (
		<>
			<div className="cardDetail mb-3 container">
				<div className="row ">
					<div className="col-md-4">
						<img src={product.picUrl} className="card-img m-3" alt="..." />
					</div>
					<div className="col-md-8 mt-5">
						<div className="card-body">
							<h1 className="card-title detailCenter">{product.title}</h1>
							<p className="card-text text-muted mt-4 text-description">{product.description}</p>
							<p className="card-text detailCenter">
								<span id="show" className="btn btn-success w-25 mt-3">
									${product.price}
								</span>
							</p>
							<div className="itemCount">
								{terminar ? (
									<>
										<Link to={"/cart"} className="btn bg-dark text-white btn-carrito mt-2">
											Terminar Compra
										</Link>
									</>
								) : (
									<ItemCount product={product} initial={1} onAdd={onAdd} />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemDetail
