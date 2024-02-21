import { useState } from "react";
import ArrowBack from "../Assets/images/fleche.png";
import PropTypes from "prop-types";

const Collapse = ({ title, content }) => {
  //état de la collapse en arrivant sur la page = fermer (false)
  const [open, setOpen] = useState(false);
//changement d'état pour faire la fonction contraire d'open = passage à true
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="collapse-conteneur">
      <article className="collapse">
        <div className="collapse-title">
          <h3 className="subtitle">{title}</h3>
          <div
            className={open ? "rotate rotateUp" : "rotate rotateDown"}
            onClick={toggle}
          >
            <img src={ArrowBack} alt="flèche" />
          </div>
        </div>
        {open && (
          <div>
            <div className="collapse-content">{content}</div>
          </div>
        )}
      </article>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
};
export default Collapse;
