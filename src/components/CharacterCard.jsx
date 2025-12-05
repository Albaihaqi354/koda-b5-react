import { Link } from "react-router-dom";

function CharacterCard({ char }) {
  const slug = char.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link to={`/characters/${char.id}/${slug}`}>
      <div className="bg-white rounded-xl p-3 shadow hover:shadow-lg transition cursor-pointer">
        <img src={char.image} alt={char.name} className="rounded-lg mb-3" />
        <h2 className="font-semibold text-lg">{char.name}</h2>
        <p className="text-sm text-gray-600">{char.status}</p>
        <p className="text-sm text-gray-500">{char.species}</p>
      </div>
    </Link>
  );
}

export default CharacterCard;
