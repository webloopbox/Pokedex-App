import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchPokemons from './pokeAPI';
import { setPokeList, setSearchTerm } from './pokedex';
import Header from './Header'

const App = () => {

    const dispatch = useDispatch()
    const poke = useSelector((state)=>state.poke)

    console.log(poke);
  
    useEffect(() => {
      fetchPokemons().then((pokemons)=>{
        dispatch(setPokeList(pokemons))
      })
    }, [])
    
    return (
      <>
        <Header handler={setSearchTerm}/>
        <main className='wrapper'>
          {
            poke.pokeList.filter((val) => {
              if (poke.searchTerm == "") {
                return val
              } else if (val.name.toLowerCase().includes(poke.searchTerm.toLowerCase())) {
                return val
              }
            }).map((item, index) => {
              const { name, height, weight, sprites } = item
              const { front_default } = sprites
              const types = []
  
              for(let i=0; i<item.types.length;i++) {
                  types[i] = item.types[i].type.name
              }
  
              return (
                <div className='pokemon-card' key={index}>
                  <img src={front_default} alt="" />
                  <h2>{name}</h2>
                  <div className='desc'>
                    <div className='desc-info'>
                      <h3>{height}m</h3>
                      <p>Height</p>
                    </div>
                    <div className='desc-info'>
                      <h3>{weight}kg</h3>
                      <p>Weight</p>
                    </div>
                    <div className='desc-type'>
                    Type: {types.map((item, index)=><p key={index}>{item}</p>)}
                    </div>
                  </div>
                </div>
              )
            })
          }
  
        </main>
      </>
  
    )
  }

  export default App;