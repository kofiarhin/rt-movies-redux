import "./details.styles.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../redux/actions/movies.actions";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading.component";

// details
const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { movieData, isPending, ...rest } = useSelector(
    (state) => state.moviesReducer
  );

  console.log(rest);

  useEffect(() => {
    dispatch(getMovie(id));
  }, []);

  const posterUrl = `url(https://image.tmdb.org/t/p/w1280${movieData.poster_path})`;

  const backdropUrl = `url(https://image.tmdb.org/t/p/w1280${movieData.backdrop_path})`;
  return (
    <div>
      {isPending ? (
        <Loading />
      ) : (
        <div className="details">
          {/* image-wrapper */}
          <div className="image-wrapper">
            <div
              className="poster"
              style={{
                backgroundImage: posterUrl,
              }}
            ></div>

            <div
              className="backdrop"
              style={{
                backgroundImage: backdropUrl,
              }}
            ></div>
          </div>
          <div className="text-content">
            <h1> {movieData.original_title} </h1>
            <p className="overview">{movieData.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
