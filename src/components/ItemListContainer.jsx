import { ItemCount } from "./ItemCount"
import { ItemList } from "./ItemList"

const ItemListContainer = () => {
	const handleCount = (cant) => {
		alert(`Se agregaron ${cant} items`)
	}

	return (
		<>
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
