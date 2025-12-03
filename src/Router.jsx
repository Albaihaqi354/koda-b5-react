import { Routes, Route } from "react-router"

import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import RickAndMorty from "./pages/RickAndMorty.jsx";

function Router() {
  return (
    <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Rick" element={<RickAndMorty />} />
    </Routes>
  )
}

export default Router
