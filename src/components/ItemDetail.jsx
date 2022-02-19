import React from "react"

export const ItemDetail = ({ item }) => {
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
