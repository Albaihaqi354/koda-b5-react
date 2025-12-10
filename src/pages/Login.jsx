import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../contexts/userManajemen/userContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(userContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "LOGIN",
      payload: {
        username: email,
      },
    });

    setEmail("");
    setPassword("");
    navigate("/");
  };

  return (
    <main className="flex flex-col justify-center items-center mt-20 gap-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="border p-2 rounded-md"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="border p-2 rounded-md"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md cursor-pointer"
        >
          Login
        </button>
      </form>
    </main>
  );
}

export default Login;
