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
				<Route exact path="/" element={<ItemListContainer />} />
				<Route exact path="/contacto" element={<Contacto />} />
				<Route exact path="/inicio" element={<Inicio />} />
				<Route exact path="/category/:categoryId" element={<ItemListContainer />} />
				<Route exact path="/item/:itemId" element={<ItemDetail />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
