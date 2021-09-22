async function showPokemon() {

  try {

  // get list of all pokemon
  let response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118');
  let allPokemon = await response.json();
  console.log(allPokemon);

  // get random Pokemon id
  let randomPokemonID = Math.floor(Math.random() * 1118);

  // get single pokemon
  let singlePokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonID}`);
  let singlePokemon = await singlePokemonResponse.json();
  console.log(singlePokemon);

  let pokemonName = singlePokemon.name;
  let pokemonImage = singlePokemon.sprites.front_default;
  let pokemonWeight = singlePokemon.weight/10 + "kg";
  let pokemonHeight = singlePokemon.height/10 + "m";

  // show the pokemon
  const list = document.getElementById('listItems');

  let newLi = document.createElement("li");
  let newP = document.createElement("p")
  let newH1 = document.createElement("h1")
  let newImg = document.createElement("img");

  list.appendChild(newLi);
  newLi.appendChild(newH1);
  newLi.appendChild(newImg);
  newLi.appendChild(newP);


  newImg.src = pokemonImage;
  newH1.innerText = pokemonName;
  newP.innerHTML = pokemonHeight + " " + pokemonWeight;

} catch (err) {
  // catches errors both in fetch and response.json
  console.log("Pokemon kan helaas niet worden weergegeven");
}
}

document
    .querySelector("#getPokemon")
    .addEventListener("click", showPokemon);