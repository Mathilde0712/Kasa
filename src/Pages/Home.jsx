import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import ImageSource from "../Assets/images/image_source.png";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner title="Chez vous, partout et ailleurs" content={ImageSource} />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
