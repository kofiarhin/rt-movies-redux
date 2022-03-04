import "./movies.styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, setPageNumber } from "../../redux/actions/movies.actions";
import Movie from "./movie.component";
import Loading from "../Loading/Loading.component";

// movies list
const MoviesList = () => {
  const { moviesData, isPending, pageNumber } = useSelector(
    (state) => state.moviesReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(pageNumber));
  }, [pageNumber]);

  return (
    <div>
      {isPending ? (
        <Loading />
      ) : (
        <div className="main-wrapper">
          <div className="movies-wrapper">
            {moviesData.map((movie) => (
              <Movie data={movie} key={movie.id} />
            ))}
          </div>
          <button onClick={() => dispatch(setPageNumber())}>Load More</button>
        </div>
      )}
    </div>
  );
};
export default MoviesList;
