import React, { useState, useEffect } from "react";
import getId from "../../../../helpers/getId";
import Pagination from "./pagination";


function Cards() {
  interface Character {
    id: number;
    name: string;
    height: number;
    mass: number;
    gender: string;
    url: string;
  }

  const [characters, setCharacters] = useState<Character[]>([]);
  const [charactersFiltred, setCharactersFiltred] = useState<Character[]>([]);
  const [text_filter, setText_filter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);
  

  const fetchCharacters = async (page: number) => {
    try {
      const response = await fetch(`https://swapi.py4e.com/api/people?page=${page}`);
      const data = await response.json();
      setHasNextPage(!!data.next); // Перевіряємо, чи є наступна сторінка
      setCharacters(data.results);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };


  const fetchCharactersFiltered = async () => {
    try {
      const responseFiltered = await fetch(`https://swapi.py4e.com/api/people/?search= ${text_filter}`);
      const dataFiltered = await responseFiltered.json();
      setCharactersFiltred(dataFiltered.results);
      if(text_filter !== ''){
        setShouldHide(true)
      }else{
        setShouldHide(false)
      }
    } catch (error) {
      console.error("Error fetching characters (filtred):", error);
    }
  };

  fetchCharactersFiltered();


  const filter = () => {
    if(text_filter === ''){
      return characters;
    }else{
      return charactersFiltred;
    }
  };


  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const paginate = (paginateNumber:number) => setCurrentPage(paginateNumber)


  return (
    <div className="App bg-black py-16">
      <div className="App_container m-auto max-w-7xl flex justify-center flex-col p-5 ">
        <div className="filter_cards flex justify-center">
          <div className="filter_cards_container flex">
            <div className="input_place p-5 ">
              <input
                className="input_filter border-2 border-yellow-300 bg-black text-yellow-300
                 placeholder-yellow-300 outline-none p-2 text-2xl"
                value={text_filter}
                onChange={(e) => setText_filter(e.target.value)}
                type="text"
                placeholder="Find a character"
              />
            </div>
          </div>
        </div>
        <div className="card grid grid-cols-2 place-items-center text-yellow-300">
          {filter().map((character) => (
            <div key={character.id}>
              <div className="card_data_container py-5">
                <div className="cart_data p-6 border-2 border-yellow-300">
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${getId(character.url)}.jpg`}
                  alt=""
                />
                <h3>{character.name}</h3>
                <h3>Height: {character.height}</h3>
                <h3>Weight: {character.mass}</h3>
                <h3>Sex: {character.gender}</h3>
              </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
        <div style={{ display: shouldHide ? "none" : "block" }}>
        <Pagination
                paginate={paginate}
                currentPage={currentPage}
                hasNextPage={hasNextPage}
              />
        </div>
    </div>
  );
}

export default Cards;
