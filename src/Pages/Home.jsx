import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import ImageSource from "../Assets/images/image_source.png";
import datas from "../data/datas.json";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner
        titleBanner="Chez vous, partout et ailleurs"
        contentBanner={ImageSource}
      />
      <div className="card-content">
      {datas.map((data) => (
        <Card
          key={data.id}
          id={data.id}
          cover={data.cover}
          title={data.title}
        />
      ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
