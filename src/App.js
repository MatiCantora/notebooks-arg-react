import React from "react"
import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetail from "./components/ItemDetail"
import Contacto from "./components/Contacto/Contacto"
import Footer from "./components/Footer"
import { Cart } from "./components/Cart"
import CartContextProvider from "./context/CartContext/CartContext"
import AppContextProvider from "./context/AppContext/AppContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

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
						<Route exact path="/item/:itemId" element={<ItemDetail />} />
						<Route exact path="/cart" element={<Cart />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</CartContextProvider>
		</AppContextProvider>
	)
}

export default App
