import React from "react"
import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import ItemDetail from "./components/ItemDetail"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Cart from "./components/Cart"
import "./App.css"

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/category/:categoryId" element={<ItemListContainer />} />
				<Route path="/item/:itemId" element={<ItemDetail />} />
				{/* <Route path="/Cart" element={<Cart />} /> */}
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
