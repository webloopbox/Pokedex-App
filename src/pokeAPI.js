const getPoke = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemons = await response.json()
    return pokemons
  }

  const fetchPokemons = async () => {
    const items = []
    for (let i = 3; i <= 60; i+=3) {
      items[i - 1] = await getPoke(i)
    }
    return items
  }

 export default fetchPokemons