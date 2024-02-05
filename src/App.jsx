import  { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Fiches from "./Pages/Fiches";
import Error from "./Pages/Error";
import "./styles/pages/index.scss"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/fiches" element={<Fiches/>}/>
      <Route path="*" element={<Error/>}/>
      
    </Routes>
    </BrowserRouter>
  );
};

export default App;
