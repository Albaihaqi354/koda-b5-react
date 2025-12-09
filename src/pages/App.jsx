import { useState } from "react";
import useInput from "../hooks/useInput";

function App() {
  const [name, isValid, error, onChange, reset] = useInput("", {
    required: true,
    minLength: 5,
  });
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) {
      setSubmitMessage("Yes Yes Yes!");
      return;
    }

    setSubmitMessage(`Yeay Bisa Masuk ${name}`);
    reset();
  };

  return (
    <main className="flex justify-center items-center mt-20 gap-5">
      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={onChange}
          type="text"
          placeholder="Username"
          className="border p-2 rounded-md"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md cursor-pointer hover:bg-blue-400"
        >
          Tambah
        </button>

        {submitMessage && (
          <p
            style={{
              color: isValid ? "green" : "orange",
              marginTop: "10px",
            }}
          >
            {submitMessage}
          </p>
        )}
      </form>
    </main>
  );
}

export default App;
