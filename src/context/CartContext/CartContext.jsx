import React, { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	const isInCart = (id) => cart.find((prod) => prod.id === id)

	const addToCart = (product) => {
		//Copia del state para no alterar el original
		const newCart = [...cart]
		//Verificación
		const productIsInCart = isInCart(product.id)

		//Si el producto está en el carrito...
		if (productIsInCart) {
			//buscamos en el array de carrito el elemento y sumamos la cantidad
			newCart[newCart.findIndex((prod) => prod.id === productIsInCart.id)].quantity++

			//Actualizamos carrito
			setCart(newCart)

			return
		}

		//Si no está:
		product.quantity = 1
		setCart([...newCart, product])
	}

	const deleteFromCart = (product) => {
		//Cremos una copia del state para no alterar original
		const newCart = [...cart]

		//Verificación
		const productIsInCart = isInCart(product.id)

		if (!productIsInCart) {
			return
		}

		const deleteProduct = newCart.filter((prod) => prod.id !== productIsInCart.id)

		setCart(deleteProduct)
	}

	const deleteCart = () => setCart([])
	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				addToCart,
				deleteFromCart,
				deleteCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
export default CartContextProvider
