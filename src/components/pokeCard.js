import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PokeCard = ({ item, name, height, weight, sprites, onClick }) => {

  const [types, setTypes] = useState([])

  const poke = useSelector((state) => state.poke)

  const { front_default } = sprites

  useEffect(() => {
    item.types.forEach((obj) => {
      setTypes((prev) => [...prev, obj.type.name])
    })
  }, [])

  return (
    <div className={"pokemon-card " + (poke.darkTheme ? 'dark-card' : '')} onClick={onClick}>
      <img src={front_default} alt="" />
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