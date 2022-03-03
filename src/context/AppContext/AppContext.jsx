import { prod } from "../../components/Item"
import React, { createContext, useContext, useState } from "react"

const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
	const [products, setProducts] = useState(prod)

	return (
		<AppContext.Provider
			value={{
				products,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
export default AppContextProvider
