import { ItemCount } from "./ItemCount"
import { ItemList } from "./ItemList"

const ItemListContainer = (props) => {
	const handleCount = (cant) => {
		alert(`Se agregaron ${cant} items`)
	}

	return (
		<>
			<p>Bienvenido al Carrito, tienes {props.items} productos</p>
			<div className="count">
				<ItemCount initial={1} stock={10} onAdd={handleCount} />
			</div>
			<div className="container mt-2">
				<ItemList />
			</div>
		</>
	)
}

export default ItemListContainer
