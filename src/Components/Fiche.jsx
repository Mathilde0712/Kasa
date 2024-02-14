// import { useParams } from "react-router-dom";
import { useState } from "react";
import datas from "../data/datas.json";
import Collapse from "./Collapse";
import Rating from "./Rating";

const Fiches = ({ cardNumber }) => {
  const [currentCard] = useState(datas[cardNumber]);

  return (
    <div className="fiches">
      <section className="fiches-content">
        <div className="fiches-content-title">
          <h2 className="fiches-title">{currentCard.title}</h2>
          <h3 className="fiches-subtitle">{currentCard.location}</h3>
          <div className="tags">
            {currentCard.tags.map((tag) => (
              <p key={tag.toString()} className="tags-content">
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="fiches-content-host">
          <Rating rating={currentCard.rating} />
          <div className="host-info">
            <p>{currentCard.host.name}</p>
            <img src={currentCard.host.picture}></img>
          </div>
        </div>
      </section>
      <section className=" collapse-card">
        <Collapse title="Description" content={currentCard.description} />
        <Collapse
          title="Equipements"
          content={currentCard.equipments.map((equipment) => (
            <p key="{equipment}" className="equipement-content">
              {equipment}
            </p>
          ))}
        />
      </section>
    </div>
  );
};

export default Fiches;
