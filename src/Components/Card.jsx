import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import datas from "../data/datas.json";

const Card = ({ id, cover, title }) => {
  return (
      <article key={id}>
        <Link to={`/fiches/${id}`}>
          <img src={cover} alt={title} />
          <div className="card-content-text">
            <p className="subtitle">{title}</p>
          </div>
        </Link>
      </article>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  cover: PropTypes.string,
};

export default Card;
