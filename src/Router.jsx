import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import RickAndMorty from "./pages/RickAndMorty.jsx";
import Login from "./pages/Login.jsx";
import CharacterDetail from "./pages/CharacterDetail.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/characters" element={<RickAndMorty />} />
      <Route path="/characters/:id/:slug" element={<CharacterDetail />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;
