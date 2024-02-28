import PropTypes from "prop-types";


const Tags = ({ tag }) => {
  return (
    <div>
        <div className="tags-contener">
          {tag}
        </div>
    
    </div>
  );
};

Tags.propTypes = {
  tag: PropTypes.array,
};

export default Tags;
