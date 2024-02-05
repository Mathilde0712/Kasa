import aLetter from"../Assets/images/a.svg" 
import kLetter from"../Assets/images/k.svg" 
import maisonLetter from"../Assets/images/maison.svg" 
import sLetter from"../Assets/images/s.svg" 

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={kLetter} />
        <img src={maisonLetter} />
        <img src={sLetter} />
        <img src={aLetter} />
      </div>
      <p>©2020 Kasa. All <br/> rights reserved</p>
    </div>
  );
};

export default Footer;