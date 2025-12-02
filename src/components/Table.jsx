import React from "react";

function Table({ products }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Nama</th>
            <th className="border p-2">Qty</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                className="text-center p-4 text-gray-500"
              >
                Belum ada data
              </td>
            </tr>
          ) : (
            products.map((item, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-gray-50"
              >
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.qty}</td>
                <td className="border p-2">Rp {item.price}</td>
                <td className="border p-2"> {item.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
