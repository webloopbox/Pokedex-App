import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchPokemons from './pokeAPI';
import { setPokeList, setSearchTerm } from './pokedex';
import Header from './Header'
import pokeFilter from './pokeFilter'

const App = () => {

    const dispatch = useDispatch()
    const poke = useSelector((state)=>state.poke)
    const {search} = poke
    console.log(poke);
  
    useEffect(() => {
      fetchPokemons().then((data)=>{
        dispatch(setPokeList(data))
      })
    }, [])
    
    return (
      <>
        <Header handler={setSearchTerm} currentType={search.type}/>
        <main className='wrapper'>
          {
            poke.pokeList.filter((val) => {
              return pokeFilter(val, search)
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