import "./App.css"
import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
	return (
		<div>
			<Navbar />
			<ItemListContainer items="4" />
		</div>
	)
}

export default App
