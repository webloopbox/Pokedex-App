import { createSlice } from "@reduxjs/toolkit";

export const pokeSlice = createSlice({
    name: "pokedex",
    initialState: {
        pokeList:[], 
        search:{term:'', type: 'all'}},
    reducers: {
        setPokeList: (state, action)=>{
            state.pokeList = action.payload
        },
        setSearchTerm: (state, action)=>{
            state.search.term = action.payload
        }, 
        setSearchType: (state, action)=>{
            state.search.type = action.payload
        }, 
    }
})

export const {setPokeList, setSearchTerm, setSearchType} = pokeSlice.actions
export default pokeSlice.reducer