import PropTypes from "prop-types";


const Tags = ({ tag }) => {
  return (
    <div className="tags-contener">
        <p className="tags-content">
          {tag}
        </p>
    
    </div>
  );
};

Tags.propTypes = {
  tag: PropTypes.node,
};

export default Tags;
