const PokeCard = ({ item, name, height, weight, sprites }) => {
  
              const { front_default } = sprites
              const types = []
  
              for(let i=0; i<item.types.length;i++) {
                  types[i] = item.types[i].type.name;
              }
  
              return (
                <div className='pokemon-card'>
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
}
export default PokeCard