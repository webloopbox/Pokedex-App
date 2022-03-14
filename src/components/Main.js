import { useSelector, useDispatch } from 'react-redux';
import { setPokeList, setSearchTerm, setLoading, setModalStatus } from '../pokedex';
import pokeFilter from '../pokeFilter'
import PokeCard from './pokeCard' 
import Header from './Header'
import SkeletonCard from './SkeletonCard';
import {loadMore} from '../pokeAPI';
import Modal from './Modal';


const Main = ({pokeList, search}) => {

  const dispatch = useDispatch()
  const poke = useSelector((state)=>state.poke)
  const {loadingInit, loadingMore, modalStatus} = poke
  
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
      <div className={"container " + (poke.darkTheme ? 'dark' : '')}>
        <main className='wrapper'>
          <Header handler={setSearchTerm} currentType={search.type}/>
          <div className='pokemon-cards'>
          {
            (loadingInit==true) ? <SkeletonCard load='init'/> :
             pokeList.filter((val) => {
              return pokeFilter(val, search)
            }).map((item) => {
              const { id, name, height, weight, sprites } = item
              return <PokeCard key={id} item={item} name={name} height={height} weight={weight} sprites={sprites} onClick={()=>dispatch(setModalStatus({open: true, id}))} />
            })
          }
          
          </div>
          {
            (poke.search.term!='') ?
            <></> : (loadingInit==true) ? 
                      <></> : (loadingMore==true) ?
                        <SkeletonCard load='more'/> : <button className='load-more' onClick={()=>morePoke()}>Load more</button>
          }

          {(modalStatus.open) ? <Modal open={modalStatus.open} id={modalStatus.id}/> : <></>}
          
        </main>
      </div>
    )
}

export default Main