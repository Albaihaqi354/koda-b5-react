import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CharacterDetail() {
  const { id } = useParams();
  const [char, setChar] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setChar(data));
  }, [id]);

  if (!char) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow mt-10">
      <Link
        to="/characters"
        className="block mb-4 p-2 bg-gray-800 text-white rounded text-center"
      >
        ← Back
      </Link>

      <img src={char.image} alt={char.name} className="rounded-lg mb-4" />
      <h1 className="font-bold text-2xl">{char.name}</h1>

      <p><strong>Status:</strong> {char.status}</p>
      <p><strong>Species:</strong> {char.species}</p>
      <p><strong>Gender:</strong> {char.gender}</p>
      <p><strong>Origin:</strong> {char.origin?.name}</p>
      <p><strong>Location:</strong> {char.location?.name}</p>
    </div>
  );
}

export default CharacterDetail;
