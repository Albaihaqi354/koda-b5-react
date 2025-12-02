import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const tambah = () => {
    if (count < 10) setCount(count + 1);
  };

  const kurang = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">Plus Minus Number </h1>

      <div className="p-6 rounded-lg shadow-md flex flex-col items-center gap-4">
        <p className="text-4xl font-bold">{count}</p>

        <div className="flex gap-4">
          <button
            onClick={kurang}
            className="px-4 py-2 text-7xl"
            disabled={count <= 0}
          >
            -
          </button>

          <button
            onClick={tambah}
            className="px-4 py-2 text-6xl"
            disabled={count >= 10}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}