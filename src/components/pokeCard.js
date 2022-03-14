import { useSelector } from 'react-redux';

const PokeCard = ({ item, name, height, weight, sprites, onClick }) => {

              const poke = useSelector((state)=>state.poke)
  
              const { front_default } = sprites
              const types = []
  
              for(let i=0; i<item.types.length;i++) {
                  types[i] = item.types[i].type.name;
              }
  
              return (
                <div className={"pokemon-card " + (poke.darkTheme ? 'dark-card' : '')} onClick={onClick}>
                  <img src={front_default} alt="" />
                  <h2>{name}</h2>
                  <div className='desc'>
                    <div className='desc-type'>
                    Type: {types.map((item, index)=><p key={index}>{item}</p>)}
                    </div>
                  </div>
                </div>
              )
}
export default PokeCard