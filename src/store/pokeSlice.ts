import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Loading } from "../models/Loading";
import { Modal } from "../models/Modal";
import { PokeInitState, PokeListType } from "../models/Poke";
import { SearchType } from "../models/Search";
import pokeFilter from '../pokeFilter'

const initialState: PokeInitState = {
    pokeList: [],
    search: { term: "", type: "name" },
    loadingInit: true,
    loadingMore: false,
    modalStatus: { open: false, id: null },
    darkTheme: JSON.parse(localStorage.getItem("darkTheme") as any) || false,
}

export const pokeSlice = createSlice({
    name: "pokedex",
    initialState,
    reducers: {
        setPokeList: (state, action) => {
            state.pokeList = action.payload.map((pokemon: any) => ({
                id: pokemon.id,
                name: pokemon.name,
                height: pokemon.height,
                weight: pokemon.weight,
                types: pokemon.types,
                image: pokemon.sprites.front_default,
                forms: pokemon.forms
            }));
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.search.term = action.payload;
        },
        setSearchType: (state, action: PayloadAction<string>) => {
            state.search.type = action.payload;
        },
        setLoading: (state, action: PayloadAction<Loading>) => {

            if (action.payload.type == "init") {
                state.loadingInit = action.payload.value;
            } else if (action.payload.type == "more") {
                state.loadingMore = action.payload.value;
            }
        },
        setModalStatus: (state, action: PayloadAction<Modal>) => {

            state.modalStatus.open = action.payload.open;
            if (action.payload.id) {
                state.modalStatus.id = action.payload.id;
            }
        },
        setDarkTheme: (state, action: PayloadAction<boolean>) => {
            localStorage.setItem("darkTheme", (action.payload as any))
            let status = JSON.parse(localStorage.getItem("darkTheme") as any)
            state.darkTheme = status;
        },
    },
});

export const getSearchedPokeList = (pokeList: PokeListType, search: SearchType) => {
    return pokeList.filter((val) => {
        return pokeFilter(val, search)
    })
}

export const {
    setPokeList,
    setSearchTerm,
    setSearchType,
    setLoading,
    setModalStatus,
    setDarkTheme,
} = pokeSlice.actions;
export default pokeSlice.reducer;

export type SetSearchTermType = typeof setSearchTerm;
