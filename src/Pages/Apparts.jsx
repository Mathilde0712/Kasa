import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import Fiches from "../Components/Fiche";
import  Carrousel from "../Components/Carrousel"
import datas from "../data/datas.json"
import { useParams } from "react-router-dom";
import PageErreur from "./PageErreur";

const Apparts = () => {
    const id = useParams()
    const houseDatas = datas.find((houseDatas)=> {return houseDatas.id === id.id})
    
   
    return ( houseDatas ? 
       ( <div>
        <Navigation />
        <Carrousel picture = {houseDatas.pictures}/>
        <Fiches title={houseDatas.title} location = {houseDatas.location} tags= {houseDatas.tags} rating= {houseDatas.rating} host= {houseDatas.host} description= {houseDatas.description} equipments= {houseDatas.equipments} picture = {houseDatas.pictures}
        />
        <Footer />
      </div>) : (<PageErreur />)
  
      
    );
};

export default Apparts;