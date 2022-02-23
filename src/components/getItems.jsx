import { prod } from "./Item"

const task = new Promise((resolve) => {
	resolve(prod)
}, 2000)

export const getItems = () => {
	return task
}
