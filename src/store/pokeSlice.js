import { createSlice } from "@reduxjs/toolkit";

export const pokeSlice = createSlice({
    name: "pokedex",
    initialState: {
        pokeList: [],
        search: { term: "", type: "name" },
        loadingInit: true,
        loadingMore: false,
        modalStatus: { open: false, id: "" },
        darkTheme: JSON.parse(localStorage.getItem("darkTheme")) || false,
    },
    reducers: {
        setPokeList: (state, action) => {
            state.pokeList = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.search.term = action.payload;
        },
        setSearchType: (state, action) => {
            state.search.type = action.payload;
        },
        setLoading: (state, action) => {
            if (action.payload.type == "init") {
                state.loadingInit = action.payload.value;
            } else if (action.payload.type == "more") {
                state.loadingMore = action.payload.value;
            }
        },
        setModalStatus: (state, action) => {
            state.modalStatus.open = action.payload.open;
            if (action.payload.id) {
                state.modalStatus.id = action.payload.id;
            }
        },
        setDarkTheme: (state, action) => {
            localStorage.setItem("darkTheme", action.payload)
            let status = JSON.parse(localStorage.getItem("darkTheme"))
            state.darkTheme = status;
        },
    },
});

export const {
    setPokeList,
    setSearchTerm,
    setSearchType,
    setLoading,
    setModalStatus,
    setDarkTheme,
} = pokeSlice.actions;
export default pokeSlice.reducer;
