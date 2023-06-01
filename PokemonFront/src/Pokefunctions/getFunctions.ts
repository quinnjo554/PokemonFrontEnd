
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:5173/', // Replace with your API's base URL
  headers: {
    'Access-Control-Allow-Origin': '*', // Allow requests from any origin
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS', // Allow the specified HTTP methods
  },
});

export async function getAllPokemon(page:string | undefined,size:number = 30) {
  try {
    const response = await axios.get(
      `http://localhost:9081/pokemon/all?page=${page}&size=${size}&sortBy=id&sortOrder=asc`
    );
    const data = response.data;
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
      console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  export async function getPokemonByName(name:string | undefined) {
    try {
      const response = await axios.get(
        `http://localhost:9081/pokemon/name/${name}`
      );
      const data = response.data;
      console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    }
  }

 
 
  


  export async function getRandomPokemon() {
    try {
      const response = await axios.get(
        'http://localhost:9081/pokemon/random'
      );
      const data = response.data;
      console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  //not my api
  export async function getPokeIdByName(name:string|undefined){
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
  }
//not my api
  export async function getPokemonEvolution(name:string){
    const lowercaseName = capitalizeFirstLetter(name);
    try {
      const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${lowercaseName}`)
      const speciesData = species.data;
      const evolutionUrl = speciesData['evolution_chain']['url'];

      const response = await fetch(evolutionUrl);
      const data = response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    }
    }

  export async function getPokemonByType(type:string | undefined, page:number) {
    try {
      const response = await axios.get(
        `http://localhost:9081/pokemon/byType/${type}?page=${page}&size=30&sortBy=id&sortOrder=asc`
      );
      const data = response.data;
      console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  export async function getPokemonByAbility(ability:string | undefined, page:number) {
    try {
      const response = await axios.get(
        `http://localhost:9081/pokemon/byAbility/${ability}?page=${page}&size=553&sortBy=attack&sortOrder=asc`
      );
      const data = response.data;
      console.log(data)
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


export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}