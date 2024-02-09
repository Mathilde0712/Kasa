import { useState } from "react";
import ArrowBack from "../Assets/images/arrow_back.svg";

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
            <p className= "collapse-content">{content}</p>
          </div>
        )}
      </article>
    </div>
  );
};

export default Collapse;
