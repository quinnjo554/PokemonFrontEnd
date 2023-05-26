
import axios from 'axios';

export async function getAllPokemon() {
  try {
    const response = await axios.get(
      'http://localhost:9081/pokemon/all?page=0&size=550&sortBy=id&sortOrder=asc'
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getPokemonById(id:string | undefined) {
    try {
      const response = await axios.get(
        `http://localhost:9081/pokemon/${id}`
      );
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }


export async function getAllPokemonImgs(pokemon: string) {
  pokemon = pokemon.toLowerCase();
  try {
    const response = await axios.get(`https://pokeapi.com/api/v2/pokemon/${pokemon}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
