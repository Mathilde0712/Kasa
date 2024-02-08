import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
const [data, setData] = useState([])

useEffect(()=>{
    fetchData()
},[]);
const fetchData = async ()=>{
    try {
        const response = await fetch('../../public/data.json')
        const jsonData = await response.json();
        setData(jsonData);
    }catch (error){
        console.error('Erreur lors de la récupération des données JSON :', error);
    }
}
 return (
   <div className="card-content">
    
    {data.map((data)=>
        <article key={data.id}>
            <NavLink to="/fiches">
      <img src={data.cover} alt={data.title}/>
      <p className="subtitle">{data.title}</p>
      </NavLink>
     </article>
    )}
    
   </div>
 );
};
export default Card;


{/* <NavLink to="/">
  <p className="error-text">Retourner sur la page d'accueil </p>
</NavLink>; */}