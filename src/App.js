import "./App.css"
import Navbar from "./components/NavBar"
// import ItemListContainer from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"

function App() {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			{/* <div>
				<ItemListContainer /> No se importa por el desafío 7
			</div> */}
			<div>
				<ItemDetailContainer />
			</div>
		</div>
	)
}

export default App
