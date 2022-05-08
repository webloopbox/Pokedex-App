import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchPokemons from './pokeAPI';
import { setPokeList, setSearchTerm, setLoading, setDarkTheme } from './pokedex';
import Main from './components/Main';
import Switch from "react-switch";
import { Sun } from './icons/Sun';
import { Moon } from './icons/Moon';
import { Helmet } from 'react-helmet';


const App = () => {

  const dispatch = useDispatch()
  const poke = useSelector((state) => state.poke)
  const { search } = poke

  useEffect(() => {
    dispatch(setLoading({ type: 'init', value: true }))
    const timing = setTimeout(() => {
      fetchPokemons().then((data) => {
        dispatch(setPokeList(data))
        dispatch(setLoading({ type: 'init', value: false }))
      })
    }, 1000)
    return () => clearTimeout(timing)
  }, [])

  return (
    <>
      <Helmet>
        <style type="text/css">
          {`
                  body {
                      background-color: ${poke.darkTheme ? '#263646' : 'fafafa'};
                      color: ${poke.darkTheme ? 'white' : 'black'};
                  }
                `}
        </style>
      </Helmet>
      <div className={"switch " + (poke.darkTheme ? 'dark' : '')}>
        <Switch uncheckedIcon={<Sun />} checkedIcon={<Moon />} onColor='#7272ff' borderRadius={8} checked={poke.darkTheme} onChange={() => dispatch(setDarkTheme(!poke.darkTheme))} />
      </div>
      <Main pokeList={poke.pokeList} search={search} />
    </>

  )
}

export default App;