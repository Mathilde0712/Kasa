
const Banner = ({ title, content }) => {
  return (
    <div className="banner">
      <h1 className="title">{title}</h1>
      <img className="imgTitle" src={content} />
    </div>
  );
};

export default Banner;
