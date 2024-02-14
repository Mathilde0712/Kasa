import datas from "../data/datas.json"
import arrowLeft from "../Assets/images/Vector_gauche.svg"
import arrowRight from "../Assets/images/Vector_droite.svg"
import { useState } from "react";

const Carrousel = () => {
const [index, setIndex]=useState(0)
const nextSlide = ()=>{
  setIndex(index + 1)
  if (index === datas[0].pictures.length - 1){
    setIndex(0)
  }
}
const prevSlide = ()=>{
  setIndex (index - 1)
  if (index === 0){
    setIndex(datas[0].pictures.length - 1)
  }
}
 return (
     <div  className="carrousel">
      <img src={datas[0].pictures[index]} alt="picture"/>
      {datas[0].pictures.length > 1 &&(
      <div className="chevrons">
      <img className="arrow arrowLeft" src={arrowLeft} onClick={prevSlide}/>
      <img className="arrow arrowRight" src={arrowRight} onClick={nextSlide}/>
      </div>
      )}
    </div>
  );
 };

export default Carrousel;
