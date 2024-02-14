import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import Fiches from "../Components/Fiche";
import  Carrousel from "../Components/Carrousel"
import datas from "../data/datas.json"

const Fiches1 = () => {
    
    return (
        <div>
        <Navigation />
        <Carrousel />
        <Fiches cardNumber={0}/>
        <Footer />
      </div> 
  
      
    );
};

export default Fiches1;