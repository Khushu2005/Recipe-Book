import { Route, Routes } from "react-router-dom";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import Create from "../pages/Create";
import Home from "../pages/Home";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};

export default Mainroutes;
