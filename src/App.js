import React from "react"
import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetail from "./components/ItemDetail"
import Contacto from "./components/Contacto/Contacto"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<ItemListContainer />} />
				<Route exact path="/contacto" element={<Contacto />} />
				<Route exact path="/category/:categoryId" element={<ItemListContainer />} />
				<Route exact path="/item/:itemId" element={<ItemDetail />} />
				<Route exact path="/cart" element={<Cart />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
