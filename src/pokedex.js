import { createSlice } from "@reduxjs/toolkit";

export const pokeSlice = createSlice({
    name: "pokedex",
    initialState: {
        pokeList:[], 
        searchTerm:''},
    reducers: {
        setPokeList: (state, action)=>{
            state.pokeList = action.payload
        },
        setSearchTerm: (state, action)=>{
            state.searchTerm = action.payload
        }
    }
})

export const {setPokeList, setSearchTerm} = pokeSlice.actions
export default pokeSlice.reducer