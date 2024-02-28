import Collapse from "./Collapse";
import Rating from "./Rating";
import PropTypes from "prop-types";
import Tags from "./Tags";

const Fiches = ({
  title,
  location,
  tags,
  rating,
  host,
  description,
  equipments,
}) => {
  return (
    <div className="fiches">
      <section className="fiches-content">
        <div className="fiches-content-title">
          <h2 className="fiches-title">{title}</h2>
          <h3 className="fiches-subtitle">{location}</h3>
          <div className="tags">
            {tags?.map((tag , index)=>
             <Tags
             key= {index}
             tag={tag}
           />
           )}
          </div>
        </div>
        <div className="fiches-content-host">
          <Rating rating={rating} />
          <div className="host-info">
            <p>{host.name}</p>
            <img src={host.picture}></img>
          </div>
        </div>
      </section>
      <section className=" collapse-card">
        <Collapse title="Description" content={description} />
        <Collapse
          title="Equipements"
          content={equipments.map((equipments, index) => (
            <p key={index} className="equipement-content">
              {equipments}
            </p>
          ))}
        />
      </section>
    </div>
  );
};

Fiches.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  tags: PropTypes.array,
  rating: PropTypes.string,
  host: PropTypes.object,
  description: PropTypes.string,
  equipments: PropTypes.array,
};

export default Fiches;
