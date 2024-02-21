import arrowLeft from "../Assets/images/Vector_gauche.svg";
import arrowRight from "../Assets/images/Vector_droite.svg";
import { useState } from "react";
import PropTypes from "prop-types";

const Carrousel = ({ picture }) => {
  //index = la photo actuelle 
  const [index, setIndex] = useState(0);
  // variable pour aller à la photo suivant ou précédente
  const nextSlide = () => {
    setIndex(index + 1);
    if (index === picture.length - 1) {
      setIndex(0);
    }
  };
  const prevSlide = () => {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(picture.length - 1);
    }
  };
  return (
    <div className="carrousel">
      <img src={picture[index]} alt={picture[index]} />
      {picture.length > 1 && (
        <div className="chevrons">
          <img
            className="arrow arrowLeft"
            src={arrowLeft}
            onClick={prevSlide}
          />
          <img
            className="arrow arrowRight"
            src={arrowRight}
            onClick={nextSlide}
          />
          <p>
            {index + 1} / {picture.length}
          </p>
        </div>
      )}
    </div>
  );
};

Carrousel.propTypes = {
  picture: PropTypes.array,
};

export default Carrousel;
