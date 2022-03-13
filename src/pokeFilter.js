const pokeFilter = (val, search) => {
    const types = []
              for(let i=0; i<val.types.length;i++) {
                  types[i] = val.types[i].type.name
              }
              
              if(search.term == "" && search.type=='all') {
                return val
              } else if (search.term == "" && types.includes(search.type)) {
                return val
              } else if (val.name.toLowerCase().includes(search.term.toLowerCase()) && (search.type=='all' || types.includes(search.type))) {
                return val
              }
}

export default pokeFilter