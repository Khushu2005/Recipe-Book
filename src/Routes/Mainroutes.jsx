import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Recipes from "../Pages/Recipes/Recipes";
import Create from "../Pages/Create/Create";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/create-recipes" element={<Create />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
