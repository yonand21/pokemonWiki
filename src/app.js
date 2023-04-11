import './styles/styles.css';
import './script/component/search-bar.js';
import './script/component/app-bar.js';
import axios from 'axios';

const searchElement = document.querySelector('search-bar');

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const lowerCaseName = (string) => {
  return string.toLowerCase();
};

const getPokemon = (e) => {
  const name = document.querySelector('#pokemonName').value;
  const pokemonName = lowerCaseName(name);

  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        const data = response.data;
        document.querySelector('.pokemonItem').innerHTML = `
      <div>
        <img
          src='${data.sprites.other['official-artwork'].front_default}'
          alt='Pokemon name'
        />
      </div>
      <div class='pokemonData'>
        <h1>${capitalizeFirstLetter(data.name)}</h1>
        <p>Base Exp: ${data.base_experience}</p>
        <p>Berat: ${data.weight} Kg</p>
        <p>Tinggi: ${data.height} Cm</p>
      </div>`;
      })
      .catch((err) => {
        document.querySelector('.pokemonItem').innerHTML = `
      <h1>Pokemon tidak ada<br> (╥╯⌒╰╥๑)</h1>
      `;
        console.log('Pokemon tidak ada', err);
      });
};

searchElement.clickEvent = getPokemon;
