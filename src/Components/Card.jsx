
import { Link } from "react-router-dom";
import datas from "../data/datas.json";

const Card = () => {
  return (
    <div className="card-content">
      {datas.map((data) => (
        <article key={data.id}>
          <Link to={`/fiches/${data.id}`}>
            <img src={data.cover} alt={data.title} />
            <p className="subtitle">{data.title}</p>
          </Link>
        </article>
      ))}
    </div>
  );
};
export default Card;
