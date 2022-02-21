import React from "react"
import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
// import { ItemDetailContainer } from "./components/ItemDetailContainer"
import Footer from "./components/Footer"
import "./App.css"

function App() {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div>
				<ItemListContainer />
			</div>
			{/* <div>
				<ItemDetailContainer />
			</div> */}
			<div>
				<Footer />
			</div>
		</div>
	)
}

export default App
