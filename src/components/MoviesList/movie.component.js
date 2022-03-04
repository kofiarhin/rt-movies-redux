import { Link } from "react-router-dom";
const Movie = ({ data = {} }) => {
  const { id, name, poster_path, vote_average, ...rest } = data;

  return (
    <Link to={`/details/${id}`} className="movie-unit">
      <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} />
      <h1> {name} </h1>
      <p className="vote"> {vote_average} </p>
    </Link>
  );
};

export default Movie;
