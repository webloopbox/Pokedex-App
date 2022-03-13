import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchPokemons from './pokeAPI';
import { setPokeList, setSearchTerm, setLoading } from './pokedex';
import Main from './components/Main';

const App = () => {

    const dispatch = useDispatch()
    const poke = useSelector((state)=>state.poke)
    const {search} = poke
    console.log(poke);
  
    useEffect(() => {
      dispatch(setLoading({type: 'init', value: true}))
      const timing = setTimeout(()=>{
        fetchPokemons().then((data)=>{
          dispatch(setPokeList(data))
          dispatch(setLoading({type: 'init', value: false}))
        })
      }, 1000)
      return () => clearTimeout(timing)
    }, [])
    
    return (
      <>
        <Main pokeList={poke.pokeList} search={search}/>
      </>
  
    )
  }

  export default App;