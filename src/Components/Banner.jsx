import ImageSource from "../Assets/images/image_source.png"

const Banner = () => {
    return (
        <div className="banner">
         <h1>Chez vous, <br/> partout et ailleurs</h1>   
         <img className="imgTitle" src={ImageSource}/>
            
        </div>
    );
};

export default Banner;