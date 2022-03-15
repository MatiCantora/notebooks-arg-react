// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, Timestamp, updateDoc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCFb5jCR7UB5BnwKYSQthDb57OSktud04U",
	authDomain: "coderhouse-notebooksarg.firebaseapp.com",
	projectId: "coderhouse-notebooksarg",
	storageBucket: "coderhouse-notebooksarg.appspot.com",
	messagingSenderId: "1086166188967",
	appId: "1:1086166188967:web:7d1fac00108cec7ca1ec82",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

const db = getFirestore()

// ----------------------

// Traer TODOS los items
export const getItems = async () => {
	const items = await getDocs(collection(db, "items"))
	return items
}

// Traer UN item
export const getItem = async (id) => {
	const item = await getDoc(doc(db, "items", id))
	return item
}

// Generación de order
export const generateOrder = async (order) => {
	const newOrder = addDoc(collection(db, "orders"), {
		...order,
		date: Timestamp.fromDate(new Date()),
	})
	return newOrder
}

// Manejar stock --> plus
export const updateStock = async (itemId, quantity) => {
	const item = await getDoc(doc(db, "items", itemId))
	await updateDoc(doc(db, "items", itemId), {
		stock: item.data().stock - quantity,
	})
}

export default db
