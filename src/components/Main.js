import { useSelector, useDispatch, connect } from 'react-redux';
import { setPokeList, setSearchTerm, setLoading, setModalStatus, getSearchedPokeList } from '../store/pokeSlice';
import PokeCard from './pokeCard'
import Header from './Header'
import SkeletonCard from './SkeletonCard';
import { loadMore } from '../pokeAPI';
import Modal from './Modal';


const Main = ({ pokeList, search, searchedPokeList }) => {

  const dispatch = useDispatch()
  const poke = useSelector((state) => state.poke)
  const { loadingInit, loadingMore, modalStatus } = poke

  const morePoke = async () => {
    dispatch(setLoading({ type: 'more', value: true }))
    const total = pokeList.length
    let getPokemons = await loadMore(total)
    let newPokemons = pokeList.concat(getPokemons)
    dispatch(setPokeList(newPokemons))
    dispatch(setLoading({ type: 'more', value: false }))
  }

  return (
    <div className="container">
      <main className='wrapper'>
        <Header handler={setSearchTerm} currentType={search.type} />
        <div className='pokemon-cards'>
          {
            (loadingInit == true) ? <SkeletonCard load='init' /> :
              searchedPokeList.map((item) => {
                const { id, name, height, weight, sprites } = item
                return <PokeCard key={id} item={item} name={name} height={height} weight={weight} sprites={sprites} onClick={() => dispatch(setModalStatus({ open: true, id }))} />
              })
          }

        </div>
        {
          (poke.search.term != '') ?
            <></> : (loadingInit == true) ?
              <></> : (loadingMore == true) ?
                <SkeletonCard load='more' /> : <button className='load-more' onClick={() => morePoke()}>Load more</button>
        }

        {(modalStatus.open) ? <Modal open={modalStatus.open} id={modalStatus.id} /> : <></>}

      </main>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pokeList: state.poke.pokeList,
    search: state.poke.search,
    searchedPokeList: getSearchedPokeList(state.poke.pokeList, state.poke.search)
  }
};

export default connect(mapStateToProps)(Main)