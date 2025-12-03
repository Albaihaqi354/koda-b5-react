import React from 'react'
import { useState } from "react";


function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    setLogin("")
    setPassword("")
  };  
  return (
    <>
        <div>
            <div>
                <h1>Welcome Back</h1>
                <p>Sign in with Your data that you entered during your registration</p>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <input value={login} onChange={(e) => setLogin(e.target.value)}  type="Email" placeholder="Email" className="border p-2 rounded-md" />
                <input value={password} onChange={(e) => setPassword(e.target.value)}  type="Password" placeholder="Password" className="border p-2 rounded-md" />

                <button type="submit" className= "bg-blue-500 text-white py-2 rounded-md cursor-pointer hover:bg-blue-400">
                    Tambah
                </button>
            </form>
        </div>
    </>
  )
}

export default Login
