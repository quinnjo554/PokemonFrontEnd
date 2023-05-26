import React, { useEffect, useState } from 'react';
import { getAllPokemon } from '../Pokefunctions/getFunctions';
import { Link } from 'react-router-dom';
import { pokemon } from '../interfaces';
import { TypeColors } from '../interfaces';
import { typeColors } from '../interfaces';
function PokedexHero() {
  const [pokeArray, setPokeArray] = useState<Array<pokemon>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPokemon();
      setPokeArray(data["content"]);
    };
    fetchData();
  }, []);

  return (
    <div className='p-5 pokedex-hero'>
      <ul className='ml-8 grid grid-cols-1 gap-2 gap-x-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8'>
        {pokeArray.map((value, index) => {
          return (
            <Link to={`/pokemon/${value["id"]}`} key={index}>
              <div className='w-44 p-2 grid rounded-md mt-3 bg-black text-white'>
                <li className='text-center bg-slate-500'>{value["name"]}</li>
                <img
                  className='mx-auto'
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${value["id"]}.png`}
                  alt=''
                  width='110'
                  height='110'
                />
                <div className='flex justify-between'>
                  <p>#{value["id"]}</p>
                  <ul className='flex'>
                    {value['types'].map((type, typeIndex) => {
                      const typeName = type.name.toLowerCase();
                      const backgroundColor = typeColors[typeName] || 'bg-gray-300';

                      return (
                        <li className={`flex px-2 mr-2 rounded-sm ${backgroundColor}`} key={typeIndex}>
                          {type.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default PokedexHero;
