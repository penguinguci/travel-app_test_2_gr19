// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import YourRecipeBox from "./pages/YourRecipeBox";
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailProduct from "./pages/DetailProduct";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/your-recipe-box" element = {<YourRecipeBox/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/detail/:id" element = {<DetailProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;