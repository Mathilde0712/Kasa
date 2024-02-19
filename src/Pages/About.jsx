import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import ImageAbout from "../Assets/images/imageAbout.png";
import Banner from "../Components/Banner";
import CollapseAbout from "../Components/CollapseAbout";

const About = () => {
  return (
    <div>
      <Navigation />
      <Banner title="" content={ImageAbout} />
      <CollapseAbout />
      <Footer />
    </div>
  );
};

export default About;
