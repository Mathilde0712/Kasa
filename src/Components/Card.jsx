// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import datas from "../data/datas.json"

const Card = () => {
// const [data, setData] = useState([])

// useEffect(()=>{
//     fetchData()
// },[]);
// const fetchData = async ()=>{
//     try {
//         const response = await fetch('../../public/data.json')
//         const jsonData = await response.json();
//         setData(jsonData);
//     }catch (error){
//         console.error('Erreur lors de la récupération des données JSON :', error);
//     }
// }

 return (
   <div className="card-content">
    {datas.map((data)=>
        <article key={data.id}>
            <Link to={`/fiches/${data.id}`}>
      <img src={data.cover} alt={data.title}/>
      <p className="subtitle">{data.title}</p>
      </Link>
     </article>
    )}
   </div>
 );
 
};
export default Card;


