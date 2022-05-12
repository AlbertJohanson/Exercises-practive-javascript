

import {pokemons} from "./pokemons.js"

/* Assets */


function Pokedex(){

    let actualPokemon;


    const handlePokemon = (e) => {
        e.preventDefault()
        actualPokemon = e.currentTarget.id

        for(let actualPokemon in pokemons) {
          if(actualPokemon === e.currentTarget.id) {
            const pokemon = pokemons[actualPokemon]
            console.log(pokemon)
          }
        }
    }

    return (
        <div>
          <header className="text-3xl font-bold  text-center">
            <h1>Pokedex</h1>
          </header>
          <div className="grid grid-cols-2 gap-x-3.5 gap-y-3.5 py-[80px] max-w-[600px]">
          {
            Object.keys(pokemons).map(key => {
              return (
                <div id={pokemons[key].name} onClick={handlePokemon}  className="flex bg-[#ECECEC] w-auto flex-col items-center max-w-sm rounded-[16px] cursor-pointer overflow-hidden shadow-lg justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <img src={pokemons[key].image} width="500px" alt={pokemons[key].name}/>
                    <h1 className="font-bold uppercase">{pokemons[key].name}</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h2 className="text-1xl font-bold">Moves</h2>
                    <ul className="mt-5">
                      {pokemons[key].moves.map(move => {
                        return <li className="bg-[#4AFFF7] mb-5 rounded-full p-2 text-center ">{move}</li> 
                      }
                      )}  
                    </ul>
                  </div>
                </div>
              )
            })
          }
          </div>
          <div id="pokemon">
            <h1>{actualPokemon}</h1>
          </div>
        </div>
    )
}

ReactDOM.render(<Pokedex/>, document.getElementById("app"));