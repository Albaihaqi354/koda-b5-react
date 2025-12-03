import { Routes, Route } from "react-router"

import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import RickAndMorty from "./pages/RickAndMorty.jsx";
import Login from "./pages/Login.jsx";

function Router() {
  return (
    <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Rick" element={<RickAndMorty />} />
        <Route path="/Login" element={<Login />} />
    </Routes>
  )
}

export default Router
