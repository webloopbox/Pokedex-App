const getPoke = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemons = await response.json();
  return pokemons;
};

const fetchPokemons = async () => {
  const items = [];
  const initialQuantity: number = 20
  for (let i = 1; i <= initialQuantity; i++) {
    items.push(await getPoke(i))
  }
  return items;
};

const loadMore = async (total: number) => {
  let items = [];
  for (let i = total + 1; i <= total + 10; i++) {
    items.push(await getPoke(i))
  }
  return items;
};

export default fetchPokemons;
export { loadMore };
