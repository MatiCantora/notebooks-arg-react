import React from "react"

export const ItemDetail = ({ item }) => {
	return (
		<>
			<div>
				<div className="card">
					<img src={item.img} alt="Avatar" />
					<div className="container">
						<h3 className="mt-2">{item.title}</h3>
						<p>{item.description}</p>
						<div className="cardBtn">
							<button className="btn btn-primary m-1 w-50" /*onClick={handleInfo}*/>+ Info</button>
							<button className="btn btn-primary m-1 w-50" /*onClick={handleBuy}*/>${item.price}</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
