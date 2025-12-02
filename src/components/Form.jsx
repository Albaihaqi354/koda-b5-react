import React, { useState } from "react";

function Form({ onAddProduct }) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Ada");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { name, qty, price, status };
    onAddProduct(newProduct);

    setName("");
    setQty("");
    setPrice("");
    setStatus("Ada");
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Nama Barang"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border p-2 rounded-md"
      />

      <input
        type="number"
        placeholder="Qty"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        required
        className="border p-2 rounded-md"
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        className="border p-2 rounded-md"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded-md"
      >
        <option value="Ada">Ada</option>
        <option value="Tidak">Tidak</option>
      </select>

      <button
        type="submit"
        className= "bg-blue-500 text-white py-2 rounded-md w-96 cursor-pointer"
      >
        Tambah
      </button>
    </form>
  );
}

export default Form;
