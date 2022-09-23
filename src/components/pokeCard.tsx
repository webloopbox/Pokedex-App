import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SinglePokemon } from '../models/Poke';
import { RootState } from '../store';

const PokeCard = ({ item, name, image, onClick } : {item: SinglePokemon, name: string, image: string, onClick: any}) => {

  const [types, setTypes] = useState<Array<string>>([])

  const poke = useSelector((state: RootState) => state.poke)

  useEffect(() => {
    item.types.forEach((obj) => {
      setTypes((prev) => [...prev, obj.type.name])
    })
  }, [])

  return (
    <div className={"pokemon-card " + (poke.darkTheme ? 'dark-card' : '')} onClick={onClick}>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <div className='desc'>
        <div className='desc-type'>
          Type: {types.map((item, index) => <p key={index}>{item}</p>)}
        </div>
      </div>
    </div>
  )
}
export default PokeCard