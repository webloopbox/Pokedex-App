import { createSlice } from "@reduxjs/toolkit";

export const pokeSlice = createSlice({
    name: "pokedex",
    initialState: {
        pokeList:[], 
        search:{term:'', type: 'all'},
        loadingInit: true,
        loadingMore: false,
    },
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
            setLoading: (state, action)=>{
                if(action.payload.type == 'init') {
                    state.loadingInit = action.payload.value
                } else if(action.payload.type == 'more') {
                    state.loadingMore = action.payload.value
                }
            }, 
        }
})

export const {setPokeList, setSearchTerm, setSearchType, setLoading} = pokeSlice.actions
export default pokeSlice.reducer