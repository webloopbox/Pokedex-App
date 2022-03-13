import { createSlice } from "@reduxjs/toolkit";

export const pokeSlice = createSlice({
    name: "pokedex",
    initialState: {
        pokeList:[], 
        search:{term:'', type: 'name'},
        loadingInit: true,
        loadingMore: false,
        modalStatus: {open: false, id: ''},
    },
        reducers: {
            setPokeList: (state, action)=> {
                state.pokeList = action.payload
            },
            setSearchTerm: (state, action)=> {
                state.search.term = action.payload
            }, 
            setSearchType: (state, action)=> {
                state.search.type = action.payload
            }, 
            setLoading: (state, action)=> {
                if(action.payload.type == 'init') {
                    state.loadingInit = action.payload.value
                } else if(action.payload.type == 'more') {
                    state.loadingMore = action.payload.value
                }
            }, 
            setModalStatus: (state, action) => {
                state.modalStatus.open = action.payload.open
                if(action.payload.id) {
                    state.modalStatus.id = action.payload.id
                }
            }
        }
})

export const {setPokeList, setSearchTerm, setSearchType, setLoading, setModalStatus} = pokeSlice.actions
export default pokeSlice.reducer