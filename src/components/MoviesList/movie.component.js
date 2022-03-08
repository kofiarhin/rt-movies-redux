import { Link } from "react-router-dom";
import Image from "../Image/Image.component";
const Movie = ({ data = {} }) => {
  const { id, name, poster_path, vote_average, title, ...rest } = data;

  return (
    <Link to={`/details/${id}`} className="movie-unit">
      {/* <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} /> */}
      <Image url={poster_path} />
      <h1> {name ? name : title} </h1>
      <p className="vote"> {vote_average} </p>
    </Link>
  );
};

export default Movie;
