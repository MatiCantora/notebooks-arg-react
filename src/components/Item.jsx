import React from "react"
import { Link } from "react-router-dom"
import "../App.css"

export const prod = [
	{
		id: "1",
		title: "React 1",
		longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing element lorem",
		shortDescription: "Programa con React",
		price: "890",
		pictureUrl: "https://picsum.photos/id/7/400/300",
		stock: "3",
	},
	{
		id: "2",
		title: "React 2",
		longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing element lorem",
		shortDescription: "Programa con React",
		price: "180",
		pictureUrl: "https://picsum.photos/id/8/400/300",
		stock: "9",
	},
	{
		id: "3",
		title: "React 3",
		longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing element lorem",
		shortDescription: "Programa con React",
		price: "130",
		pictureUrl: "https://picsum.photos/id/10/400/300",
		stock: "4",
	},
	{
		id: "4",
		title: "React 4",
		longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing element lorem",
		shortDescription: "Programa con React",
		price: "200",
		pictureUrl: "https://picsum.photos/id/11/400/300",
		stock: "11",
	},
	{
		id: "5",
		title: "React 5",
		longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing element lorem",
		shortDescription: "Programa con React",
		price: "120",
		pictureUrl: "https://picsum.photos/id/12/400/300",
		stock: "6",
	},
	{
		id: "6",
		title: "React 6",
		longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing element lorem",
		shortDescription: "Programa con React",
		price: "170",
		pictureUrl: "https://picsum.photos/id/13/400/300",
		stock: "2",
	},
]

export const Item = ({ id, title, description, price, img }) => {
	// const handleInfo = () => {}

	// const handleBuy = () => {}

	return (
		<div className="col">
			<div className="card">
				<img src={img} alt="Avatar" />
				<div className="container">
					<h3 className="mt-2">{title}</h3>
					<p>{description}</p>
					<div className="cardBtn">
						<Link to={`/item/${id}`} className="btn btn-primary m-1 w-50">
							Ver mas
						</Link>
						<button className="btn btn-primary m-1 w-50" /*onClick={handleBuy}*/>${price}</button>
					</div>
				</div>
			</div>
		</div>
	)
}
