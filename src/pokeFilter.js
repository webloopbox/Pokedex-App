const pokeFilter = (val, search) => {
    const types = []
              for(let i=0; i<val.types.length;i++) {
                  types[i] = val.types[i].type.name
              }
              
              if(search.term == "" && (search.type=='name' || search.type=='type')) {
                return val
              } else if (search.type == "name" && val.name.toLowerCase().includes(search.term.toLowerCase())) {
                return val
              } else if (search.type == "type") {
                for(let i=0; i<types.length; i++) {
                  if(types[i].includes(search.term.toLowerCase())) {
                    return val
                  }
                }
              } 
}

export default pokeFilter