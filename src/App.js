import "./App.css"
import Navbar from "./components/NavBar"
import List from "./components/ItemListContainer"

function App() {
	return (
		<div>
			<Navbar />
			<List items="4" />
		</div>
	)
}

export default App
