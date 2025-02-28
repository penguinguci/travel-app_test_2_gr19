// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from './pages/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/about" element = {<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;