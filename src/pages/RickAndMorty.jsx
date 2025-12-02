import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CharacterGrid from "../components/CharacterGrid";

function RickAndMorty() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [species, setSpecies] = useState("");

  const fetchCharacters = async () => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${query}&species=${species}`
      );
      const data = await res.json();
      setCharacters(data.results || []);
    } catch (error) {
      console.error(error);
      setCharacters([]);
    }
  };

  useEffect(() => {
    const loadInitial = async () => {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        setCharacters(data.results || []);
      } catch (error) {
        console.error(error);
        setCharacters([]);
      }
    };

    loadInitial();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCharacters();
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Rick and Morty Character
      </h1>
      <form onSubmit={handleSubmit}>
        <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
        <select value={species} onChange={(e) => setSpecies(e.target.value)} className="w-full p-3 border rounded-lg mb-4 shadow-sm cursor-pointer">
          <option value="">All Species</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Humanoid">Humanoid</option>
          <option value="Animal">Animal</option>
          <option value="Mythological Creature">Mythological Creature</option>
          <option value="Robot">Robot</option>
          <option value="Cronenberg">Cronenberg</option>
        </select>

        <button type="submit" className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg mb-6 hover:bg-blue-600 transition cursor-pointer">
          Search
        </button>
      </form>

      <CharacterGrid characters={characters} />
    </div>
  );
}

export default RickAndMorty;
