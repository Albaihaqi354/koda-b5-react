import React, { useState } from "react";
import Table from "../components/Table.jsx";
import Form from "../components/Form.jsx";

function Product() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Product Input</h2>
      <Form onAddProduct={addProduct} />

      <h2 className="text-xl font-bold mt-10 mb-4">Product List</h2>
      <Table products={products} />
    </div>
  );
}

export default Product;
