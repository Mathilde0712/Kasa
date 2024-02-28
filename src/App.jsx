import  { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import PageErreur from "./Pages/PageErreur";
import "./styles/pages/index.scss"
import Apparts from "./Pages/Apparts";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/a-propos" element={<About/>}/>
      <Route path="/fiches/:id" element={<Apparts />}/>
      <Route path="*" element={<PageErreur/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
