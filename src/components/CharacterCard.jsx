function CharacterCard({ char }) {
  return (
    <div className="bg-white rounded-xl p-3 shadow">
      <img src={char.image} alt={char.name} className="rounded-lg mb-3" />
      <h2 className="font-semibold text-lg">{char.name}</h2>
      <p className="text-sm text-gray-600">{char.status}</p>
      <p className="text-sm text-gray-500">{char.species}</p>
    </div>
  );
}

export default CharacterCard;
