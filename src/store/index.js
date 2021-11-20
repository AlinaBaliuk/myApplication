import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './store'
import counter from './CounterReducer'

export default configureStore({
	reducer: {
		main: mainReducer,
		count: counter
	}
})