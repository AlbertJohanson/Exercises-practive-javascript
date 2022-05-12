import { pokemons } from "./pokemons.js";

/* Assets */

function Pokedex() {
  let actualPokemon;

  const handlePokemon = (e) => {
    e.preventDefault();
    for (let actualPokemon in pokemons) {
      //para cada pokemon en el objeto pokemons
      if (actualPokemon === e.currentTarget.id) {
        //si el pokemon actual es igual al id del pokemon que selecciono
        const pokemon = pokemons[actualPokemon]; //pokemon es igual al pokemon que selecciono
        document.getElementById(
          "pokemon"
        ).innerHTML = `
        <div class="pokemon">
          <div class="pokemon-image">
            <img src=${pokemon.image} alt="${pokemon.name}">
          </div>
          <div class="pokemon-info">
            <h2>${pokemon.name}</h2>
            <ul>
              <li>
                <strong>Order:</strong> ${pokemon.order}
              </li>
              <li>
                <strong>Moves:</strong>
                <ul>
                  ${pokemon.moves.map((move) => {
                    return `<li>${move}</li>`;
                  }
                  )}
        `; //pokemon-name es igual al nombre del pokemon que selecciono
      }
    }
  };

  return (
    <>
      <header className="text-3xl font-bold  text-center">
        <h1>Pokedex</h1>
      </header>
      <div className="flex flex-wrap justify-around">
        <div className="grid grid-cols-2 gap-x-3.5 gap-y-3.5 py-[80px] max-w-[600px]">
          {Object.keys(pokemons).map((key) => {
            return (
              <div
                id={pokemons[key].name}
                onClick={handlePokemon}
                className="flex bg-[#ECECEC] w-auto flex-col items-center max-w-sm rounded-[16px] cursor-pointer overflow-hidden shadow-lg justify-center"
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={pokemons[key].image}
                    width="500px"
                    alt={pokemons[key].name}
                  />
                  <h1 className="font-bold uppercase">{pokemons[key].name}</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-1xl font-bold">Moves</h2>
                  <ul className="mt-5">
                    {pokemons[key].moves.map((move) => {
                      return (
                        <li className="bg-[#4AFFF7] mb-5 rounded-full p-2 text-center ">
                          {move}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div id="pokemon" className="bg-[#6EFFF8] mt-[80px] w-[50%] h-[100%] p-20 rounded-lg">
          <h1>Selecciona un pokemon</h1>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<Pokedex />, document.getElementById("app"));
