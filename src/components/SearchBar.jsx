function SearchBar({ value, onChange }) {
  return (
    <input type="text" value={value} onChange={onChange} placeholder="Cari characters" className="w-full p-3 border rounded-l mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"/>
  );
}

export default SearchBar;
