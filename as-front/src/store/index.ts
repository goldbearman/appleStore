import { configureStore, combineReducers } from '@reduxjs/toolkit'
import reducers from './reducers'


// const reducer = combineReducers({
//     app,
//     userData,
//     favorites,
// })

const store = configureStore({ reducer })

export default store


