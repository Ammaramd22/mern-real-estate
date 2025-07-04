import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import { persistReducer, persistStore } from 'redux-persist'
//import persistReducer from 'redux-persist/es/persistReducer'
//import { version } from 'mongoose'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const rootReducer = combineReducers({
    user: userReducer
})

const persistConfig ={
    key:'root_2',
    storage,
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
}),
})

export const persistor = persistStore(store);

