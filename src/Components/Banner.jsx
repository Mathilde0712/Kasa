import PropTypes from "prop-types";

const Banner = ({ titleBanner, contentBanner }) => {
  return (
    <div className="banner">
      <h1 className="title">{titleBanner}</h1>
      <img className="imgTitle" src={contentBanner} />
    </div>
  );
};

Banner.propTypes = {
  titleBanner: PropTypes.string,
  contentBanner: PropTypes.string,
};

export default Banner;
