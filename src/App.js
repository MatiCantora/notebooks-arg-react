import "./App.css"
import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
// import ItemDetailContainer from "./components/ItemDetailContainer"

function App() {
	return (
		<div>
			<Navbar />
			<ItemListContainer />
			{/* <ItemDetailContainer /> */}
		</div>
	)
}

export default App
