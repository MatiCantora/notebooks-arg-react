import "./App.css"
import Navbar from "./components/NavBar"
import List from "./components/ItemListContainer"
import { Item } from "./components/Item"

function App() {
	return (
		<div>
			<Navbar />
			<List items="4" />
			<Item />
		</div>
	)
}

export default App
