import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonById } from '../Pokefunctions/getFunctions';
import { pokemon } from '../interfaces';
//use memo
function PokemonPage() {
  const { id } = useParams();
  const [pokeData, setPokeData] = useState<pokemon | null>(null);


  useEffect(() => {
    async function getPokeData() {
      const data = await getPokemonById(id);
      setPokeData(data);
    }
    getPokeData();
  }, []);

  if (!pokeData) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto mt-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          {pokeData.name} #{pokeData.id}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              className="rounded-lg shadow-lg bg-slate-100"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`}
              width="300"
              height="300"
              alt={pokeData.name}
            />
          </div>
          <div>
            <div className="bg-blue-300 p-4 rounded-lg shadow-lg">
              <div className="mb-6">
                <h2 className="text-xl font-bold">Height</h2>
                <p>{pokeData.height}</p>
              </div>
              <div className="mb-6">
                <h2 className="text-xl font-bold">Weight</h2>
                <p>{pokeData.weight}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold">Genus</h2>
                <p>{pokeData.genus}</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-300 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Abilities</h2>
              <ul>
                {pokeData.abilities.map((value, index) => (
                  <li key={index}>{value.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-300 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Description</h2>
          <p>{pokeData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PokemonPage;
