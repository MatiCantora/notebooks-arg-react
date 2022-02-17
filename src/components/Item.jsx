import React from "react"

export const Item = ({ id, title, description, price, img }) => {
	return (
		<div className="card" style={{ width: 300 }}>
			<img className="card-img-top" src={img} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<p className="card-text">${price}</p>
				<a href="#" className="btn btn-primary">
					+ Info
				</a>
			</div>
		</div>
	)
}
