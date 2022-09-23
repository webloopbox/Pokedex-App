import { SearchType } from "./Search"

export type PokeListType = Array<{
    forms: Array<{
        name: string,
        url: string
    }>,
    height: number,
    id: number,
    image: string,
    name: string,
    types: Array<{
        slot: number,
        type: {
            name: string,
            url: string
        }
    }>,
    weight: number
}>

export interface SinglePokemon {
    forms: Array<{
        name: string,
        url: string
    }>,
    height: number,
    id: number,
    image: string,
    name: string,
    types: Array<{
        slot: number,
        type: {
            name: string,
            url: string
        }
    }>,
    weight: number
}

export type ModalStatusType = {
    open: boolean,
    id: number | null
}

export interface PokeInitState {
    pokeList: PokeListType,
    search: SearchType,
    loadingInit: boolean,
    loadingMore: boolean,
    modalStatus: ModalStatusType,
    darkTheme: boolean
}

export interface ModalPokeInfo {
    img?: string,
    name?: string,
    height?: number,
    weight?: number,
    types?: Array<string>,
}