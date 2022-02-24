import React from "react"
import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetail from "./components/ItemDetail"
import Contacto from "./components/Contacto/Contacto"
import Inicio from "./components/Inicio/Inicio"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/contacto" element={<Contacto />} />
				<Route path="/inicio" element={<Inicio />} />
				<Route path="/category/:categoryId" element={<ItemListContainer />} />
				<Route path="/item/:itemId" element={<ItemDetail />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
