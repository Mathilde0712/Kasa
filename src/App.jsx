import  { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Fiches from "./Pages/Fiches";
import PageErreur from "./Pages/PageErreur";
import "./styles/pages/index.scss"


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/fiches" element={<Fiches/>}/>
      <Route path="*" element={<PageErreur/>}/>

      
    </Routes>
    </BrowserRouter>
  );
};

export default App;
