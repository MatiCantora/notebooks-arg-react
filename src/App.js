import React from "react"
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

import Navbar from "./components/NavBar"
import Footer from "./components/Footer"
import Contacto from "./components/Contacto/Contacto"

import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { Cart } from "./components/Cart"

import CartContextProvider from "./context/CartContext/CartContext"
import AppContextProvider from "./context/AppContext/AppContext"

function App() {
	return (
		<AppContextProvider>
			<CartContextProvider>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route exact path="/" element={<ItemListContainer />} />
						<Route exact path="/contacto" element={<Contacto />} />
						<Route exact path="/category/:categoryId" element={<ItemListContainer />} />
						<Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
						<Route exact path="/cart" element={<Cart />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</CartContextProvider>
		</AppContextProvider>
	)
}

export default App
