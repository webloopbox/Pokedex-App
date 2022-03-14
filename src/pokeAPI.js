const getPoke = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemons = await response.json()
    return pokemons
  }

  const fetchPokemons = async () => {
    const items = []
    for (let i = 1; i <= 20; i++) {
      items[i-1] = await getPoke(i)
    }
    return items
  }

  const loadMore = async (total) => {
    let items = []
    let currentIndex = 0;
    for (let i = total+1; i <= total+10; i++) {
      items[currentIndex] = await getPoke(i)
      currentIndex++
    }
    return items
  }

 export default fetchPokemons
 export {loadMore}