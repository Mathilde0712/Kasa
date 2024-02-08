import ImageSource from "../Assets/images/image_source.png"

const Banner = () => {
    return (
        <div className="banner">
            <div className="title">
         <p>Chez vous, </p>
          <p> partout et ailleurs</p> 
         </div>
         <img className="imgTitle" src={ImageSource}/>
            
        </div>
    );
};

export default Banner;