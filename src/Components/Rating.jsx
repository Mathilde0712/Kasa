import fullStar from "../Assets/images/full_star.png";
import emptyStar from "../Assets/images/empty_star.png";
import PropTypes from "prop-types"

const Rating = ({ rating }) => {
  const ratingRange = [1, 2, 3, 4, 5];
  const ratingValue = rating;
 
  return (
    <div className="rate">
      {ratingRange.map((rangeElem) =>
        ratingValue >= rangeElem ? (
          <img className="stars"key={rangeElem.toString()} src={fullStar} alt="Full Star" />
        ) : (
          <img  className="stars" key={rangeElem.toString()} src={emptyStar} alt="Empty Star" />
        )
      )}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.string,
}
export default Rating;
