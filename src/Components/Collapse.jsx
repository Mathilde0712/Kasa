import ArrowBack from "../Assets/images/arrow_back.svg"

const Collapse = ({title, content}) => {
    return (
        <div >
            <article className="collapse">
                <div className="collapse-title">
                <h3 className="subtitle">{title}</h3>
                <img src={ArrowBack}/>
                </div>
                <p className="collapse-content">{content}</p>
            </article>
        </div>
    );
};

export default Collapse;