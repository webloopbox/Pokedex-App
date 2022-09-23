import { configureStore } from '@reduxjs/toolkit'
import pokeReducer from './pokeSlice'

export const store = configureStore({
    reducer: { poke: pokeReducer },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>