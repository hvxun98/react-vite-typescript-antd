import { combineReducers, configureStore, Store } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

import testSlice from './slices/test'

const rootReducer = combineReducers({
  testSlice
})

const store: Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store
