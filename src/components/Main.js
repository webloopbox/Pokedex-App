import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setPokeList, setSearchTerm, setLoading } from '../pokedex';
import pokeFilter from '../pokeFilter'
import PokeCard from './pokeCard' 
import Header from './Header'
import SkeletonCard from './SkeletonCard';
import {loadMore} from '../pokeAPI';



const Main = ({pokeList, search}) => {

  const dispatch = useDispatch()

  const poke = useSelector((state)=>state.poke)
  const {loadingInit, loadingMore} = poke

  const morePoke = async () => {
    dispatch(setLoading({type: 'more', value: true}))
    const total = pokeList.length
    let getPokemons = await loadMore(total)
    let newPokemons = pokeList.concat(getPokemons)
    const timing = setTimeout(()=>{
      dispatch(setPokeList(newPokemons))
      dispatch(setLoading({type: 'more', value: false}))
    },1000)
    return () => clearTimeout(timing)
  }

    return (
        <main className='wrapper'>
          <Header handler={setSearchTerm} currentType={search.type}/>
          <div className='pokemon-cards'>
          {
            (loadingInit==true) ? <SkeletonCard load='init'/> :
             pokeList.filter((val) => {
              return pokeFilter(val, search)
            }).map((item) => {
              const { id, name, height, weight, sprites } = item
              return <PokeCard key={id} item={item} name={name} height={height} weight={weight} sprites={sprites}  />
            })
          }
          
          </div>
          {
            (loadingInit==true) ? 
            <></> : (loadingMore==true) ?
               <SkeletonCard load='more'/> : <button className='load-more' onClick={()=>{morePoke()}}>Load more</button>
          }
          
        </main>
    )
}

export default Main