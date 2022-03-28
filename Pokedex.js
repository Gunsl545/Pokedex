const pokemonId = document.getElementById('id-screen');
const pokemontype = document.getElementById('type-screen');
const pokemonHP = document.getElementById('HP');
const PokemonA = document.getElementById('PAtaque');
const PokemonD = document.getElementById('PDefensa');
const PokemonV= document.getElementById('PSpeed');


const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./Pikachu.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            pokemonId.innerHTML = `Id: ${data.id}`;
            pokemontype.innerHTML = `type: ${data.types[0].type.name}`;
            pokemonHP.innerHTML = `Hp: ${data.stats[0].base_stat}`;
            PokemonA.innerHTML = `Ataque: ${data.stats[1].base_stat}`;
            PokemonD.innerHTML = `Defensa: ${data.stats[2].base_stat}`;
            PokemonV.innerHTML = `Velocidad: ${data.stats[5].base_stat}`;
            console.log(pokeImg);
            console.log(data.abilities[0]);
            for(var i=0;i<data.abilities.length;i++){
                console.log(data.abilities[i]);
            }
        }
    });
}



const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}