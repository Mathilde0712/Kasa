
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import ImageAbout from "../Assets/images/imageAbout.png"
import Banner from "../Components/Banner";
import Collapse from "../Components/Collapse"

const About = () => {
    const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."
    const service = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."
    const securite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurités établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
   
    return (
        <div>
            <Navigation/>
           <Banner
           title =""
           content ={ImageAbout} />
           <Collapse 
           title ="Fiabilité"
           content = {fiabilite}/>
           <Collapse 
           title ="Respect"
           content = {respect}/>
           <Collapse 
           title ="Service"
           content = {service}/>
           <Collapse 
           title ="Sécurité"
           content = {securite}/>
           <Footer/>
        </div>
    );
};

export default About;