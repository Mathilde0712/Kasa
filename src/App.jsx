import  { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import PageErreur from "./Pages/PageErreur";
import "./styles/pages/index.scss"
import Fiches1 from "./Pages/Fiches1";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/a-propos" element={<About/>}/>
      <Route path="/fiches/:id" element={<Fiches1 />}/>
      <Route path="*" element={<PageErreur/>}/>

      
    </Routes>
    </BrowserRouter>
  );
};

export default App;
