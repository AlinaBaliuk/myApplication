import { createSlice } from '@reduxjs/toolkit'

export const main = createSlice({

	name: 'mainMenu',
	initialState: {
		menu: ["Women", "Men", "Kids", "Unisex"],
		clothes: {
			Women: ["Dresses", "Jeans", "T-shirts", "Shoes"],
			Men: ["Suit", "Pants", "Sweatshirt", "Shoes"],
			Kids: ["New Year's Suits", "Summer Suits", "Winter Suits", "Shoes"],
			Unisex: ["Sneakers", "T-shirts", "Sweater"]
		}
	},
	reducer: {

	}
})

export default main.reducer