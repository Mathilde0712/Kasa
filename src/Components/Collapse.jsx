import { useState } from "react";
import ArrowBack from "../Assets/images/arrow_back.svg";
import PropTypes from "prop-types"

const Collapse = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <article className="collapse">
        <div className="collapse-title">
          <h3 className="subtitle">{title}</h3>
          <img
            className={open ? "rotate rotateUp" : "rotate rotateDown"}
            onClick={toggle}
            src={ArrowBack}
          />
        </div>
        {open && (
          <div>
            <div className= "collapse-content">{content}</div>
          </div>
        )}
      </article>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string,
  content : PropTypes.node,
  }
export default Collapse;
